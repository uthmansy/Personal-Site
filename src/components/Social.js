import { GithubIcon, InstagramIcon, TwitterIcon } from ".";

export default function Social() {
	const sites = [
		{
			icon: <GithubIcon />,
			url: "http://www.github.com/uthmansy",
		},
		{
			icon: <InstagramIcon />,
			url: "http://www.instagram.com/shuaibu.me",
		},
		{
			icon: <TwitterIcon />,
			url: "http://www.twitter.com/uthmansy0",
		},
	];

	return (
		<div className="flex space-x-3 mb-5">
			{sites.map((site, i) => (
				<a
					className="text-primary p-2 border-primary border rounded-full transition-all duration-300 hover:text-white hover:border-white"
					key={i}
					target="_blank"
					rel="noreferer"
					href={site.url}>
					{site.icon}
				</a>
			))}
		</div>
	);
}
