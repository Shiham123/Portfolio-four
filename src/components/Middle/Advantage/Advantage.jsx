import {LuShapes} from "react-icons/lu"

import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import SkillsCard from "./SkillCard"

// Svg
import HtmlSvgFile from "../../../Utilities/HtmlSvgFile"
import ScssSvgFile from "../../../Utilities/ScssSvgFile"
import TailwindcssSvgFile from "../../../Utilities/TailwindcssSvgFile"
import BootstrapSvgFile from "../../../Utilities/BootstrapSvgFile"

const skillsDataArray = [
	{number: 100, Icon: HtmlSvgFile, Id: 1, skillName: "html"},
	{number: 100, Icon: ScssSvgFile, Id: 2, skillName: "scss"},
	{number: 100, Icon: TailwindcssSvgFile, Id: 3, skillName: "tailwindcss"},
	{number: 100, Icon: BootstrapSvgFile, Id: 4, skillName: "Bootstrap"},
]

const Advantage = () => {
	return (
		<section className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%] my-[10rem]">
			<LittleHeading headingText="my skills" Icon={LuShapes} />

			<SubHeading mainText="My" spanText="Advantages" />

			{/* card Block */}

			<div className="grid grid-cols-4 justify-items-start mt-10">
				{skillsDataArray.map((skill) => {
					const {number, Icon, Id, skillName} = skill
					return <SkillsCard key={Id} number={number} Icon={Icon} Id={Id} skillName={skillName} />
				})}
			</div>
		</section>
	)
}

export default Advantage
