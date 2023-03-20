//WRITE A FUNCTION (stringLenght) THAT TAKES A STRING AND RETURNS THE LENGTH OF THE STRING:

describe('stringLenght', function()) {
    //lenght of string
    //make sure it is a function
    it("should be defined a function", function() {
        expect(typeof stringLength).toBe("function");
    });
    //make sure value passes (argument) is a string
    it("should accept a string", function() {
        expect(typeof stringLength(80)).toBe("string");
    });
    //make sure it returns a number
    it("should accept a number", function() {
        expect(typeof stringLength('codeup')).toBe("number");
        expect(typeof stringLength('raining')).toBe("number");
        expect(typeof stringLength('webdev')).toBe("number");
    });

}