import React from 'react';
import { useHistory } from 'react-router-dom'
import p4 from './Assets/Images/p4.png';
import back from './Assets/Images/icon/chevron-left.png';

function Ipt() {

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
            <div style={{padding: '0px', flex: '2', order: '1', alignContent: 'middle'}} className="mt0">
              <h3 style={{color:'#FCB130',}} className="f3 f2-l fw9 f1-m f-headline-l measure-narrow lh-title mv0">Placement portal revamp</h3>
              <p style={{fontSize: '14px', color:'#FCB130', fontFamily: '"Inter", sans-serif', marginTop: '8px', marginBottom: '4px'}}>Revamping the existing placement portal for students, comapnies and the team</p>
            </div>
            <div style={{flex: '1.5', order: '2',}} className="mr0 mt2">
              <img style={{float: 'right'}} src={p4}/>
            </div>
          </div>
      </header>
      <div className="mw7 center">
      <h3 className="ma4">UX Designer</h3>
      <p className="fw8 f7 ttu tracked ml4 mb0">Span</p>
      <p className="ml4 mr4 lh-title">Started in March 2020 and currently working remotely on it.</p>
      <p className="ma4 f7 gray">More about the employer: <a href="www.placements.iitb.ac.in">www.placements.iitb.ac.in</a></p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Role</p>
      <p className="ml4 mr4 lh-title">As a UX designer on the team, I work really closely with the engineers and the placement managers to revamp the placement portal of IIT Bombay. This involves building a blueprint of the placement service, finding problems with the user experience, designing the interface and developing the interface.</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Motivation</p>
      <p className="ml4 mr4 lh-title">While I was serving as the placement coordinator for my design school, I've found out that there's a need of improvement to the exisiting placement portal. The portal is supposed to be a one stop shop for every ting placement and the team still uses a multitude of tools. Making an robust but essily useful portal will let the team members use their efforts and time for a lot of other jobs during the season.</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Contributions</p>
      <p className="ml4 mr4 lh-title">The placement portal invovles students, comapnies and the team on the portal to commence the season. I'm building the interface where it helps students to register for the season, upload resumes, get them verified, find jobs, apply and get placed. While on the company side it starts with registering and shortlisitng students and finding their employees. The team needs to collaborate together and provide a smooth season to both students and the comapnies.</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Responsibilities</p>
      <ul className="ma3 mr4 lh-title">
        <li>Understanding the placement process and policies from the placement managers</li>
        <li>Attending weekly standups with team and updating progress</li>
        <li>Building a service that aligns with the placement policy and serves the users with a better experience</li>
        <li>Designing screens in Figma and sharing with developers</li>
        <li>Re-iterating based on developers, p[lacement managers feedback</li>
      </ul>
      <p className="ma4 lh-title">"Please reach out to me if you want to talk to me about this project more in detail."</p>
      <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="mailto:saianjan.margani@gmail.com" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Get in touch</a>
      </div>
      </div>
    </article>
  );
}

export default Ipt;