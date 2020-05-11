import React from 'react';
import { useHistory } from 'react-router-dom'
import p5 from './Assets/Images/p5.png';
import back from './Assets/Images/icon/chevron-left.png';

function Notem() {

  const history = useHistory();

  return (
    <article>
      <header style={{backgroundColor: '#EBF7FF',}}>
          <a onClick={() => history.replace('/')} style={{borderRadius:'50vw',}} className="ma4 fw7 f7 no-underline black bg-animate hover-bg-black hover-white bg-white inline-flex items-center pa2">
          <img src={back}/>
            <span className="pl1">Back</span>
          </a>
          <br/>

          <div style={{display: 'flex', alignItems: 'flex-start'}} className="ml4 mt0 pb4">
            <div style={{padding: '0px', flex: '2', order: '1', alignContent: 'middle'}} className="mt0">
              <h3 style={{color:'#55ACFF',}} className="f3 fw9 f1-m f-headline-l measure-narrow lh-title mv0">Pepper expense tracker</h3>
              <p style={{fontSize: '14px', color:'#55ACFF', fontFamily: '"Inter", sans-serif', marginTop: '8px', marginBottom: '4px'}}>Understanding employee behaviour on deputation and designing an expense tracker in 3 nights.</p>
            </div>
            <div style={{flex: '1.5', order: '2',}} className="mr0 mt2">
              <img style={{float: 'right'}} src={p5}/>
            </div>
          </div>
      </header>
      <div style={{display: 'table'}} className="ma4">
            <tr>
              <td className="pr4 pb3">
                <span className="f7 ttu gray">Span: &nbsp; </span>
                <span className="f6 fw7 black ma0">3 Days</span>
              </td>
              <td>
              <span className="f7 ttu gray">Role: &nbsp; </span>
                <span className="f6 fw7 black ma0">Design test</span>
              </td>
            </tr>
            <tr>
              <td className="pr4">
              <span className="f7 ttu gray">Type: &nbsp; </span>
                <span className="f6 fw7 black ma0">Individual</span>
              </td>
              <td>
              <span className="f7 ttu gray">Company: &nbsp; </span>
                <span className="f6 fw7 black ma0">Microsoft</span>
              </td>
            </tr>
      </div>
      <p className="ma4">I'm writing up every project. please check back soon.</p>
    </article>
  );
}

export default Notem;