import {LuShapes} from "react-icons/lu"

import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import SkillsCard from "./SkillCard"

const Advantage = () => {
	return (
		<section className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%] my-[10rem]">
			<LittleHeading headingText="my skills" Icon={LuShapes} />
			<SubHeading mainText="My" spanText="Advantages" />
			<div className="grid grid-cols-6 gap-x-[50px]">
				<SkillsCard />
				<SkillsCard />
				<SkillsCard />
				<SkillsCard />
				<SkillsCard />
				<SkillsCard />
			</div>
		</section>
	)
}

export default Advantage
