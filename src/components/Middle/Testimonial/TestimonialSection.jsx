import {BiMessageAltDetail} from "react-icons/bi"

import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import TestimonialCard from "./TestimonialCard"
import {useEffect} from "react"

// reviewer image

const TestimonialSection = () => {
	useEffect(() => {
		fetch("/src/data/testimonialData.json")
	}, [])

	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%]  my-[10rem] rounded-[20px] ">
			<LittleHeading headingText="portfolio" Icon={BiMessageAltDetail} />
			<SubHeading mainText="Trusted by my" spanText="most valued individuals" />

			{/* <TestimonialCard
				reviewerText="" 
				reviewerName=""
				reviewerDesignation=""
				reviewerCompany=""
				reviewerWhatsapp="0198992331"
				reviewerFacebook="www.facebook.com"
				reviewerImage={}
			/> */}
		</div>
	)
}

export default TestimonialSection
