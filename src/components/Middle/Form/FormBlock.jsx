import { useState } from "react";

// redux function

const FormBlock = () => {
  // state
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => event.preventDefault();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h6 className="text-2xl text-secondary p-4 border-[1px] rounded-[24px] border-primaryBorder hover:bg-secondary hover:text-primary inline-block transition-all duration-300">
        <span className="cursor-pointer italic">
          <a href="mailto:shihamibneyousuf@gmail.com">
            shihamibneyousuf@gmail.com
          </a>
        </span>
      </h6>

      <div>
        <label htmlFor="name" className="text-primaryFont font-Poppins">
          Name:
        </label>
        <input
          className="bg-transparent"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <button type="submit">Submit Data</button>
      </div>
    </form>
  );
};

export default FormBlock;
