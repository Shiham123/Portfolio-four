import PropTypes from "prop-types"

const ServiceCard = ({headingText, paraText, hyperText, Icon}) => {
	return (
		<div className="grid grid-cols-8 border-[1px] border-primaryBorder w-10/12 h-fit rounded-custom p-8 hover:border-secondary transition-all duration-300 ease-in group">
			{/* div one */}
			<div className="col-span-6">
				<h3 className="font-Inter text-primaryFont font-light tracking-wide capitalize text-2xl leading-10">
					{headingText}
				</h3>
				<p className="font-Inter text-paraColor font-light tracking-wide first-letter:capitalize leading-10 pb-6">
					{paraText}
				</p>
				<a
					className="font-Inter text-primaryFont font-light tracking-wide first-letter:capitalize group-hover:underline"
					href="https://github.com/Shiham123"
					target="_blank"
					rel="noopener noreferrer"
				>
					{hyperText}
				</a>
			</div>
			{/* icon div */}
			<div className="col-span-2">
				<div className="grid justify-items-center">
					<Icon className="text-secondary" size={30} />
				</div>
			</div>
		</div>
	)
}

export default ServiceCard

ServiceCard.propTypes = {
	headingText: PropTypes.string.isRequired,
	paraText: PropTypes.string.isRequired,
	hyperText: PropTypes.string.isRequired,
	Icon: PropTypes.element.isRequired,
}
