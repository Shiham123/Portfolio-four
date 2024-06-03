import Button from "../../Shared/Button"
import PortfolioImg from "../../assets/portfolioImg.png"
import LeftHeader from "./LeftHeader"
import LeftSideIcons from "./LeftSideIcons"

const LeftSection = () => {
	return (
		<section className="col-span-3">
			<div className="border-[1px] border-primaryBorder rounded-lg flex flex-col">
				{/* before img section */}
				<div className="flex justify-between px-6 py-12">
					<LeftHeader headingText="Designer" />
					<LeftHeader headingText="Programmer" />
					<LeftHeader headingText="Developer" />
				</div>
				{/* img section */}
				<div className="w-3/4 text-center mx-auto p-4 group relative">
					<img src={PortfolioImg} className="w-full h-full " alt="My Image" />
					<div className="group-hover:bg-secondary group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out absolute w-full h-full top-0 left-0 rounded-lg flex justify-center items-center">
						<p className="hidden group-hover:block group-hover:transition-all group-hover:duration-400 group-hover:ease-in-out font-Inter font-medium text-lg text-primaryBorder">
							Feel Free to Contact me
						</p>
					</div>
				</div>
				{/* Contact section */}
				<div className="flex flex-col justify-center items-center my-10 font-Inter text-primaryFont">
					<h1 className="font-bold text-3xl leading-5 tracking-wide py-4 hover:text-secondary transition-all duration-300 ease-out">
						Shiham Ibne Yousuf
					</h1>
					<h1 className="font-medium text-xl leading-5 tracking-wide py-4 hover:text-secondary transition-all duration-300 ease-out">
						A MERN Stack Expert
					</h1>
				</div>

				{/* icons section */}
				<LeftSideIcons />
				<Button text="Hire Me" />
			</div>
		</section>
	)
}

export default LeftSection
