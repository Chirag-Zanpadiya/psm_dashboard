import "./App.css";
import Footer from "./components/ui/Footer";
import GridStructure from "./components/ui/GridStructure";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      <div className="min-h-screen ">

        <div className="max-w-full   px-2 py-4 md:px-4 lg:px-8 xl:mx-24 h-full">
          <NavBar/>
          <GridStructure/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
