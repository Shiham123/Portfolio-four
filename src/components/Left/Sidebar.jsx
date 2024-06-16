import {FaDiscord, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa"

const Sidebar = () => {
	return (
		<div className="lg:top-0 lg:right-0 bg-bgSidebar h-full fixed">
			<ul>
				Menu
				<li>About</li>
				<li>Resume</li>
				<li>Services</li>
				<li>Skills</li>
				<li>Portfolio</li>
				<li>Testimonial</li>
				<li>Contact</li>
			</ul>

			<div>
				<p>Social</p>
				<FaLinkedin />
				<FaGithub />
				<FaWhatsapp />
				<FaDiscord />
			</div>
		</div>
	)
}

export default Sidebar
