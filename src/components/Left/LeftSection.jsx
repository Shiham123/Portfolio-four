import PortfolioImg from "../../assets/portfolioImg.png"

const LeftSection = () => {
	return (
		<section className="col-span-3">
			<div className="border-[1px] border-primaryBorder rounded-lg flex flex-col">
				{/* before img section */}
				<div className="flex justify-between text-primaryFont font-Inter px-4 py-8">
					<h1 className="flex flex-col items-start font-semibold text-5xl">Shiham</h1>
					<p className="flex flex-col items-end font-medium leading-[24px] text-[14px]">
						<span>Designer & </span>
						<span>MERN Stack Developer</span>
					</p>
				</div>
				{/* img section */}
				<div className="w-3/4 text-center mx-auto">
					<img src={PortfolioImg} className="w-full h-full" alt="My Image" />
				</div>
				{/* Contact section */}
				<div className="flex flex-col justify-center items-center my-10 font-Inter text-primaryFont">
					<h1>Shiham Ibne Yousuf</h1>
					<h1>Sherpur, Mymensing, Bangladesh</h1>
					<h2>shiham36651786@gmail.com</h2>
					<h2>shiham36651786@outlook.com</h2>
					<h1>React - Next - Nodejs</h1>
				</div>
			</div>
		</section>
	)
}

export default LeftSection
