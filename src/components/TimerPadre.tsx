import { Timer } from "./Timer";
import { useState } from 'react';


export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000)
  return (
    <div>
        <span>Milisegundos { 1000 } </span>
        <br/>

        <button className="btn brn-outline-success"
        onClick={() => setMilisegundos(1000) }>
            1000
        </button>

        <button className="btn brn-outline-success"
         onClick={() => setMilisegundos(5000) }>
            2000
        </button>

        <Timer milisegundos={ milisegundos } />
    </div>
  )
}
