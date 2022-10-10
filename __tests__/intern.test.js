const Intern = require('../lib/intern');

describe("Intern", () => {
    const intern = new Intern("Graham", 1, "n.grahamjohnson@gmail.com");
    it("Returns name with getName()", () => {
        expect(intern.getName()).toBe("Graham");
    });

    it("Returns id with getId()", () => {
        expect(intern.getId()).toBe(1);
    });

    it("Returns email with getEmail()", () => {
        expect(intern.getEmail()).toBe("n.grahamjohnson@gmail.com");
    });

    it("Returns role with getRole()", () => {
        expect(intern.getRole()).toBe("Intern");
    });
});