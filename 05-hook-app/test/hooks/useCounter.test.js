const { renderHook, act } = require("@testing-library/react");
const { default: useCounter } = require("../../src/hooks/useCounter");

describe('tests useCounter Hook', () => {
    test('must return default values', () => {
        const { result  } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(0);
        expect(decrement).toEqual(expect.any( Function ));
        expect(increment).toEqual(expect.any( Function ));
        expect(reset).toEqual(expect.any( Function ));
    })

    test('must return the passed value as parameter', () => {
        const parameter = 100;
        const { result } = renderHook(() => useCounter(parameter));
        const { counter } = result.current
        
        expect( counter ).toBe(parameter);
    })

    test('increment function must increment the counter', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { increment } = result.current;
        
        act(() => increment());
        const { counter } = result.current;
        expect(counter).toBe(initialValue + 1);
    })

    test('increment function must decrement the counter', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { decrement } = result.current;
        
        act(() => decrement());
        const { counter } = result.current;
        expect(counter).toBe(initialValue - 1);
    })
   
    test('increment function must reset the counter', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { increment, reset } = result.current;
        
        act(() => {
            increment();
            reset();
        });
        const { counter } = result.current;
        expect(counter).toBe(initialValue);
    })
})