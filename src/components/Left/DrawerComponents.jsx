import {useDispatch} from "react-redux"
import {HiMiniBars2} from "react-icons/hi2"
import {animateApplied, sidebarOpenClose} from "../../app/theme"

const DrawerComponents = () => {
	const dispatch = useDispatch()

	const handleSidebarOpen = () => {
		dispatch(animateApplied("animate__animated animate__fadeInRight"))
		dispatch(sidebarOpenClose(true))
	}

	return (
		<div
			onClick={handleSidebarOpen}
			className="2xl:hidden xl:hidden absolute border-primaryBorder group hover:border-secondary lg:top-0 lg:-right-[10%] cursor-pointer border-[2px] rounded-custom p-2 transition-all duration-300 ease-in-out"
		>
			<HiMiniBars2
				size={30}
				className="transition-all duration-300 ease-in-out text-primaryBorder group-hover:text-secondary"
			/>
		</div>
	)
}

export default DrawerComponents
