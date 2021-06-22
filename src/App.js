import React,{useState} from 'react';
// import Accorrdion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';


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
const options =[
    {
        label:'The color red',
        value:'red'
    },
    {
        label:'The color green',
        value:'green'
    },
    {
        label:'A shade of blue',
        value:'blue'
    }
];

export default()=>{
    const[selected,setSelected]=useState(options[0]);
    return (<div>
        < Dropdown 
        selected={selected}
        onSelectedChange={setSelected}
         options={options}/>
        {/* <Search/> */}
        {/* <Accorrdion items={items} /> */}
    </div>); 
};