import LeftSection from "./components/Left/LeftSection"
import MiddleSection from "./components/Middle/MiddleSection"
import LeftSectionResponsive from "./components/ResponsiveSection/LeftSectionResponsive"
import RightSection from "./components/Right/RightSection"

const App = () => {
	return (
		<div className="grid grid-cols-12 2xl:grid 2xl:grid-cols-12 xl:grid xl:grid-cols-12 lg:flex lg:flex-col lg:justify-center lg:items-center py-[5rem]">
			<LeftSection />
			<LeftSectionResponsive />
			<MiddleSection />
			<RightSection />
		</div>
	)
}

export default App
