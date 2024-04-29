import { useState } from "react";
import { searchForShows, searchForPeople} from "../api/tvmaze";


const Home = () => {

const [searchStr, setSearchStr] = useState("");
const [apiData, setApiData] = useState(null)
const [apiDataError, setApiDataError] = useState(null)
const [searchOption, setSearchOption] = useState("shows")

console.log(searchOption);

const onSearchInputChange = (ev) => {
    // console.log(ev.target.value);
    setSearchStr(ev.target.value)
}

const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
}



const onSearch = async (ev) => {
    ev.preventDefault();

    try {
        if (searchOption === "shows") {
            const result = await searchForShows(searchStr);
            setApiData(result)
        } if  (searchOption === "actors") {
            const result = await searchForShows(searchStr);
            setApiData(result)
        } else {
            const result = await searchForPeople(searchStr);
            setApiData(result)
        }

    } catch (error) {
        setApiDataError(error);
    }
 
}

const renderApiData = () => {
    if(apiDataError) {
        return <div>Error Occured: {apiDataError.message}</div>
    }
    if(apiData) {
        return apiData[0].show ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
                            : apiData.map(data => <div key={data.person.id}>{data.person.name}</div>)
    }

    return null;
}


// https://api.tvmaze.com/search/shows?q=spiderman


    return (
        <div>
            <form onSubmit={onSearch} >

            <input type="text" onChange={onSearchInputChange} />
            
            {/* radio buttons */}
            <label>Shows
                <input type="radio" name="search-options" value="shows" onChange={() => setSearchOption === "actors"} checked={searchOption === "shows"} onClick={onRadioChange}/>
            </label>

            <label>Actors
                <input type="radio" name="search-options" value="actors" onChange={ () => setSearchOption === "shows"} checked={searchOption === "actors"} onClick={onRadioChange}/>
            </label>

            {/* submit button */}
            <button type="submit" onClick={onSearch} >Search</button>
            </form>

            <div>
                {renderApiData()}
            </div>

        

        </div>
    )
}

export default Home;