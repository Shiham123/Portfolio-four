import {useSelector} from "react-redux"

const WebflowSvgFile = () => {
	const {fillColor, id} = useSelector((state) => state.icon)

	return (
		<svg
			className="transition-colors duration-300 ease-in-out w-[100%] h-[100%]"
			viewBox="0 0 1024 1024"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="512"
				cy="512"
				r="512"
				style={{fill: `${id === 11 ? fillColor : "#565656"}`}}
				className="transition-colors duration-300 ease-in-out"
			/>
			<path
				d="M399.57 494.6c0-11.39-11.07-23.48-30.24-23.48-21.52 0-45.16 15.79-48.77 47.28-3.69 31.81 16.1 45.95 36 45.95s30.39-7.78 41.08-18.14c-9.19-11.55-21-6.2-23.33-5a23.88 23.88 0 0 1-12.33 3c-7.7 0-15.55-3.46-15.55-17.83 49.37-4.92 53.14-20.38 53.14-31.78zm-24.43 1.88c-.31 3.53-1.73 9.58-26.7 13 5.26-18.69 15.32-20.11 19.95-20.11a6.52 6.52 0 0 1 6.76 7.12zm-83.57 3.06s-10.6 33.3-11.47 36c-.3-2.77-8.1-62.54-8.1-62.54-18.06 0-27.72 12.88-32.83 26.47 0 0-12.88 33.38-14 36.21-.08-2.59-2-35.81-2-35.81-1.1-16.65-16.34-26.78-28.67-26.78l14.92 90.56c18.93-.08 29.14-12.88 34.48-26.47 0 0 11.39-29.45 11.86-30.79.08 1.26 8.17 57.26 8.17 57.26 19 0 29.22-12 34.71-25.13l26.62-65.42c-18.68-.02-28.58 12.79-33.68 26.45zM469.31 471c-11.7 0-20.66 6.36-28.2 15.71v-.08l6.75-54.43c-15.55 0-28.2 13.51-30.63 33.61l-11.78 97.15c9 0 18.46-2.59 23.56-9.19a26.09 26.09 0 0 0 21.52 10.6c26.23 0 44.22-30.47 44.22-59.06C494.6 479.21 482 471 469.31 471zm-2.43 46.73c-2.75 15.94-11.62 26.78-20.18 26.78s-12.33-3.85-12.33-3.85c1.65-14 2.67-22.54 5.81-29.92s10.6-19.16 18.38-19.16c7.61-.04 11.07 10.09 8.32 26.11zm93.38-44.61H542l.08-.94c1.26-11.94 4.08-18.22 13.43-19.24 6.36-.63 9.19-3.93 9.9-7.54.55-2.83 2.28-12.64 2.28-12.64-36.76-.24-48.3 15.63-51.29 39.82l-.08.55h-.39c-6 0-12.57 6.75-13.67 15.32l-.39 3.14h12.25l-10.29 85-3.14 15.24c.39 0 .86.08 1.26.08 17.2-.63 28.2-14.22 30.63-33.93l8-66.37h5.73c5.65 0 12.25-5.65 13.43-15.08zm95.19-1.57c-21.13 0-41.08 15.55-47.2 40s3.14 53.33 34.24 53.33 48.93-30.08 48.93-55.13c0-24.96-16.88-38.24-35.97-38.24zm8.56 45.4c-1.1 11.07-6 27.88-19.32 27.88s-11.55-19.63-10.21-29c1.41-10 7-24.19 19-24.19 10.77-.02 11.79 12.78 10.52 25.27zm131.79-17.4s-10.6 33.3-11.47 36c-.31-2.83-8.09-62.6-8.09-62.6-18.06 0-27.72 12.88-32.83 26.47 0 0-12.88 33.38-14 36.21-.08-2.59-2-35.81-2-35.81-1.1-16.65-16.34-26.78-28.67-26.78l14.84 90.56c18.93-.08 29.14-12.88 34.48-26.47 0 0 11.39-29.45 11.78-30.79.16 1.26 8.17 57.26 8.17 57.26 19 0 29.22-12 34.71-25.13l26.62-65.42c-18.62.03-28.51 12.84-33.54 26.5zm-218.26-66.84-15.39 124.18L559 572.2c.39 0 .86.08 1.26.08 16.57-.24 28.35-14.77 30.55-33.07l8.88-71.21c2.67-21.78-10.29-35.29-22.15-35.29z"
				style={{fill: "#000000"}}
			/>
		</svg>
	)
}

export default WebflowSvgFile
