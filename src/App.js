import Banner from "./Banner";
import DemoComponent from "./DemoComponent";
import Footer from "./Footer";
import Header from "./Header";
import Join from "./Join";
import Press from "./Press";
import './styles.css'

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <DemoComponent />
      <Press/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
