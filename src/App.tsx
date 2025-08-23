import { useEffect, useRef } from "react";
import appStyle from "./App.module.css";
import Invitation from '../components/Invitation';
import Itinerary from '../components/Itinerary';

export default function ParallaxPage() {
  const invitationRef = useRef<HTMLDivElement>(null);
  const frontpageRef  = useRef<HTMLDivElement>(null);
  const itineraryRef  = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--real-vh", `${vh}px`);
  }, []);

  const bgWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
          <img src="/stamp.png" alt="envelope image"  className={appStyle.invitationImg2} />
          <div className={appStyle.invitationImg3}>
            <Invitation/>
          </div>
        </div>
      </div>

      <div ref={itineraryRef} className={appStyle.parallaxItinerary}>
        <div className={appStyle.scrollItinerary}> 
          <Itinerary/>
        </div>
      </div>
    </>
  );
}
