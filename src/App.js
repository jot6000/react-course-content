import logo from './logo.svg';
import './App.css';

import ProfileImage from './images/component1/profileImage.png'
import Hackerman from './images/component1/hackerman.jpg'


import SubBanner from './tutorialComponents/YoutubeSubBanner'

function App() {
  return (
    <div>
      <header>
        <img src={logo} className='react-logo'/>
        <h1>React Components</h1>
        <img src={logo} className='react-logo'/>
      </header>
      <body>
          <h2>Component 1</h2>
          <h3>YouTube Subscribe Component</h3>
          <div className='task-row'>
            <div>
              <SubBanner image={ProfileImage} name='Default User'/>
              <SubBanner image={Hackerman} name='Hackerman'/>     
            </div>      
            <ul>
              <div>Build a component that:​</div>
              <li>Accepts a 'name' prop</li>​
              <li>Has a 'subscribed' state Boolean</li>​
              <li>A button that toggles style when pressed:</li>
                <ul>​
                  <li>Red and says 'subscribe'​</li>
                  <li>Grey and says 'subscribed'</li>​
                </ul>
              <li>Bonus task – Allow it to accept an image 'prop'​</li>
            </ul>
          </div>
      </body>
    </div>
  );
}

export default App;
