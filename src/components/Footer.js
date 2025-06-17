import { GITHUB_SVG, LINKEDIN_SVG } from "../assets/SVGs";

const Footer = () => {
	return (
		<div className="footer">
			<a
				className="github"
				href="https://github.com/mahesh-pgit/cipher-gen"
				alt="github"
				target="_blank">
				{GITHUB_SVG}
			</a>

			<a
				className="linkedin"
				href="https://www.linkedin.com/in/mahesh-sai-kumar-narava/"
				alt="linkedin"
				target="_blank">
				{LINKEDIN_SVG}
			</a>
		</div>
	);
};

export default Footer;
