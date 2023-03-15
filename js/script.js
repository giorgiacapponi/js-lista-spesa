const shoppingList =['latte','pane','uova','gelato','sale','nutella','pasta'];
console.log(shoppingList);
const ulList =document.querySelector('ul');
let listItem=''
let i=0;
while (i<shoppingList.length){
     item = shoppingList[i]
     
      i++;
     listItem += ` <li>${item}</li>`
      
}
console.log(listItem);
ulList.innerHTML =listItem