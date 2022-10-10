const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    const engineer = new Engineer("Graham", 1, "n.grahamjohnson@gmail.com");
    it("Returns name with getName()", () => {
        expect(engineer.getName()).toBe("Graham");
    });

    it("Returns id with getId()", () => {
        expect(engineer.getId()).toBe(1);
    });

    it("Returns email with getEmail()", () => {
        expect(engineer.getEmail()).toBe("n.grahamjohnson@gmail.com");
    });

    it("Returns role with getRole()", () => {
        expect(engineer.getRole()).toBe("Engineer");
    });
});