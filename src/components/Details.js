import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react/cjs/react.production.min';
import axios from 'axios';

function Details() {
    const data=localStorage('user')
    console.log(data);

    return (
        <div>
            
            details
        </div>
    )
}

export default Details
