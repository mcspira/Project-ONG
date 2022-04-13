import "./Home.css"
import Header from "./components/header/Header"
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function Home() {
 

  return (
    <div className="container">
      <Header className="header"/>
      <Content className="content"/>
      <Footer className="footer"/>
    </div> 
  );
}

export default Home;
