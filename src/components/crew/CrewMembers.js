import { useEffect } from "react";

const CrewMembers = ( {id, data, handleClick}) => {
    useEffect(() => {
        console.log(id)
    })

    return ( 
        <div className="crew__members">
            <div className="crew__info">
                <div>
                    <h2 className="crew__role">{data.role}</h2>
                    <h3 className="crew__name">{data.name}</h3>
                    <p className="crew__bio">{data.bio}</p>
                </div>
                <div className="crew__nav">
                    <span 
                        className={id === 1 ? 'crew--active' : ''} 
                        onClick={() => handleClick(1)}>
                    </span>
                    <span 
                        className={id === 2 ? 'crew--active' : ''} 
                        onClick={() => handleClick(2)}>
                    </span>
                    <span 
                        className={id === 3 ? 'crew--active' : ''} 
                        onClick={() => handleClick(3)}>
                    </span>
                    <span 
                        className={id === 4 ? 'crew--active' : ''} 
                        onClick={() => handleClick(4)}>
                    </span>
                </div>
            </div>
            <img  className="crew__img" src={data.images.png} alt="" />
        </div>
     );
}
 
export default CrewMembers;