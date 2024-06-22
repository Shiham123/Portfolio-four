import LittleHeading from "../../Shared/LittleHeading"

import {FaUser} from "react-icons/fa"
import LittlePara from "../../Shared/LittlePara"

const About = () => {
	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%]">
			<LittleHeading Icon={FaUser} headingText="about" />
			<h1 className="2xl:text-[50px] xl:text-[58px] mt-12  leading-[90px] text-primaryFont font-Inter font-light capitalize">
				Every great design begin with <br /> an even{" "}
				<span className="text-secondary">better story</span>
			</h1>
			<LittlePara paraText="Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time." />
		</div>
	)
}

export default About
