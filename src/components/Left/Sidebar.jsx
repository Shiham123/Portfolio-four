import {FaDiscord, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa"
import PropTypes from "prop-types"

// SidebarItem Component
const SidebarItem = ({text}) => {
	return <li>{text}</li>
}

// Sidebar Component
const Sidebar = () => {
	return (
		<>
			{/* Backdrop for blur effect */}
			<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 bg-[#ffffff] z-10"></div>

			{/* Sidebar */}
			<div className="fixed top-0 right-0 h-full bg-bgSidebar flex flex-col justify-center items-center lg:w-[30%] z-20">
				<ul className="text-left">
					<SidebarItem text="About" />
					<SidebarItem text="Resume" />
					<SidebarItem text="Services" />
					<SidebarItem text="Skills" />
					<SidebarItem text="Portfolio" />
					<SidebarItem text="Testimonial" />
					<SidebarItem text="Contact" />
				</ul>

				<div className="text-left">
					<p>Social</p>
					<div className="flex justify-center">
						<FaLinkedin />
						<FaGithub />
						<FaWhatsapp />
						<FaDiscord />
					</div>
				</div>
			</div>
		</>
	)
}

export default Sidebar

SidebarItem.propTypes = {text: PropTypes.string.isRequired}
