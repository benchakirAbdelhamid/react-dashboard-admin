import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
    // test get url route
    const param = useParams()
    useEffect(()=>{
        console.log(param)
    },[param])
    return (
        <div>
            
        </div>
    );
}

export default Test;
