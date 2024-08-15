import reactLogo from './assets/react.svg'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

export default function CounterApp() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Your Counter App</h1>
      <p>count is {count} </p>
      <div className="card" style={{display: "flex", gap: "2rem"}}>
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          increment by 5
        </button>
      </div>
    </>
  )
}
