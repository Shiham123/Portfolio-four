import {LuShapes} from "react-icons/lu"

import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import SkillsCard from "./SkillCard"

// Svg
import HtmlSvgFile from "../../../Utilities/HtmlSvgFile"
import ScssSvgFile from "../../../Utilities/ScssSvgFile"
import TailwindcssSvgFile from "../../../Utilities/TailwindcssSvgFile"
import BootstrapSvgFile from "../../../Utilities/BootstrapSvgFile"
import JsSvgFile from "../../../Utilities/JsSvgFile"
import ReactSvgFile from "../../../Utilities/ReactSvgFile"
import NextSvgFile from "../../../Utilities/NextSvgFile"
import ReduxSvgFile from "../../../Utilities/ReduxSvgFile"
import WordPressSvgFile from "../../../Utilities/WordPressSvgFile"
import ElementorSvgFile from "../../../Utilities/ElementorSvgFile"
import WebflowSvgFile from "../../../Utilities/WebflowSvgFile"
import FramerSvgFile from "../../../Utilities/FramerSvgFile"
import NodeSvgFile from "../../../Utilities/NodeSvgFile"
import JsonSvgFile from "../../../Utilities/JsonSvgFile"
import ExpressSvgFile from "../../../Utilities/ExpressSvgFile"
import MongooseSvgFile from "../../../Utilities/MongooseSvgFile"

const frontendSkillOne = [
	{number: 100, Icon: HtmlSvgFile, Id: 1, skillName: "html"},
	{number: 100, Icon: ScssSvgFile, Id: 2, skillName: "scss"},
	{number: 100, Icon: TailwindcssSvgFile, Id: 3, skillName: "tailwindcss"},
	{number: 100, Icon: BootstrapSvgFile, Id: 4, skillName: "Bootstrap"},
]

const frontendSkillTwo = [
	{number: 100, Icon: JsSvgFile, Id: 5, skillName: "javaScript"},
	{number: 100, Icon: ReactSvgFile, Id: 6, skillName: "ReactJs"},
	{number: 100, Icon: NextSvgFile, Id: 7, skillName: "nextJs"},
	{number: 100, Icon: ReduxSvgFile, Id: 8, skillName: "redux"},
]

const cmsSkillArrayOne = [
	{number: 100, Icon: WordPressSvgFile, Id: 9, skillName: "wordpress"},
	{number: 100, Icon: ElementorSvgFile, Id: 10, skillName: "elementor"},
	{number: 100, Icon: WebflowSvgFile, Id: 11, skillName: "webflow"},
	{number: 100, Icon: FramerSvgFile, Id: 12, skillName: "framer"},
]

const backendSkillArrayOne = [
	{number: 100, Icon: NodeSvgFile, Id: 13, skillName: "nodejs"},
	{number: 100, Icon: JsonSvgFile, Id: 14, skillName: "json"},
	{number: 100, Icon: ExpressSvgFile, Id: 15, skillName: "expressJs"},
	{number: 100, Icon: MongooseSvgFile, Id: 16, skillName: "mongoose"},
]

const Advantage = () => {
	return (
		<section className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%] my-[10rem]">
			<LittleHeading headingText="my skills" Icon={LuShapes} />

			<SubHeading mainText="My" spanText="Advantages" />

			{/* card Block */}

			<div className="grid grid-cols-4 justify-items-start mt-10 gap-y-[5rem]">
				{frontendSkillOne.map((skill) => {
					const {number, Icon, Id, skillName} = skill
					return <SkillsCard key={Id} number={number} Icon={Icon} Id={Id} skillName={skillName} />
				})}
				{frontendSkillTwo.map((skill) => (
					<SkillsCard
						key={skill.Id}
						number={skill.number}
						Icon={skill.Icon}
						Id={skill.Id}
						skillName={skill.skillName}
					/>
				))}

				{backendSkillArrayOne.map((perSkill) => {
					const {Id, number, Icon, skillName} = perSkill
					return <SkillsCard key={Id} number={number} Icon={Icon} skillName={skillName} Id={Id} />
				})}

				{cmsSkillArrayOne.map((perSkill) => {
					const {Id, number, Icon, skillName} = perSkill
					return <SkillsCard key={Id} number={number} Icon={Icon} skillName={skillName} Id={Id} />
				})}
			</div>
		</section>
	)
}

export default Advantage
