import {FaGripVertical} from "react-icons/fa"
import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import PerItem from "./PerItem"

// image
import projectImageOne from "../../../assets/project 01.webp"
import projectImageTwo from "../../../assets/project 02.webp"
import projectImageThree from "../../../assets/project 03.webp"
import projectImageFour from "../../../assets/project 04.webp"
import projectImageFive from "../../../assets/project 05.webp"
import projectImageSix from "../../../assets/project 06.webp"

const ProjectSection = () => {
	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:m-[20px] mt-[15%]  my-[10rem] rounded-[20px]">
			<LittleHeading headingText="portfolio" Icon={FaGripVertical} />
			<SubHeading mainText="my" spanText="projects" />

			<div className="flex flex-col gap-10">
				<PerItem image={projectImageOne} overFlowText="my portfolio" altText="My portfolio Image" />
				<PerItem image={projectImageTwo} overFlowText="my Quiz App" altText="My quiz app image" />
				<PerItem
					image={projectImageThree}
					overFlowText="Our Group Project"
					altText="Group project Image"
				/>
				<PerItem
					image={projectImageFour}
					overFlowText="React/Redux Todo app"
					altText="react redux todo app image"
				/>
				<PerItem image={projectImageFive} overFlowText="Survey Website" altText="survey image" />
				<PerItem
					image={projectImageSix}
					overFlowText="Job Portal site"
					altText="job portal site image"
				/>
			</div>
		</div>
	)
}

export default ProjectSection
