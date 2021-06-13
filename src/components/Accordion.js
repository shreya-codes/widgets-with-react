import React,{useState} from 'react';//getting useState function from react lib 


const Accordion = ({items})=>{
    const[activeIndex,setActiveIndex]=useState(null); //initializes a new piece of states a way of refrencing element inside of an array
    /* same as writing
    const things=useState(null);
    const activeIndex=things[0];  //piece of variable that we are trying to keep track of 
    const setActiveIndex= things[1]; //fucntion to updatea a piece of state
    */ 
    const onTitleClick=(index)=>{
        setActiveIndex(index);
    }; //helper function
    const renderedItems = items.map((item,index)=>{
        const active =index===activeIndex?'active':'';
        return(
            <React.Fragment key={item.title}>
                <div className={ `title ${active}` }
                onClick={()=>onTitleClick(index)} >
                    <i className="dropdown icon"></i>
                    {item.title}
                    
                </div>
                <div className={ `content ${active}`}>
                    <p>
                        {item.content}
                    </p>
                </div>

            
            </React.Fragment>
        );
        
    });
    return(
        <div className="ui styled accordion">
            {renderedItems}
           
        </div>
    );
};

export default Accordion;