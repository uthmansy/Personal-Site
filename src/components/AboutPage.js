import { Button, Stack } from ".";
import ROUTES from "../constants/routes";
import { useEffect } from "react";

export default function AboutPage() {
	const stacks = [
		"React Js",
		"Redux",
		"Tailwind",
		"Recoil Js",
		"MongoDb",
		"Express",
		"Github",
	];

	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="bg-black bg-opacity-20 max-w-screen-lg mx-auto mt-28 py-10 px-5 md:px-10 animate__animated animate__fadeIn">
			<div className="text-center mb-10">
				<h3 className="text-4xl mb-2 text-primary">About Me</h3>
				<p className="tracking-wider">
					Web Developer & UI/UX Designer From Abuja, Nigeria.
				</p>
			</div>
			<div className="md:flex md:space-x-5">
				<div className="md:w-1/3 mb-10 md:mb-0">
					<div className="relative">
						<img
							className="w-full relative z-10"
							src="/images/me2.jpg"
							alt=""
						/>
						<div className="hidden md:block absolute top-5 w-full left-5 h-full border-4 border-primary" />
					</div>
				</div>
				<div className="md:w-2/3 md:pl-10">
					<h3 className="font-script text-5xl font-thin mb-2">Shuaibu U.</h3>
					<p>
						Vivamus magna justo, lacinia eget consectetur sed, convallis at
						tellus. Donec rutrum congue leo eget malesuada. Curabitur arcu erat,
						accumsan id imperdiet et, porttitor at sem. Vivamus magna justo,
						lacinia eget consectetur sed, convallis at tellus. Curabitur non
						nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non
						nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor
						lectus nibh. Proin eget tortor risus.
					</p>
					<p>
						Vivamus magna justo, lacinia eget consectetur sed, convallis at
						tellus. Donec rutrum congue leo eget malesuada. Curabitur arcu erat,
						accumsan id imperdiet et, porttitor at sem. Vivamus magna justo,
						lacinia eget consectetur sed
					</p>
					<h3 className="text-xl">Tech-Stack i use</h3>
					<div className="mb-5">
						{stacks.map((stack, i) => (
							<Stack key={i} title={stack} />
						))}
					</div>
					<div className="flex space-x-3 tracking-widest">
						<Button title="View Projects" path={ROUTES.PROJECTS} />
						<Button title="Get in Touch" path={ROUTES.CONTACT} />
					</div>
				</div>
			</div>
		</div>
	);
}
