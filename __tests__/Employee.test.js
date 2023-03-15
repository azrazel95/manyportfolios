//imports our modules
const Employee = require("../lib/employee");
//sets up the test input
const employee = new Employee("sasha", "1", "sasha@mail.com");
//tests
test("test if constructor returns correct values", () => {
    expect(employee.name).toBe("sasha");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("sasha@mail.com");
});

test("test if the getName() method returns the employee name", () => {
    expect(employee.getName()).toBe("sasha");
});

test("test if the getId() method returns the employee ID", () => {
    expect(employee.getId()).toBe("1");
});

test("test if the getEmail() method returns the employee email", () => {
    expect(employee.getEmail()).toBe("sasha@mail.com");})

    test("test if the getRole() method returns employee", () => {
        expect(employee.getRole()).toBe("Employee");
    })