import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import FirstApp from "../src/FirstApp"

describe('FirstApp test', () => {

    const title = "Hola, Soy Mau";
    const subtitle = "Hola soy un subtitulo";

    test('render component', () => {
        // ARRANGE
        const title = "Hola, Soy Mau";
        const {container} = render(<FirstApp title={title}/>);

        // ACT
        

        // ASSERT
        expect(container).toMatchSnapshot();
    });

    test('loads titles', () => {        
        // ARRANGE
        render(<FirstApp title={title} sub={subtitle}/>);
        
        // ACT
        const titleNode = screen.getByTestId('FirstApp.title');
        const subtitleNodes = screen.getAllByTestId('FirstApp.subtitle');

        // ASSERT
        expect(screen.getByText(title)).toBeTruthy();
        expect(titleNode).toHaveTextContent(title);
        expect(subtitleNodes.length).toBe(2);
    });
})