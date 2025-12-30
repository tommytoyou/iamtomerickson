import { Navbar, Footer } from "./components";
import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Publications,
  Contact,
} from "./sections";

function App() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
