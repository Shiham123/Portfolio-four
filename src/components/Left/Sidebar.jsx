import {useDispatch, useSelector} from "react-redux"
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
import {useEffect} from "react"

import {FaRegMessage, FaTarp, FaBarsStaggered} from "react-icons/fa6"

import {animateApplied, sidebarOpenClose} from "../../app/theme"
import "animate.css"

// Sidebar Component
const Sidebar = () => {
	const dispatch = useDispatch()
	const {isSidebarOpen, animateClass} = useSelector((state) => state.theme)

	const handleSidebarClose = () => {
		dispatch(animateApplied("animate__animated animate__fadeOutRight"))
	}

	useEffect(() => {
		const handleAnimationEnd = () => {
			if (animateClass.includes("fadeOutRight")) {
				dispatch(sidebarOpenClose(false)), dispatch(animateApplied(""))
			}
		}

		const sidebarElement = document.querySelector("#sidebar")

		if (sidebarElement) {
			sidebarElement.addEventListener("animationend", handleAnimationEnd)
		}

		return () => {
			if (sidebarElement) {
				sidebarElement.removeEventListener("animationend", handleAnimationEnd)
			}
		}
	}, [animateClass, dispatch])

	return (
		<>
			{/* Backdrop for blur effect */}
			{isSidebarOpen && (
				<div
					onClick={handleSidebarClose}
					className="2xl:hidden xl:hidden fixed top-0 left-0 w-full h-full bg-black z-10"
				></div>
			)}

			{/* Sidebar */}
			{isSidebarOpen && (
				<div
					id="sidebar"
					className={`2xl:hidden xl:hidden fixed top-0 right-0 h-full bg-bgSidebar bg-opacity-90 flex flex-col justify-center items-center lg:w-[35%] md:w-[35%] z-20 ${animateClass} 2xl:border-none xl:border-none lg:border-l-[1px] lg:border-secondary md:border-l-[1px] md:border-secondary`}
				>
					<ul className="flex flex-col justify-start items-start gap-6">
						<li className="font-Inter text-sidebarText capitalize lg:text-2xl tracking-wide">
							Menu
						</li>

						<li className="flex justify-start items-center gap-4 group">
							<FaHome
								size={20}
								className="transition-all ease-in-out duration-200 group-hover:text-secondary text-sidebarText"
							/>
							<span className="font-Inter text-sidebarText group-hover:text-secondary text-lg transition-all duration-200 cursor-pointer">
								About
							</span>
						</li>

						<li className="flex justify-start items-center gap-4 group">
							<FaUserTie
								size={20}
								className="transition-all ease-in-out duration-200 group-hover:text-secondary text-sidebarText"
							/>
							<span className="font-Inter text-sidebarText group-hover:text-secondary text-lg transition-all duration-200 cursor-pointer">
								Resume
							</span>
						</li>

						<li className="flex justify-start items-center gap-4 group">
							<FaBriefcase
								className="transition-all ease-in-out duration-200 group-hover:text-secondary text-sidebarText"
								size={20}
							/>
							<span className="font-Inter text-sidebarText group-hover:text-secondary text-lg transition-all duration-200 cursor-pointer">
								Resume
							</span>
						</li>

						<li className="flex justify-start items-center gap-4 group">
							<FaBarsStaggered
								className="transition-all ease-in-out duration-200 group-hover:text-secondary text-sidebarText"
								size={20}
							/>
							<span className="font-Inter text-sidebarText group-hover:text-secondary text-lg transition-all duration-200 cursor-pointer">
								Services
							</span>
						</li>

						<li className="flex justify-start items-center gap-4 group">
							<FaCode
								className="transition-all ease-in-out duration-200 group-hover:text-secondary text-sidebarText"
								size={20}
							/>
							<span className="font-Inter text-sidebarText group-hover:text-secondary text-lg transition-all duration-200 cursor-pointer">
								Skills
							</span>
						</li>

						<li className="flex justify-start items-center gap-4 group">
							<FaTarp
								className="transition-all ease-in-out duration-200 group-hover:text-secondary text-sidebarText"
								size={20}
							/>
							<span className="font-Inter text-sidebarText group-hover:text-secondary text-lg transition-all duration-200 cursor-pointer">
								Portfolio
							</span>
						</li>

						<li className="flex justify-start items-center gap-4 group">
							<FaRegMessage
								className="transition-all ease-in-out duration-200 group-hover:text-secondary text-sidebarText"
								size={20}
							/>
							<span className="font-Inter text-sidebarText group-hover:text-secondary text-lg transition-all duration-200 cursor-pointer">
								Testimonial
							</span>
						</li>

						<li className="flex justify-start items-center gap-4 group">
							<FaEnvelope
								className="transition-all ease-in-out duration-200 group-hover:text-secondary text-sidebarText"
								size={20}
							/>
							<span className="font-Inter text-sidebarText group-hover:text-secondary text-lg transition-all duration-200 cursor-pointer">
								Contact
							</span>
						</li>

						<p className="font-Inter text-sidebarText font-bold tracking-widest text-lg pt-6">
							Social
						</p>
						<div className="flex justify-center items-center gap-4">
							<a
								href="https://www.linkedin.com/in/shiham36651786/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin
									size={25}
									className="transition-all ease-in-out duration-200 hover:text-secondary text-sidebarText"
								/>
							</a>
							<a href="https://github.com/Shiham123" target="_blank" rel="noopener noreferrer">
								<FaGithub
									size={25}
									className="transition-all ease-in-out duration-200 hover:text-secondary text-sidebarText"
								/>
							</a>
							<a href="https://wa.me/+8801327239397" target="_blank" rel="noopener noreferrer">
								<FaWhatsapp
									size={25}
									className="transition-all ease-in-out duration-200 hover:text-secondary text-sidebarText"
								/>
							</a>
							<a
								href="https://discordapp.com/users/1022503770321584178"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaDiscord
									size={25}
									className="transition-all ease-in-out duration-200 hover:text-secondary text-sidebarText"
								/>
							</a>
						</div>
					</ul>
				</div>
			)}
		</>
	)
}

export default Sidebar
