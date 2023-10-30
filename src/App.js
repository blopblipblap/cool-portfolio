import logo from './logo.svg';
import art1 from './images/art1.png';
import art2 from './images/art2.png'
import { Image } from '@chakra-ui/react';
import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import React from 'react';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Nav />
      <Image
        objectFit='contain'
        src={art1}
        alt='wave'
        mt='-6vw'
        width='100%'
        opacity='50%'
        position='absolute'
      />
      <FadeInSection key='profile-main'>
        <Profile />
      </FadeInSection>
      <FadeInSection key='skills-main'>
        <Skills />
      </FadeInSection>
      <Image
        objectFit='contain'
        src={art2}
        alt='wave'
        mt='-6vw'
        width='100%'
        opacity='50%'
        position='absolute'
      />
      <FadeInSection key='projects-main'>
        <Projects />
      </FadeInSection>
      <Footer />
    </div>
  );
}

export default App;
