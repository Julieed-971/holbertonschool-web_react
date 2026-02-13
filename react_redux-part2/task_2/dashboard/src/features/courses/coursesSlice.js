import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/authSlice';
import axios from 'axios';

const initialState = {
    courses: [],
};

const API_BASE_URL = "http://localhost:5173";

const ENDPOINTS = { courses: `${API_BASE_URL}/courses.json` };

const fetchCourses = createAsyncThunk(
    'courses/fetchCourses',
    async () => {
        const response = await axios.get(ENDPOINTS.courses);

        const fetchedCourses = response.data.courses;
        return fetchedCourses;
    }
);

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        // selectCourse: Takes a course id and 
        // sets isSelected to true for the corresponding course
        selectCourse: (state, { payload }) => {
            const course = state.courses.find(
                (course => course.id == payload))
            if (course) {
                course.isSelected = true;
            }
        },
        // unSelectCourse: Takes a course id 
        // and sets isSelected to false for the corresponding course
        unSelectCourse: (state, { payload }) => {
            const course = state.courses.find(
                (course => course.id == payload))
            if (course) {
                course.isSelected = false;
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            // Iterate through courses and add a isSelected state defaulting to false
            state.courses = action.payload.map(course => ({...course, isSelected: false}));
        });
        builder.addCase(logout, (state) => {
            state.courses = [];
        });
    }
});

export { fetchCourses };
export const { selectCourse, unSelectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;