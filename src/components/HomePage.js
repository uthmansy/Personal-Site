import { useState } from "react";
import Typist from "react-typist";
import { Button } from ".";
import ROUTES from "../constants/routes";

export default function HomePage() {
	const [step, setStep] = useState(1);

	return (
		<div className="flex items-center justify-center h-screen w-full">
			<div className="text-center bg-black bg-opacity-30 w-full max-w-screen-sm py-16 animate__animated animate__fadeIn">
				<h1 className="text-3xl md:text-5xl text-primary font-black mb-5">
					Shuaibu U.
				</h1>
				<p className="font-type text-white mb-5">
					I am a{" "}
					{step === 1 && (
						<Typist
							className="inline-block"
							avgTypingDelay={120}
							stdTypingDelay={100}
							onTypingDone={() => setStep(2)}>
							Web Developer
							<Typist.Delay ms={1500} />
							<Typist.Backspace count={13} delay={200} />
						</Typist>
					)}
					{step === 2 && (
						<Typist
							className="inline-block"
							avgTypingDelay={150}
							stdTypingDelay={100}
							onTypingDone={() => setStep(1)}>
							UI/UX Designer
							<Typist.Delay ms={1500} />
							<Typist.Backspace count={14} delay={200} />
						</Typist>
					)}
				</p>
				<div className="flex space-x-3 justify-center tracking-widest">
					<Button title="View Projects" path={ROUTES.PROJECTS} />
					<Button title="Get in Touch" path={ROUTES.CONTACT} />
				</div>
			</div>
		</div>
	);
}
