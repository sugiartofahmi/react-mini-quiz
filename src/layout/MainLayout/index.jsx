const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-screen flex flex-col items-center bg-[#393E46]">
      {children}
    </main>
  );
};

export default MainLayout;
