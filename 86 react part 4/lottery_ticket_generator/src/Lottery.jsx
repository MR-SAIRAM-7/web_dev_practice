import { useState } from "react"
import "./Lottery.css"
import { genTicket, sum } from "./helper"
import Ticket from './Ticket'
import Button from "./Button"

export default function Lottery({ n=3, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let getTicket = () => {
        setTicket(genTicket(n))
    }

    return (
        <>
            <h1>{isWinning && "Congratulations You Won!!"}</h1>
            <div className="ticket">

                <h3>Lottery Game!</h3>
                <h3>
                    <Ticket ticket={ticket}/>
                </h3>
               <Button action={getTicket}></Button>
            </div>
        </>
    )
}