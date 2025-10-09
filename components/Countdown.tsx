import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import countStyle from './Countdown.module.css';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 70,
  strokeWidth: 5
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

const Countdown = () =>{
    const targetDate = new Date("2025-12-14T17:00:00");
    const now = new Date();
    const deltaSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000);

    const days = Math.ceil(deltaSeconds / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <>
            <div className={countStyle.mainContainer}>
                <CountdownCircleTimer
                    {...timerProps}
                    colors='#B3B3B3'
                    duration={daysDuration}
                    initialRemainingTime={deltaSeconds}
                >
                    {({ elapsedTime }) => (
                    <span className={countStyle.timeFormat} style={{ color : '#3B3B3B'}}>
                        <span className={countStyle.number}>{getTimeDays(daysDuration - elapsedTime)}</span>
                        <span className={countStyle.label}>DÍAS</span>
                    </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#6CA9A8"
                    duration={daySeconds}
                    initialRemainingTime={deltaSeconds % daySeconds}
                    onComplete={(totalElapsedTime) => ({
                    shouldRepeat: deltaSeconds - totalElapsedTime > hourSeconds })}
                >
                    {({ elapsedTime }) => (
                    <span className={countStyle.timeFormat} style={{ color : '#377372' }}>
                        <span className={countStyle.number}>{getTimeHours(daySeconds - elapsedTime)}</span>
                        <span className={countStyle.label}>HORAS</span>
                    </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#6A8FCF"
                    duration={hourSeconds}
                    initialRemainingTime={deltaSeconds % hourSeconds}
                    onComplete={(totalElapsedTime) => ({
                    shouldRepeat: deltaSeconds - totalElapsedTime > minuteSeconds })}
                >
                    {({ elapsedTime }) => (
                    <span className={countStyle.timeFormat} style={{ color : '#2B6DCC'}}>
                        <span className={countStyle.number}>{getTimeMinutes(hourSeconds - elapsedTime)}</span>
                        <span className={countStyle.label}>MINUTOS</span>
                    </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#D47E7C"
                    duration={minuteSeconds}
                    initialRemainingTime={deltaSeconds % minuteSeconds}
                    onComplete={(totalElapsedTime) => ({
                    shouldRepeat: deltaSeconds - totalElapsedTime > 0
                    })}
                >
                {({ elapsedTime }) => (
                <span className={countStyle.timeFormat} style={{ color : '#AB4B48'}}>
                    <span className={countStyle.number}>{getTimeSeconds(elapsedTime)}</span>
                    <span className={countStyle.label}>SEGUNDOS</span>
                </span>
                )}
            </CountdownCircleTimer>
            </div>
        
        </>
    )
}

export default Countdown;
