import {useSelector} from "react-redux"

const JsSvgFile = () => {
	const {fillColor, id} = useSelector((state) => state.icon)

	return (
		<svg width="170px" height="120px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
			<rect
				x="2"
				y="2"
				width="28"
				height="28"
				style={{fill: `${id === 5 ? fillColor : "#565656"}`}}
				className="transition-colors duration-300 ease-in-out"
			/>
			<path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z" />
		</svg>
	)
}

export default JsSvgFile
