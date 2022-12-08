import CardLayout from "../../layout/CardLayout";
const Card = () => {
  return (
    <CardLayout>
      <div className="w-3/5">
        <h5 className="text-2xl leading-tight font-medium mb-2">
          Question <span className=" text-base">1/4</span>
        </h5>
        <p className="text-lg mb-4">Siapa Presiden Pertama Indonesia ?</p>
      </div>
      <div className="w-2/5 flex flex-col gap-y-5 justify-center ">
        <button
          type="button"
          class="w-[100%]  h-8 inline-block px-6 py-2 border-2 border-blue-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Success
        </button>
        <button
          type="button"
          class="w-[100%] h-8 inline-block px-6 py-2 border-2 border-blue-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Success
        </button>
        <button
          type="button"
          class="w-[100%] h-8 inline-block px-6 py-2 border-2 border-blue-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Success
        </button>
        <button
          type="button"
          class="w-[100%] h-8 inline-block px-6 py-2 border-2 border-blue-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Success
        </button>
      </div>
    </CardLayout>
  );
};

export default Card;
