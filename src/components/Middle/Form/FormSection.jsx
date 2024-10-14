import {IoMdMail} from "react-icons/io"
import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import FormBlock from "./FormBlock"

const FormSection = () => {
	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:m-[20px] mt-[15%] my-[10rem] rounded-[20px] relative">
			<LittleHeading headingText="Contact" Icon={IoMdMail} />
			<SubHeading mainText="You Wanna" spanText="Contact Me?" />

			<FormBlock />
		</div>
	)
}

export default FormSection
