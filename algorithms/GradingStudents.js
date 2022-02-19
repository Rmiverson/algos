// given the initial value of grade for each of Sam's students, write code to automate the rounding process.
// if the difference between the grade and the next multiple of 5 is less than 3, round the grade up to the next multiple of 5
// if the value of grade is less than 38, no rounding occurs as the result will be a failing grade

// ex:
// grade = 84 round to 85 (85 - 84 is less than 3)
//  grade = 29 do not round (result is less than 40)
//  grade = 57 do not round (60 - 57 is 3 or higher)

const gradingStudents = (grades) => {
    let newGrades = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            newGrades[i] = grades[i]
        } else if (((Math.ceil(grades[i]/5)*5) - grades[i] ) < 3) {
            newGrades[i] = Math.ceil(grades[i]/5)*5
        } else {
            newGrades[i] = grades[i]
        }
    }
    console.log(newGrades)
    return newGrades
}

const testInput  = [73,67,38,33]

gradingStudents(testInput)