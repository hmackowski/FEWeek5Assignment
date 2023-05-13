// Define the Employee class with a constructor that takes a name, title, and salary
class Employee {
    constructor(name, title, salary) {
      this.name = name;
      this.title = title;
      this.salary = salary;
    }
  }
  
  // Define the Menu class with an empty array of menuItems
  class Menu {
    constructor() {
      this.menuItems = [];
    }
  
    // Add an employee to the menuItems array
    addEmployee(employee) {
      this.menuItems.push(employee);
    }
  
    // Delete an employee from the menuItems array at the specified index
    deleteEmployee(employeeIndex) {
      this.menuItems.splice(employeeIndex, 1);
    }
  
    // Display a list of all employees in the menuItems array using the alert method
    viewEmployees() {
      alert(this.menuItems.map((employee, index) => `${index + 1}. ${employee.name} - $${employee.title} - ${employee.salary}`).join('\n'));
    }
  }
  
  // Create a new instance of the Menu class
  const menu = new Menu();
  
  // Prompt the user to enter information for a new employee, create an instance of the Employee class with that information, and add it to the menu using the addEmployee method
  function addMenuItem() {
    const name = prompt("Enter the name of the Employee:");
    const title = prompt("Enter the title of the employee:");
    const salary = prompt("Enter the Employee's salary:");
    const employee = new Employee(name, title, salary);
    menu.addEmployee(employee);
  }
  
  // Prompt the user for the index of an employee to delete and remove it from the menu using the deleteEmployee method
  function deleteMenuItem() {
    const employeeIndex = prompt("Enter the index of the employee you want to delete:") - 1;
    menu.deleteEmployee(employeeIndex);
  }
  
  // Display a list of all employees in the menu using the viewEmployees method
  function viewMenu() {
    menu.viewEmployees();
  }
  
  // Continuously prompt the user for a menu option until the user selects the "Exit" option, then exit the application
  while (true) {
    const option = parseInt(prompt("Choose an option:\n1. Add employee\n2. Delete employee\n3. View employees\n4. Exit"));
  
    switch (option) {
      case 1:
        addMenuItem();
        break;
      case 2:
        deleteMenuItem();
        break;
      case 3:
        viewMenu();
        break;
      case 4:
        alert("Exiting menu app.");
        return;
      default:
        alert("Invalid option selected.");
    }
  }
  