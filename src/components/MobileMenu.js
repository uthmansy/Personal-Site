import { useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../constants/routes";

export default function MobileMenu() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="h-full flex items-center">
			<button
				className="outline-none p-2 pr-0 text-primary"
				onClick={() => setShowMenu(true)}>
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
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>
			{showMenu && (
				<nav className="fixed top-0 left-0 bottom-0 right-0 bg-bg z-50 flex items-center justify-center animate__animated animate__bounceIn">
					<div className="w-full fixed top-0 h-12 flex items-center justify-end px-5">
						<button
							className="outline-none p-2 pr-0 text-primary"
							onClick={() => setShowMenu(false)}>
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
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="w-full flex flex-col">
						<MenuItem
							title="Home"
							path={ROUTES.HOME}
							setShowMenu={setShowMenu}
						/>
						<MenuItem
							title="About Me"
							path={ROUTES.ABOUT}
							setShowMenu={setShowMenu}
						/>
						<MenuItem
							title="Projects"
							path={ROUTES.PROJECTS}
							setShowMenu={setShowMenu}
						/>
						<MenuItem
							title="Contact Me"
							path={ROUTES.CONTACT}
							setShowMenu={setShowMenu}
						/>
					</div>
				</nav>
			)}
		</div>
	);
}

const MenuItem = ({ path, title, setShowMenu }) => {
	return (
		<Link
			onClick={() => setShowMenu(false)}
			className="uppercase py-5 text-center text-primary hover:no-underline tracking-wider"
			to={path}>
			{title}
		</Link>
	);
};
