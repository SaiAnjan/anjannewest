import React from 'react';
import { useHistory } from 'react-router-dom'
import p2 from './Assets/Images/p2.png';
import atomic from './Assets/Images/Fresco/atomic.jpg';
import playds from './Assets/Images/Fresco/playds.jpg';
import back from './Assets/Images/icon/chevron-left.png';

function Frescodesign() {

  const history = useHistory();

  return (
    <article>
      <header style={{backgroundColor: '#F1FAFF'}}>
          <div className="mw9 center pa4 pt5-ns ph7-l">
            <a onClick={() => history.replace('/')} style={{borderRadius:'50vw',}} className="fw7 f7 no-underline black bg-animate hover-bg-black hover-white bg-white inline-flex items-center pa2">
              <img src={back}/>
              <span className="pl1">Back</span>
           </a>
           <div style={{display: 'flex', alignItems: 'flex-end'}} className="pa3-l">
             <div style={{flex: '1', order: '1'}}>
               <h3 style={{color:'#01449F'}} className="f3 f1-l fw9 mb0-l">Fresco design system</h3>
               <p style={{color:'#01449F'}} className="f6 f3-l">Auditing and creating an atmoic design system for an family of products</p>
             </div>
             <div style={{flex: '1', order: '2'}}>
               <img style={{float: 'right'}} src={p2}/>
             </div>
           </div>
          </div>
        </header>
      <div className="mw9 center pa4 pt5-ns ph7-l">
        <h3 className="pa3-l">Product//UX/UI Designer</h3>
        <div class="cf ph0-l">
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Span</p>
            <p className="lh-title">18 Months from Januray 2018 to July 2019 at TCS, Chennai. 
            More about the employer: <a href="www.tcs.com">www.tcs.com</a></p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Role</p>
            <p className="lh-title">As a UX/UI Designer my job involved working closely with design managers, 
            product managers and developers. Fresco at TCS stands short for freshers co. and the team is 
            responsible for building a family of applications.</p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Contributions</p>
            <p className="lh-title">At Fresco I worked on the following products & features:
            <ul className="ma3 mr4 lh-title">
              <li>Fresco Play-A learning platform for freshers joining an organisation</li>
              <p class="f6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
              I designed Events interface, Design system and replicated Fresco play for Petronas.
              </p>
              <li>Fresco Peak-Employee appraisal & Team members management tool</li>
              <p class="f6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
              I designed Team membership feature to handle appraisals of employees in different teams and empty state illustrations.
              </p>
              <li>Commonwealth bank of Australia</li>
              <p class="f6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
              I designed Search CBA, an intranet based on a search only interface.
              </p>
              <li>Singapore Airlines</li>
              <p class="f6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
              Designed an innovation platform for singapore airlines. You can read about this project <a href="#">here</a>.
              </p>
            </ul>
            </p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Responsibilities</p>
            <ul className="lh-title">
              <li>Interviewing employee's to find out mental model of network and security on mobile devices</li>
              <li>Designing screens on sketch for both iOS & android</li>
              <li>Sharing redlines with design guidelines to the devlopers</li>
              <li>Iterating and fixing development problems on swift code</li>
              <li>Bi-Weekly meeting with design manager</li>
              <li>Weekly meeting with software engineers and product managers</li>
            </ul>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Introduction</p>
            <p className="lh-title">From Typography, layouts, grids, colours, icons, components and coding conventions to voice and tone, 
            style-guide, documentation a design system brings all of those together in a way that allows the entire team to learn, build and grow.
            <br/><br/>Design systems will give us the flexibility we need to work with the unknown devices of the future. It may be a change in procesws, 
            but it shouldn't be too much of a difference in thinking. We need to keep experimenting and communiacting, particularly in the area of 
            design, as good user experiences are the true sign of whether our products are a success. Design language or design systems is more than 
            just UI style guides. It is also a way the team works and explains the team values & principles.</p>
            </div>
          </div>
        </div>
      </div>
      <p className="ma4 lh-title">"Please reach out to me if you want to talk to me about this project more in detail."</p>
      <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="mailto:saianjan.margani@gmail.com" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Get in touch</a>
      </div>
    </article>
  );
}

export default Frescodesign;