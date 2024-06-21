import {FaLinkedin, FaGithub, FaWhatsapp, FaDiscord} from "react-icons/fa"
import PerIcon from "./PerIcon"

const LeftSideIcons = () => {
	return (
		<div className="flex justify-center items-center gap-4 2xl:pb-12 xl:pb-6 lg:pb-8 md:py-4 sm:py-4">
			<PerIcon Icon={FaLinkedin} link="https://www.linkedin.com/in/shiham36651786/" />
			<PerIcon Icon={FaGithub} link="https://github.com/Shiham123" />
			<PerIcon Icon={FaWhatsapp} link="https://wa.me/+8801327239397" />
			<PerIcon Icon={FaDiscord} link="https://discordapp.com/users/1022503770321584178" />
		</div>
	)
}

export default LeftSideIcons
