import { useHistory } from "react-router";

const Home = () => {
    const history = useHistory();

    return ( 
        <div className="home">
            <div className="home__description">
                <h2 className="home__subtitle">So you want to travel to</h2>
                <h1 className="home__title">Space</h1>
                <p className="home__paragraph">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <div className="home__cta">
                <button onClick={() => history.push('/destination')} className="home__explore">Explore</button>
            </div>
        </div>
    );
}
 
export default Home;