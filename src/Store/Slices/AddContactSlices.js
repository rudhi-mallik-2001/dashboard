import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    contacts:localStorage.getItem("contact")
    ? JSON.parse(localStorage.getItem("contact"))
    : [],
    error: '',
}


// create an slices for redux store
const AddContactSlices = createSlice({
    name: "addContact",
    initialState,
    reducers: {
        addContact(state, action) {
            // checking contact is present in store or not
            const existingIndex = state.contacts.findIndex(
                (item) => item.phone === action.payload.phone
            );
            if (existingIndex < 0) {
                state.contacts.push(action.payload);
                toast.success("Contact added ", {
                    position: "bottom-left",
                });
                localStorage.setItem("contact", JSON.stringify(state.contacts));
                
            }else{
                toast.error("contact is present", {
                    position: "bottom-left",
                });
            }
        },
    }
})
export const { addContact } = AddContactSlices.actions;
export default AddContactSlices.reducer
