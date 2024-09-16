// swiper js import
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, Navigation} from "swiper/modules"

// icon import
import {BiMessageAltDetail} from "react-icons/bi"

// redux built in method
import {useDispatch, useSelector} from "react-redux"

// react method
import {useEffect} from "react"

// component import
import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import TestimonialCard from "./TestimonialCard"
import {fetchTestimonial} from "../../../app/testimonialSlice"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const TestimonialSection = () => {
	const dispatch = useDispatch()
	const {data, status, error} = useSelector((state) => state.testimonial)

	useEffect(() => {
		dispatch(fetchTestimonial())
	}, [dispatch])

	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%] my-[10rem] rounded-[20px]">
			<LittleHeading headingText="portfolio" Icon={BiMessageAltDetail} />
			<SubHeading mainText="Trusted by my" spanText="most valued individuals" />

			{status === "succeeded" ? (
				<Swiper
					pagination={{type: "fraction"}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{data.map((item) => {
						const {
							id,
							reviewerText,
							reviewerImage,
							reviewerDesignation,
							reviewerName,
							reviewerCompanyName,
							reviewerCompanyLink,
						} = item
						return (
							<SwiperSlide key={id}>
								<TestimonialCard
									reviewerText={reviewerText}
									reviewerImage={reviewerImage}
									reviewerName={reviewerName}
									reviewerDesignation={reviewerDesignation}
									reviewerCompanyName={reviewerCompanyName}
									reviewerCompanyLink={reviewerCompanyLink}
								/>
							</SwiperSlide>
						)
					})}
				</Swiper>
			) : (
				<p>{error ? `Error: ${error}` : "Loading testimonials..."}</p>
			)}
		</div>
	)
}

export default TestimonialSection
