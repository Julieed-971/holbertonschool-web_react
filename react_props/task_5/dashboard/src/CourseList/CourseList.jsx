import './CourseList.css'
import CourseListRow from "./CourseListRow";

function CourseList({courses = []}) {
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

export default CourseList