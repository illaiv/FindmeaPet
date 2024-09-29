const allDogs = [
    
{
    dogName: "Anthony",
    breed: "Terrier, Pit Bull/Mix",
    age: 6
},

{
    dogName: "Axel",
    breed: "Terrier, American Pit Bull/Mix",
    age: 2
},

{
    dogName: "Barry",
    breed: "Australian Cattle Dog/Mix",
    age: 1
},

{
    dogName: "Bebe",
    breed: "Terrier, American Pit Bull/Mix",
    age: 6
},

{
    dogName: "Bowser",
    breed: "Mastiff/Mix",
    age: 3
},

{
    dogName: "Cletus",
    breed: "German Shepherd/Mix",
    age: 3
},

{
    dogName: "Conan",
    breed: "Poodle, Standard/Retriever, Golden",
    age: 2
},

{
    dogName: "Gilly",
    breed: "Terrier, American Pit Bull/Mix",
    age: 4
},

{
    dogName: "Kelly Marie",
    breed: "Cane Corso/Mix",
    age: 2
},

{
    dogName: "Loki",
    breed: "Terrier, Pit Bull/Mix",
    age: 6
},

];

function showInfo() {
const ageEntered = document.getElementById('petAge').value; 
const minimumAge = parseInt(ageEntered)

//array to hold the potential selections
// filter method to check if dog age is greater than minimum age entered 
const selectedDogs = allDogs.filter(dog => dog.age > minimumAge);

let info = '';

const dogList = document.createElement('ul');

selectedDogs.forEach(dog => {
    const listDog =document.createElement(`li`);
listDog.textContent = `The name of the dog is: ${dog.dogName}. The breed of the dog is: ${dog.breed}. The age of the dog is: ${dog.age}\n`;
dogList.appendChild(listDog)

});
const results = document.querySelector(`.selectedDogInformation`);
results.innerHTML = ``;
if (selectedDogs.length > 0) {
    results.appendChild(dogList);

} else {
results.textContent = `Invalid entry, please enter another number.`;

}

}