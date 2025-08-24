import giftStyle from './GiftsTable.module.css';
import liverpoolImg from '../public/liverpool_icon.png';
import giftImage    from '../public/gift.png';

const GiftsTable = () =>{

    const handleClick = () =>{
        window.open('https://mesaderegalos.liverpool.com.mx/milistaderegalos/51747015', 
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
                <span className={giftStyle.subtitle}>Cuenta CLABE NU:</span>
                <span className={giftStyle.subtitle}>Miguel Jiménez Padilla</span>
                <span className={giftStyle.subtitle}>6381 8001 0170 9987 48</span>
                    <br />
                <span className={giftStyle.subtitle}>Mesa de regalos Liverpool</span>

                <div className={giftStyle.liverpoolContainer}>
                    <img   src={liverpoolImg} 
                           alt="liverpool image" 
                           style={{width:'4em'}}  
                            />
                    <div className={giftStyle.liverpoolButton} onClick={()=> handleClick()}>
                        <span className={giftStyle.buttonText}>Ir a Mesa</span>
                    </div>
                </div>
                <br />
                <img    src={giftImage}
                        alt="gift image" 
                        style={{width:'5em'}}/>
            
            </div>
        </>
    )
}

export default GiftsTable;