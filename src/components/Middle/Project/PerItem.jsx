import PropTypes from "prop-types"

const PerItem = (props) => {
	const {image, overFlowText, altText} = props
	return (
		<div className="relative z-10 group cursor-pointer">
			<img className="rounded-[20px] bg-cover bg-center" src={image} alt={altText} />

			<div className="hidden group-hover:block absolute bottom-7 left-[5%] z-30">
				<h1 className="bg-secondary text-primary px-10 py-2 font-OpenSans capitalize tracking-widest text-2xl rounded-[20px]">
					{overFlowText}
				</h1>
			</div>

			<div className="hidden group-hover:block absolute inset-0 w-[100%] h-[100%] bg-primary/80 z-20"></div>
		</div>
	)
}

export default PerItem

PerItem.propTypes = {
	image: PropTypes.string.isRequired,
	overFlowText: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
}
