import giftStyle from './GiftsTable.module.css';
import amazonImg from '/amazon_logo.webp';
import envelopeMoneyImg from '/envelope_money.webp';
import giftImage    from '/gift.webp';

const GiftsTable = () =>{

    const handleClick = () =>{
        window.open('https://www.amazon.com.mx/wedding/share/miki_eli_gift_table', 
            '_blank', 
            'noopener,noreferrer');
    }

    return(
        <>
            <div className={giftStyle.mainContainer}>

                <span style={{fontSize:'1.7em', paddingBottom:'0.5em'}} className={giftStyle.mainTitle}>Mesa de regalos</span>
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
                           style={{width:'4em', paddingTop: '0.5em', paddingBottom: '0.5em'}}  
                            />
                <span className={giftStyle.subtitle}>La tradición de dar dinero en efectivo el día del evento</span>
                    <br />
                <span className={giftStyle.subtitle} style={{fontWeight:'bold'}}>Mesa de regalos de Amazon</span>

                <div className={giftStyle.amazonContainer}>
                    <img   src={amazonImg} 
                           alt="amazon image" 
                           style={{width:'4em'}}  
                            />
                    <div className={giftStyle.amazonButton} onClick={()=> handleClick()}>
                        <span className={giftStyle.buttonText}>Ir a Mesa</span>
                    </div>
                </div>
                <img    src={giftImage}
                        alt="gift image" 
                        style={{width:'5em', paddingTop: '0.5em'}}/>
            
            </div>
        </>
    )
}

export default GiftsTable;