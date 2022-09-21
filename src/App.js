
//import CardComponent from './components/CardComponent';
import Navigation from './components/navigation/Navigation.js';
import Introduction from './components/introduction/Introduction.js';
import Footer from './components/Footer/Footer.js';
import Card from './components/Card/Card.js';
import rcn from './img/RCNPrototype.jpg';
import wfss from './img/wfssWebsite2.jpg';
import mylife from './img/mylife.jpg';
import Rcnpage from './components/RCN/RCN.js';
import Mylifepage from './components/MyLife/Mylife.js';
import Wfsspage from './components/WFSS/Wfss';
import email from './img/email.jpg';
import github from './img/github.jpg';
import linkedin from './img/linkedin2.jpg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  // const navigate = useNavigate();

  // const navigateToResults = () => {
  //   // 👇️ navigate to /results
  //   navigate('/results');
  // };

  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate('/');
  // };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/rcnproject" element={<Rcnproject />} />
        <Route path="/mylifeproject" element={<Mylifeproject />} />
        <Route path="/wfssproject" element={<Wfssproject />} />
      </Routes>
    </div>

  );
}

// <Link to = "path"> </Link>

function Intro(props) {
  var myLifeDescript = "Analyzed and redesigned the RIT housing and dining website, in order to improve navigation and user flow in the student application process, so users can complete the applications easier and quicker. "
  var rcnDescript = "Created a mobile app prototype utilizing Figma for the Rochester Childfirst Netowrk (RCN), which increased the overall efficiency of student pick-up and drop-off, as a part of a competition. The project was selected by the representatives from RCN to win the competition."
  var wfssDescript = "Created a prototype in Figma in order to improve navigation of the site, so that users could more easily find the relevant section to achieve their end goals. Conducted user studies and analyzed results in order to improve the proposed prototype."
  return (
    <div className="App">

      <Navigation />

      <Introduction />

      <div class="my-card">
        <img className="intro-img" src={rcn} alt="RCN Prototype" />
        <Link to="/rcnproject">
          <div class="inside-card">
            <Card title="RCN Design" description={rcnDescript} tags={['Figma', 'Mobile App', 'Prototyping']} />
          </div>
        </Link>
      </div>



      <div class="my-card">
        <img className="intro-img" src={mylife} alt="mylife" />
        <Link to="/mylifeproject">
          <div class="inside-card">
            <Card title="RIT myLife Redesign" description={myLifeDescript} tags={['Figma', 'Website', 'Prototyping', 'Usability Testing']} />
          </div>
        </Link>
      </div>

      <div class="my-card">
        <img className="intro-img" src={wfss} alt="mylife" />
        <Link to="/wfssproject">
          <div class="inside-card">
            <Card title="WFSS Redesign" description={wfssDescript} tags={['Figma', 'Website', 'User Testing']} />
          </div>
        </Link>
      </div>

      <div class="contact flex gap-5">
        <a href="https://www.linkedin.com/in/reneebogdany/"><img src={linkedin} alt="linkedin logo" width="50" /></a>
        <a href="https://github.com/rkb4472"><img src={github} alt="github logo" width="50" /></a>
        <a href="mailto:rkb4472@g.rit.edu"><img src={email} alt="github logo" width="50" /></a>
      </div>

      <Footer />

    </div>
  );
}

function Mylifeproject(props) {
  return (
    <div className="App">
      <Mylifepage />
    </div>
  );
}

function Rcnproject(props) {
  return (
    <div className="App">
      <Rcnpage />
    </div>

  );
}

function Wfssproject(props) {
  return (
    <div className="App">
      <Wfsspage />
    </div>

  );
}

// function Resume(props) {
//   return(

//   );
// }

export default App;
