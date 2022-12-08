import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
const Home = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <div className="flex justify-center items-center w-full h-full text-[#F2E7D5]">
          <Card />
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
