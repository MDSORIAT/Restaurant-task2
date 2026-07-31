import Footer from "./component/Footer";
import BamiyanMenu from "./component/menu";
import Navbar from "./Navber";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5">
        <div className="mt-5 text-center text-2xl font-bold font-serif">
          <h1>Bamiya resturent menu</h1>
        </div>

        <div>
          <BamiyanMenu />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
