import { Route, Switch } from "react-router";
import {
	AboutPage,
	ContactPage,
	HomePage,
	ProjectsPage,
	SingleProjectPage,
} from ".";
import ROUTES from "../constants/routes";

export default function Content() {
	return (
		<div className="max-w-screen-xl mx-auto px-5">
			<Switch>
				<Route path={ROUTES.SINGLE_PROJECT} component={SingleProjectPage} />
				<Route path={ROUTES.PROJECTS} component={ProjectsPage} />
				<Route path={ROUTES.ABOUT} component={AboutPage} />
				<Route path={ROUTES.CONTACT} component={ContactPage} />
				<Route path={ROUTES.HOME} component={HomePage} />
			</Switch>
		</div>
	);
}
