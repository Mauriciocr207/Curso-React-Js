import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import AppTheme from "./theme/AppTheme";
import { Provider } from "react-redux";
import store from "./app/store";

export default function JournalApp() {
  return (
    <BrowserRouter>
      <AppTheme>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </AppTheme>
    </BrowserRouter>
  )
}