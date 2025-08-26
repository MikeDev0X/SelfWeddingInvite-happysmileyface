import { useEffect, useRef, useState } from "react";
import appStyle from "./App.module.css";
import Invitation from '../components/Invitation';
import Itinerary from '../components/Itinerary';
import Countdown from '../components/Countdown';
import GiftsTable from "../components/GiftsTable";
import useSound from "use-sound";
import mainTrack from '../src/assets/soundtracks/mainSoundtrack.mp3';

//Images
import envelopeImg from '/envelope.webp';
import stampImg from '/stamp.webp';

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
  const dresscodeRef  = useRef<HTMLDivElement>(null);
  const finalRef      = useRef<HTMLDivElement>(null);

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
    const dresscode = dresscodeRef.current;
    const final     = finalRef.current;

    if (!wrapper    || 
        !invitation || 
        !itinerary  || 
        !frontpage  ||
        !final      ||
        !dresscode) return;

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
            } else if (entry.target === final){
               wrapper.setAttribute("data-scene", "final");
            } else if (entry.target === dresscode){
               wrapper.setAttribute("data-scene", "dresscode");
              }
          }
      });
      },
      { threshold: 0.7}
    );

      io.observe(frontpage);
      io.observe(invitation);
      io.observe(itinerary);
      io.observe(final);
      io.observe(dresscode);

    return () => io.disconnect();
  }, []);

  return (
    <>

          <div ref={bgWrapperRef} className={appStyle.bgWrapper} data-scene="frontpage">
            <div 
                className={`${appStyle.bgLayer} ${appStyle.bgFrontpage}`} 
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}frontpage.webp)` }}/>
            <div 
                className={`${appStyle.bgLayer} ${appStyle.bgInvitation}`} 
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}classy_background.webp)` }}/>
            <div 
                className={`${appStyle.bgLayer} ${appStyle.bgItinerary}`} 
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}itinerary_background.webp)` }}/>
            <div 
                className={`${appStyle.bgLayer} ${appStyle.bgDresscode}`} 
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}itinerary_background.webp)` }}/>
            <div 
                className={`${appStyle.bgLayer} ${appStyle.bgFinal}`} 
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}frontpage.webp)` }}/>
          
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
              <img src={envelopeImg} alt="envelope image"  className={appStyle.invitationImg1} />
              <img src={stampImg} alt="stamp image"  className={appStyle.invitationImg2} />
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

          <div className={appStyle.parallaxVersicle}>

            <div style={{top:'25%'}} className={appStyle.scrollElements}>
              <span className={appStyle.countdownHeader}>Cada vez falta menos</span>
              <Countdown/>
            </div>

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

          <div ref={dresscodeRef} className={appStyle.parallaxDressCode}>
            <div className={appStyle.scrollElements}> 
              <Itinerary/>
            </div>
          </div>

          <div ref={finalRef} className={appStyle.parallaxDressCode}>
            <div className={appStyle.scrollElements}> 
              <Itinerary/>
            </div>
          </div>

    </> 
  );
}

export default App;