import './App.css';

import React from 'react';
import { useHistory } from 'react-router-dom';
import { works } from './cardinfo.js';
import { ux } from './cardinfo.js';
import { accessibility } from './cardinfo.js';
import { ui } from './cardinfo.js';
import resume from './Assets/resume.pdf';
import process from './Assets/Images/process.png';

function App() {

  const history = useHistory();
  return (
    <div className="center">
      <main className="cf pa3 pa4-m pa5-l mw9 mw8-l center">
        <div className="mt4 mb3 ml2">
          <span className="f3 f2-l fw9 red">Sai Anjan</span>
          <span className="f6 f3-l db black-70 mt2">UX + Interaction designer</span>
        </div>
        <img calssName="ma4" src={process}></img>
        <p class="fw7 f7 f5-l ttu tracked pb2 pl2 pt2 mt4-l">Work</p>
        <div class="mw9 center ph3-ns">
          <div class="cf ph2-ns">
            {works.map(work=>(
              <div onClick={() => history.replace(work.route)} style={{cursor: 'pointer'}} class="fl w-100 w-50-ns flex items-center lh-copy pa3 ph0-l">
              <img class="w2 h2 w2-ns h2-ns" src={work.image} />
              <div class="pl3 flex-auto">
                <span class="f8 f4-l fw8 db black-70">{work.title}</span>
                <span class="f7 f5-l db black-70 lh-copy-l lh-title">{work.subtitle}</span>
              </div>
              <div>
                <a class="f7-l f8 grow no-underline br-pill-l ph2-l pv2-l ph1 pv1 ma2-l ma1 dib black bg-white lh-solid">
                  <svg className="w1" data-icon="chevronRight" viewBox="0 0 30 30" style={{ fill: 'currentcolor' }}>
                    <title>chevronRight icon</title>
                    <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" />
                  </svg>
                </a>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div class="pa3 pa4-ns v-mid" style={{ textAlign: '-webkit-center' }} >
          <a href={resume} className="no-underline f5 fw8 tc db w-100 w-30-l pv3 br2 b--red bg-animate bg-light-gray hover-bg-moon-gray red br2">View Resume</a>
        </div>
        <p class="fw7 f7 f5-l ttu tracked pb2 pl2 pt2">UX Design</p>
        <div class="mw9 center ph3-ns">
          <div class="cf ph2-ns">
              {ux.map(ux=>(
                <div class="fl w-100 w-50-ns pa2">
                <div onClick={() => history.replace(ux.route)} className={`link dim black mw-100 dt hide-child ba pa3 br2 pointer ${ux.style}`}>
                <h2 className="f5 ma2">{ux.title}</h2>
                <p className="f7 w-100 w-100-ns ma2">{ux.subtitle}</p>
              </div>
              </div> 
              ))}
          </div>
        </div>
        <p class="fw7 f7 f5-l ttu tracked pb2 pl2 pt2">Accessibility</p>
        <div class="mw9 center ph3-ns">
          <div class="cf ph2-ns">
            {accessibility.map(accessibility=>(
              <div onClick={() => history.replace(accessibility.route)} style={{cursor: 'pointer'}} class="fl w-100 w-50-ns pa3 flex items-center lh-copy ph2-l">
                <div class="pl0 flex-auto">
                  <span class="fw8 db">{accessibility.title}</span>
                  <span class="w-80-l f7 db">{accessibility.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p class="fw7 f7 f5-l ttu tracked pb2 pl2 pt2">UI Design</p>
        <div class="mw9 center ph3-ns">
          <div class="cf ph2-ns">
            {ui.map(ui=>(
              <div onClick={() => history.replace(ui.route)} style={{cursor: 'pointer'}} class="fl w-100 w-50-ns pa3 flex items-center lh-copy ph0-l">
              <div class="pl0 flex-auto">
                <img src={ui.image} />
                <span class="fw6 db">{ui.title}</span>
                <span class="w-80-l f7 db">{ui.subtitle}</span>
              </div>
            </div>
            ))}
          </div>
        </div>
        <section className="ph3 ph5-ns pv1 mt4 mb4">
          <article className="mw8 center br2 ba b--red bg-washed-red">
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa4 pa4-ns dtc-ns v-mid">
                <div>
                  <h2 className="fw3 red mt0 mb3">Interested in hiring me?</h2>
                  <p className="black-70 measure lh-copy mv0">
                    I'll be graduating in June 2020 and I'm actively looking for freelance projects and full time opportunities.
                    </p>
                </div>
              </div>
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="mailto:saianjan.margani@gmail.com" className="no-underline f6 tc db w-100 pv3 bg-animate bg-red hover-bg-dark-red white br2">Get in touch</a>
              </div>
            </div>
          </article>
        </section>
        <footer className="pv4 ph3 ph5-ns tc">
          <a className="link hover-silver near-black dib h2 w2 mr3" href="https://www.behance.net/sai_anjan" title="Dribbble">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Behance icon</title>
              <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z" />
            </svg>
          </a>
          <a className="link hover-silver near-black dib h2 w2 mr3" href="https://dribbble.com/saianjan" title="Dribbble">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Dribbble icon</title>
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
            </svg>
          </a>
          <a className="link hover-silver near-black dib h2 w2 mr3" href="https://www.linkedin.com/in/saianjan/" title="LinkedIn">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
              <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero" /></svg>
          </a>
          <a className="link hover-silver near-black dib h2 w2 mr3" href="https://twitter.com/dhaathre" title="Twitter">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
              <path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero" /></svg>
          </a>
          <a className="link near-black hover-silver dib h2 w2 mr3" href="https://github.com/SaiAnjan" title="GitHub">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
              <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
            </svg>
          </a>
          <a className="link hover-silver near-black dib h2 w2 mr3" href="https://instagram.com/saianjan" title="Instagram">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
              <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
            </svg>
          </a>
          <p className="f6">
            <span className="dib">Thanks to
                <a className="link black-80 hover-light-purple" href="https://tachyons.io/">Tachyons</a> /
                <a className="link black-80 hover-gold" href="https://rsms.me/inter/"> Rasmus </a> /
                <a className="link black-80 hover-green" href="http://simpleicons.org/">Simple Icons</a>
            </span>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
