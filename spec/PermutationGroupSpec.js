describe("Permutation", function() {
		var Permutation= require('../dist/Permutation');
		var permutation;		   

		beforeEach(function() {
				permutation= new Permutation.Permutation([1,0,2]);
		})
		
		it("should permute a number", function() {
				var result = permutation.permute(1);
				expect(result).toEqual(0);
		});
		it("should permute a number 0", function() {
				var result = permutation.permute(0);
				expect(result).toEqual(1);
		});
		
		it("a permutation should equal itself", function(){
				expect(permutation.equals(permutation)).toEqual(true);
		});
		
		it("should allow a permutation to operate on another one identity", function(){
				var i = new Permutation.Permutation([0,1,2]);
				expect(permutation.operateWith(i)).toEqual(permutation);
		});
});
