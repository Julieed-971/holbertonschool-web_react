interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

 class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
 }

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    } 
    workTeacherTasks(): string {
        return "Getting to work";
    } 
}

const createEmployee = (salary: number | string): Director | Teacher => {
    if (typeof(salary) === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

const emp1 = createEmployee(200);
console.log(emp1 instanceof Teacher ? "Teacher" : "Director");

const emp2 = createEmployee(1000);
console.log(emp2 instanceof Teacher ? "Teacher" : "Director");

const emp3 = createEmployee('$500');
console.log(emp3 instanceof Teacher ? "Teacher" : "Director");

