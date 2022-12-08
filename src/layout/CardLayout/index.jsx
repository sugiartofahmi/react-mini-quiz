const CardLayout = ({ children }) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-row gap-x-5 p-6 rounded-lg shadow-lg  bg-[#6D9886] text-[#F2E7D5] max-w-lg">
          {children}
        </div>
      </div>
    </>
  );
};

export default CardLayout;
