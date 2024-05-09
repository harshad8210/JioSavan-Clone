import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MasterLayout = () => {
  return (
    <>
      <section>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </section>
    </>
  );
};
export default MasterLayout;
