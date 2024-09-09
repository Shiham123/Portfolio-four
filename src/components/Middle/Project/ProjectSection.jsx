import {FaGripVertical} from "react-icons/fa"
import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"

const ProjectSection = () => {
	return (
		<div className="relative 2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%]  my-[10rem] rounded-[20px]">
			<LittleHeading headingText="portfolio" Icon={FaGripVertical} />
			<SubHeading mainText="my" spanText="projects" />

			<div className="relative z-10 group cursor-pointer">
				<img
					className="rounded-[20px] bg-cover bg-center"
					src="/src/assets/project 01.webp"
					alt=""
				/>

				<div className="hidden group-hover:block absolute bottom-7 left-[5%] z-30">
					<h1 className="bg-secondary text-primary px-10 py-2 font-OpenSans text-2xl rounded-[20px]">
						My Portfolio
					</h1>
				</div>

				<div className="hidden group-hover:block absolute inset-0 w-[100%] h-[100%] bg-primary/80 z-20"></div>
			</div>
		</div>
	)
}

export default ProjectSection
