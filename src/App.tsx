import { useEffect, useRef } from "react";
import appStyle from "./App.module.css";
import Invitation from '../components/Invitation';

export default function ParallaxPage() {
  const invitationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--real-vh", `${vh}px`);
  }, []);

  const bgWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const target = invitationRef.current;
    const wrapper = bgWrapperRef.current;
    if (!target || !wrapper) return;

    wrapper.setAttribute("data-scene", "frontpage");

    const io = new IntersectionObserver(
      ([entry]) => {
        wrapper.setAttribute(
          "data-scene",
          entry.isIntersecting ? "invitation" : "frontpage"
        );
      },
      { threshold: 0.7 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={bgWrapperRef} className={appStyle.bgWrapper} data-scene="frontpage">
        <div className={`${appStyle.bgLayer} ${appStyle.bgFrontpage}`} />
        <div className={`${appStyle.bgLayer} ${appStyle.bgInvitation}`} />
      </div>

      <div className={appStyle.parallax}>
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
    </>
  );
}
