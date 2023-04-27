/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

const dog = {
    petName: "Bobby",
    age: 3,
  };
  
  //dog["breed"] = "Poodle";

  dog.breed = "Poodle";
  console.log(dog); // Output: { petName: 'Bobby", age: 3, breed: 'Poodle' }
  