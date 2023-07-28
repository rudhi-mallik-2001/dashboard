import { configureStore } from "@reduxjs/toolkit";
import AddContactSlices from "./Slices/AddContactSlices";
const store = configureStore({
    reducer: {
        contacts: AddContactSlices
    },
});

export default store;