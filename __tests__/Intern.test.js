
const Intern = require("../lib/Intern");
const intern = new Intern("zack", "3", "zack@mail.com", "schoolio");

test("test if constructor returns correct values", () => {
    expect(intern.name).toBe("zack");
    expect(intern.id).toBe("3");
    expect(intern.email).toBe("zack@mail.com");
});

test("test if the getSchool() method returns school", () => {
    expect(intern.getSchool()).toBe("schoolio");
})

    test("test if the getRole() method returns intern", () => {
        expect(intern.getRole()).toBe("Intern");
    })