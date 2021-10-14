import { Logo, Menu, MobileMenu } from ".";
import useScreen from "../hooks/useScreen";

export default function Header() {
	const { isMediumScreen } = useScreen();

	return (
		<header className="fixed top-0 w-full z-50 bg-black bg-opacity-20">
			<div className="max-w-screen-xl px-5 h-16 flex justify-between mx-auto">
				<Logo />
				{isMediumScreen ? <Menu /> : <MobileMenu />}
			</div>
		</header>
	);
}
