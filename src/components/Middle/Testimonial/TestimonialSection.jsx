import {BiMessageAltDetail} from "react-icons/bi"

import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {fetchTestimonial} from "../../../app/testimonialSlice"
import TestimonialCard from "./TestimonialCard"

// reviewer image

const TestimonialSection = () => {
	const dispatch = useDispatch()
	const {data, status, error} = useSelector((state) => state.testimonial)

	useEffect(() => {
		dispatch(fetchTestimonial())
	}, [dispatch])

	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%]  my-[10rem] rounded-[20px]  ">
			<LittleHeading headingText="portfolio" Icon={BiMessageAltDetail} />
			<SubHeading mainText="Trusted by my" spanText="most valued individuals" />

			{status === "succeeded" ? (
				data.map((item) => {
					const {id, reviewerText, reviewerImage, reviewerDesignation, reviewerName} = item
					return (
						<TestimonialCard
							key={id}
							reviewerText={reviewerText}
							reviewerImage={reviewerImage}
							reviewerName={reviewerName}
							reviewerDesignation={reviewerDesignation}
						/>
					)
				})
			) : (
				<p>{error ? `Error: ${error}` : "Loading testimonials..."}</p>
			)}
		</div>
	)
}

export default TestimonialSection
