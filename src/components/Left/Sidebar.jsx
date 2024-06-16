import {
	FaDiscord,
	FaGithub,
	FaLinkedin,
	FaWhatsapp,
	FaUserTie,
	FaBriefcase,
	FaCode,
	FaEnvelope,
	FaHome,
} from "react-icons/fa"
import {FaRegMessage, FaTarp, FaBarsStaggered} from "react-icons/fa6"

// Sidebar Component
const Sidebar = () => {
	return (
		<>
			{/* Backdrop for blur effect */}
			<div className="2xl:hidden xl:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 bg-[#ffffff] z-10"></div>

			{/* Sidebar */}
			<div className="2xl:hidden xl:hidden fixed top-0 right-0 h-full bg-bgSidebar flex flex-col justify-center items-center lg:w-[35%] z-20">
				<ul className="flex flex-col justify-start items-start gap-6">
					<li className="font-Inter text-sidebarText capitalize lg:text-2xl tracking-wide">Menu</li>

					<li className="flex justify-start items-center gap-4">
						<FaHome color="#8f8f8f" size={20} />
						<span className="font-Inter text-sidebarText text-lg">About</span>
					</li>

					<li className="flex justify-start items-center gap-4">
						<FaUserTie color="#8f8f8f" size={20} />
						<span className="font-Inter text-sidebarText text-lg">Resume</span>
					</li>

					<li className="flex justify-start items-center gap-4">
						<FaBriefcase color="#8f8f8f" size={20} />
						<span className="font-Inter text-sidebarText text-lg">Resume</span>
					</li>

					<li className="flex justify-start items-center gap-4">
						<FaBarsStaggered color="#8f8f8f" size={20} />
						<span className="font-Inter text-sidebarText text-lg">Services</span>
					</li>

					<li className="flex justify-start items-center gap-4">
						<FaCode color="#8f8f8f" size={20} />
						<span className="font-Inter text-sidebarText text-lg">Skills</span>
					</li>

					<li className="flex justify-start items-center gap-4">
						<FaTarp color="#8f8f8f" size={20} />
						<span className="font-Inter text-sidebarText text-lg">Portfolio</span>
					</li>

					<li className="flex justify-start items-center gap-4">
						<FaRegMessage color="#8f8f8f" size={20} />
						<span className="font-Inter text-sidebarText text-lg">Testimonial</span>
					</li>

					<li className="flex justify-start items-center gap-4">
						<FaEnvelope color="#8f8f8f" size={20} />
						<span className="font-Inter text-sidebarText text-lg">Contact</span>
					</li>
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
