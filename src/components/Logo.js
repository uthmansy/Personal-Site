import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<div className="h-full flex items-center text-white flex-shrink-0">
			<Link className="text-white hover:no-underline" to="/">
				<img className="h-10" src="/images/logo.png" alt="logo" />
			</Link>
		</div>
	);
}
