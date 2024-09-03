import {LuShapes} from "react-icons/lu"

import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import SkillsCard from "./SkillCard"

// Svg
import HtmlSvgFile from "../../../Utilities/HtmlSvgFile"
import ScssSvgFile from "../../../Utilities/ScssSvgFile"
import TailwindcssSvgFile from "../../../Utilities/TailwindcssSvgFile"

const Advantage = () => {
	return (
		<section className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%] my-[10rem]">
			<LittleHeading headingText="my skills" Icon={LuShapes} />

			<SubHeading mainText="My" spanText="Advantages" />

			{/* card Block */}

			<div className="grid grid-cols-5 gap-x-[50px] mt-[1.5rem]">
				<SkillsCard number={100} Icon={HtmlSvgFile} Id={1} />
				<SkillsCard number={100} Icon={ScssSvgFile} Id={2} />
				<SkillsCard number={100} Icon={TailwindcssSvgFile} Id={3} />
			</div>
		</section>
	)
}

export default Advantage
