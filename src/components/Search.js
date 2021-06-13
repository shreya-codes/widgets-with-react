import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search=()=>{ 

    const[term , setTerm]=useState('');

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
            await axios.get('https://en.wikipedia.org/w/api.php',{
            params: {
                action:'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearchh:term,
            },

        });
        };
        search();
        
    },[term])    

    
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