import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllCategories } from "../../utils/redux/slices/categoriesSlice";
import { fetchAllProducts } from "../../utils/redux/slices/productsSlice";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories);
    dispatch(fetchAllProducts);
  }, [dispatch]);

  return (
    <div className="max-w-[1360px] mx-auto px-4 md:px-8 xl:px-0 md:text-xl min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
