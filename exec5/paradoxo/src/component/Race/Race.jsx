import { useState, useEffect } from 'react';
import './Race.css'


const Race = () => {
 const [aquilesPosition, setAquilesPosition] = useState(0);
 const [tartarugaPosition, setTartarugaPosition] = useState(0);
 const [winner, setWinner] = useState('');
 const [racing, setRacing] = useState(false);

 useEffect(() => {
    let interval;
    if (racing) {
      interval = setInterval(() => {
        const newTartarugaPosition = tartarugaPosition + 10;
        const newAquilesPosition = tartarugaPosition;

        if (newTartarugaPosition > 100) {
          setWinner('Tartaruga');
          setRacing(false);
        } else if (newAquilesPosition > 100) {
          setWinner('Aquiles');
          setRacing(false);
        } else {
          setTartarugaPosition(newTartarugaPosition);
          setAquilesPosition(newAquilesPosition);
        }
      }, 1000);
    } else if (winner) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
 }, [aquilesPosition, tartarugaPosition, racing, winner]);

 const startRace = () => {
    setAquilesPosition(0);
    setTartarugaPosition(0);
    setWinner('');
    setRacing(true);
 };

 return (
    <div className="container">
      <h2>Paradoxo de Aquiles e a Tartaruga</h2>
      <div>
        <div>
          <h3>Aquiles</h3>
          <div className="progressbarContainer">
            <progress className="progressbar" value={aquilesPosition} max="100" />
            <p>{aquilesPosition}</p>
            <p>metros</p>
          </div>
        </div>
        <div>
          <h3>Tartaruga</h3>
          <div className="progressbarContainer">
            <progress className="progressbar" value={tartarugaPosition} max="100" />
            <p>{tartarugaPosition}</p>
            <p>metros</p>
          </div>
        </div>
      </div>
      {!racing && <button onClick={startRace} className="btn">Start the race</button>}
      {
        winner && 
        <div className="winner"> 
            <h1>{winner} wins!</h1> 
            <p>...Or not?</p>
        </div>  
    }
    </div>
 );
};

export default Race;