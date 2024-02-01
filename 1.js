// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reverseColor=[]

for(const col of colors){

    reverseColor.unshift(col)
}console.log(reverseColor)