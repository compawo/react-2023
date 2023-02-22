import {createSlice} from "@reduxjs/toolkit";

const initialState={
    users:[],
    errors:null,
    loading:null,
    selectedUser: null
};
const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        getAll:(state, action)=>{
            state.users = action.payload
        },
        setSelectedUser:(state, action)=>{
            state.selectedUser = action.payload
        }
    }

});

const {reducer:userReducer,actions:{getAll, setSelectedUser}} = userSlice;

const userActions = {
    setSelectedUser,
    getAll
}

export {
    userReducer,
    userActions
}
