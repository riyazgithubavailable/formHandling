let editOptions={
 isEditing:false,
 rowElement:null
}

function onEditRecord (event){
    let row=event.target.parentNode.parentNode;
    let cells=document.querySelectorAll("td");
    let employeeInfo = {
         name:cells[0].innerText,
         companyName:cells[1].innerText,
         salary:cells[2].innerText,
         gender: cells[3].innerText,
         role: cells[4].innerText, 
         email: cells[5].innerText,
    }
    preFillForm(employeeInfo);
    
    editOptions=
    {
        isEditing:true,
        rowElement:row
    }
    submitButton.innerText="Update";
}
    function preFillForm(employee){
        for(let i in employee){
            form[i].value=employee[i];
        }
    }
    function editEmployee(employee){
        const rowElement = editOptions.rowElement ;

        let cells = rowElement.querySelectorAll("td");
        cells[0].innerText = employee.name ;
        cells[1].innerText = employee.companyName;
        cells[2].innerText = employee.salary ;
        cells[3].innerText = employee.gender; 
        cells[4].innerText = employee.role ;
        cells[5].innerText = employee.email;
    
        submitButton.innerText = "Add Employee";
    
        // we need to reset the edit options state.
        editOptions = {
            isEditing: false,
            rowElement: null
        }
    }