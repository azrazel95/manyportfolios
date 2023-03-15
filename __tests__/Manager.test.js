//imports our modules
const Manager = require("../lib/manager.js");
//sets up the test input
const manager = new Manager("ben", "4", "ben@mail.com", "5");
//tests
test("test if constructor returns correct values", () => {
    expect(manager.name).toBe("ben");
    expect(manager.id).toBe("4");
    expect(manager.email).toBe("ben@mail.com");
});


test("test if the getOfficeNum() method returns officenumber", () => {
    expect(manager.getOfficeNum()).toBe("5");
})

    test("test if the getRole() method returns manager", () => {
        expect(manager.getRole()).toBe("Manager");
    })