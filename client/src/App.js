import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Education from './components/Education'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [data, setData] = React.useState(null);
//   React.useEffect(() => {
//     fetch('/api')
//     .then((res) => res.json())
//     .then((data) => setData(data.message));
//   }, []);

//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
//   //       <p>{!data ? 'Loading...' : data}</p>
//   //     </header>
//   //   </div>
//   // );
// }

// export default App;
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Testimonials />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
