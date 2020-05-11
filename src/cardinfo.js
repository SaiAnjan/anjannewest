import w1 from './Assets/Images/w1.png';
import w2 from './Assets/Images/w2.png';
import w3 from './Assets/Images/w3.png';
import w4 from './Assets/Images/w4.png';
import ui1 from './Assets/Images/ui1.png';
import ui2 from './Assets/Images/ui2.png';
import ui3 from './Assets/Images/ui3.png';

export const works = [
    { route:"/msinternship", image: require("./Assets/Images/w1.png"), title: "Designing for Trust", subtitle: "Understanding the mental models of employees about network security" },
    { route:"/frescodesign", image: require("./Assets/Images/w2.png"), title: "Fresco design system", subtitle: "Auditing and creating an atmoic design system for an family of products" },
    { route:"/sia", image: require("./Assets/Images/w3.png"), title: "SIA innovation platform", subtitle: "A two week design thinking workshop with Singapore airlines" },
    { route:"/ipt", image: require("./Assets/Images/w4.png"), title: "IIT Bombay placement portal", subtitle: "Revamping the existing placement portal for students, comapnies and the team" }
]

export const ux = [
    { route:"/target", title: "Target Axis", subtitle: "Teaching multiple interaction techniques to the visually impaired using screenreader.", style: "b--red bg-near-white" },
    { route:"/railway", title: "Railway enquiry system", subtitle: "Designing an self enquiry kiosk/IVR based on the question patterns observed from interviewing users.", style: "b--red bg-near-white" },
    { route:"/pepper", title: "Pepper expense tracker", subtitle: "Understanding employee behaviour on deputation and designing an expense tracker in 3 nights.", style: "b--red bg-near-white" },
    { route:"/cocards", title: "Co-Cards", subtitle: "An interactive and fun learnign kit for teaching biology to the students of high school.", style: "b--red bg-near-white" },
    { route:"/evaahan", title: "E-Vaahan", subtitle: "A ecological ride sharing service designed to offer bike rides in the IIT-B campus for the campus residents.", style: "b--red bg-near-white" }
]

export const accessibility = [
    { route:"/target", title: "Target Axis", subtitle: "Teaching multiple interaction techniques to the visually impaired using screenreader." },
    { route:"/checkup", title: "Accessibility checkup", subtitle: "Verifying accessibility checklist of the gandhi interactive website for visually impaired using W3C accessibility guidelines." },
    { route:"/notem", title: "Note-M", subtitle: "A currency reader to help the visually imapired identify and read the notes & coins of the new gandhi series of indian series currency." }
]

export const ui = [
    { route:"/mercury", image: require("./Assets/Images/ui1.png"), title: "Mercury SCC", subtitle: "A smart workspace to list down the cases for lawyers and making their job easy." },
    { route:"/urhope", image: require("./Assets/Images/ui2.png"), title: "UR Hope", subtitle: "An relief activity information finder for people who need relief, NGOs, and volunteers in COVID-19." },
    { route:"/sponso", image: require("./Assets/Images/ui3.png"), title: "Sponso", subtitle: "A network platform for creators on instagram & youtube to find opportunities with businesses.s" }
]