import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 md:px-8 xl:px-0 md:text-xl min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
