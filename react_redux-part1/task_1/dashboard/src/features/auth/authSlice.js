import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        email: '',
        password: '',
        isLoggedIn: false,
    },
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = { ...action.payload, isLoggedIn: true }
        },
        logout(state) {
            state.user = initialState.user
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer