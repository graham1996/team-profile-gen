const Employee = require('../lib/employee');

describe("Employee", () => {
    const employee = new Employee("Graham", 1, "n.grahamjohnson@gmail.com");
    it("Returns name with getName()", () => {
        expect(employee.getName()).toBe("Graham");
    });

    it("Returns id with getId()", () => {
        expect(employee.getId()).toBe(1);
    });

    it("Returns email with getEmail()", () => {
        expect(employee.getEmail()).toBe("n.grahamjohnson@gmail.com");
    });

    it("Returns role with getRole()", () => {
        expect(employee.getRole()).toBe("Employee");
    });
});