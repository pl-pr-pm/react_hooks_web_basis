import './App.css';
import { useReducer } from 'react';
import rootReducer from './reducers';
import { SELL_MEAT, SELL_VEGETABLE } from './reducers/actionTypes';

function App() {
  const initialState = {
    reducerMeat: {
      numOfMeat: 30,
    },
    reducerVegetable: {
      numOfVegetable: 20,
    },
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: SELL_MEAT })}>
        LEFT {state.reducerMeat.numOfMeat} {/* state.reducername.statename */}
      </button>
      <button onClick={() => dispatch({ type: SELL_VEGETABLE })}>
        LEFT {state.reducerVegetable.numOfVegetable}
      </button>
    </div>
  );
}

export default App;
