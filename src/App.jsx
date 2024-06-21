import {useSelector} from "react-redux"

import LeftSection from "./components/Left/LeftSection"
import Sidebar from "./components/Left/Sidebar"
import MiddleSection from "./components/Middle/MiddleSection"
import RightSection from "./components/Right/RightSection"

const App = () => {
	const {isSidebarOpen} = useSelector((state) => state.theme)
	return (
		<div className="grid grid-cols-12 2xl:grid 2xl:grid-cols-12 xl:grid xl:grid-cols-12 lg:flex lg:flex-col lg:justify-center lg:items-center lg:container lg:mx-auto lg:py-[5rem] lg:relative md:flex md:flex-col md:justify-center md:items-center md:container md:mx-auto md:relative md:py-[3rem] sm:flex sm:flex-col sm:justify-center sm:items-center sm:container sm:mx-auto sm:relative sm:py-[3rem]">
			<LeftSection />
			<MiddleSection />
			<RightSection />

			{isSidebarOpen && <Sidebar />}
		</div>
	)
}

export default App
