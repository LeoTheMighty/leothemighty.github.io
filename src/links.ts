import Resume from './files/resume.pdf';
import CS4300Preview from './images/cs4300preview.png';
import pillarsPreview from './images/pillarspreview.png';
import homePreview from './images/homepreview.png';
import me from './images/me.png';
import profile from './images/profilecover.png';

export default {
  projects: {
    cs4300: {
      preview: CS4300Preview,
      assignments: [
        'https://cs4300.joekt.dev/a3/Assignment3.html',
        'https://cs4300.joekt.dev/a4/Assignment4.html',
        'https://cs4300.joekt.dev/a5/Assignment5.html',
        'https://cs4300.joekt.dev/a6/Assignment6.html',
      ],
    },
    pillars: {
      site: 'https://leothemighty.github.io/Pillars/',
      source: 'https://github.com/LeoTheMighty/Pillars',
      preview: pillarsPreview,
    },
    firstSite: {
      site: 'https://leothemighty.github.io/home/',
      source: 'https://github.com/LeoTheMighty/home',
      preview: homePreview,
    }
  },
  resume: Resume,
  source: 'https://github.com/LeoTheMighty/leothemighty.github.io',
  instagram: 'https://www.instagram.com/lonisballington/',
  facebook: 'https://www.facebook.com/leo.ntel.1/',
  linkedin: 'https://www.linkedin.com/in/leonid-belyi/',
  github: 'https://github.com/LeoTheMighty',
  email: 'mailto:leonid@ac93.org',
  spotify: 'https://open.spotify.com/user/leothemighty123',
  spotifyDeveloper: 'https://developer.spotify.com/documentation/web-api/reference/#/',
  joekt: 'https://joekt.dev/',
  me,
  profile,
};
