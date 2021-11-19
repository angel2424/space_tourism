const Technologies = ( {handleClick, id, data} ) => {

    return ( 
        <div className="technologies">
            <div className="technologies__info">
                <ul className="technologies__nav">
                    <li 
                        className={id === 1 ? 'technologies--active' : ''} 
                        onClick={() => handleClick(1)}> 1
                    </li>
                    <li 
                        className={id === 2 ? 'technologies--active' : ''} 
                        onClick={() => handleClick(2)}> 2 
                    </li>
                    <li 
                        className={id === 3 ? 'technologies--active' : ''} 
                        onClick={() => handleClick(3)}> 3
                    </li>
                </ul>
                <div className="technologies__description">
                    <h3 className="technologies__terminology">The Terminology...</h3>
                    <h2 className="technologies__name">{data.name}</h2>
                    <p className="technologies__paragraph">{data.description}</p>
                </div>
            </div>
            <img className="technologies__img" src={window.innerWidth < 1200 ? data.images.landscape : data.images.portrait} alt="" />
        </div>
    );
}
 
export default Technologies;