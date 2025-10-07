import itinStyle from './ItineraryStyle.module.css';
//Images
import glassImg from '/glass.webp';
import ringsImg from '/rings.webp';
import menuImg  from '/menu.webp';
import partyImg from '/party.webp';
import cakeImg  from '/cake.webp';

const Itinerary = () =>{

return(
    <>
        <div className={itinStyle.mainContainer}>
            <span 
                className={itinStyle.mainTitle}
                style = {{fontSize:'1.4em'}}>
                    Itinerario
            </span>
            <div className={itinStyle.mainWrap}>
                <div className={itinStyle.linesContainer}> {/*lines and dots* */}
                    <br />
                    <div className={itinStyle.dot}> 
                        {/*dot* */}
                    </div>
                    <div className={itinStyle.line}>
                        {/*line* */}
                    </div>
                    <div className={itinStyle.dot}> 
                        {/*dot* */}
                    </div>
                    <div className={itinStyle.line}>
                        {/*line* */}
                    </div><div className={itinStyle.dot}> 
                        {/*dot* */}
                    </div>
                    <div className={itinStyle.line}>
                        {/*line* */}
                    </div><div className={itinStyle.dot}> 
                        {/*dot* */}
                    </div>
                    <div className={itinStyle.line}>
                        {/*line* */}
                    </div><div className={itinStyle.dot}> 
                        {/*dot* */}
                    </div>
                    <br /><br />
                </div>
                <div> {/**images and text */}
                    <div className={itinStyle.imgInfoContainer}>
                        <img src={glassImg} alt="glass image" className={itinStyle.iconStyle}/>
                        <div className={itinStyle.infoContainer}>
                            <div className={itinStyle.title}>Recepción</div>
                            <div className={itinStyle.subtitle}>
                                Coctél de bienvenida
                                <br />
                                5:00 PM
                            </div>
                        </div>
                    </div>
                    <div className={itinStyle.imgInfoContainer}>
                        <img src={ringsImg} alt="rings image" className={itinStyle.iconStyle}/>
                        <div className={itinStyle.infoContainer}>
                            <div className={itinStyle.title}>Ceremonia</div>
                            <div className={itinStyle.subtitle}>
                                Jardín Rosa Zafiro
                                <br />
                                5:30 PM
                            </div>
                        </div>
                    </div>
                    <div className={itinStyle.imgInfoContainer}>
                        <img src={menuImg} alt="menu image" className={itinStyle.iconStyle}/>
                        <div className={itinStyle.infoContainer}>
                            <div className={itinStyle.title}>Cena</div>
                            <div className={itinStyle.subtitle}>
                                Banquete de tres tiempos
                                <br />
                                6:30 PM
                            </div>
                        </div>
                    </div>
                    <div className={itinStyle.imgInfoContainer}>
                        <img src={partyImg} alt="party image" className={itinStyle.iconStyle}/>
                        <div className={itinStyle.infoContainer}>
                            <div className={itinStyle.title}>Celebración</div>
                            <div className={itinStyle.subtitle}>
                                Let's party
                                <br />
                                8:00 PM
                            </div>
                        </div>
                    </div>
                    <div className={itinStyle.imgInfoContainer}>
                        <img src={cakeImg} alt="cake image" className={itinStyle.iconStyle}/>
                        <div className={itinStyle.infoContainer}>
                            <div className={itinStyle.title}>Pastel</div>
                            <div className={itinStyle.subtitle}>
                                Corte del pastel
                                <br />
                                10:00 PM
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
)

}

export default Itinerary;