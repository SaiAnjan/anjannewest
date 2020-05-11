import React from 'react';
import { useHistory } from 'react-router-dom'
import p1 from './Assets/Images/p1.png';
import back from './Assets/Images/icon/chevron-left.png';

function Msinternship() {

  const history = useHistory();

  return (
    <article>
      <header style={{backgroundColor: '#F6FFFE'}}>
          <div className="mw9 center pa4 pt5-ns ph7-l">
            <a onClick={() => history.replace('/')} style={{borderRadius:'50vw',}} className="fw7 f7 no-underline black bg-animate hover-bg-black hover-white bg-white inline-flex items-center pa2">
              <img src={back}/>
              <span className="pl1">Back</span>
           </a>
           <div style={{display: 'flex', alignItems: 'flex-end'}} className="pa3-l">
             <div style={{flex: '1', order: '1'}}>
               <h3 style={{color:'#018489'}} className="f3 f1-l fw9 mb0-l">Designing for trust</h3>
               <p style={{color:'#018489'}} className="f6 f3-l">Understanding the mental models of employees about network security</p>
             </div>
             <div style={{flex: '1', order: '2'}}>
               <img style={{float: 'right'}} src={p1}/>
             </div>
           </div>
          </div>
        </header>
      <div className="mw9 center pa4 pt5-ns ph7-l">
        <h3 className="pa3-l">UX Design intern</h3>
        <div class="cf ph0-l">
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Span</p>
            <p className="lh-title">9 Weeks in the summer of 2019(May to July) at Microsoft, Hyderabad. 
            More about the employer: <a href="www.microsoft.com">www.microsoft.com</a></p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Role</p>
            <p className="lh-title">As a UX design intern in the team of Windows defenders I worked with developer 
            interns, product managers and software engineers to create network security features of windows defender 
            mobile application</p>
            </div>
          </div>
          <div class="fl w-100 w-50-ns flex items-center lh-copy pa3-l tj">
            <div class="pl0 flex-auto">
            <p className="fw8 f7 ttu tracked">Contributions</p>
            <p className="lh-title">Windows is building an mobile application to provide network & data security 
            for employees. I designed features like Safety tag, secure network connection, password management, 
            secure browsing and threat management.</p>
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
        </div>
      </div>
      <p className="ma4 lh-title">"Please reach out to me if you want to talk to me about this project more in detail."</p>
      <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="mailto:saianjan.margani@gmail.com" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Get in touch</a>
      </div>
    </article>
  );
}

export default Msinternship;