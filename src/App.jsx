import LeftSection from "./components/Left/LeftSection"
import MiddleSection from "./components/Middle/MiddleSection"
import RightSection from "./components/Right/RightSection"

const App = () => {
	return (
		<div className="grid grid-cols-12 xl:grid xl:grid-cols-12 lg:flex lg:flex-col lg:justify-center lg:items-center md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center xxs:flex xxs:flex-col xxs:justify-center xxs:items-center py-[5rem]">
			<LeftSection />
			<MiddleSection />
			<RightSection />
		</div>
	)
}

export default App
