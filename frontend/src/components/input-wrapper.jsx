const InputBox = ({
  LabelName = "",
  Placeholder = "",
  className = "",
  Type = "text",
  Name,
  Value,
  onChange,
  Required = true,
  Disabled = false,
  Ref,
  OnInput,
  max,
  labelClassName = "",
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="py-4 w-full">
        <label
          htmlFor={Name}
          className={`block text-sm font-medium mb-2 ml-4 ${labelClassName}`}
        >
          {LabelName}
        </label>
        <input
          id={Name}
          name={Name}
          type={Type}
          value={Value}
          onChange={onChange}
          onInput={OnInput}
          placeholder={Placeholder}
          required={Required}
          ref={Ref}
          className={`w-full px-4 py-2 text-white bg-transparent border-b border-gray-300 focus:ring-neutral-500 focus:neutral-red-500 outline-none transition duration-200 ease-in-out hover:shadow-md ${className} h-full`}
          disabled={Disabled}
          max={max}
        />
      </div>
    </div>
  );
};

export default InputBox;
