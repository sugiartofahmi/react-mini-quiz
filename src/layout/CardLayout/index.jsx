const CardLayout = ({ children }) => {
  return (
    <div className="flex flex-row justify-center h-[40vh] w-[90vh]  p-6 bg-[#6D9886] text-[#F2E7D5]  rounded-lg shadow-md ">
      {children}
    </div>
  );
};

export default CardLayout;
