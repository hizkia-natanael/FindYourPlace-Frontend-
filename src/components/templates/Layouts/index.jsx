import { Header, Footer } from "../../organisms";
import { Outlet } from "react-router-dom";
import { WhatsAppButton } from "../../atoms";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};
export default Layout;
