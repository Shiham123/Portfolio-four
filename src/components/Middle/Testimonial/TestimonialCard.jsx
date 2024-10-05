import PropTypes from "prop-types"
const {string, element} = PropTypes

import {FaTwitter, FaWhatsapp, FaTelegram, FaGithub, FaLinkedin} from "react-icons/fa"
import {IoMailUnreadOutline} from "react-icons/io5"

import PerIcon from "../../../Shared/PerIcon"

const TestimonialCard = (props) => {
	const {
		reviewerImage,
		reviewerText,
		reviewerName,
		reviewerDesignation,
		reviewerCompanyName,
		reviewerCompanyLink,
	} = props
	return (
		<div className="space-y-[50px] border-2 border-primaryBorder p-[50px] md:p-[30px] rounded-[20px] group">
			{/* reviewer info here */}
			<div className="flex items-center gap-[2rem]">
				<img src={reviewerImage} className="rounded-[100%]" width={70} height={70} alt="" />
				<div className="space-y-2">
					<p className="font-Poppins text-primaryFont text-xl hover:text-secondary">
						{reviewerName}
					</p>
					<p className="font-Poppins text-primaryFont text-2xl hover:text-secondary">
						{reviewerDesignation}
					</p>
				</div>
			</div>

			{/* reviewer text here */}
			<div className="flex flex-col gap-[16px]">
				<p className="font-Inter text-primaryFont/70 text-2xl hover:text-secondary">
					&quot;{reviewerText}&quot;
				</p>

				{/* reviewer job info here */}
				<a href={reviewerCompanyLink} target="_blank" className="pt-[25px]">
					<p className="font-OpenSans italic text-primaryFont group-hover:text-secondary tracking-widest">
						I am working at {reviewerCompanyName}
					</p>
				</a>
			</div>

			{/* icon block */}
			<div className="flex gap-3">
				<PerIcon Icon={FaTwitter} />
				<PerIcon Icon={FaWhatsapp} />
				<PerIcon Icon={FaTelegram} />
				<PerIcon Icon={FaGithub} />
				<PerIcon Icon={FaLinkedin} />
				<PerIcon Icon={IoMailUnreadOutline} />
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
