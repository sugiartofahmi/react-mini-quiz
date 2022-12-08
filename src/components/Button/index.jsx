const Button = ({ text }) => {
  return (
    <button
      type="button"
      class="w-[100%] h-8 inline-block px-6 py-2 border-2 border-blue-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {text}
    </button>
  );
};

export default Button;
