import ReactDOM from "react-dom/client";
import "./index.css";
// import CounterApp from "./01-useState/CounterApp.jsx";
// import CounterCustomHook from "./01-useState/CounterCustomHook.jsx";
// import SimpleForm from "./02-useEffect/SimpleForm.jsx";
// import FormCustomHook from "./02-useEffect/FormCustomHook.jsx";
// import MultipleCustomHooks from "./03-examples/MultipleCustomHooks.jsx";
// import FocusScreenApp from "./04-useRef/FocusScreenApp.jsx";
// import Layout from "./05-useLayoutEffect/Layout.jsx";
// import Memorize from "./06-memos/Memorize.jsx";
// import MemoHook from "./06-memos/MemoHook.jsx";
// import CallbackHook from "./06-memos/CallbackHook.jsx";
// import Padre from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
// import TodoApp from "./08-useReducer/TodoApp";
import MainApp from "./09-useContext/MainApp";

import { BrowserRouter } from "react-router-dom";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="mx-auto max-w-7xl sm:px-6 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="relative overflow-hidden px-6 sm:rounded-3xl lg:gap-x-20 lg:px-24">
          <div className="mx-auto text-center pb-10">
            {/* <CounterApp/> */}
            {/* <CounterCustomHook /> */}
            {/* <SimpleForm/> */}
            {/* <FormCustomHook/> */}
            {/* <MultipleCustomHooks/> */}
            {/* <FocusScreenApp/> */}
            {/* <Layout/> */}
            {/* <Memorize/> */}
            {/* <MemoHook/> */}
            {/* <CallbackHook/> */}
            {/* <Padre/> */}
            {/* <TodoApp/> */}
            <MainApp/>
          </div>
        </div>
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
