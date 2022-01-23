import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox";

function App() {
    const [random, setRandom] = useState(Math.random());

    useMapbox("map", [37.61192, 55.76199], 10);

    return (
        <>
            <button id="rerender" onClick={() => setRandom(Math.random())}>
                Ререндер!
            </button>
            <div id="map"></div>
        </>
    );
}

render(<App />, document.querySelector("#root"));