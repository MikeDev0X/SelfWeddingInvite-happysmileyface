import MusicButtonStyle from './MusicButton.module.css';
//images
import volumeImg from '/volume.webp';
import muteImg from '/mute.webp';
//Sound
//import useSound from "use-sound";
import mainTrack from '../src/assets/soundtracks/mainSoundtrack.mp3';
import { useState } from 'react';
import { Howl } from "howler";

type HowlInstance = InstanceType<typeof Howl>;

const MusicButton = () =>{
    const [started, setStarted] = useState(false);
    const [volume, setVolume] = useState(muteImg);
    const [sound, setSound] = useState<HowlInstance | null>(null);
    //const [trigger, setTrigger] = useState<number>(false);

  const handleClick = async () => {
/*     if(countTrigger < 1 && !started){
        alert()
    } */
    const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent);

    if(!started && sound === null && isIOS()){
        alert("Asegúrate de que tu dispositivo no esté en modo silencio para escuchar la invitación");
    }

    if(!started){
      const newSound = new Howl({
        src: [mainTrack],
        volume: 1,
        loop: true,
        html5: false,
      });

        console.log('Si lees esto te amo <3');

        newSound.play();
        setSound(newSound);
        setStarted(true);
        setVolume(volumeImg);

    }else{
        if(volume === muteImg){
            sound?.mute(false);
            setVolume(volumeImg);
        }else{
            sound?.mute(true); 
            setVolume(muteImg);
        }
    }
  };

    return(
        <>
            <div className={MusicButtonStyle.mainContainer}>
                
            <div className={MusicButtonStyle.floatContainer} onClick={() => handleClick()}>
                <img 
                    src={volume} 
                    alt='Music Button' 
                    style={{width : `${volume === muteImg ? '65%' : '57%'}`}} />
            </div>
            </div>
        
        </>
    )
}

export default MusicButton;