import StepItem from "./StepItem"

const StepperComponent = () => {
	return (
		<section className="relative pl-8">
			<div className="absolute left-4 top-0 bottom-0 w-px bg-secondary"></div>
			<StepItem
				topText="2024 - present"
				middleText="Frontend Developer"
				lastText="Digistack Limited"
			/>
			<StepItem
				topText="2024-2023"
				middleText="Web Development course"
				lastText="From Programming hero"
			/>
		</section>
	)
}

export default StepperComponent
