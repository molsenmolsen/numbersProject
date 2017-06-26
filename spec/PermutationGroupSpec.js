describe("Permutation", function() {
		var Permutation= require('../dist/Permutation');
		var permutation;		   

		beforeEach(function() {
				permutation= new Permutation.Permutation([1,3,2]);
		})
		it("should permute a number", function() {
				var result = permutation.permute(1);
				expect(result).toEqual(3);
		});
		it("should allow a permutation to operate on another one", function(){
				var i = new Permutation.Permutation(0,1,2);
				expect(permutation.operateWith(i)).toEqual(permutation);
		});
});
