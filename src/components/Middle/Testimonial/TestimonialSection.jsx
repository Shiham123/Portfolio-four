import {BiMessageAltDetail} from "react-icons/bi"

import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import TestimonialCard from "./TestimonialCard"

// reviewer image
import reviewImageOne from "../../../assets/reviewer image 01.webp"

const TestimonialSection = () => {
	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%]  my-[10rem] rounded-[20px]">
			<LittleHeading headingText="portfolio" Icon={BiMessageAltDetail} />
			<SubHeading mainText="Trusted by my" spanText="most valued individuals" />

			<TestimonialCard
				reviewerText="Shiham Ibne Yousuf is an outstanding MERN stack developer with exceptional skills in MongoDB, Express.js, React, and Node.js. They deliver high-quality, scalable applications and are a great team player. Highly recommended for any MERN stack projects."
				reviewerName="Sha israil"
				reviewerDesignation="MERN Stack Developer"
				reviewerCompany="ABC company limited"
				reviewerWhatsapp="0198992331"
				reviewerLinkedin="www.linkedin.com"
				reviewerFacebook="www.facebook.com"
				reviewerImage={reviewImageOne}
			/>
		</div>
	)
}

export default TestimonialSection
