import {renderHook, waitFor} from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('test on useFetchGifs', () => {
    test('must return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs('kimetsu'));
        const { gifGroups, isLoading } = result.current;

        expect(gifGroups.length).toEqual(0);
        expect(isLoading).toBeTruthy();
    })

    test('must return image array and isLoading = false', async () => {
        const { result } = renderHook(() => useFetchGifs('kimetsu'));
        
        await waitFor(() => {
            const { gifGroups } = result.current;
            expect(gifGroups.length).toBeGreaterThan(0);
        });

        const { gifGroups, isLoading } = result.current;

        expect(gifGroups.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
});