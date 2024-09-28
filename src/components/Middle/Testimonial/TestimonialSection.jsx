import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import TestimonialCard from "./TestimonialCard"
import {fetchTestimonial} from "../../../app/testimonialSlice"
import {BiMessageAltDetail} from "react-icons/bi"
import {setFillColorId} from "../../../app/handleSvg"

const TestimonialSection = () => {
	const dispatch = useDispatch()
	const {data, status, error} = useSelector((state) => state.testimonial)
	const {fillColor, id} = useSelector((state) => state.icon)

	const [currentIndex, setCurrentIndex] = useState(0)
	const [fadeIn, setFadeIn] = useState(true)

	useEffect(() => {
		dispatch(fetchTestimonial())
	}, [dispatch])

	const handlePrevious = () => {
		setFadeIn(false)
		setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1))
			setFadeIn(true)
		}, 500)
	}

	const handleNext = () => {
		setFadeIn(false)
		setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1))
			setFadeIn(true)
		}, 300)
	}

	const changeIconColor = (color, id) => {
		dispatch(setFillColorId({color, id}))
	}

	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%] my-[10rem] rounded-[20px] relative">
			<LittleHeading headingText="portfolio" Icon={BiMessageAltDetail} />
			<SubHeading mainText="Trusted by my" spanText="most valued individuals" />

			{status === "succeeded" ? (
				<div className="relative h-[20%] overflow-hidden">
					<div
						className={`transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}
					>
						{data.length > 0 && (
							<TestimonialCard
								key={data[currentIndex].id}
								reviewerText={data[currentIndex].reviewerText}
								reviewerImage={data[currentIndex].reviewerImage}
								reviewerName={data[currentIndex].reviewerName}
								reviewerDesignation={data[currentIndex].reviewerDesignation}
								reviewerCompanyName={data[currentIndex].reviewerCompanyName}
								reviewerCompanyLink={data[currentIndex].reviewerCompanyLink}
							/>
						)}
					</div>
				</div>
			) : (
				<p>{error ? `Error: ${error}` : "Loading testimonials..."}</p>
			)}

			{/* Navigation icons */}
			<div className="flex justify-start items-start gap-4 mt-[2%]">
				{/* Previous icon */}
				<div
					onClick={() => handlePrevious()}
					onMouseEnter={() => changeIconColor("#28e98c", "svg01")}
					onMouseLeave={() => changeIconColor("#565656", "svg01")}
					className="border-2 border-primaryBorder px-4 py-4 rounded-[100%] hover:border-secondary transition-all duration-300 cursor-pointer"
				>
					<svg
						width="20px"
						height="20px"
						viewBox="-4.5 0 20 20"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g
								className="transition-all duration-300"
								id="Dribbble-Light-Preview"
								transform="translate(-305.000000, -6679.000000)"
								fill={`${id === "svg01" ? fillColor : "#565656"}`}
							>
								<g id="icons" transform="translate(56.000000, 160.000000)">
									<path
										d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
										id="arrow_left-[#336]"
										transform="scale(-1, 1) translate(-510, 0)"
									></path>
								</g>
							</g>
						</g>
					</svg>
				</div>

				<div
					onClick={() => handleNext()}
					onMouseEnter={() => changeIconColor("#28e98c", "svg02")}
					onMouseLeave={() => changeIconColor("#565656", "svg02")}
					className="border-2 border-primaryBorder px-4 py-4 rounded-[100%] cursor-pointer hover:border-secondary transition-all duration-300"
				>
					<svg
						width="20px"
						height="20px"
						viewBox="-4.5 0 20 20"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g
								className="transition-all duration-300"
								id="Dribbble-Light-Preview"
								transform="translate(-305.000000, -6679.000000)"
								fill={`${id === "svg02" ? fillColor : "#565656"}`}
							>
								<g id="icons" transform="translate(56.000000, 160.000000)">
									<path
										d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
										id="arrow_right-[#336]"
									></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default TestimonialSection
