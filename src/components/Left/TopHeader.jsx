import LeftHeader from "./LeftHeader"

const TopHeader = () => {
	return (
		<div className="flex justify-between items-center 2xl:px-6 xl:px-6 2xl:py-12 xl:py-6 lg:px-[10%] lg:py-[5%]">
			<LeftHeader headingText="Programmer" />
			<LeftHeader headingText="Developer" />
		</div>
	)
}

export default TopHeader
 