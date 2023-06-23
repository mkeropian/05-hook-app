import { useCounter } from '../src/hooks/useCounter';

export const CounterWithCustomHook = () => {

const { counter, increment, decrement, reset } = useCounter();



    return (
        <>
            <h1>CounterWithCustomHook</h1>
            <h2>Counter with Hook: { counter }</h2>
            <hr />

            <button className="btn btn-primary" onClick={ () => increment (2) }>+1</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement (2) }>-1</button>

        </>
    )
}