import Particles from "react-particles-js";
import { Main } from "./components";
import "react-typist/dist/Typist.css";

function App() {
	return (
		<div className="App">
			<div className="fixed h-screen w-full opacity-50 sm:opacity-100">
				<Particles
					params={{
						polygon: {
							enable: true,
							type: "inside",
							move: {
								radius: 20,
							},
						},
					}}
				/>
			</div>
			<Main />
		</div>
	);
}

export default App;
