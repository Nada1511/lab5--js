class Person {
    constructor(id, email, workMood, salary, isManager) {
      this.id = id;
      this.email = email;
      this.workMood = workMood;
      this.salary = salary >= 1000 ? salary : 1000;
      this.isManager = isManager;
      this.healthRate = 100;
    }
  
    sleep(hours) {
      if (hours === 7) this.workMood = "happy";
      else if (hours < 7) this.workMood = "tired";
      else this.workMood = "lazy";
    }
  
    eat(meals) {
      if (meals === 3) this.healthRate = 100;
      else if (meals === 2) this.healthRate = 75;
      else this.healthRate = 50;
    }
  
    buy(items) {
      if (items === 1) this.salary -= 10;
    }
  
    work(hours) {
      if (hours === 8) this.workMood = "happy";
      else if (hours > 8) this.workMood = "tired";
      else this.workMood = "lazy";
    }
  }
  
  class Office {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    getAllEmployees() {
      return this.employees;
    }
  
    getEmployee(empId) {
      const employee = this.employees.find((emp) => emp.id === empId);
      if (employee) {
        if (employee.isManager) {
          const { id, email, workMood, isManager, healthRate } = employee;
          return { id, email, workMood, isManager, healthRate };
        } else {
          return employee;
        }
      } else {
        return null;
      }
    }
  
    hire(employee) {
      this.employees.push(employee);
    }
  
    fire(empId) {
      this.employees = this.employees.filter((emp) => emp.id !== empId);
    }
  }
  
  // User prompt example
  const office = new Office("MyCompany");
  
  while (true) {
    console.log("Menu:");
    console.log("1. Add new employee (enter 'add')");
    console.log("2. If manager, press 'mngr'; if normal employee, press 'nrml'");
    console.log("3. Get all employees (enter 'getAll')");
    console.log("4. Get employee details (enter 'getEmployee')");
    console.log("5. Fire employee (enter 'fire')");
    console.log("6. Quit application (enter 'q')");
  
    const userInput = prompt("Enter your choice: ");
  
    switch (userInput) {
      case "add":
       
        break;
      case "mngr":
        break;
      case "nrml":
      
        break;
      case "getAll":
        console.log(office.getAllEmployees());
        break;
      case "getEmployee":
        const empId = prompt("Enter employee ID: ");
        const employeeDetails = office.getEmployee(empId);
        console.log(employeeDetails ? employeeDetails : "Employee not found");
        break;
      case "fire":
        const empIdToFire = prompt("Enter employee ID to fire: ");
        office.fire(empIdToFire);
        console.log("Employee fired successfully");
        break;
      case "q":
        console.log("Quitting application");
        process.exit();
      default:
        console.log("Invalid choice. Try again.");
    }
  }