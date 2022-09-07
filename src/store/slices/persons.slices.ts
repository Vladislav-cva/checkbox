import { createSlice } from "@reduxjs/toolkit"
import { mockPerson } from "../../mock"

const initialState: {data: any[]} = {
    data: mockPerson
}

const personsSlice = createSlice({
    name: 'person', 
    initialState,
    reducers: {
        setPerson: () => {}
    },

     
})

export default personsSlice