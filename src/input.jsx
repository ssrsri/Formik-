import './input.css'
const Input = ({ label, name, type = "text", ...rest }) => {
  return (
    <div className="relative z-0 w-full mb-8">
      <input
        {...rest}
        id={name}
        type={type}
        placeholder=" "
        className="block w-full p-5 px-0 pt-3 pb-2 mt-0 bg-transparent bg-white border-2 border-gray-200 input_class rounded-2xl ml-6px focus:outline-none focus:ring-0 focus:border-black"
      />
      <label
        htmlFor={name}
        className="absolute text-gray-500 duration-300 label_class top-3 -z-1 origin-0"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
