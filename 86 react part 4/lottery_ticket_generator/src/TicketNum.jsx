import "./TicketNum.css"

export default function TicketNum (props){  // {num} is also valid
    const num = props.num
    return (
        <span className="TicketNum">{num}</span>
    )
}