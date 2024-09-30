var employeesArray = [];

function addEmployee()
{
    let empName = document.getElementById('empName').value;
    let empSalary = document.getElementById('empSalary').value;

    let empObject ={
        empName: empName,
        empSalary: empSalary
    };

    employeesArray.push(empObject);
    console.log(employeesArray);
    displayEmployees();
}

function SortOnName()
{
    employeesArray.sort(sortNames);
    
    console.log(employeesArray);
    displayEmployees();
}

function sortNames(a,b)
{
        let x = a.empName.toLowerCase();
        let y = b.empName.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
}

function sortOnSalary()
{
    employeesArray.sort(sortSalary);
    console.log(employeesArray);
    displayEmployees();
}

function sortSalaries()
{
    return a.empSalary - b.empSalary;
}

function sortSalary(x, y)
{
    let a = x.empSalary;
    let b = y.empSalary;
    if (a < b) { return 1; }
    if (a > b) { return -1; }
    return 0;
}

function removeLowestSalary()
{
    if (employeesArray.length > 0)
    {
        
        employeesArray.sort((a, b) => a.empSalary - b.empSalary);
        employeesArray.shift();
        console.log(employeesArray);
        displayEmployees();
    } 
    else 
    {
        console.log("No elements to remove");
        displayEmployees();
    }
}

function showTopThree() {
    employeesArray.sort(function(a, b) {
        return b.empSalary - a.empSalary;
    });

    const topThree = employeesArray.slice(0, 3);
    console.log(topThree);
    displayEmployees(topThree);
}

function displayEmployees() 
{
    let employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    for (let i = 0; i < employeesArray.length; i++)
    {
        let employeeRow = document.createElement('tr');
        employeeRow.innerHTML = 
        `<td>${employeesArray[i].empName}</td><td>${employeesArray[i].empSalary}</td>`;
        employeeList.appendChild(employeeRow);
    }
}
