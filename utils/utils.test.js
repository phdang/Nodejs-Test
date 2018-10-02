const utils = require("./utils");
const expect = require("expect");

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44);
      // if (res !== 44) {
      //   throw Error(`Expected 44 but get ${res}`);
      // }
    });
  });

  it("should square the number", () => {
    var res = utils.squared(4);
    expect(res).toBe(16);
  });

  it("should expect some values", () => {
    //expect({ name: "phD" }).not.toBe({ name: "phD" });
    //expect([1, 2, 3, 4, 5]).toEqual(expect.arrayContaining([5]));
    expect({
      name: "phD",
      age: 24,
      address: "HCM city"
    }).toInclude({ age: 24 });
  });

  it("should set first name and last name", () => {
    var user = {
      location: "HCM city",
      age: 24
    };
    var res = utils.setName(user, "Dang Phan");
    expect(res).toInclude({ lastName: "Phan" });
  });

  it("should async add 2 numbers", done => {
    utils.asyncAdd(2, 3, sum => {
      expect(sum).toBe(5);
      done();
    });
  });

  it("should async square a number", done => {
    utils.asyncSquare(3, square => {
      expect(square).toBe(9);
      done();
    });
  });
});
