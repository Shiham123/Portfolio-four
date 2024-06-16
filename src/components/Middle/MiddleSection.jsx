import LittleHeading from "../../Shared/LittleHeading"
import LittlePara from "../../Shared/LittlePara"

const MiddleSection = () => {
	return (
		<section className="2xl:col-span-8 2xl:col-start-4 2xl:col-end-12 xl:col-span-8 xl:col-start-4 xl:col-end-12">
			<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%]">
				<LittleHeading headingText="introduce" />
				<h1 className="2xl:text-[78px] xl:text-[58px] mt-12  leading-[90px] text-primaryFont font-Inter font-light capitalize">
					Say Hi from <span className="text-secondary">Shiham</span>, <br /> A MERN Stack Developer
					<br /> And Programmer.
				</h1>
				<LittlePara paraText="Shiham Bin Yousuf is a skilled MERN Stack Developer with expertise in developing full-stack web applications using modern technologies. He has a strong command over JavaScript, React, Redux, Node.js, Express.js, and MongoDB. Shiham is well-versed in utilizing various tools and libraries such as Tailwind CSS, Vite.js, SCSS, ESlint, Prettier, Yarn, Cors, Dotenv, Nodemon, and Morgan to ensure efficient development, styling, and maintainability of his projects." />

				<LittlePara paraText="With a proficient understanding of state management using Redux and RTK Query, Shiham has successfully developed projects like the MERN Quiz App, Redux Todo App, and BD Quick School. These projects showcase his ability to implement features like user authentication, video streaming, payment integration, and real-time communication using technologies like Firebase, JWT, SSL, and ZgoCloud." />

				<LittlePara paraText="Shiham's portfolio demonstrates his commitment to delivering high-quality, user-friendly applications with a strong emphasis on code quality, performance, and user experience." />
			</div>
		</section>
	)
}

export default MiddleSection
