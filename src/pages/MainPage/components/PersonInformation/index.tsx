import React from 'react'
/**
 * Types
 */
import { TPropsPersonInformation } from './types'
/**
 * Assets
 */
import './style.css'
/**
 * Expo
 */
export const PersonInformation: React.FC<TPropsPersonInformation> = ({
    id,
    name,
    second_name,
    age,
    status,
    child,
    city,
}) => {
    return(
        <div className='person-information-wrapper'>
            <div>
                <p>Name</p>
                <p>Second name</p>
                <p>age</p>
                <p>status</p>
                <p>child</p>
                <p>city</p>
            </div>
            <div>
                <p>{name}</p>
                <p>{second_name}</p>
                <p>{age}</p>
                <p>{status}</p>
                <p>{child.toString()}</p>
                <p>{city}</p>
            </div>
        </div>
        
    )
}