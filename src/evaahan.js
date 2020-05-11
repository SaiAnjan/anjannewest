import React from 'react';
import { useHistory } from 'react-router-dom'
import p9 from './Assets/Images/p9.png';
import map from './Assets/Images/evaahan/map.jpg';
import pedl_cyclo from './Assets/Images/evaahan/pedl_cyclo.jpg';
import byk from './Assets/Images/evaahan/byk.png';
import close_up from './Assets/Images/evaahan/close_up.png';
import srcone from './Assets/Images/evaahan/srcone.jpg';
import srctwo from './Assets/Images/evaahan/srctwo.jpg';
import srcthree from './Assets/Images/evaahan/srcthree.jpg';
import video from './Assets/Images/evaahan/video.mp4';
import back from './Assets/Images/icon/chevron-left.png';

function Pepper() {

  const history = useHistory();

  return (
    <article>
      <header style={{backgroundColor: '#F6FFFE',}}>
          <a onClick={() => history.replace('/')} style={{borderRadius:'50vw',}} className="ma4 fw7 f7 no-underline black bg-animate hover-bg-black hover-white bg-white inline-flex items-center pa2">
          <img src={back}/>
            <span className="pl1">Back</span>
          </a>
          <br/>

          <div style={{display: 'flex', alignItems: 'flex-start'}} className="ml4 mt0 pb4 mw7-l center-l">
            <div style={{padding: '0px', flex: '2', order: '1', alignContent: 'middle'}} className="mt0">
              <h3 style={{color:'#009688',}} className="f3 f2-l fw9 f1-m f-headline-l measure-narrow lh-title mv0">e-Vaahan</h3>
              <p style={{fontSize: '14px', color:'#009688', fontFamily: '"Inter", sans-serif', marginTop: '8px', marginBottom: '4px'}}>A ecological ride sharing service designed to offer bike rides in the IIT-B campus for the campus residents.</p>
            </div>
            <div style={{flex: '1.5', order: '2',}} className="mr0 mt2">
              <img style={{float: 'right'}} src={p9}/>
            </div>
          </div>
      </header>
      <div className="mw7 center">
      <h3 className="ma4">Product design//UX/UI Design</h3>
      <p class="fw7 f7 ttu tracked ma4">Role</p>
      <p>As a product design intern</p>
      <p></p>
      </div>
    </article>
  );
}

export default Pepper;