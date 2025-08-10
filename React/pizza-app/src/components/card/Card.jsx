function Card({image , title , description})
{
    return(
        <div className="w-[270px] p-4 border-[2px] hover:-translate-y-3 shadow-lg border-solid border-gray">
            <img src={image} alt="" className="w-[100%]"/>
            <h2 className="font-semibold my-2">{title}</h2>
            <p>{description}</p>
            <button className="my-3 bg-green-600 w-[100%] p-2 rounded">View More</button>
        </div>
    )
}

export default Card;