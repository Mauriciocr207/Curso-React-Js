jest.mock("../../src/hooks/useFetchGifs");

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import GifGrid from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('tests on <GifGrid/>', () => {
    const category = "kimetsu";
    
    test('must show the <GifGridLoading/>', () => {
        useFetchGifs.mockReturnValue({isLoading:true});

        render(<GifGrid category={category}/>);
        const loading = screen.getByTestId('GifGrid.Loading');

        expect(loading).toBeTruthy();
    })

    test('must show items when load images', () => {
        const gifGroups = [
            [{id: "abc", title: "Saitama1", url: "https://localhost/saitama.jpg"}],
            [{id: "123", title: "Saitama2", url: "https://localhost/saitama.jpg"}],
            [{id: "zxc", title: "Saitama3", url: "https://localhost/saitama.jpg"}],
            [{id: "ioi", title: "Saitama4", url: "https://localhost/saitama.jpg"}],
        ]

        useFetchGifs.mockReturnValue({gifGroups, isLoading:false});

        render(<GifGrid category={category}/>);

        const images = screen.getAllByRole('img');
        
        expect(images.length).toBe(4);
    });

     
});