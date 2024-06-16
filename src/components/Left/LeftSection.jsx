import Button from "../../Shared/Button"
import PortfolioImg from "../../assets/portfolioImg.png"
import LeftHeader from "./LeftHeader"
import LeftSideIcons from "./LeftSideIcons"

const LeftSection = () => {
	return (
		<section className="2xl:col-span-3 2xl:fixed 2xl:top-[8%] 2xl:left-[0%] 2xl:w-1/4 px-[30px] xl:col-span-3 xl:fixed xl:top-[8%] xl:left-[0%] xl:w-1/4">
			<div className="border-[1px] border-primaryBorder rounded-custom flex flex-col">
				{/* before img section */}
				<div className="flex justify-between px-6 py-12">
					<LeftHeader headingText="Programmer" />
					<LeftHeader headingText="Developer" />
				</div>
				{/* img section */}
				<a
					href="https://www.linkedin.com/in/shiham36651786/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="w-4/6 text-center mx-auto bg-primary border-[1px] hover:bg-secondary border-primaryBorder transition-all duration-300 ease-in-out rounded-[20px] group relative">
						<img src={PortfolioImg} className="w-full h-full " alt="My Image" />
					</div>
				</a>
				{/* Contact section */}
				<div className="flex flex-col justify-center items-center my-10 font-Inter text-primaryFont">
					<a href="https://wa.me/+8801327239397" target="_blank" rel="noopener noreferrer">
						<h1 className="font-bold text-2xl leading-5 tracking-wide py-4 hover:text-secondary transition-all duration-300 ease-out uppercase">
							Shiham Ibne Yousuf
						</h1>
					</a>
					<a
						href="https://discordapp.com/users/1022503770321584178"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h1 className="font-medium italic text-lg leading-5 tracking-wide hover:text-secondary transition-all duration-300 ease-out">
							MERN Stack Expert
						</h1>
					</a>
				</div>

				{/* icons section */}
				<LeftSideIcons />
				<Button text="Hire Me" />
			</div>
		</section>
	)
}

export default LeftSection
