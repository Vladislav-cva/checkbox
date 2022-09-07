/**
 * Dependencies
 */
import React, { useCallback, useState } from "react";
/**
 * Mock
 */
import { mockPerson } from "../../mock";
/**
 * Types
 */
import { TPerson } from "../../types";
/** 
 * Components
 */
import { MainPageList } from "./components/Body";
import { PageHeader } from "./components/Header";
/**
 * Assets
 */
import './mainPage.css'
/**
 * Utils
 */
import { getOpenedPersonsStatus, getClosedPeople } from './utils'
/**
 * Expo
 */
export const MainPage: React.FC  = () => {
    const [openPerson, setOpenedPerson] = useState<any>(new Set())
    const [closedPerson, setClosedPerson] = useState<any>(new Set()) 
    
    const openedPersons = React.useMemo(() => getOpenedPersonsStatus(mockPerson), [mockPerson])
    const closedPersons = React.useMemo(() => getClosedPeople(mockPerson), [mockPerson])  
    
    const handleCleanChosenPersons = () => {
        const clean = new Set();
        setOpenedPerson(clean)
        setClosedPerson(clean)
    }
    
    const handleSelectAllPersons = (checked: boolean) => {
        let openedPersonsIds = new Set()
        let closedPersonsIds = new Set()
        
        if(checked){
            openedPersonsIds = new Set(openedPersons)
            closedPersonsIds = new Set(closedPersons)
        } 
       
        setOpenedPerson(openedPersonsIds)
        setClosedPerson(closedPersonsIds)
    }

    
    const handleSelectAllOpenedPersons = (checked: boolean) => {
        let allOpenedPersons = new Set()
    
        if(checked){
            allOpenedPersons = new Set(openedPersons)
        } 

        setOpenedPerson(allOpenedPersons)
    }

    const selectAllClosedPersons = React.useCallback((checked: boolean) => {
        let selectClosedPersonIds = new Set()
        
        if(checked){
            selectClosedPersonIds = new Set(closedPersons)
        } 

        setClosedPerson(selectClosedPersonIds)
    }, [])
    
    const handleSelectItemValue = (checked: boolean, id: string, status: string) => {
        const openedPersonsSet = new Set(openPerson)
        const closedPersons = new Set(closedPerson);

        if(checked && status === 'open'){ 
            openedPersonsSet.add(id)
        } else if (checked && status === 'closed'){
            closedPersons.add(id)
        } else {
            openedPersonsSet.delete(id)
            closedPersons.delete(id)
        }
        
        setClosedPerson(closedPersons)
        setOpenedPerson(openedPersonsSet)

    }

   
    
    return(
        <div className="main-page">
           <PageHeader
                onValueChange={handleSelectAllOpenedPersons}
                onChangeClosedPersons={selectAllClosedPersons}
                onClean={handleCleanChosenPersons}
                onSelectAll={handleSelectAllPersons}
                value={openPerson.size === openedPersons.length }

                closedPersonsValue={closedPerson.size === closedPersons.length}
                closedPersonsIndeterminate={Boolean(closedPerson.size && closedPerson.size < closedPersons.length )}

                indeterminate={Boolean(openPerson.size && openPerson.size < openedPersons.length)}              
             />

           {
                mockPerson.map((persons: TPerson) => (
                    <MainPageList
                        isDisabled={persons.status === 'deprecated'}
                        key={persons.id}
                        person={persons}
                        isChecked={openPerson.has(persons.id) || closedPerson.has(persons.id)}
                        onCheck={handleSelectItemValue}
                    />
                ))
           }
       
        </div>
    )
}