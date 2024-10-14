import {FaUser} from "react-icons/fa"
import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import LittlePara from "../../../Shared/LittlePara"

const About = () => {
	return (
		<section className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:mx-[20px] xxs:my-[40px]">
			<LittleHeading Icon={FaUser} headingText="about" />
			<SubHeading
				classes="xxs:my-[20px]"
				mainText="Great development begins with a"
				spanText="compelling story."
			/>
			<LittlePara paraText="Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time." />
		</section>
	)
}

export default About
