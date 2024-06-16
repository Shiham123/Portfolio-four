import Button from "../../Shared/Button"
import BioData from "./BioData"
import LeftHeader from "./LeftHeader"
import LeftSideIcons from "./LeftSideIcons"

const LeftSection = () => {
	return (
		<section className="2xl:col-span-3 2xl:fixed 2xl:top-[8%] 2xl:left-[0%] 2xl:w-1/4 2xl:px-[30px] xl:px-[20px] xl:col-span-3 xl:fixed xl:top-[10%] xl:left-[2%] xl:w-[28%] lg:w-9/12 lg:-mt-[4%]">
			<div className="border-[1px] border-primaryBorder rounded-custom 2xl:flex 2xl:flex-col xl:flex xl:flex-col lg:flex lg:flex-col">
				{/* before img section */}
				<div className="flex justify-between items-center 2xl:px-6 xl:px-6 2xl:py-12 xl:py-6 lg:px-[10%] lg:py-[5%]">
					<LeftHeader headingText="Programmer" />
					<LeftHeader headingText="Developer" />
				</div>

				{/* bio data section */}
				<BioData />

				{/* icons section */}
				<LeftSideIcons />
				<Button text="Hire Me" />
			</div>
		</section>
	)
}

export default LeftSection
