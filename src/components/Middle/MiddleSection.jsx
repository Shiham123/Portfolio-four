import About from "./About/About"
import Advantage from "./Advantage/Advantage"
import Experience from "./EducationExperience/Experience"
import FormSection from "./Form/FormSection"
import Introduction from "./Introduction/Introduction"
import ProjectSection from "./Project/ProjectSection"
import ServicesSection from "./ServicesSection/ServicesSection"
import TestimonialSection from "./Testimonial/TestimonialSection"

const MiddleSection = () => {
	return (
		<section className="2xl:col-span-8 2xl:col-start-4 2xl:col-end-12 2xl:mt-[6%] xl:col-span-8 xl:col-start-4 xl:col-end-12 xl:mt-[8%]">
			<Introduction />
			<About />
			<Experience />
			<ServicesSection />
			<Advantage />
			<ProjectSection />
			<TestimonialSection />
			<FormSection />
		</section>
	)
}

export default MiddleSection
