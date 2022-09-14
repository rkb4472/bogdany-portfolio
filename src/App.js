
//import CardComponent from './components/CardComponent';
import Navigation from './components/navigation/Navigation.js';
import Introduction from './components/introduction/Introduction.js';
import Card from './components/Card/Card.js';
import rcn from './img/RCNPrototype.jpg';
import wfss from './img/wfssWebsite2.jpg';
import mylife from './img/mylife.jpg';
import './App.css';


function App() {
  var myLifeDescript = "For a class project, I worked in a group of three people in order to analyze and redesign the RIT housing and dining website, so that students could have an better experience applying for housing and dining plans, as well as make improvements to other areas "
  var rcnDescript = "My group, which included three other members, and I created a prototype of a mobile app using Figma in a week for Rochester Childfirst Network (RCN) that improved the process of student pick-up and drop-off for both parents and workers at RCN as a part of the."
  var wfssDescript = "I participated in a UX Studio Design competition at RIT, where we were challenged to redesign a charity's website. The organization, Water for South Sudan (WFSS), presented their current website, as well as the problems with the design of their current website. "

  return (
    <div className="App">
      {/* <header className="App-header">
        <p class="text-3xl font-bold underline">Renee Bogdany Portfolio</p> 
      </header> */}
      <Navigation />

      <Introduction />
      <div class="my-card">
        <img src={rcn} alt="RCN Prototype" />
        <div class="inside-card">
          <Card title="Mobile App Prototype Challenge" description={rcnDescript} tags={['Figma', 'Prototyping', 'User Testing']} />
        </div>
      </div>

      <div class="my-card">
        <img src={mylife} alt="mylife" />
        <div class="inside-card">
          <Card title="RIT myLife Redesign" description={myLifeDescript} tags={['Figma', 'Prototyping', 'User Testing']} />
        </div>
      </div>

      <div class="my-card">
        <img src={wfss} alt="mylife" />
        <div class="inside-card">
          <Card title="Website Prototype Challenge" description={wfssDescript} tags={['Figma', 'Prototyping', 'User Testing']} />
        </div>
      </div>






      {/* <CardComponent />
      <div className="h-screen bg-darkCyan relative">
        <div className="h-full w-full absolute overflow-hidden z-0">
          <img
            alt="Background Circle"
            src="images/bg-pattern-top.svg"
            className="absolute -top-1/4 md:-top-30rem -left-44 md:-left-56 w-60rem"
          />
          <img
            alt="Background Circle"
            src="images/bg-pattern-bottom.svg"
            className="absolute -bottom-32 md:-bottom-34rem -right-56 w-60rem"
          />
        </div>
        <div className="relative z-10 w-full h-full p-7 md:p-0 flex justify-center items-center">
          <div className="flex flex-col items-center w-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative w-full">
              <div className="pb-40%" />
              <img
                alt="Card Header"
                src="images/bg-pattern-card.svg"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center -mt-14">
              <img
                alt="Victor"
                src="images/image-victor.jpg"
                className="relative z-20 rounded-full border-6 border-white"
              />
              <div className="flex mt-5">
                <h3 className="font-body font-bold text-desaturatedBlue text-lg">
                  Victor Crest
                </h3>
                <h4 className="font-body text-grayishBlue text-lg ml-3">26</h4>
              </div>
              <h5 className="font-body text-grayishBlue mt-2">London</h5>
            </div>
            <hr className="w-full mt-6" />
            <div className="flex justify-around w-full py-6 px-6">
              <div className="flex w-20 flex-col items-center">
                <h5 className="font-body font-bold text-desaturatedBlue text-lg">80K</h5>
                <p className="font-body text-darkGray text-xs tracking-widest mt-1">
                  Followers
                </p>
              </div>
              <div className="flex w-20 flex-col items-center">
                <h5 className="font-body font-bold text-desaturatedBlue text-lg">803K</h5>
                <p className="font-body text-darkGray text-xs tracking-widest mt-1">
                  Likes
                </p>
              </div>
              <div className="flex w-20 flex-col items-center">
                <h5 className="font-body font-bold text-desaturatedBlue text-lg">1.4K</h5>
                <p className="font-body text-darkGray text-xs tracking-widest mt-1">
                  Photos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>


  );
}

export default App;
