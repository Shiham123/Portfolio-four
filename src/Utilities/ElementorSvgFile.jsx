import {useSelector} from "react-redux"

const ElementorSvgFile = () => {
	const {fillColor, id} = useSelector((state) => state.icon)
	return (
		<svg
			fill={`${id === 10 ? fillColor : "#565656"}`}
			className="transition-colors duration-300 ease-in-out w-[100%] h-[100%]"
			viewBox="0 0 14 14"
			role="img"
			focusable="false"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M 12.4,1 1.6,1 C 1.2678571,1 1,1.26786 1,1.6 L 1,12.4 C 1,12.73214 1.2678571,13 1.6,13 l 10.8,0 C 12.732143,13 13,12.73214 13,12.4 L 13,1.6 C 13,1.26786 12.732143,1 12.4,1 m -6.9991071,8.66518 -1.0660715,0 0,-5.33036 1.0660715,0 0,5.33036 z m 4.2669642,0 -3.2008928,0 0,-1.06607 3.2008928,0 0,1.06607 z m 0,-2.13214 -3.2008928,0 0,-1.06608 3.2008928,0 0,1.06608 z m 0,-2.13483 -3.2008928,0 0,-1.06607 3.2008928,0 0,1.06607 z" />
		</svg>
	)
}

export default ElementorSvgFile
