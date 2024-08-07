import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useFetch from "../../src/hooks/useFetch";
import useCounter from "../../src/hooks/useCounter";
import results from "../data/results";
import userEvent from "@testing-library/user-event";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('tests on <MultipleCustomHooks/>', () => {  
  const mockIncrementFn = jest.fn();
  const mockDecrementFn = jest.fn();
  useCounter.mockReturnValue({
    counter: 10,
    increment: mockIncrementFn,
    decrement: mockDecrementFn
  })

  test('must show defect component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
    render(<MultipleCustomHooks/>);
    const loadingText = screen.getByText('Loading...');
    const prevButton = screen.getByTestId("MCH.PreviousButton");
    const nextButton = screen.getByTestId("MCH.NextButton");

    expect(loadingText).toBeTruthy();
    expect(prevButton).toHaveTextContent('Anterior');
    expect(nextButton).toHaveTextContent('Siguiente');
    
  })

  test('must return pokemons', async () => {
    const imgTest = "https://some_img.png";

    useFetch.mockReturnValueOnce({
      data: {results},
      isLoading: false,
      hasError: false,
      error: null,
    });
    
    results.forEach(() => {
      useFetch.mockReturnValueOnce({
        data: {sprites:{front_default: imgTest}},
        isLoading: false
      });
    })

    render(<MultipleCustomHooks/>);

    const pokeCards = await screen.findAllByTestId('PokemonCard');
    expect(pokeCards.length).toBe(results.length);
    
  })

  test('must call the increment function', async () => {
    
    const user = userEvent.setup();
    render(<MultipleCustomHooks/>);

    const nextBtn = screen.getByTestId("MCH.NextButton");

    await user.click(nextBtn);
    
    expect(mockIncrementFn).toHaveBeenCalled();
    expect(mockIncrementFn).toHaveBeenCalledTimes(1);
  })

  test('must call the decrement function', async () => {
    const user = userEvent.setup();
    render(<MultipleCustomHooks/>);

    const nextBtn = screen.getByTestId("MCH.NextButton");
    const prevBtn = screen.getByTestId("MCH.PreviousButton");

    await user.click(nextBtn);
    await user.click(prevBtn);
    
    expect(mockDecrementFn).toHaveBeenCalled();
    expect(mockDecrementFn).toHaveBeenCalledTimes(1);
  })
})