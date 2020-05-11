import React from 'react';
import { useHistory } from 'react-router-dom'
import p6 from './Assets/Images/p6.png';
import back from './Assets/Images/icon/chevron-left.png';
import men from './Assets/Images/Target/men.png';
import u1 from './Assets/Images/Target/U1.png';

function Pepper() {

  const history = useHistory();

  return (
    <article>
        <header style={{backgroundColor: '#FFF1EC'}}>
          <div className="mw9 center pa4 pt5-ns ph7-l">
            <a onClick={() => history.replace('/')} style={{borderRadius:'50vw',}} className="fw7 f7 no-underline black bg-animate hover-bg-black hover-white bg-white inline-flex items-center pa2">
              <img src={back}/>
              <span className="pl1">Back</span>
           </a>
           <div style={{display: 'flex', alignItems: 'flex-end'}} className="pa3-l">
             <div style={{flex: '1', order: '1'}}>
               <h3 style={{color:'#FF5722'}} className="f3 f1-l fw9 mb0-l">Target axis</h3>
               <p style={{color:'#FF5722'}} className="f6 f3-l">Teaching multiple interaction techniques to the visually impaired by understanding the problems with screenreader.</p>
             </div>
             <div style={{flex: '1', order: '2'}}>
               <img style={{float: 'right'}} src={p6}/>
             </div>
           </div>
          </div>
        </header>
      <div className="mw9 center pa4 pt5-ns ph7-l">
        <h3 className="pa3-l">Masters design project/Research/UX Design</h3>
        <div class="cf ph0-l">
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Span</p>
            <p className="lh-title">August 2019 - November 2019 along with academics</p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Objective</p>
            <p className="lh-title">Teaching unfamiliar widgets to the visually impaired on android mobile phones.</p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Overview</p>
            <p className="lh-title">Mobile devices present a lot of widgets in our daily life for achieving respective 
            interactions with the device. Widgets like scrollbar enable interaction of scrolling between views via different 
            interaction techniques. These widgets and interaction techniques are heavily designed for sighted users and then made 
            accessible to the visually impaired.</p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">&nbsp;</p>
            <p className="lh-title">Sighted users easily understand show to use these novel user interfaces because of their visual affordances. However the 
            interpretations of these novel interfaces that Screen readers provide to visually challenged users are not 
            sufficient for them to form a conceptual model of the interface. This either prevents them from 
            doing the tasks altogether or increases the amount of time these users spend to achieve tasks on such interfaces.</p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Problem</p>
            <p className="lh-title">However the interpretations of these novel interfaces that Screen readers provide to visually 
            challenged users are not sufficient for them to form a conceptual model of the interface. This either prevents them from 
            doing the tasks altogether or increases the amount of time these users spend to achieve tasks on such interfaces.</p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <img src={men}></img>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <img src={u1}></img>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="lh-title">Similarly in mobile phones there are lot on novice interaction techniques or widgets that the 
            visually impaired might interact with. A clock can be an example of an application:</p>
            </div>
          </div>  
        </div>
      </div>
    </article>
    
  );
}

export default Pepper;