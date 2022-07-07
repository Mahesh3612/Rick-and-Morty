const { useEffect } = require("react");
const { useState } = require("react");
const {Link} = require("react-router-dom")
const axios = require("axios")

// import './getData.css';
require("./getData.css")


const page_no = 1;

export function Charecters (){
    const [data,setData] = useState([]);
    const [page,setPage] = useState(page_no)
    const [filterVal,setFilterVal] = useState("")
    const [searchApiData,setSearchApiData] = useState([])

    useEffect(()=>{
       getData()
    },[page])

    const scrollToEnd = ()=>{
        setPage(page + 1)
    }

    window.onscroll = function(){
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            scrollToEnd()
        }
    }

    const getData = async()=>{
        let result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        setData([...data,...result.data.results])
        setSearchApiData([...searchApiData,...result.data.results])
    }

    async function handleChange(e){
        if(e.target.value === ""){
            setData(data)
        }else{
           const filterResult =  searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
           setData(filterResult)
        }
        setFilterVal(e.target.value)
    }


    return <div>
    <div className="search-div" placeholder="search" value={filterVal} onInput={(e)=>handleChange(e)}><input/> <button>Search</button></div>
{data.map((e)=>{
    return <Link  key={e.id} to={`/detail/${e.id}`} id="link"><div className="card">
        <img className="listImg" src={e.image} alt="img" /> <span className="name">{e.name}</span>
        <h5>{e.status}-{e.species}</h5>
    </div></Link>
})}
    </div>

}