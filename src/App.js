import React from 'react';
// import Accorrdion from './components/Accordion';
import Search from './components/Search';


const items =[
    {
        title:'What is React?' ,
        content:'React is a frontend javascript framework.'
    },
    {
        title:'Why use React?' ,
        content:'React is a favorite JS library among engieers.'
    },
    {
        title:'How do you use Rea ct?' ,
        content:'You use React by creating components'
    }
]


export default()=>{
    return (<div>
        <Search/>
        {/* <Accorrdion items={items} /> */}
    </div>); 
};