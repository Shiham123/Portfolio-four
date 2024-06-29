import LittleHeading from "../../../Shared/LittleHeading"
import ServiceCard from "./ServiceCard"
import SubHeading from "../../../Shared/SubHeading"

// icons
import {FaBarsStaggered} from "react-icons/fa6"
import {HiOutlineCubeTransparent, HiOutlineServer} from "react-icons/hi2"
import {PiPaletteLight} from "react-icons/pi"
import {CiLock} from "react-icons/ci"
import {LiaTasksSolid} from "react-icons/lia"

const ServicesSection = () => {
	return (
		<section className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%] my-[10rem]">
			<LittleHeading headingText="services" Icon={FaBarsStaggered} />
			<SubHeading mainText="my" spanText="Specialization" />
			<section className="flex justify-center items-start flex-col gap-8 my-12">
				<ServiceCard
					headingText="MERN Stack Development"
					paraText="I develop full-stack applications using MongoDB, ExpressJS, ReactJS, and NodeJS."
					hyperText="Various Projects"
					Icon={HiOutlineCubeTransparent}
				/>
				<ServiceCard
					headingText="Frontend Development"
					paraText="I create engaging and responsive web designs using technologies like ReactJS, TailwindCSS, and SCSS."
					hyperText="Multiple Projects"
					Icon={PiPaletteLight}
				/>
				<ServiceCard
					headingText="Backend Development"
					paraText="I build robust backends with NodeJS, ExpressJS, and Mongoose for managing MongoDB."
					hyperText="Several Projects"
					Icon={HiOutlineServer}
				/>
				<ServiceCard
					headingText="Authentication Systems"
					paraText="I implement secure authentication systems using Firebase, JWT, and OAuth."
					hyperText="Several Implementations"
					Icon={CiLock}
				/>
				<ServiceCard
					headingText="State Management"
					paraText="I manage application state efficiently using Redux and Redux-toolkit."
					hyperText="Multiple Projects"
					Icon={LiaTasksSolid}
				/>
			</section>
		</section>
	)
}

export default ServicesSection
