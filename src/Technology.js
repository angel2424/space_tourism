import { useState } from "react";
import Technologies from "./components/technologies/Technologies";
import useFetch from "./useFetch";



const Technology = () => {
    const [id, setId] = useState(1)
    const { data, error, isPending } = useFetch('https://angel2424.github.io/api/data.json');

    const handleClick = (newId) => {
        return setId(newId);
    }

    return ( 
        <div className="technology">
            <h3 className="technology__heading"><span>03</span> Space Launch 101 </h3>
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div> }
            { data && <Technologies
                handleClick={handleClick} 
                data={data.technology[id - 1]}
                id={id}
            />}
        </div>
    );
}
 
export default Technology;