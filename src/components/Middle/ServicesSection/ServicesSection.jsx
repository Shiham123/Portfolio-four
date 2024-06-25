import {FaBarsStaggered} from "react-icons/fa6"

import LittleHeading from "../../../Shared/LittleHeading"
import ServiceCard from "./ServiceCard"

const ServicesSection = () => {
	return (
		<section className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%] my-[10rem]">
			<LittleHeading headingText="services" Icon={FaBarsStaggered} />
			<ServiceCard />
		</section>
	)
}

export default ServicesSection
