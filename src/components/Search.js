import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search=()=>{ 

    const [term , setTerm]=useState('');
    const [results,setResults] =useState([]);

    console.log(results);
    // console.log("I only run with every render")

    // useEffect(()=>{
    //     console.log("I only run once");
    // },[ ])
    // useEffect(()=>{
    //     console.log("I  run after every render and at initial ender");
    // })
    // useEffect(()=>{
    //     console.log("I  run after every render and at initial ender and chnge of data");
    // },[term])

    useEffect(()=>{
       const search=async()=>{
           const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
            params: {
                action:'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearch:term, 
            },

        });
        setResults(data.query.search);
        };
        if (term){
        search();
        }
    },[term]);
    
    const renderedResults = results.map(()=>{

    });

    
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input  
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    className="input"
                    />
                    

                </div>
            </div>
        </div>
       
        
    );

};

export default Search;