import PropTypes from "prop-types"
import {GoHome} from "react-icons/go"

const LittleHeading = ({headingText}) => {
	return (
		<div className="border-[1px] border-primaryBorder inline-block py-2 px-6 rounded-[100px]">
			<div className="flex justify-center items-center gap-4">
				<GoHome color="white" />
				<h1 className="text-primaryFont text-sm uppercase font-Inter">{headingText}</h1>
			</div>
		</div>
	)
}

export default LittleHeading

LittleHeading.propTypes = {headingText: PropTypes.string.isRequired}
