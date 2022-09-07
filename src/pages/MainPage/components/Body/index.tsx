import React from 'react'
/**
 * Components
 */
import { Checkbox } from "../../../../components/Checkbox/Checkbox"
import { PersonInformation } from "../PersonInformation"
/**
 * Types
 */
import { Props } from "./types"
/**
 * Expo
 */
export const MainPageList: React.FC<Props> = (
    {
        person: {
            id,
            name,
            second_name,
            age,
            status,
            child,
            city,
        },
        isDisabled,
        isChecked,
        onCheck
    }
) => {    
    
    const handleCheck = (checked: boolean) => {  
        onCheck(checked, id, status)
    }
    
    return (
        <div>
            <Checkbox
                label='Choose the current person' 
                value={isChecked} 
                onValueChange={handleCheck} 
                isDisabled={isDisabled}
             />
            <PersonInformation 
                id={id}
                name={name}
                second_name={second_name}
                age={age}
                status={status}
                child={child}
                city={city}
            />
        </div>
    )
}