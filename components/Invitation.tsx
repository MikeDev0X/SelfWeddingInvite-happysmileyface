import invitStyle from './Invitation.module.css';

const Invitation = () =>{

    return(
        <>
            <div className={invitStyle.mainContainer}>
                <span className={invitStyle.text} style={{fontSize: '0.9em',}}>
                    CON LA BENDICIÓN DE NUESTROS PADRES
                </span>

                <div className={invitStyle.namesHeader}>
                    <span className={invitStyle.text} style={{fontSize: '0.4em', width:'15em'}}>
                        MARGARITO RAFAEL JIMÉNEZ NAVARRETE <br />
                        CLAUDIA PADILLA CORREA
                    </span>
                    <span className={invitStyle.text} style={{fontSize: '0.4em', width:'15em'}}>
                        MAURICIO PÉREZ GARCÍA <br />    
                        ROSA ISELA GARCÍA TRUJILLO
                    </span>
                </div>

                <span className={invitStyle.italicsText} style={{fontSize: '2em', paddingTop: '0.6em'}}>
                    Miguel & Elisua
                </span>

                <span className={invitStyle.text} style={{fontSize: '0.7em', width:'19.5em', paddingTop: '0.6em'}}>
                    TENEMOS EL HONOR DE INVITARLOS A NUESTRA BODA QUE SE CELEBRA EL PRÓXIMO
                </span>

                <span className={invitStyle.italicsText} style={{fontSize: '1.3em', paddingTop: '0.6em'}}>
                    14.12.2025
                </span>

                <span className={invitStyle.text} style={{fontSize: '0.7em', width:'19.5em', paddingTop: '0.6em'}}>
                    EN PUNTO DE LAS 14:00 HRS EN EL JARDÍN ROSA ZAFIRO
                    <br /><br />
                </span>
                
            </div>
        
        </>
    )

}

export default Invitation;