import {FaBriefcase} from "react-icons/fa"

import LittleHeading from "../../../Shared/LittleHeading"
import StepperComponent from "./StepperComponent"
import SubHeading from "../../../Shared/SubHeading"

const Experience = () => {
	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%]">
			<LittleHeading Icon={FaBriefcase} headingText="Resume" />
			<SubHeading mainText="Education &" spanText="Experience" />
			<StepperComponent />
		</div>
	)
}

export default Experience
