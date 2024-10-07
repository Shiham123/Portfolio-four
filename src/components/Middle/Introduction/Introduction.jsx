import {GoHome} from "react-icons/go"
import LittleHeading from "../../../Shared/LittleHeading"
import LittlePara from "../../../Shared/LittlePara"

const Introduction = () => {
	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] sm:mt-[7%] xl:px-[10%] xs:mt-[15%] xxs:px-[10%] lg:mt-[10%] md:mt-[10%]">
			<LittleHeading Icon={GoHome} headingText="introduce" />
			<h1 className="2xl:text-headingOne2xl xl:text-headingOneXl lg:text-headingOneLg md:text-headingOneMd sm:text-headingOneMd xs:text-headingOneXs mt-[32px] mb-[40px] text-primaryFont font-Inter font-light capitalize">
				Say Hi from <span className="text-secondary">Shiham</span>, <br /> A MERN Stack Developer
				<br /> And Programmer.
			</h1>
			<div className="flex flex-col justify-start items-start gap-[24px]">
				<LittlePara paraText="Shiham Bin Yousuf is a skilled MERN Stack Developer with expertise in developing full-stack web applications using modern technologies. He has a strong command over JavaScript, React, Redux, Node.js, Express.js, and MongoDB. Shiham is well-versed in utilizing various tools and libraries such as Tailwind CSS, Vite.js, SCSS, ESlint, Prettier, Yarn, Cors, Dotenv, Nodemon, and Morgan to ensure efficient development, styling, and maintainability of his projects." />
				<LittlePara paraText="With a proficient understanding of state management using Redux and RTK Query, Shiham has successfully developed projects like the MERN Quiz App, Redux Todo App, and BD Quick School. These projects showcase his ability to implement features like user authentication, video streaming, payment integration, and real-time communication using technologies like Firebase, JWT, SSL, and ZgoCloud." />
				<LittlePara paraText="Shiham's portfolio demonstrates his commitment to delivering high-quality, user-friendly applications with a strong emphasis on code quality, performance, and user experience." />
			</div>
		</div>
	)
}

export default Introduction
