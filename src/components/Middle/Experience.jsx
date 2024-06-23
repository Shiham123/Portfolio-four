import {FaBriefcase} from "react-icons/fa"

import LittleHeading from "../../Shared/LittleHeading"
import StepperComponent from "./StepperComponent"

const Experience = () => {
	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%]">
			<LittleHeading Icon={FaBriefcase} headingText="Resume" />
			<h1 className="2xl:text-[50px] xl:text-[58px] mt-12  leading-[90px] text-primaryFont font-Inter font-light capitalize">
				Education &<span className="text-secondary pl-5">Experience</span>
			</h1>
			<StepperComponent />
		</div>
	)
}

export default Experience
