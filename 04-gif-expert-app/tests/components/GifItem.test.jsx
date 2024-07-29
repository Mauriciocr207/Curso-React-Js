import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";
import "@testing-library/jest-dom";

describe('Tests on <GifItem/>', () => {
  const title = "Gif de prueba";
  const url = "https://giphy.com/gifs/demon-slayer-zenitsu-thundergod-VEzYdo930nTiTuVeMU";

  test('match snapshot', () => {
    const { container } = render(<GifItem title={title} url={url}/>);
    expect(container).toMatchSnapshot();
  });

  test('must show image with correct alt and url', () => {
    render(<GifItem title={title} url={url}/>);
    const gifItem = screen.getByTestId('GifItem');
    const img = gifItem.querySelector('img');
    expect(img).toHaveAttribute("alt", title);
    expect(img).toHaveAttribute("src", url);
  })
})