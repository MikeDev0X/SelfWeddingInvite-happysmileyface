import reserveStyle from './Reserve.module.css';
import rsvpImg from '/rsvp.webp'

const Reserve = () => {

  const phoneNumber = "527776147227";
  const message = "¡Hola! Me gustaría confirmar mi asistencia a tu boda este 14 de Diciembre";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

    return(
        <>
            <div className={reserveStyle.mainContainer}>
                <span className={reserveStyle.mainTitle}>
                    Rsvp
                </span>
                <img    src={rsvpImg}
                        alt="rsvp image" 
                        style={{width:'9em', paddingTop: '0.5em', paddingBottom: '0.5em'}}/>
                <span className={reserveStyle.subtitle} style={{paddingBottom:'1em'}}>
                    Tu confirmación de asistencia es muy importante para nosotros.
                    Nota: Los pases son personales, por favor confirma por cada invitado.
                </span>
                <div className={reserveStyle.reserveButton} onClick={()=> openWhatsApp()}>
                    <span className={reserveStyle.subtitle}>
                        Confirma aquí
                    </span>
                </div>
            </div>
        </>
    )
}

export default Reserve;