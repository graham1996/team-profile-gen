const Manager = require('../lib/manager');

describe("Manager", () => {
    const manager = new Manager("Graham", 1, "n.grahamjohnson@gmail.com");
    it("Returns name with getName()", () => {
        expect(manager.getName()).toBe("Graham");
    });

    it("Returns id with getId()", () => {
        expect(manager.getId()).toBe(1);
    });

    it("Returns email with getEmail()", () => {
        expect(manager.getEmail()).toBe("n.grahamjohnson@gmail.com");
    });

    it("Returns role with getRole()", () => {
        expect(manager.getRole()).toBe("Manager");
    });
});