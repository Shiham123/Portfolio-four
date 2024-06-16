import LeftSection from "./components/Left/LeftSection"
import Sidebar from "./components/Left/Sidebar"
import MiddleSection from "./components/Middle/MiddleSection"
import RightSection from "./components/Right/RightSection"

const App = () => {
	return (
		<div className="grid grid-cols-12 2xl:grid 2xl:grid-cols-12 xl:grid xl:grid-cols-12 lg:flex lg:flex-col lg:justify-center lg:items-center lg:container lg:mx-auto py-[5rem] lg:relative">
			<LeftSection />
			<MiddleSection />
			<RightSection />

			<Sidebar />
		</div>
	)
}

export default App
