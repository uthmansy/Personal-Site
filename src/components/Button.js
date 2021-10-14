import { useState } from "react";
import { Link } from "react-router-dom";

export default function Button({ title, path }) {
	const [hover, setHover] = useState(false);

	return (
		<Link
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="overflow-hidden relative z-10 border-primary text-primary border font-semibold text-xs tracking-wider uppercase px-4 py-3 rounded-full hover:no-underline"
			to={path}>
			{title}
			<div
				className={`absolute top-0 bottom-0 w-0 bg-primary opacity-10 left-0 ${
					hover && "w-full"
				} transition-all duration-300`}
			/>
		</Link>
	);
}
