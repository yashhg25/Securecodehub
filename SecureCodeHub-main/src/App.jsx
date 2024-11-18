import Contactus from "./components/Contactus";
import Cources from "./components/Cources";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Join_now from "./components/Join_now";
import Testi from "./components/Testi";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <div>
        {/* Assign each section an id for smooth scrolling */}
        <section id="home">
          <Home />
        </section>
        <section id="trial">
          <Trial />
        </section>
        <section id="courses">
          <Cources />
        </section>
        <section id="testimonials">
          <Testi />
        </section>
        <section id="contactus">
          <Contactus />
        </section>
        <section id="join">
          <Join_now />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
