import {FaLinkedin, FaGithub, FaWhatsapp, FaDiscord} from "react-icons/fa"
import PerIcon from "./PerIcon"

const LeftSideIcons = () => {
	return (
		<div className="flex justify-center items-center gap-4 pb-12">
			<PerIcon Icon={FaLinkedin} />
			<PerIcon Icon={FaGithub} />
			<PerIcon Icon={FaWhatsapp} />
			<PerIcon Icon={FaDiscord} />
		</div>
	)
}

export default LeftSideIcons
