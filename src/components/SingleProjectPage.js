import { useParams } from "react-router-dom";
import { GithubIcon, Stack } from ".";
import projects from "../constants/projects";
import { useEffect } from "react";

export default function SingleProjectPage() {
	const { id } = useParams();
	const { url, img, title, github, stacks, desc } = projects[id];

	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	const linkIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
			/>
		</svg>
	);
	return (
		<div className="bg-black bg-opacity-20 max-w-screen-lg mx-auto mt-28 py-10 px-5 md:px-10 animate__animated animate__fadeIn">
			<div className="md:flex md:space-x-5">
				<div className="md:w-1/2 mb-10 md:mb-0">
					<div className="aspect-w-1 aspect-h-1 mb-5">
						<img className="object-cover" src={img} alt="project" />
					</div>
				</div>
				<div className="md:w-1/2">
					<h3 className="text-primary text-2xl mb-3">{title}</h3>
					<p className="mb-8">{desc}</p>
					<h4 className="text-white text-lg mb-3">Tech Stack Used</h4>
					<div className="mb-10">
						{stacks.map((stack, i) => (
							<Stack key={i} title={stack} />
						))}
					</div>
					<div className="mb-5 flex space-x-1 items-center">
						<Button title="< Github >" url={github} icon={<GithubIcon />} />
						<Button title="Visit" url={url} icon={linkIcon} />
					</div>
				</div>
			</div>
		</div>
	);
}
const Button = ({ url, title, icon }) => {
	return (
		<a
			className="inline-flex mr-4 border border-primary hover:no-underline uppercase font-semibold group tracking-wider text-xs"
			href={url}>
			<span className="w-10 h-10 flex justify-center items-center text-primary group-hover:bg-primary transition-all duration-300 group-hover:text-bg">
				{icon}
			</span>
			<span className="flex-1 flex items-center justify-center px-3 text-bg bg-primary group-hover:bg-opacity-0 transition-all duration-300 group-hover:text-primary">
				{title}
			</span>
		</a>
	);
};
