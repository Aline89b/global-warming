import { useCallback } from "react"
import './home.css';
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import Typewriter from "typewriter-effect"
import { useState, useEffect } from "react"
import ButtonF from '../../components/button';
import { Link } from "react-router-dom"

export default function Home(){
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setShowLinks(true);
      }, 20999);
    }, []);
  
    const init = useCallback(async engine => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);
    return (
<div className="home">
    
    <Particles
     options ={{
      particles: {
        number: {
          value: 52,
          density: {
            enable: true,
            value_area: 631.3280775270874
          }
        },
        color: {
          value: "#fff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
         
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 15,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.4,
          width: 2
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "bottom",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
     }}
      
     init = {init} />
    <div className="main">
      <Typewriter 
      onInit ={(typewriter) => {
        typewriter.typeString("You think you <br> don't need <br> to worry about <br> climate changes?").pauseFor(2000).deleteAll().typeString("ok, take a look <br> at this first!").start()
        .pauseFor(1000);
      }} />

       {showLinks && <Link to="/temperature"> <ButtonF /></Link>}
      </div>
  </div>

    )
}