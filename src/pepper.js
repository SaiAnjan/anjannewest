import React from 'react';
import { useHistory } from 'react-router-dom'
import p5 from './Assets/Images/p5.png';
import back from './Assets/Images/icon/chevron-left.png';
import game from './Assets/Images/Pepper/game.jpeg';
import u1 from './Assets/Images/Pepper/U1.png';
import u2 from './Assets/Images/Pepper/U2.png';
import u3 from './Assets/Images/Pepper/U3.png';
import u4 from './Assets/Images/Pepper/U4.png';
import u5 from './Assets/Images/Pepper/U5.png';
import u6 from './Assets/Images/Pepper/U6.png';

function Pepper() {

  const history = useHistory();

  return (
    <article>
      <header style={{backgroundColor: '#EBF7FF',}}>
          <a onClick={() => history.replace('/')} style={{borderRadius:'50vw',}} className="ma4 fw7 f7 no-underline black bg-animate hover-bg-black hover-white bg-white inline-flex items-center pa2">
          <img src={back}/>
            <span className="pl1">Back</span>
          </a>
          <br/>

          <div style={{display: 'flex', alignItems: 'flex-start'}} className="ml4 mt0 pb4 mw7-l center-l">
            <div style={{padding: '0px', flex: '2', order: '1', alignContent: 'middle'}} className="mt0">
              <h3 style={{color:'#55ACFF',}} className="f3 f2-l fw9 f1-m f-headline-l measure-narrow lh-title mv0">Pepper expense tracker</h3>
              <p style={{fontSize: '14px', color:'#55ACFF', fontFamily: '"Inter", sans-serif', marginTop: '8px', marginBottom: '4px'}}>Understanding employee behaviour on deputation and designing an expense tracker in 3 nights.</p>
            </div>
            <div style={{flex: '1.5', order: '2',}} className="mr0 mt2">
              <img style={{float: 'right'}} src={p5}/>
            </div>
          </div>
      </header>
      <div className="mw7 center">
      <h3 className="ma4">Internship design task</h3>
      <p className="fw8 f7 ttu tracked ml4 mb0">Span</p>
      <p className="ml4 mr4 lh-title">3 Nights while travelling home to see my just born nephew.</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Objective</p>
      <p className="ml4 mr4 lh-title">Design an Expense filing and tracking application on Android/iOS 
      platform that’s smart, personalized, integrated and built around an individual executives in the 
      corporate world making them more productive.</p>
      <p className="fw8 f7 ttu tracked ml4 mb0">Introduction</p>
      <p className="ml4 mr4 lh-title">Digital workplaces & Smart technologies allow employees to lower the
       dependence on physical work processes enabling new and more effective ways of working. 
       This helps the organisations to scale better.</p>
      <p className="ml4 mr4 lh-title">It is also a way to empower employees to benefit their business 
      abilities, to engage with their customers and promote a digital & smart work culture. So I conducted a study.</p> 
      <p className="fw8 f7 ttu tracked ml4 mb0">Goal of my study</p> 
      <p className="ml4 mr4 lh-title">To help employees of corporate world automate their expense filing & 
      tracking when they are travelling and leverage their business abilities for customer engagement.</p>
      <h4 className="ma4">I began by identifying four strategic objectives that should result from the user research:</h4>
      <ul className="ma3 mr4 lh-title">
        <li>Make Business expenses reporting a convenient process</li>
        <li>Make expense reimbursement process transparent & more efficient</li>
        <li>Eliminating different focus layers for the employee in the travel allowance process</li>
        <li>Make the expense filing system smart assisted to every individual</li>
      </ul>
      <p className="fw8 f7 ttu tracked ml4 mb0">User interviews</p>
      <ul className="ma3 mr4 lh-title">
        <li>👤Ganesh</li>
        <p class="f6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
        1.Frequent Short Term traveller <br/>2.Was on a Long Term deputation for two years.
        </p>
        <li>👤Harish</li>
        <p class="f6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
        1.Travels mostly on micro terms<br/>2.Spent personal money for business travels and reimbursed at times
        </p>
      </ul>
      <h4 className="ma4">While doing user interviews following were my objectives:</h4>
      <h4 className="ma4">Primary</h4>
      <ul className="ma3 mr4 lh-title">
        <li>What are the processes that travel teams at organisations are currently employing?</li>
        <li>What are the digital tools that users are leveraging for filing expenses?</li>
        <li>What can be done to enable smooth & simplified reimbursement?</li>
        <li>What are the most painful areas while remitting or refunding?</li>
      </ul>
      <h4 className="ma4">Secondary</h4>
      <ul className="ma3 mr4 lh-title">
        <li>Why are companies asking for travel settlements?</li>
        <li>What are the safest methods used to secure billing documents?</li>
        <li>What influences users to save & document bills & invoices?</li>
        <li>What are the alternatives present for recording cash mode transactions?</li>
      </ul>
      <h4 className="ma4">Teritiary</h4>
      <ul className="ma3 mr4 lh-title">
        <li>What are the problems involves with not sharing bills & expenses?</li>
        <li>How is the overall experience of travel remittance & reimbursement?</li>
      </ul>
      <p className="fw8 f7 ttu tracked ml4 mb0">Research findings</p>
      <h4 className="ma4">Digitisation</h4>
      <p className="ml4 mr4 lh-title">The process clearly needs a smart & digital documenting 
      system to reduce the effort of collecting and enveloping the bills.</p>
      <p class="ma4 6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
      “I have to submit all the bills in a envelope at the end of each month.”
      </p>
      <h4 className="ma4">Refund Limit</h4>
      <p className="ml4 mr4 lh-title">Organisations are allowing the employees of every role 
      to avail upto a certain frequency limit or less than that.</p>
      <p class="ma4 f6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
      “As I know that I can reimburse Rs.600 per day I’ll start spending more than required on each day”
      </p>
      <h4 className="ma4">Wayfinding</h4>
      <p className="ml4 mr4 lh-title">Employees doesn’t really know to find the FDFU Documents 
      & bills required for submission.</p>
      <p class="ma4 f6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
      “ I realised that I can avail medical claims internationally also after chucking my medical bill when I was in Australia”
      </p>
      <h4 className="ma4">Orientation</h4>
      <p className="ml4 mr4 lh-title">Employees endup booking their own accommodation thinking 
      the accommodation suggested by the employer is high end.</p>
      <p class="ma4 f6 f5-ns lh-copy measure i pl4 bl bw1 b--blue mb4">
      “When you guys went to Singapore you booked an airbnb because you guys thought the 3-start hotel provides costly services.”
      </p>

      <p className="fw8 f7 ttu tracked ml4 mb0">Suggestion 1</p>
      <h4 className="ma4">Understanding Short Term Domestic/ International deputation behaviour under business allowances by a experimental game.</h4>
      <ul className="ma3 mr4 lh-title">
        <li>Employees when travelling abroad are provided with allowances in their travel cards and 
          are loaded with an average amount decided by the company based on the prices of accommodation, 
          commute and food at the off-shore location.</li>
        <li>After interviewing two potential users who have travelled domestically and internationally 
          the insight that I found out is the behaviour of the employee completely changes the expenses.</li>
        <li>Sometimes users end up buying costly stuff to empty the travel card or they do not use the 
          money efficiently resulting in other problems which hamper their productivity.</li>
        <li>To understand the users behaviour organisations can use an experimentation gaming which 
          allows the users to choose expense actions that they would be doing when they are deputed.</li>
      </ul>
      <img src={game}></img>

      <p className="fw8 f7 ttu tracked ml4 mb0">Suggestion 2</p>
      <h4 className="ma4">Pepper-A smart & intelligent Travel assistant automates the process of expense filing and submitting bills.</h4>
      <h4 className="ma4">User persona</h4>
      <p className="ml4 mr4 lh-title">👤Sai(M) 23 Years, 2-week deputation to Singapore</p>
      <ul className="ma3 mr4 lh-title">
        <li>Uses corporate credit card at four fingers restaurant for dinner</li>
        <li>Gets a message on his mobile from the payment gateway and the secure & smart assistant PEPPER notices and initiates an expense in the system.</li>
      </ul>
      <div className="tc"><img src={u1}></img></div>
      <h4 className="ma4">Home screen - Deputations</h4>
      <ul className="ma3 mr4 lh-title">
        <li>All international, domestic deputations with metrics of how much money is left to spend for the day on food, travel and accomodation</li>
        <li>From the research it's found that employees behaviour is a varaiable in the spending on deputation, so I included best practicess on shore</li>
        <li>Foreign deputation documents like visa guidelines etc.,</li>
      </ul>
      <div className="tc"><img src={u2}></img></div>
      <h4 className="ma4">Home screen - Calendar</h4>
      <ul className="ma3 mr4 lh-title">
        <li>Calendar with daily, monthly and yearly view</li>
        <li>Meetings and To-Do from work calendar</li>
        <li>Spendings and expenses added from pepper</li>
      </ul>
      <div className="tc"><img src={u3}></img></div>
      <h4 className="ma4">Home screen - Med Ex</h4>
      <ul className="ma3 mr4 lh-title">
        <li>One of the insights from the research is that medical expenses have also to be claimed, sometimes organisations provide an credit card but the bills have to be reported.</li>
        <li>MedEx tab provides an option to quickly claim an medical expense or bill</li>
      </ul>
      <div className="tc"><img src={u4}></img></div>
      <h4 className="ma4">Smart assistant</h4>
      <ul className="ma3 mr4 lh-title">
        <li>Whenever there is an expense made from the credit card, pepper the assistant on the application detects and provides a suggestion to add the expense.</li>
        <li>These expenses are losted down under the respective deputation and the deputation will contain the list of expenses in the trip</li>
        <li>When there is no digital transaction involved, employees can add an expense at any time. Every expense also uses Microsoft seeing AI to capture the bill and upload it.</li>
      </ul>
      <div className="tc"><img src={u5}></img></div>
      <h4 className="ma4">Third party interactions</h4>
      <ul className="ma3 mr4 lh-title">
        <li>The assistant also acts an personal assistant where it reminds the employee to take a cab to the workplace.</li>
        <li>Once the employee completes the trip this expense is added to the deputation.</li>
      </ul>
      <div className="tc"><img src={u6}></img></div>
      <h4 className="ma4">Smart suggestions</h4>
      <ul className="ma3 mr4 lh-title">
        <li>The assistant also requests the employee to order food from the application based on the generic dinner time.</li>
        <li>The app interacts with the food delivery app or restaurant and the food is ordered.</li>
        <li>Later this expense can be added to the deputation based on the employee's choice.</li>
      </ul>
      <p className="fw8 f7 ttu tracked ml4 mb0">Learnings & Takeaways</p>
      <ul className="ma3 mr4 lh-title">
        <li>Guerrilla user study and prototyping.</li>
        <li>Systems hamper the behaviour of users when not designed completely.</li>
        <li>Digital tools that are extensively provided by Office 365 which can be used to empower the digital workforce.</li>
      </ul>
      <p className="ma4 lh-title">"Please reach out to me if you want to talk to me about this project more in detail."</p>
      <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="mailto:saianjan.margani@gmail.com" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Get in touch</a>
      </div>
      </div>
    </article>
  );
}

export default Pepper;