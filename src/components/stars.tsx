//import  User  from "../models/type";
//import { useState } from 'react';
import {Star} from './star';
import { nanoid } from 'nanoid';

interface Props {
 count: number; 
}

export function Stars(props: Props) {      
    const {count} = props;
    
    if(count < 1 || count > 5 || typeof(count) != "number") {
        return null;
    } 

    const starsElements = [];

    for (let i = 0; i < count; i += 1) {
        starsElements.push(<Star key={nanoid(10)} />);
    }
    
    return (
        <ul className='card-body-stars'>
            <li>{starsElements}</li>
        </ul>
    )
    
    
}