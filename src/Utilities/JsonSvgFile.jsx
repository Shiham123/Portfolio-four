import {useSelector} from "react-redux"

const JsonSvgFile = () => {
	const {fillColor, id} = useSelector((state) => state.icon)
	return (
		<svg width="170px" height="120px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<rect width="24" height="24" fill="none" />
			<path
				className="transition-colors duration-300 ease-in-out"
				d="M5,3H7V5H5v5a2,2,0,0,1-2,2,2,2,0,0,1,2,2v5H7v2H5c-1.07-.27-2-.9-2-2V15a2,2,0,0,0-2-2H0V11H1A2,2,0,0,0,3,9V5A2,2,0,0,1,5,3M19,3a2,2,0,0,1,2,2V9a2,2,0,0,0,2,2h1v2H23a2,2,0,0,0-2,2v4a2,2,0,0,1-2,2H17V19h2V14a2,2,0,0,1,2-2,2,2,0,0,1-2-2V5H17V3h2M12,15a1,1,0,1,1-1,1,1,1,0,0,1,1-1M8,15a1,1,0,1,1-1,1,1,1,0,0,1,1-1m8,0a1,1,0,1,1-1,1A1,1,0,0,1,16,15Z"
				fill={`${id === 14 ? fillColor : "#565656"}`}
			/>
		</svg>
	)
}

export default JsonSvgFile
