import './App.css';
//import BasicReducer from './components/BaicReducer';
import AppContext from './contexts/AppContext';
import Memo from './components/Memo';

import { useReducer } from 'react';

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case 'add_1':
      return currentState + 1;
    case 'multiple_3':
      return currentState * 3;
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <div className="App">
        <Memo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
