import giftStyle from './GiftsTable.module.css';
import searsImg from '/sears_logo.webp';
import envelopeMoneyImg from '/envelope_money.webp';
import giftImage    from '/gift.webp';

const GiftsTable = () =>{

    const handleClick = () =>{
        window.open('https://www.sears.com.mx/Mesa-de-Regalos/214701/te-invito-a-mi-boda-miguel-elisua', 
            '_blank');
    }

    return(
        <>
            <div className={giftStyle.mainContainer}>

                <span style={{paddingBottom:'0.5em'}} className={giftStyle.mainTitle}>Mesa de regalos</span>
                <span className={giftStyle.subtitle}>
                    Nuestro mayor regalo es contar con su compañia, 
                    sin embargo, 
                    si desean obsequiarnos algo a continuación les proporcionamos los datos.
                </span>
                    <br />
                <span className={giftStyle.subtitle} style={{fontWeight:'bold'}}>Cuenta CLABE NU:</span>
                <span className={giftStyle.subtitle}>Miguel Jiménez Padilla</span>
                <span className={giftStyle.subtitle}>6381 8001 0170 9987 48</span>
                    <br />
                <span className={giftStyle.subtitle} style={{fontWeight:'bold'}}>¡Lluvia de sobres!</span>
                    <img   src={envelopeMoneyImg} 
                           alt="env money image" 
                           className={giftStyle.envelopeImgStyle} 
                            />
                <span className={giftStyle.subtitle}>La tradición de dar dinero en efectivo el día del evento</span>
                    <br />
                <span className={giftStyle.subtitle} style={{fontWeight:'bold'}}>Mesa de regalos de SEARS</span>

                <div className={giftStyle.amazonContainer}>
                    <img   src={searsImg} 
                           alt="amazon image" 
                           style={{width:'4em'}}  
                            />
                    <div className={giftStyle.amazonButton} onClick={handleClick}>
                        <span className={giftStyle.buttonText}>Ir a Mesa</span>
                    </div>
                </div>
                <img    src={giftImage}
                        alt="gift image" 
                        className={giftStyle.giftImgStyle}/>
            
            </div>
        </>
    )
}

export default GiftsTable;