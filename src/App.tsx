
import About from './components/about';
import Experience from './components/experience';
import Divider from './components/divider';
import Projects from './components/projects';
import Layout from './layout';
import './styles/App.css';
// import Skills from './components/skills';

function App() {
  return (
    <Layout>
      <main>
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        {/* <Skills /> */}
      </main>
    </Layout>
  );
}

export default App;
