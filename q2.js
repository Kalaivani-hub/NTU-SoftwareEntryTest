/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/

let patients = [];
patients.push("Nanmaaran");
patients.push("Narkalai");
patients.push("Tenkavi");
function listPatient() {
    console.log("Patient Names:");
    patients.forEach(patient => {
        console.log(patient);
    });
}