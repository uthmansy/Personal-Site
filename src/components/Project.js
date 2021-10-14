import { Link } from "react-router-dom";
import ROUTES from "../constants/routes";

export default function Project({ project: { img, url, title }, index }) {
	return (
		<div className="relative group">
			<div className="aspect-w-3 aspect-h-4 sm:aspect-w-1 sm:aspect-h-1">
				<img src={img} alt="portfolio" className="object-cover" />
			</div>
			<div className="absolute top-4 left-4 bottom-24 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-bg bg-opacity-80 flex items-center justify-center space-x-3">
				<Link
					className="h-12 w-12 rounded-full flex items-center justify-center bg-primary bg-opacity-70 text-white"
					to={`${ROUTES.PROJECTS}/${index}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						/>
					</svg>
				</Link>
				<a
					target="_blank"
					className="h-12 w-12 rounded-full flex items-center justify-center bg-primary bg-opacity-70 text-white"
					href={url}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				</a>
			</div>
			<div className="bg-bg absolute flex bottom-0 w-full font-sm">
				<div className="px-4 h-20 flex items-center flex-1">
					<h4 className="font-normal mb-0"> {title} </h4>
				</div>
				<Link
					to={`${ROUTES.PROJECTS}/${index}`}
					className="h-20 w-20 flex items-center justify-center bg-primary bg-opacity-70 flex-shrink-0 text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.3}
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}
