import PropTypes from "prop-types"
const {string, element} = PropTypes

import {
	FaTwitter,
	FaFacebookF,
	FaWhatsapp,
	FaTelegram,
	FaGithub,
	FaLinkedinIn,
} from "react-icons/fa"
import TestimonialSocialIcon from "./TestimonialSocialIcon"

const TestimonialCard = (props) => {
	const {
		reviewerImage,
		reviewerText,
		reviewerName,
		reviewerDesignation,
		reviewerFacebook,
		reviewerWhatsapp,
		reviewerLinkedin,
		reviewerMail,
		reviewerCompanyName,
		reviewerCompanyLink,
	} = props
	return (
		<div className="space-y-[24px] border-2 border-primaryBorder p-[50px] rounded-[20px]">
			<div className="flex items-center gap-[2rem]">
				<img src={reviewerImage} className="rounded-[100%]" width={70} height={70} alt="" />
				<div className="space-y-2">
					<p className="font-Poppins text-primaryFont text-xl">{reviewerName}</p>
					<p className="font-Poppins text-primaryFont text-2xl">{reviewerDesignation}</p>
				</div>
			</div>

			<p className="font-Inter text-primaryFont/70 text-2xl hover:text-secondary">{reviewerText}</p>
			<p>{reviewerFacebook}</p>
			<p>{reviewerWhatsapp}</p>
			<p>{reviewerLinkedin}</p>
			<p>{reviewerMail}</p>
			<a href={reviewerCompanyLink} target="_blank">
				<p className="font-OpenSans italic text-secondary tracking-widest">
					I am working at {reviewerCompanyName}
				</p>
			</a>

			{/* icon block */}
			<div className="flex gap-2">
				<TestimonialSocialIcon Icon={FaTwitter} />
				<TestimonialSocialIcon Icon={FaFacebookF} />
				<TestimonialSocialIcon Icon={FaWhatsapp} />
				<TestimonialSocialIcon Icon={FaTelegram} />
				<TestimonialSocialIcon Icon={FaGithub} />
				<TestimonialSocialIcon Icon={FaLinkedinIn} />
			</div>
		</div>
	)
}

export default TestimonialCard

TestimonialCard.propTypes = {
	reviewerText: string.isRequired,
	reviewerImage: element.isRequired,
	reviewerName: string.isRequired,
	reviewerDesignation: string.isRequired,
	reviewerFacebook: string.isRequired,
	reviewerWhatsapp: string.isRequired,
	reviewerLinkedin: string.isRequired,
	reviewerCompany: string.isRequired,
	reviewerMail: string.isRequired,
	reviewerCompanyName: string.isRequired,
	reviewerCompanyLink: string.isRequired,
}
