import Button from "../../Shared/Button"
import BioData from "./BioData"
import LeftSideIcons from "./LeftSideIcons"
import TopHeader from "./TopHeader"
import DrawerComponents from "./DrawerComponents"

const LeftSection = () => {
	return (
		<section className="2xl:col-span-3 2xl:fixed 2xl:top-[8%] 2xl:left-[0%] 2xl:w-1/4 2xl:px-[30px] xl:px-[20px] xl:col-span-3 xl:fixed xl:top-[10%] xl:left-[2%] xl:w-[28%] lg:w-9/12 lg:-mt-[4%] md:w-7/12">
			<div className="border-[1px] border-primaryBorder rounded-custom 2xl:flex 2xl:flex-col xl:flex xl:flex-col lg:flex lg:flex-col lg:relative md:flex md:flex-col md:relative">
				{/* components */}
				<TopHeader />
				<BioData />
				<LeftSideIcons />
				<Button text="Hire Me" />
				<DrawerComponents />
			</div>
		</section>
	)
}

export default LeftSection
