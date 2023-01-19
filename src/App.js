import logo from './logo.svg';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Card from './components/Card';
function App() {
  return (
    <>
      <NavbarComp/>
      <Card title="Shri Ekanath Shinde" desc="Chief Minister of Maharashtra" button="Learn More" imgUrl="https://mamfdc.maharashtra.gov.in/sites/default/files/other_images/Eknath_Shinde.jpg"/>
      <Card title="Shri Devendra Fadnavis" desc="Deputy Chief Minister of Maharashtra" button="Learn More" imgUrl="https://static.indiatvnews.com/ins-web/images/cm-pic-big-1542251665.jpg"/>
      <Card title="Shri Sudhir Mungantiwar" desc="Ministry of Forests Department" button="Learn More" imgUrl="https://www.electwise.in/media/images/people/photo/Mungantiwar_Sudhir_Sachchidanand.jpg"/>
      <Card title="Shri Chandrakant Patil" desc="Ministry of Higher Education and Technical Education" button="Learn More" imgUrl="https://m.economictimes.com/thumb/msid-70244881,width-1200,height-900,resizemode-4,imgsize-170123/chandrakant-patil-agencies.jpg"/>
    </>
  );
}

export default App;
