import {useDispatch, useSelector} from "react-redux"
import {hoverChange} from "../../app/theme"
import {HiMiniBars2} from "react-icons/hi2"

const DrawerComponents = () => {
	const {isHover} = useSelector((state) => state.theme)
	const dispatch = useDispatch()
	return (
		<>
			<div
				onMouseEnter={() => dispatch(hoverChange(true))}
				onMouseLeave={() => dispatch(hoverChange(false))}
				className={`2xl:hidden xl:hidden absolute top-0 -right-[10%] cursor-pointer border-[2px] rounded-custom p-2 transition-all duration-300 ease-in-out ${
					isHover ? "border-secondary" : "border-primaryBorder"
				}`}
			>
				<HiMiniBars2
					color={isHover ? "#28e98c" : "#565656"}
					size={30}
					className="transition-all duration-300 ease-in-out"
				/>
			</div>
		</>
	)
}

export default DrawerComponents
