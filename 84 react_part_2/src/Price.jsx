import './Price.css'
export default function Price({ oldPrice, newPrice }) {
    return (
        <div className="Price">
            <span className='oldPrice'>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span className='newPrice'>{newPrice}</span>
        </div>
    )
}