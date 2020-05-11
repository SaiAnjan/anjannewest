import React from 'react';
import { useHistory } from 'react-router-dom'
import p8 from './Assets/Images/p8.png';
import back from './Assets/Images/icon/chevron-left.png';
import u1 from './Assets/Images/Cocards/U1.png';

function Pepper() {

  const history = useHistory();

  return (
    <article>
      <header style={{backgroundColor: '#FFF1F6',}}>
          <a onClick={() => history.replace('/')} style={{borderRadius:'50vw',}} className="ma4 fw7 f7 no-underline black bg-animate hover-bg-black hover-white bg-white inline-flex items-center pa2">
          <img src={back}/>
            <span className="pl1">Back</span>
          </a>
          <br/>

          <div style={{display: 'flex', alignItems: 'flex-start'}} className="ml4 mt0 pb4 mw7-l center-l">
            <div style={{padding: '0px', flex: '2', order: '1', alignContent: 'middle'}} className="mt0">
              <h3 style={{color:'#E91E63',}} className="f3 f2-l fw9 f1-m f-headline-l measure-narrow lh-title mv0">Co-Cards</h3>
              <p style={{fontSize: '14px', color:'#E91E63', fontFamily: '"Inter", sans-serif', marginTop: '8px', marginBottom: '4px'}} className="f6 f5-l">An interactive and fun learnign kit for teaching biology to the students of high school.</p>
            </div>
            <div style={{flex: '1.5', order: '2',}} className="mr0 mt2">
              <img style={{float: 'right'}} src={p8}/>
            </div>
          </div>
      </header>
      <div className="mw7 center">
      <h3 className="ma4">UX Design</h3>
      <p className="fw8 f7 ttu tracked ml4 mb0">About</p>
      <p className="ml4 mr4 lh-title">This project is part of a module conducted by Professor Sudhir Bhatia at IDC for a duration of 4 weeks. 
      Our group came up with this activity to bring about awareness about menstruation (also known as 5 day test match in slang) 
      in these 4 weeks. Co-Cards is the design output of this module and this recently got shortlisted to demonstrate our project on a 
      learning aid for teaching sensitive topics to children at the 'Designing for Children with focus on Play and Learn' in September, 2020.</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Initial brief</p>
      <p className="ml4 mr4 lh-title">Creating awareness about menstruation amongst young students</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Design process</p>
      <div className="tc"><img src={u1}></img></div>
      </div>
    </article>
  );
}

export default Pepper;