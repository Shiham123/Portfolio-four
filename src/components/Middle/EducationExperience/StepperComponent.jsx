import StepItem from "./StepItem"

const StepperComponent = () => {
	return (
		<section className="relative pl-8">
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
