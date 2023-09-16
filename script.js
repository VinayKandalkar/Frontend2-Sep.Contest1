const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    console.log(data);
  }
  printDeveloper();

  
  // 2. Add Data
  function addData() {
    let name = prompt("enter your name");
    let age = prompt("enter your age");
    let profession = prompt("enter your profession");
    // Now we will check whether user provided valid input or not
    if(name && !isNaN(age) && profession) {
    //Create a new data object object with the collected data
    const newData={name,age,profession};
    //Add the new data object to the data Array
    data.push(newData);
    //Log a message to confirm addition
    console.log("Data added",newData);

    }
    else{
    console.log("Invalid Input.Data not added.");
    }
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for (let i = 0; i < data.length; i++) {
        if (data[i].profession === "admin") {
             data.pop(data[i].profession);
        }
    }
    console.log("Removed Admin Successfully")
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
     // Dummy arrays for demonstration
     const array1 = [1, 2, 3];
     const array2 = [4, 5, 6];

    // Concatenate or join the arrays
    const concatenatedArray = array1.concat(array2);

    // Log the result to the console
    console.log('Concatenated Array:', concatenatedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalAge =0;
     for(let i =0;i<data.length;i++){
     totalAge+=data[i].age;

   }
    const averageAge = totalAge/data.length;
    console.log("Average age",averageAge);
 }


  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person =>person.age>25);
    if(isAbove25){
    console.log("At least one person is above age of 25.");
    }
    else{
    console.log("No person is above the age of 25");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let arr = [];
    for(let i=0;i<data.length;i++){
         if(arr.includes(data[i].profession)==true){
              continue;
         }else{
              arr.push(data[i].profession);
         }
    }
    console.log(arr);

  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
    console.log("Sorted")
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0;i<data.length;i++){
        if(data[i].name==="john"){
             data[i].profession="manager";
        console.log(data[i]);
             console.log("Updated successfully")
        }
   }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    //getTotalProfessions
   let developerCount =0;
   let adminCount =0;
   for(let i =0;i<data.length;i++){
    const profession = data[i].profession;
     if(profession ==="developer"){
      developerCount++;
     }
     else if(profession ==="admin"){
      adminCount++;
     }
   }
  console.log("Total Developers",developerCount);
  console.log("Total Admins",adminCount);
  }
  