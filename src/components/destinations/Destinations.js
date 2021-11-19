const Destinations = ({handleClick, data, id}) => {

    return ( 
        <div className="destinations">
            <img className="destination__img" src={data.images.png} alt="Moon" />
            <div className="destination__info">
                <ul className="destination__nav">
                    <li 
                        className={id === 1 ? 'destination--active' : ''} 
                        onClick={() => handleClick(1)}>
                        Moon
                    </li>
                    <li 
                        className={id === 2 ? 'destination--active' : ''} 
                        onClick={() => handleClick(2)}>
                        Mars
                    </li>
                    <li 
                        className={id === 3 ? 'destination--active' : ''} 
                        onClick={() => handleClick(3)}>
                        Europa
                    </li>
                    <li 
                        className={id === 4 ? 'destination--active' : ''} 
                        onClick={() => handleClick(4)}>
                        Titan
                    </li>
                </ul>
                <h2 className="destination__title">{data.name}</h2>
                <p className="destination__description">{data.description}</p>
                <span className="destination__line"></span>
                <div className="destination__stats">
                    <div className="destination__distance">
                        <p className="stats__p">Avg. Distance</p>
                        <h3 className="stats__h3">{data.distance}</h3>
                    </div>
                    <div className="destination__time">
                        <p className="stats__p">Est. Travel time</p>
                        <h3 className="stats__h3">{data.travel}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Destinations;