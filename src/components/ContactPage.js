import { useEffect } from "react";
import { ContactForm, ContactInfo, Social } from ".";

export default function ContactPage() {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="bg-black bg-opacity-20 max-w-screen-lg mx-auto mt-28 py-10 px-5 animate__animated animate__fadeIn">
			<div className="text-center">
				<h3 className="text-xl text-primary">Get in Touch!</h3>
			</div>
			<div className="lg:flex lg:space-x-5">
				<div className="lg:w-2/3 mb-10 lg:mb-0">
					<ContactForm />
				</div>
				<div className="lg:w-1/3 lg:p-5">
					<Social />
					<ContactInfo />
				</div>
			</div>
		</div>
	);
}
