import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App/> */}
        {/* <FirstApp 
            // title="Aprendiendo desarrollo web"
            // sub="Subtitulo"
        /> */}
        <CounterApp value={100}/>
    </React.StrictMode>
)