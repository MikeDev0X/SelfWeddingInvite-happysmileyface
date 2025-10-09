import dressStyle from './Dresscode.module.css';
import groomImg   from '/groom.webp';
import brideImg   from '/bride.webp';

const Dresscode = () =>{


    return(
        <>
            <div className={dressStyle.mainContainer}>
                <div className={dressStyle.groomBride}>
                    <img src={brideImg} alt="bride image"  style={{width:'5em'}}/>
                    <img src={groomImg} alt="groom image"  style={{width:'5em'}}/>
                </div>
                <span className={dressStyle.mainTitle}>Dress code</span>
                <span className={dressStyle.subtitle}>Formal. Queremos que te veas increíble, no incómodo. La corbata es opcional.</span>
                <span className={dressStyle.subtitle}>Blanco reservado para la novia.</span>
            </div>
        
        </>
    )
}

export default Dresscode;