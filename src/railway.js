import React from 'react';
import { useHistory } from 'react-router-dom'
import p7 from './Assets/Images/p7.png';
import back from './Assets/Images/icon/chevron-left.png';
import u1 from './Assets/Images/Railway/U1.jpg';

function Pepper() {

  const history = useHistory();

  return (
    <article>
      <header style={{backgroundColor: '#EAEFF2',}}>
          <a onClick={() => history.replace('/')} style={{borderRadius:'50vw',}} className="ma4 fw7 f7 no-underline black bg-animate hover-bg-black hover-white bg-white inline-flex items-center pa2">
          <img src={back}/>
            <span className="pl1">Back</span>
          </a>
          <br/>

          <div style={{display: 'flex', alignItems: 'flex-start'}} className="ml4 mt0 pb4 mw7-l center-l">
            <div style={{padding: '0px', flex: '2', order: '1', alignContent: 'middle'}} className="mt0">
              <h3 style={{color:'#607D8B',}} className="f3 f2-l fw9 f1-m f-headline-l measure-narrow lh-title mv0">Railway enquiry system</h3>
              <p style={{fontSize: '14px', color:'#607D8B', fontFamily: '"Inter", sans-serif', marginTop: '8px', marginBottom: '4px'}}>Designing an self enquiry kiosk/IVR based on the question patterns observed from interviewing users.</p>
            </div>
            <div style={{flex: '1.5', order: '2',}} className="mr0 mt2">
              <img style={{float: 'right'}} src={p7}/>
            </div>
          </div>
      </header>
      <div className="mw7 center">
      <h3 className="ma4">Masters design project/UX Design</h3>
      <p className="fw8 f7 ttu tracked ml4 mb0">Span</p>
      <p className="ml4 mr4 lh-title">January 2020, I'm currently working on this.</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Introduction</p>
      <p className="ml4 mr4 lh-title">Long queues at the enquiry in the railway stations is observed most of the time. 
      Sometimes the queues become bigger and passengers who have a query about the current train might take longer. 
      An enquiry is for asking which platform does a particular train is going to arrive also including the time table 
      of intermediate stations can be enquired about. For P3, I want to redesign this enquiry system as an on-platform solution.</p>
      <p className="ml4 mr4 lh-title">Following is the information that can be enquired in any railway station in India:</p>
      <div className="tc"><img src={u1}></img></div>
      <p className="fw8 f7 ttu tracked ml4 mb0">Goals/Objectives</p>
      <ul className="ma3 mr4 lh-title">
        <li>Disseminate information from the primary form which is going and enquiring a staff face to face in the enquiry section.</li>
        <li>Having an another form of information gathering which saves the passengers time from standing in a queue.</li>
        <li>Accessing information which is live and correct on the platform/station so as opposed to accessing it on a private 
          app where only small parts of it is available which might be inaccurate/incorrect.</li>
        <li>Access information which was not identified by the passenger to be enquired on a station.</li>
      </ul>
      <p className="fw8 f7 ttu tracked ml4 mb0">Scope</p>
      <ul className="ma3 mr4 lh-title">
        <li>Identifying the most important parts of the enquiry to be included in the design</li>
        <li>What are the most FAQs by the passengers</li>
        <li>What does the interface contain so that it takes less time for each passenger to answer the query quickly</li>
        <li>Should it be a voice/chat/GUI based interface which can facilitate quicker interactions</li>
        <li>Maybe include the indoor navigation directory/map</li>
      </ul>
      </div>
    </article>
  );
}

export default Pepper;