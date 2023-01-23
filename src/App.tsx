
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Section from "./Components/Section"
import Articles from "./Components/Articles"
import Footer from "./Components/Footer"

function App () {

  return (
    <div className="conteiner overscroll-auto overflow-x-hidden ">
      <Navbar />
      <Header />
      <Section />
      <Articles />
      <Footer />
    </div>
  )
}

export default App