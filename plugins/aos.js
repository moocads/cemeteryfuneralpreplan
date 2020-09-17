
import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({ disable: "phone",
  duration: 800,
      easing: 'ease-in-sine', }); // eslint-disable-line new-cap
};