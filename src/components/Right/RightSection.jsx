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
		<div className="col-span-2 xl:col-span-1">
			<GoHome />
			<FontAwesomeIcon icon={faUserTie} />
			<FontAwesomeIcon icon={faBriefcase} />
			<FontAwesomeIcon icon={faBarsStaggered} />
			<FontAwesomeIcon icon={faCode} />
			<FontAwesomeIcon icon={faTarp} />
			<TextMessage theme="outline" size="24" fill="#ffffff" />
			<EnvelopeIcon className="w-6 h-6" />
		</div>
	)
}

export default RightSection
