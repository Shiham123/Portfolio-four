import InputField from "./InputField"

const FormBlock = () => {
	const handleSubmit = (event) => event.preventDefault()

	return (
		<form onSubmit={handleSubmit}>
			<h6 className="text-2xl text-secondary p-4 border-[1px] rounded-[24px] border-primaryBorder hover:bg-secondary hover:text-primary inline-block transition-all duration-300">
				<span className="cursor-pointer italic">
					<a href="mailto:shihamibneyousuf@gmail.com">shihamibneyousuf@gmail.com</a>
				</span>
			</h6>

			<div className="pt-10">
				<div className="flex justify-start items-start gap-4">
					<InputField labelText="Full Name" placeholderText="Your Full Name" nameType="name" />
					<InputField labelText="Email" placeholderText="Your Email Address" nameType="email" />
				</div>
				<button type="submit">Submit Data</button>
			</div>
		</form>
	)
}

export default FormBlock
