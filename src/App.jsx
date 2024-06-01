import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const styles = {
  navigation: {
    backgroundColor: 'lightblue',
    padding: 15,
  },
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to my page! I am an undergrad at UC Berkeley studying Computer Science and Philosophy. On this website you will find information about me and what I have done.</p>
      <p>This website is a WIP as I learn web development.</p>
    </div>
  )
}

const padding = {
  padding: 5
}

const App = () => {
  return (
    <div className = "container">
    <Router>
      <h2>Kevin Tseng</h2>
      <nav style={styles.navigation}>
      <Link style={padding} to="/">home</Link>
      <Link style={padding} to="/projects">projects</Link>
      <Link style={padding} to="/about">about</Link>
      <Link style={padding} to="/contact">contact</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App