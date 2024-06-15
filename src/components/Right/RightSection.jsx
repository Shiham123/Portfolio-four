import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {TextMessage} from "@icon-park/react"

import {
	faUserTie,
	faBriefcase,
	faBarsStaggered,
	faCode,
	faTarp,
} from "@fortawesome/free-solid-svg-icons"
import {GoHome} from "react-icons/go"
import {EnvelopeIcon} from "@heroicons/react/24/outline"

const RightSection = () => {
	return (
		<div className="2xl:col-span-1">
			<div className="flex justify-center items-center h-screen">
				<div className="flex flex-col justify-center gap-[2rem] items-center py-6 w-2/6 border-[1px] border-primaryBorder rounded-custom">
					<GoHome
						size={30}
						className="text-primaryBorder cursor-pointer hover:text-secondary transition-all duration-100"
					/>
					<FontAwesomeIcon
						icon={faUserTie}
						size="lg"
						className="text-primaryBorder cursor-pointer hover:text-secondary transition-all duration-100"
					/>
					<FontAwesomeIcon
						size="lg"
						icon={faBriefcase}
						className="text-primaryBorder cursor-pointer hover:text-secondary transition-all duration-100"
					/>
					<FontAwesomeIcon
						size="lg"
						icon={faBarsStaggered}
						className="text-primaryBorder cursor-pointer hover:text-secondary transition-all duration-100"
					/>
					<FontAwesomeIcon
						size="lg"
						icon={faCode}
						className="text-primaryBorder cursor-pointer hover:text-secondary transition-all duration-100"
					/>
					<FontAwesomeIcon
						size="lg"
						icon={faTarp}
						className="text-primaryBorder cursor-pointer hover:text-secondary transition-all duration-100"
					/>
					<TextMessage
						theme="outline"
						size="24"
						className="text-primaryBorder cursor-pointer hover:text-secondary transition-all duration-100"
					/>
					<EnvelopeIcon className="text-primaryBorder cursor-pointer hover:text-secondary transition-all duration-100 w-6 h-6" />
				</div>
			</div>
		</div>
	)
}

export default RightSection
