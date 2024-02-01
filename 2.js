// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
const numbers2=[];
for(let i=0;i<numbers.length;i++){

    const allNumbers=numbers[i];

    if(allNumbers % 2 ===0){

        const evenNumber=allNumbers;
        numbers2.push(evenNumber)
    }

}console.log(numbers2)