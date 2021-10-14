import { Link } from "react-router-dom";

export default function MenuItem({ children, path }) {
	return (
		<Link
			className="relative group h-full flex items-center justify-center px-4 hover:no-underline text-primary uppercase tracking-wider text-sm font-semibold transition-all duration-300 hover:text-white"
			to={path}>
			{children}
			<div
				style={{ height: "1px" }}
				className="absolute w-full bottom-0 opacity-0 transition-all duration-300 group-hover:opacity-80 rounded-full bg-primary group-hover:bg-white"
			/>
		</Link>
	);
}
