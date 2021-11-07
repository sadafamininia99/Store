import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Sidebar />
    {children}
  </>
)

export default Layout
