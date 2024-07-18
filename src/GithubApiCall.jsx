import { useEffect, useState } from "react"
import SearchForm from "./searchForm"
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios'

const api_url = 'https://api.github.com/users'

export default function GithubApiCall(){
    let [username , setUsername] = useState('AmanMishra2003')
    let [data, setData] = useState({name:'',image:''})
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchProfile(){
            const response  = await axios(`${api_url}/${username}`)
            const requiredResponse  = {
                name:response.data.name,
                image:response.data.avatar_url
            }
            setData(requiredResponse)
            setLoading(false)
        }
        fetchProfile()
    },[username])

    function searchUsername(username){
        setUsername(username)
        setLoading(true)
    }


    return(
        <>
        <SearchForm search={searchUsername}/>
        <ClipLoader
            color='white'
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        {
            !loading
            &&
            <div>
                <img src={data.image} alt="" />
                <p>{data.name}</p>
            </div>
        }
        </>
    )
}