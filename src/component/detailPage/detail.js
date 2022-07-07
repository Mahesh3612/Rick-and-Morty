import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.css"
import {useNavigate} from "react-router-dom"

export function Detail(){
    const {id} = useParams();
    const [data,setData] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        getData()
    },[])

    async function getData(){
     let result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setData([result.data])
    }

    console.log(data)



    return <div>
        {data.map((e)=>{
            return <div className="container">
            <button className="button" onClick={()=>navigate("/")}>x</button>
    <div className="upper-box">
        <div><img src={e.image}/></div>
        <div className="info-box">
        <h2>{e.name}</h2>
        <h3>{e.status}-{e.species}</h3>
        </div>
    </div>
    <div className="lower-box">
        <div>
            <p>Gender</p>
            <h2>{e.gender}</h2>
            <br/>
            <p>Species</p>
            <h2>{e.species}</h2>
        </div>
        <div>
        <p>Location</p>
            <h2>{e.location.name}</h2>
            <br/>
            <p>Origin</p>
            <h2>{e.origin.name}</h2>
        </div>
    </div>

      
    </div>

        })}
    </div>
}