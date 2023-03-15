
const Engineer = require("../lib/Engineer.js");
const engineer = new Engineer("Amelia", "2", "amelia@mail.com", "ameliabedelia");

test("test if constructor returns correct values", () => {
    expect(engineer.name).toBe("Amelia");
    expect(engineer.id).toBe("2");
    expect(engineer.email).toBe("amelia@mail.com");
});
test("test if the getGithub() method returns a github", () => {
    expect(engineer.getGithub()).toBe("ameliabedelia");
})

    test("test if the getRole() method returns engineer", () => {
        expect(engineer.getRole()).toBe("Engineer");
    })