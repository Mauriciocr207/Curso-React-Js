const { renderHook } = require("@testing-library/react")
const { default: useForm } = require("../../src/hooks/useForm")
const { act } = require("react")

describe('tests on useForm', () => {
    const initialForm = {
        name: 'Fernando',
        email: 'mau@gmail.com'
    }

    test('must return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        })
    })

    test('must change the name on form', () => {
        const newName = 'Nuevo Usuario';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => onInputChange({
            target: {
                name: 'name',
                value: newName
            }
        }));

        const { formState: {name} } = result.current;

        expect(name).toBe(newName);
    })

    test('must reset the form', () => {
        const newName = 'Nuevo Usuario';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newName
                }
            })
            onResetForm();
        });

        const { formState } = result.current;

        expect(formState).toEqual(initialForm);
    })
})