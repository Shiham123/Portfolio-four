import PropTypes from "prop-types"
import {CiMail} from "react-icons/ci"

const Button = ({text}) => {
	return (
		<button className="border-[1px] border-[#27e68a] my-4 py-4 mx-6 rounded-full bg-[#27e68a] hover:bg-primary hover:text-[#27e68a] flex justify-center items-center gap-4 hover:transition-all hover:duration-300 hover:ease-in-out">
			<CiMail size={30} color="#1f1f1f" />
			<span className="font-Inter font-medium text-xl uppercase leading-3 tracking-wide">
				{text}
			</span>
		</button>
	)
}

export default Button

Button.propTypes = {text: PropTypes.string.isRequired}
