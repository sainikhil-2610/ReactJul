import React, { useState } from 'react'

export default function Count() {
    // Count = 0; it is a Constant One
     const[c , setCount] = useState(0); 
    useEffect(()=>{
        setTimeout(()=>{
            setCount((c)=> c + 1)
        },1000);
    });
    return ( 
    <div> 
        <h1>The count is {c}</h1> 
        </div> 
        ) 
    }
