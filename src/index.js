import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.css";
import "animate.css";
import "video-react/dist/video-react.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
