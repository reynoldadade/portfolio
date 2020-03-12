import project1 from '../../assets/images/Projects/project-1.png';
import project2 from '../../assets/images/Projects/project-2.png';
import project3 from '../../assets/images/Projects/project-3.png';
import project4 from '../../assets/images/Projects/project-4.png';
import project5 from '../../assets/images/Projects/project-5.png';

const projects = [
  {
    id: 1,
    name: 'Dalex GVIVE',
    description: 'Allows Independent verification of IDs',
    githubLink: '',
    url: 'https://dalex-gvive.firebaseapp.com/',
    image: project1,
  },
  {
    id: 2,
    name: 'Dalex FILMS',
    description:
      'The Loan posting and disbursement app for Dalex Finance this software seeks to ease the need for face to face interaction of Compliance officers and clients looking for loans. Using E-Form it allows compliance to process loans under 3 hours for clients and takes away bias because all check are automated and passed by the system',
    githubLink: '',
    url: 'http://films.dalexhq.com/',
    image: project2,
  },
  {
    id: 3,
    name: 'Dalex DP Portal',
    description:
      'To manage over 3000 sales personnel requires an app that just manages personnel. Built as an extension of FILMS it is designed to help Team Leaders manage and enroll new members of their teams and to manage team member transfers and promotions',
    githubLink: '',
    url: 'http://dpms.dalexhq.com/',
    image: project3,
  },
  {
    id: 4,
    name: 'Dalex Recovery App',
    description:
      'What do you then do if loans given go bad. How do you track who has what loan and how do you provide the clients convenient ways to pay off their loans',
    githubLink: '',
    url: 'http://197.221.85.146:6767/filmspwa/login',
    image: project4,
  },
  {
    id: 5,
    name: 'Dalex Eligibility App',
    description:
      'Built for Dalex Finance and hosted on a Linux Server built with Django, this is the main quality check system used to validate all clients that require loans, it removes all manual compliance tasks on loans',
    githubLink: '',
    url: 'http://197.221.85.146/',
    image: project5,
  },
];

export default projects;
