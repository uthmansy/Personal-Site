import { useEffect } from "react";
import { Project } from ".";
import projects from "../constants/projects";

export default function ProjectsPage() {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="bg-black bg-opacity-20 max-w-screen-lg mx-auto mt-28 py-10 px-5 md:px-10 animate__animated animate__fadeIn">
			<div className="text-center mb-10">
				<h3 className="text-4xl mb-2 text-primary">Portfolio Projects</h3>
				<p className="tracking-wider">Browse through some of my projects</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{projects.map((project, i) => (
					<Project key={i} project={project} index={i} />
				))}
			</div>
		</div>
	);
}
