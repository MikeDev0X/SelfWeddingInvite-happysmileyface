import MusicButtonStyle from './MusicButton.module.css';
//images
import volumeImg from '/volume.webp';
import muteImg from '/mute.webp';
//Sound
import useSound from "use-sound";
import mainTrack from '../src/assets/soundtracks/mainSoundtrack.mp3';
import { useState } from 'react';

const MusicButton = () =>{
    const [started, setStarted] = useState(false);
    const [volume, setVolume] = useState(muteImg);

    const [play, { sound }] = useSound(mainTrack, {
        volume: 1,
        playbackRate: 1,
        loop: true,
    });

  const handleClick = () => {
    if (volume === muteImg) {
        if(started === false){
            setStarted(true);
            play();
        }
        else{
            unmuteSound();
        }
        setVolume(volumeImg);
    } 
    else {
        setVolume(muteImg);
        muteSound();
    }
  };

    const muteSound = () => sound?.mute(true);
    const unmuteSound = () => sound?.mute(false);

    return(
        <>
            <div className={MusicButtonStyle.floatContainer} onClick={() => handleClick()}>
                <img 
                    src={volume} 
                    alt='Music Button' 
                    style={{width : `${volume === muteImg ? '65%' : '57%'}`}} />
            </div>
        
        </>
    )
}

export default MusicButton;