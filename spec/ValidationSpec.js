describe("Validation", function() {
  var Validation = require('../src/Validation');
  
  it("Email address with special characters should be invalid.", function() {
	var v = new Validation(); 
    expect(v.isValid("sa!m@gmail.com")).toEqual(false);
  });
  
  it("Email address with no '@' symble should be invalid.", function() {
	var v = new Validation(); 
    expect(v.isValid("samgmail.com")).toEqual(false);
  });
  
  it("Email address does not start with a letter should be invalid.", function() {
	var v = new Validation(); 
    expect(v.isValid("8sam@gmail.com")).toEqual(false);
  });
  
});
