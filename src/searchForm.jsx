import { useState } from "react";

export default function SearchForm({search}){
    let [value,setValue] = useState('');

    function setSearch(evt){
        setValue(evt.target.value)
    }
    function searchProfile(e){
        e.preventDefault()
        console.log(value)
        search(value)
    }

    return(
        <form action="" onSubmit={searchProfile}>
            <input type="text"
                name="search"
                id="search"
                value={value}
                placeholder="Search using Profile name"
                onChange={setSearch} />

            <button>Search</button>
        </form>
    )

}