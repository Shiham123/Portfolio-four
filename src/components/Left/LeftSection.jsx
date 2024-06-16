import {HiMiniBars2} from "react-icons/hi2"
import {useSelector, useDispatch} from "react-redux"

// components
import Button from "../../Shared/Button"
import BioData from "./BioData"
import LeftSideIcons from "./LeftSideIcons"
import TopHeader from "./TopHeader"
import {hoverChange} from "../../app/theme.js"

const LeftSection = () => {
	const {isHover} = useSelector((state) => state.theme)
	const dispatch = useDispatch()

	return (
		<section className="2xl:col-span-3 2xl:fixed 2xl:top-[8%] 2xl:left-[0%] 2xl:w-1/4 2xl:px-[30px] xl:px-[20px] xl:col-span-3 xl:fixed xl:top-[10%] xl:left-[2%] xl:w-[28%] lg:w-9/12 lg:-mt-[4%]">
			<div className="border-[1px] border-primaryBorder rounded-custom 2xl:flex 2xl:flex-col xl:flex xl:flex-col lg:flex lg:flex-col lg:relative">
				{/* components */}
				<TopHeader />
				<BioData />
				<LeftSideIcons />
				<Button text="Hire Me" />

				<div
					onMouseEnter={() => dispatch(hoverChange(true))}
					onMouseLeave={() => dispatch(hoverChange(false))}
					className={`absolute top-0 -right-[10%] cursor-pointer border-[2px] rounded-custom p-2 transition-all duration-300 ease-in-out ${
						isHover ? "border-secondary" : "border-primaryBorder"
					}`}
				>
					<HiMiniBars2
						color={isHover ? "#28e98c" : "#565656"}
						size={30}
						className="transition-all duration-300 ease-in-out"
					/>
				</div>
			</div>
		</section>
	)
}

export default LeftSection
