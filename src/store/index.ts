import { configureStore } from "@reduxjs/toolkit";
import  personsSlice  from "./slices/persons.slices";

export const store = configureStore(
    {
        reducer: {
            [personsSlice.name] : personsSlice.reducer
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat()
    }

)