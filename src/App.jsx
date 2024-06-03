import LeftSection from "./components/Left/LeftSection"
import MiddleSection from "./components/Middle/MiddleSection"
import RightSection from "./components/Right/RightSection"

const App = () => {
	return (
		<div className="grid grid-cols-12 py-[5rem] px-8">
			<LeftSection />
			<MiddleSection />
			<RightSection />
		</div>
	)
}

export default App
