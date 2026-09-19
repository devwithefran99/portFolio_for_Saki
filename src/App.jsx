
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Projects from './components/Projects';

const App = () => {
  return (
  <div className="min-h-screen bg-bg-dark">
  <Nav />
 <Hero />

 <Skills />

 <Projects />
 <About />

<Education />
 <Contact />

 <Footer />
</div>
  );
};

export default App;