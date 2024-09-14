import PropTypes from "prop-types"
import {useEffect, useState} from "react"

const PerIcon = ({Icon, link}) => {
	const [iconSize, setIconSize] = useState(45)

	const updateIconSize = () => {
		if (window.innerWidth >= 1280 && window.innerWidth <= 1535) {
			setIconSize(35)
		} else {
			setIconSize(45)
		}
	}

	useEffect(() => {
		updateIconSize()
		window.addEventListener("resize", updateIconSize)
		return () => window.removeEventListener("resize", updateIconSize)
	}, [])

	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<Icon
				size={iconSize}
				className="text-[#565656] p-2 hover:text-hoverColor border-[2px] border-[#565656]
				rounded-custom hover:border-hoverColor hover:duration-300 hover:transition-all hover:ease-in-out cursor-pointer"
			/>
		</a>
	)
}

export default PerIcon

PerIcon.propTypes = {Icon: PropTypes.elementType.isRequired, link: PropTypes.string.isRequired}
