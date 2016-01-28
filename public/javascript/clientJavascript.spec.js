
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    ////this test should fail.
    it('this test should fail!', function(){
        expect(returnNotKittens()).toBe("Not Kittens!");
    });

    it('This test should pass, because it returns 5*5=25', function(){
        expect(mult(5, 5)).toBe(25);
    });

    it('This test should not fail, because it expects 4*5~=25', function(){
        expect(mult(4, 5)).not.toBe(25);
    });

});

describe('Testing conversion to number grades.', function(){
    it('should return 4', function(){
        expect(getNumValue("A")).toEqual(4);
    });
});