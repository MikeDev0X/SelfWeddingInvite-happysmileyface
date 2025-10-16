import MusicButtonStyle from './MusicButton.module.css';
//images
import volumeImg from '/volume.webp';
import muteImg from '/mute.webp';
//Sound
//import useSound from "use-sound";
import mainTrack from '../src/assets/soundtracks/mainSoundtrack.mp3';
import { useState } from 'react';
import { Howl, Howler } from "howler";

type HowlInstance = InstanceType<typeof Howl>;

const MusicButton = () =>{
    const [started, setStarted] = useState(false);
    const [volume, setVolume] = useState(muteImg);
    const [sound, setSound] = useState<HowlInstance | null>(null);

/*     const [play, { sound }] = useSound(mainTrack, {
        volume: 1,
        playbackRate: 1,
        loop: true,
    }); */

  const handleClick = async () => {
    
    if (Howler.ctx.state === "suspended") {
      await Howler.ctx.resume();
    }

    if(!started){
      const newSound = new Howl({
        src: [mainTrack],
        volume: 1,
        loop: true,
      });

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

  console.log('Si lees esto te amo <3');

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