const calculator = require('../calculator');

describe("A simple calculator", function() {
    
  
  it("should allow to sum values", function() {
    // TODO: Add more examples
    let result = calculator("+", 1, 5);

    expect(result).toBe(6);
  });

  it("should allow to divide values", function() {
    // TODO: Add more examples
    let result = calculator("/", 6, 2);

    expect(result).toBe(3);
  });

  it("should allow to multiply values", function() {
    // TODO: Add more examples
    let result = calculator("*", 6, 2);
  
    expect(result).toBe(12);
  });

  it("should allow to (TODO: think about what minus operator is called lol) values", function() {
      // TODO: Add more examples
      let result = calculator("-", 6, 2);
  
      expect(result).toBe(4);
  });

});