import { TPerson } from "../../types"

export const getOpenedPersonsStatus = (mockPerson: TPerson[]) => { 
    return mockPerson.reduce((acc: string[], person: TPerson) => {
        if(person.status === 'open'){
            acc.push(person.id)
        }
        return acc
    },[])
}

export const getClosedPeople = (mockPerson: TPerson[]) => {
    return mockPerson.reduce((acc: string[], person: TPerson) => {
        if(person.status === 'closed'){
            acc.push(person.id)
        }
        return acc
    }, [])   
}