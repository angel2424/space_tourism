import useFetch from "./useFetch";
import Destinations from "./components/destinations/Destinations";
import { useState } from "react";

const Destination = (props) => {
    const [id, setId] = useState(1)
    const { data, error, isPending } = useFetch('https://angel2424.github.io/api/data.json');

    const handleClick = (newId) => {
        return setId(newId);
    }

    return ( 
        <div className="destination">
            <h3 className="destination__heading"><span>01</span> Pick your destination </h3>
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div>}
            { data && <Destinations 
                handleClick={handleClick} 
                data={data.destinations[id - 1]}
                id={id}
            />}
        </div>
    );
}
 
export default Destination;