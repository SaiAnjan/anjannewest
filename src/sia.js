import React from 'react';
import { useHistory } from 'react-router-dom'
import p3 from './Assets/Images/p3.png';
import back from './Assets/Images/icon/chevron-left.png';

function Sia() {

  const history = useHistory();

  return (
    <article>
      <header style={{backgroundColor: '#FFFBF2',}}>
          <a onClick={() => history.replace('/')} style={{borderRadius:'50vw',}} className="ma4 fw7 f7 no-underline black bg-animate hover-bg-black hover-white bg-white inline-flex items-center pa2">
          <img src={back}/>
            <span className="pl1">Back</span>
          </a>
          <br/>

          <div style={{display: 'flex', alignItems: 'flex-start'}} className="ml4 mt0 pb4 mw7-l center-l">
            <div style={{padding: '0px', flex: '2', order: '1', alignContent: 'middle'}} className="mt3">
              <h3 style={{color:'#FCB130',}} className="f3 f2-l fw9 f1-m f-headline-l measure-narrow lh-title mv0">SIA innovation platform</h3>
              <p style={{fontSize: '14px', color:'#FCB130', fontFamily: '"Inter", sans-serif', marginTop: '8px', marginBottom: '4px'}}>A two week design thinking workshop with Singapore airlines</p>
            </div>
            <div style={{flex: '1.5', order: '2',}} className="mr0 mt0">
              <img style={{float: 'right'}} src={p3}/>
            </div>
          </div>
      </header>
      <div className="mw7 center">
      <h3 className="ma4">UX Designer</h3>
      <p className="fw8 f7 ttu tracked ml4 mb0">Span</p>
      <p className="ml4 mr4 lh-title">2 Weeks in SIA Training center, Changi.</p>
      <p className="ma4 f7 gray">More about the employer: <a href="www.singaporeair.com">www.singaporeair.com</a></p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Role</p>
      <p className="ml4 mr4 lh-title">As a UX designer on the team, with the guidance of senior designers I conducted user research to design an platform where employees of Singapore airlines can share ideas. I finally made the inital prototype based on the research.</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Contributions</p>
      <p className="ml4 mr4 lh-title">Airlines important assets are its people and the airlines. Singapore airlines wanted to build an platform to utilise the employees innnovation to help grow the airlines. I worked on a platform where employees, ground staff, pilots, operations etc., can post ideas, share them, find challenges and build the best ideas.</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Responsibilities</p>
      <ul className="ma3 mr4 lh-title">
        <li>Finding out the motivations of users to share ideas and build them in one-on-one interviews</li>
        <li>Finding out the challenges with an innovation platform with the stakeholders</li>
        <li>Ideating together ideas for the platform in focus group discussions</li>
        <li>Collating user research and finding out insights</li>
        <li>Designing low-fidelity wireframes in sketch</li>
        <li>Playing it back to the client bi-weekly</li>
      </ul>
      <p className="ma4 lh-title">"Please reach out to me if you want to talk to me about this project more in detail."</p>
      <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="mailto:saianjan.margani@gmail.com" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Get in touch</a>
      </div>
      </div>
    </article>
  );
}

export default Sia;