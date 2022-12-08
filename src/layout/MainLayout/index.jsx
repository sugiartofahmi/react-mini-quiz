const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-200">
      {children}
    </main>
  );
};

export default MainLayout;
