import About from "./About"
import Experience from "./EducationExperience/Experience"
import Introduction from "./Introduction"
import ServicesSection from "./ServicesSection/ServicesSection"

const MiddleSection = () => {
	return (
		<section className="2xl:col-span-8 2xl:col-start-4 2xl:col-end-12 2xl:mt-[6%] xl:col-span-8 xl:col-start-4 xl:col-end-12 xl:mt-[8%]">
			<Introduction />
			<About />
			<Experience />
			<ServicesSection />
		</section>
	)
}

export default MiddleSection
