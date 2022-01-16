import './App.css';
//import BasicReducer from './components/BaicReducer';
// import AppContext from './contexts/AppContext';
// import Memo from './components/Memo';

// import { useReducer } from 'react';
import CountDisplay from './components/CountDisplay';
import CountClick from './components/CountClick';
import { useCallback, useState } from 'react';

// const initialState = 0;
// const reducer = (currentState, action) => {
//   switch (action) {
//     case 'add_1':
//       return currentState + 1;
//     case 'multiple_3':
//       return currentState * 3;
//     case 'reset':
//       return initialState;
//     default:
//       return currentState;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  /**
   * 初期レンダリング時のみレンダリングさせるため、useCallbackを利用
   * propsでアロー関数を渡す時、毎回関数が作成されるため、propsを渡す先のコンポーネントがレンダリングされてしまう
   */
  const AddCount1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  const AddCount2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, []);

  return (
    // <AppContext.Provider
    //   value={{ countProvided: count, dispatchProvided: dispatch }}
    // >
    <div className="App">
      <CountDisplay name="count1" count={count1} />
      <CountClick handleClick={AddCount1}>AddCount1</CountClick>
      <CountDisplay name="count2" count={count2} />
      <CountClick handleClick={AddCount2}>AddCount2</CountClick>
    </div>
    // </AppContext.Provider>
  );
}

export default App;
