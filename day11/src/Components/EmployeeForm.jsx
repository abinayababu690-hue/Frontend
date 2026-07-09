import {useState,useEffect} from 'react';

function EmployeeForm( {
     addEmployee,editEmployee,updateEmployee
    
}){
    const [employee, setEmployee] = useState({ name: " ", email: " ", dept: " "
});

useEffect(() => {
    if(editEmployee){
        setEmployee(editEmployee);
    }




},[editEmployee]);

// Handle the typing
const handleChange = (event) => {
    setEmployee({
        ...employee,//existing will remain same
        [event.target.name]: event.target.value,//only the changed value will be updated
    });
};
const handleSubmit = (event) => {
    event.preventDefault();
    if(editEmployee){
        updateEmployee(employee);
    }else{
        addEmployee(employee);
    }

setEmployee({ name: " ", email: " ", dept: "" });

};

return (
    <div>
        <h2>{editEmployee ? "Update Employee" : "Add Employee"}</h2>
        <form onSubmit={handleSubmit}>
            <input type ="text" name="name" placeholder="Enter your Name" value={employee.name} onChange={handleChange} required /><br /><br />
            <input type="email" name="email" placeholder="Enter your Email" value={employee.email} onChange={handleChange} required /><br /><br />
            <input type="text" name="dept" placeholder="Enter your Department" value={employee.dept} onChange={handleChange} required /><br />
            <button type="submit">{editEmployee ? "Update" : "Add"} Employee</button>
        </form>
    </div>
)
}

export default EmployeeForm;