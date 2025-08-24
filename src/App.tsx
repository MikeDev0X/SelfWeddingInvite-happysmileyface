import { useEffect, useRef, useState } from "react";
import appStyle from "./App.module.css";
import Invitation from '../components/Invitation';
import Itinerary from '../components/Itinerary';
import Countdown from '../components/Countdown';
import GiftsTable from "../components/GiftsTable";
import useSound from "use-sound";
import mainTrack from '../src/assets/soundtracks/mainSoundtrack.mp3';

const App = () => {
    const [started, setStarted] = useState<boolean>(false);
    const [play] = useSound(mainTrack, {
        volume: 1,
        playbackRate: 1,
        loop : true
    });

  useEffect(() => {
    //music trigger when scrolled
    const handleScroll = () => {
      if (!started) {
        play();
        setStarted(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    console.log('hola');
  }, [play, started]);

  const invitationRef = useRef<HTMLDivElement>(null);
  const frontpageRef  = useRef<HTMLDivElement>(null);
  const itineraryRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //calculate view height
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--real-vh", `${vh}px`);
  }, []);

  const bgWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //update background with animation effect
    const wrapper = bgWrapperRef.current;
    const invitation = invitationRef.current;
    const frontpage = frontpageRef.current;
    const itinerary = itineraryRef.current;
    if (!wrapper || !invitation || !itinerary || !frontpage) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === invitation) {
              wrapper.setAttribute("data-scene", "invitation");
            } else if (entry.target === itinerary) {
              wrapper.setAttribute("data-scene", "itinerary");
            } else if (entry.target === frontpage) {
              wrapper.setAttribute("data-scene", "frontpage");
            }
          }
      });
      },
      { threshold: 0.8 }
    );

      io.observe(frontpage);
      io.observe(invitation);
      io.observe(itinerary);
    return () => io.disconnect();
  }, []);

  return (
    <>

      <div ref={bgWrapperRef} className={appStyle.bgWrapper} data-scene="frontpage">
        <div className={`${appStyle.bgLayer} ${appStyle.bgFrontpage}`} />
        <div className={`${appStyle.bgLayer} ${appStyle.bgInvitation}`} />
        <div className={`${appStyle.bgLayer} ${appStyle.bgItinerary}`} />
      </div>

      <div ref={frontpageRef} className={appStyle.parallax}>
        <div className={appStyle.scrollText}>
          <span style={{ fontFamily: "newiconscript" }}>Miguel & Elisua</span>
          <span style={{ fontFamily: "texgyrebonum", fontSize: "0.5em" }}>
            14 de diciembre del 2025
          </span>
        </div>
      </div>

      <div ref={invitationRef} className={appStyle.parallaxInvitation}>
        <div>
          <img src="/envelope.png" alt="envelope image"  className={appStyle.invitationImg1} />
          <img src="/stamp.png" alt="stamp image"  className={appStyle.invitationImg2} />
          <div className={appStyle.invitationImg3}>
            <Invitation/>
          </div>
        </div>
      </div>

      <div ref={itineraryRef} className={appStyle.parallaxItinerary}>
        <div className={appStyle.scrollElements}> 
          <Itinerary/>
        </div>
      </div>

      
      <div className={appStyle.parallaxCountdown}>
        <div className={appStyle.scrollElements}>
          <span className={appStyle.countdownHeader}>Cada vez falta menos</span>
          <Countdown/>
        </div>
      </div>

      <div className={appStyle.parallaxVersicle}>
        <div className={appStyle.versicleContainer}>
          <span className={appStyle.versicleHeader}>
            “Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta. El amor nunca deja de ser” </span>
          <span className={appStyle.versicleHeader}>
            <br/>
            1 Corintios 13:7-8
          </span>
        </div>
      </div>

      <div className={appStyle.parallaxGifts}>
        <div className={appStyle.scrollConventionalParallax}>
          <GiftsTable/>
        </div>
      </div>

    </>
  );
}

export default App;