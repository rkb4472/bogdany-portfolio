
//import CardComponent from './components/CardComponent';
import Navigation from './components/navigation/Navigation.js';
import Introduction from './components/introduction/Introduction.js';
import Card from './components/Card/Card.js';
import rcn from './img/RCNPrototype.jpg';
import wfss from './img/wfssWebsite2.jpg';
import mylife from './img/mylife.jpg';
import Rcnpage from './components/RCN/RCN.js';
import Mylifepage from './components/MyLife/Mylife.js';
import Wfsspage from './components/WFSS/Wfss';
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
        <Route path="/rcnproject" element={<Rcnproject />} />
        <Route path="/mylifeproject" element={<Mylifeproject />} />
        <Route path="/wfssproject" element={<Wfssproject />} />
      </Routes>
    </div>

  );
}

// <Link to = "path"> </Link>

function Intro(props) {
  var myLifeDescript = "For a class project, I worked in a group of three people in order to analyze and redesign the RIT housing and dining website, so that students could have an better experience applying for housing and dining plans, as well as make improvements to other areas "
  var rcnDescript = "My group, which included three other members, and I created a prototype of a mobile app using Figma in a week for Rochester Childfirst Network (RCN) that improved the process of student pick-up and drop-off for both parents and workers at RCN as a part of the."
  var wfssDescript = "I participated in a UX Studio Design competition at RIT, where we were challenged to redesign a charity's website. The organization, Water for South Sudan (WFSS), presented their current website, as well as the problems with the design of their current website. "
  return (
    <div className="App">

      <Navigation />

      <Introduction />

      <div class="my-card">
        <img src={rcn} alt="RCN Prototype" />
        <Link to="/rcnproject">
          <div class="inside-card">
            <Card title="Mobile App Prototype Challenge" description={rcnDescript} tags={['Figma', 'Prototyping', 'User Testing']} />
          </div>
        </Link>
      </div>



      <div class="my-card">
        <img src={mylife} alt="mylife" />
        <Link to="/mylifeproject">
          <div class="inside-card">
            <Card title="RIT myLife Redesign" description={myLifeDescript} tags={['Figma', 'Prototyping', 'User Testing']} />
          </div>
        </Link>
      </div>

      <div class="my-card">
        <img src={wfss} alt="mylife" />
        <Link to="/wfssproject">
          <div class="inside-card">
            <Card title="Website Prototype Challenge" description={wfssDescript} tags={['Figma', 'Prototyping', 'User Testing']} />
          </div>
        </Link>
      </div>
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

export default App;
