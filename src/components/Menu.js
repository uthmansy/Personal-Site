import { MenuItem } from ".";
import ROUTES from "../constants/routes";

export default function Menu() {
	return (
		<nav className="flex">
			<MenuItem path={ROUTES.HOME}>Home</MenuItem>
			<MenuItem path={ROUTES.ABOUT}>About Me</MenuItem>
			<MenuItem path={ROUTES.PROJECTS}>Projects</MenuItem>
			<MenuItem path={ROUTES.CONTACT}>Contact Me</MenuItem>
		</nav>
	);
}
