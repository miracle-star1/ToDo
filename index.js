const itemInput = document.getElementById('item');
const todoTimeInput = document.getElementById('time');
const saveBtn = document.getElementById('save');
const tableBody = document.getElementById('tableBody');

//pick values to a given elemant 
const getElementValue = (element)=>{
    return element.value;
}
//on button click
saveBtn.addEventListener("click", (event)=>{
    event.preventDefault();

    // pick the value of the fast task name  
    const itemValue=getElementValue(itemInput);
    const todoTimeInput=getElementValue(todoTimeInput);

    const tableRow=document.createElement("tr");

    const itemId=document.createElement("td");

    itemId.innerHTML=itemValue;

    tableRow.appendChild(itemId);

    const toDoTimeId=document.createElement("td");
    toDoTimeId.innerHTML=todoTimeInputValue;
    tableRow.appendChild(toDoTimeId);

    tableBody.appendChild(tableRow);
})