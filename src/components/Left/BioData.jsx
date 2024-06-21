import PortfolioImg from "../../assets/portfolioImg.png"

const BioData = () => {
	return (
		<>
			{/* img section */}
			<a
				href="https://www.linkedin.com/in/shiham36651786/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="2xl:w-4/6 xl:w-4/6 lg:w-4/12 md:w-8/12 sm:w-8/12 text-center mx-auto bg-primary border-[1px] hover:bg-secondary border-primaryBorder transition-all duration-300 ease-in-out rounded-[20px] group relative">
					<img src={PortfolioImg} className="w-full h-full " alt="My Image" />
				</div>
			</a>
			{/* Contact section */}
			<div className="flex flex-col justify-center items-center 2xl:my-10 xl:my-6 lg:my-0 md:my-5 sm:my-5 font-Inter text-primaryFont">
				<a href="https://wa.me/+8801327239397" target="_blank" rel="noopener noreferrer">
					<h1 className="font-bold 2xl:text-2xl xl:text-xl lg:text-2xl lg:pt-12 md:text-2xl sm:text-2xl leading-5 tracking-wide py-4 hover:text-secondary transition-all duration-300 ease-out uppercase">
						Shiham Ibne Yousuf
					</h1>
				</a>
				<a
					href="https://discordapp.com/users/1022503770321584178"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h1 className="font-medium italic 2xl:text-lg xl:text-sm lg:text-lg md:text-lg sm:text-lg sm:pb-4 lg:pb-8 leading-5 tracking-wide hover:text-secondary transition-all duration-300 ease-out">
						MERN Stack Expert
					</h1>
				</a>
			</div>
		</>
	)
}

export default BioData
