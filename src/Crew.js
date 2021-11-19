import { useState } from "react";
import CrewMembers from "./components/crew/CrewMembers";
import useFetch from "./useFetch";

const Crew = () => {
    const [id, setId] = useState(1)
    const { data, error, isPending } = useFetch('https://angel2424.github.io/api/data.json');

    const handleClick = (newId) => {
        return setId(newId);
    }

    return ( 
        <div className="crew">
            <h3 className="crew__heading"><span>02</span> Meet your crew </h3>
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div>}
            { data && <CrewMembers 
                handleClick={handleClick} 
                data={data.crew[id - 1]}
                id={id}
            />}
        </div>
    );
}
 
export default Crew;