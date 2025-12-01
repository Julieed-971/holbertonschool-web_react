import React from 'react';
import './CourseList.css'
import CourseListRow from "./CourseListRow";
import withLogging from '../HOC/WithLogging';

class CourseList extends React.Component {
    static defaultProps = {
        courses: []
    }
    render () {
        const { courses }= this.props
        if (courses.length === 0) {
        return (
            <table id="CourseList">
                <thead>
                    <CourseListRow textFirstCell="No course available yet" isHeader={true} />
                </thead>
            </table>
        )
    } else {
        return (
            <table id="CourseList">
                <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <CourseListRow 
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit}
                            isHeader={false}
                        />
                    ))}
                </tbody>
            </table>
        )
    }
}
}
export default withLogging(CourseList)