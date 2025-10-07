//Carousel imports
import { useState } from "react";
import "./Carousel.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState<boolean>(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        defaultAnimation: {
            duration: 300,
            easing: t => t < 0.5 
                ? 2 * t * t
                : -1 + (4 - 2 * t) * t
        }
    })

    return(
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel1.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel2.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel3.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel4.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel5.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel6.webp)`}}></div>                
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel7.webp)`}}></div>

                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel8.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel9.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel10.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel11.webp)`}}></div>                
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel12.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel13.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel14.webp)`}}></div>
                <div className="keen-slider__slide number-slide"
                     style={{backgroundImage: `url(${import.meta.env.BASE_URL}carousel15.webp)`}}></div>
                
                </div>
                {loaded && instanceRef.current && (
                <>
                    <Arrow
                    left
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                    />

                    <Arrow
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
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
                {[
                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => {
                    return (
                    <button
                        key={idx}
                        onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                        }}
                        className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                    )
                })}
                </div>
            )}


        </>
    )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default Carousel;