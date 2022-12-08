const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-[100%] h-8 inline-block px-6  border-2 border-blue-800  text-sm text-center  uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {text}
    </button>
  );
};

export default Button;
