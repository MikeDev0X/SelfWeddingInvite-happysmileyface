// Carousel imports
import { useState, useEffect } from "react";
import "./Carousel.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const imageList = Array.from({ length: 15 }, (_, i) => 
  `${import.meta.env.BASE_URL}carousel${i + 1}.webp`
);

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      requestAnimationFrame(() => setLoaded(true));
    },
    defaultAnimation: {
      duration: 400,
      easing: t => 1 - Math.pow(1 - t, 3),
    },
  });

  useEffect(() => {
    imageList.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded(prev => prev + 1);
      };
    });
  }, []);

  useEffect(() => {
    if (imagesLoaded === imageList.length && instanceRef.current) {
      instanceRef.current.update();
    }
  }, [imagesLoaded]);

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {imageList.map((src, i) => (
            <div
              key={i}
              className="keen-slider__slide number-slide"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "transform",
              }}
            />
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={e => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={e => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {Array.from({
            length: instanceRef.current.track.details.slides.length,
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={"dot" + (currentSlide === idx ? " active" : "")}
            />
          ))}
        </div>
      )}
    </>
  );
};

function Arrow({
  disabled,
  left,
  onClick,
}: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabledClass = disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={onClick}
      className={`arrow ${left ? "arrow--left" : "arrow--right"} ${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Carousel;