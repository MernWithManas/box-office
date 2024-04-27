import { useState } from "react";



const Home = () => {

const [searchStr, setSearchStr] = useState("");
const [result, setResult] = useState(null);

console.log(searchStr);

const onSearchInputChange = (ev) => {
    // console.log(ev.target.value);
    setSearchStr(ev.target.value)
}

const onSearch = async (ev) => {
    ev.preventDefault();

    const result = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
    const setResult =  await result.json()

    console.log(setResult);

}




// https://api.tvmaze.com/search/shows?q=spiderman


    return (
        <div>
            <form onSubmit={onSearch} >


            <input type="text" onChange={onSearchInputChange} />
            <button type="submit" onClick={onSearch} >Search</button>
            </form>

            <div>Search Result...</div>

            <ul>
                {setResult.map((key, data) => {
                    <li key={key}>{data.name}</li>
                })}
            </ul>

        </div>
    )
}

export default Home;