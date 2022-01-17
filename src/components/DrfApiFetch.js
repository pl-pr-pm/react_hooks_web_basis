import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AUTH_TOKEN } from '../config';

const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([]); //taskの配列 {id, title}
  const [selectedTask, setSelectedTask] = useState([]); // 特定のIDで選択されたTask
  const [id, setId] = useState(1);
  const [editedTask, setEditedTask] = useState({ id: '', title: '' });

  useEffect(() => {
    console.log('tasks start');
    axios
      .get('http://localhost:8000/api/tasks/', {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  /**
   * IDを指定したTaskを取得する
   * 取得したTaskは、selectedTaskで管理される
   */
  const getTask = () => {
    axios
      .get(`http://localhost:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      })
      .then((res) => {
        setSelectedTask(res.data);
      });
  };

  /**
   * 選択されたIDをもとにTaskを削除する
   */
  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      })
      .then((res) => {
        console.log(res);
        // tasks(state)を更新する（削除したtaskをstateから除外する）
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        // selectedTaskが削除対象である場合を考慮し削除する
        setSelectedTask([]);
      });
  };

  const newTask = (task) => {
    console.log('new task');
    const data = {
      title: task.title,
    };
    axios
      .post(`http://localhost:8000/api/tasks/`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_TOKEN,
        },
      })
      .then((res) => {
        console.log(res);
        console.log('tasks', [...tasks, res.data]);
        setTasks([...tasks, res.data]);
      });
  };

  const editTask = (task) => {
    console.log('edit task');

    axios
      .put(`http://localhost:8000/api/tasks/${task.id}/`, task, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_TOKEN,
        },
      })
      .then((res) => {
        setTasks(
          tasks.map((task) => (task.id === editedTask.id ? res.data : task))
        );
        setEditedTask({ id: '', title: '' });
      });
  };

  /**
   * editedTaskを登録する
   *
   * @param {*} event
   */
  const handleInputChange = (event) => {
    console.log('handleInputChange');
    const value = event.target.value;
    const name = event.target.name;
    console.log({ ...editedTask, [name]: value });
    console.log({ [name]: value });
    // titleがvalueの値を変更している
    // editBoxからの値の入力はidは空である
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <div>
      <ul>
        {/* 取得したTask一覧の表示と、Task削除・編集のボタンを表示 */}
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.id}
            <button onClick={() => deleteTask(task.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
            {/* このアイコンをクリックすることで、editedtaskにタスクが追加される（id, title）
            そのため、Updateボタンが有効にされる
            
             */}
            <button onClick={() => setEditedTask(task)}>
              <i className="fas fa-pen"></i>
            </button>
          </li>
        ))}
      </ul>
      Set id <br />
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {/* inputに入力されたIDをもとにTaskを取得する */}
      <button type="button" onClick={() => getTask()}>
        Get Task
      </button>
      <h3>
        {selectedTask.title} {selectedTask.id}
      </h3>
      <input
        id="editBox"
        type="text"
        name="title"
        value={editedTask.title}
        onChange={(e) => handleInputChange(e)}
        placeholder="New task?"
        required
      />
      {/* editedTaskが存在する、つまり */}
      {editedTask.id ? (
        <button onClick={() => editTask(editedTask)}>Update</button>
      ) : (
        <button onClick={() => newTask(editedTask)}>Create</button>
      )}
    </div>
  );
};

export default DrfApiFetch;
