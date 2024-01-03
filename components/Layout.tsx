import Navbar from "./navbar"
import Footer from "./footer"
import CrispProvider from "./crisp-provider";

const Layout = ({children}: any) => {
    return (
<div className="content">
  <CrispProvider/>
  <Navbar/>
  {children}
  <Footer/>
</div>
     );
}
 
export default Layout;