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
import VscodeSvgFile from "../../../Utilities/VscodeSvgFile"
import GitSvgFile from "../../../Utilities/GitSvgFile"
import GithubSvgFile from "../../../Utilities/GithubSvgFile"
import FirebaseSvgFile from "../../../Utilities/FirebaseSvgFile"

const frontendSkillOne = [
	{number: 100, Icon: HtmlSvgFile, Id: 1, skillName: "html"},
	{number: 100, Icon: ScssSvgFile, Id: 2, skillName: "scss"},
	{number: 100, Icon: TailwindcssSvgFile, Id: 3, skillName: "tailwind"},
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

const toolsSkillArrayOne = [
	{number: 100, Icon: VscodeSvgFile, Id: 17, skillName: "vscode"},
	{number: 100, Icon: GitSvgFile, Id: 18, skillName: "git"},
	{number: 100, Icon: GithubSvgFile, Id: 19, skillName: "github"},
	{number: 100, Icon: FirebaseSvgFile, Id: 20, skillName: "firebase"},
]

const Advantage = () => {
	return (
		<section className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:m-[20px] mt-[15%] my-[10rem]">
			<LittleHeading headingText="my skills" Icon={LuShapes} />
			<SubHeading mainText="My" spanText="Advantages" />

			{/* card Block */}

			<div className="flex flex-col gap-10">
				<div className="2xl:grid 2xl:grid-cols-4 2xl:gap-x-[10%] xl:flex xl:gap-[7%] lg:flex lg:gap-[8%] md:flex md:gap-x-[5%] sm:grid sm:grid-cols-3 sm:gap-x-4 xs:grid xs:grid-cols-2 xs:gap-x-4 xxs:flex xxs:flex-col xxs:items-start justify-items-start">
					{frontendSkillOne.map((skill) => {
						const {number, Icon, Id, skillName} = skill
						return <SkillsCard key={Id} number={number} Icon={Icon} Id={Id} skillName={skillName} />
					})}
				</div>

				<div className="2xl:grid 2xl:grid-cols-4 2xl:gap-x-[10%] xl:flex xl:gap-[7%] lg:flex lg:gap-[8%] md:flex md:gap-x-[5%] sm:grid sm:grid-cols-3 sm:gap-x-4 xs:grid xs:grid-cols-2 xs:gap-x-4 xxs:flex xxs:flex-col xxs:items-start justify-items-start">
					{frontendSkillTwo.map((skill) => (
						<SkillsCard
							key={skill.Id}
							number={skill.number}
							Icon={skill.Icon}
							Id={skill.Id}
							skillName={skill.skillName}
						/>
					))}
				</div>

				<div className="2xl:grid 2xl:grid-cols-4 2xl:gap-x-[10%] xl:flex xl:gap-[7%] lg:flex lg:gap-[8%] md:flex md:gap-x-[5%] sm:grid sm:grid-cols-3 sm:gap-x-4 xs:grid xs:grid-cols-2 xs:gap-x-4 xxs:flex xxs:flex-col xxs:items-start justify-items-start">
					{backendSkillArrayOne.map((perSkill) => {
						const {Id, number, Icon, skillName} = perSkill
						return <SkillsCard key={Id} number={number} Icon={Icon} skillName={skillName} Id={Id} />
					})}
				</div>

				<div className="2xl:grid 2xl:grid-cols-4 2xl:gap-x-[10%] xl:flex xl:gap-[7%] lg:flex lg:gap-[8%] md:flex md:gap-x-[5%] sm:grid sm:grid-cols-3 sm:gap-x-4 xs:grid xs:grid-cols-2 xs:gap-x-4 xxs:flex xxs:flex-col xxs:items-start justify-items-start">
					{cmsSkillArrayOne.map((perSkill) => {
						const {Id, number, Icon, skillName} = perSkill
						return <SkillsCard key={Id} number={number} Icon={Icon} skillName={skillName} Id={Id} />
					})}
				</div>

				<div className="2xl:grid 2xl:grid-cols-4 2xl:gap-x-[10%] xl:flex xl:gap-[7%] lg:flex lg:gap-[8%] md:flex md:gap-x-[5%] sm:grid sm:grid-cols-3 sm:gap-x-4 xs:grid xs:grid-cols-2 xs:gap-x-4 xxs:flex xxs:flex-col xxs:items-start justify-items-start">
					{toolsSkillArrayOne.map((item) => {
						const {Id, number, Icon, skillName} = item
						return <SkillsCard key={Id} Id={Id} number={number} Icon={Icon} skillName={skillName} />
					})}
				</div>
			</div>
		</section>
	)
}

export default Advantage
