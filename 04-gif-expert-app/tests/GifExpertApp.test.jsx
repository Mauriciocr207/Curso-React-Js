import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import GifExpertApp from "../src/GifExpertApp"

describe('tests on <GifExperApp/>', () => {
  const category = "kimetsu";

  async function createCategory() {
    const { user, input } = this;
    await user.click(input);
    await user.type(input, category);
    await user.keyboard('{enter}');
  }
  
  test('show alert if a category exist', async () => {
    const user = userEvent.setup();
    const alertText = "Esta categoría ya existe";
    
    render(<GifExpertApp/>);
    
    const input = screen.getByTestId('AddCategory.Input');  
    const createCategoryFn = createCategory.bind({user, input});

    await createCategoryFn();
    await createCategoryFn();
    await waitFor(() => {
      const alert = screen.getByTestId("GifExpertApp.Alert");
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent(alertText);
    });  
  })

  test('show categories when input one', async () => {
    const user = userEvent.setup();
    
    render(<GifExpertApp/>);
    
    const input = screen.getByTestId('AddCategory.Input');  
    const createCategoryFn = createCategory.bind({user, input});

    await createCategoryFn();
    await waitFor(() => expect(screen.getByText(category)).toBeInTheDocument());

    const images = screen.getByTestId("GifGrid.Card").getElementsByTagName('img');

    expect(images.length).toBeGreaterThan(0);
  })
})