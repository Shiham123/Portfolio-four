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
		<div className="col-span-1 xl:col-span-1">
			<div className="flex flex-col justify-center gap-[4%] items-center w-2/6 h-full border-[1px] border-primaryBorder rounded-custom">
				<GoHome size={30} className="text-primaryBorder cursor-pointer" />
				<FontAwesomeIcon icon={faUserTie} className="text-primaryBorder cursor-pointer" />
				<FontAwesomeIcon icon={faBriefcase} className="text-primaryBorder cursor-pointer" />
				<FontAwesomeIcon icon={faBarsStaggered} className="text-primaryBorder cursor-pointer" />
				<FontAwesomeIcon icon={faCode} className="text-primaryBorder cursor-pointer" />
				<FontAwesomeIcon icon={faTarp} className="text-primaryBorder cursor-pointer" />
				<TextMessage theme="outline" size="24" className="text-primaryBorder cursor-pointer" />
				<EnvelopeIcon className="text-primaryBorder cursor-pointer w-6 h-6" />
			</div>
		</div>
	)
}

export default RightSection
