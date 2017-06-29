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

		it("should give a string version of the permutation", function() {
				expect('abc').toBe('abc');
				expect(permutation.toString()).toBe('[1,0,2]');
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

describe("PermutationGroup", function() {
		var PermutationGroup = require('../dist/PermutationGroup');
		var Permutation = require('../dist/Permutation');
		var permutationGroup;		   
		var permutation;

		beforeEach(function() {
				permutation = new Permutation.Permutation([1,0,2]);
				permutationGroup= new PermutationGroup.PermutationGroup([permutation]);
		})
		
		it("should print out all permutations 1", function() {
				expect(permutationGroup.toString()).toEqual('[1,0,2]');
		});
		it("should print out all permutations 2", function() {

				permutationGroup= new PermutationGroup.PermutationGroup([permutation,permutation]);
				expect(permutationGroup.toString()).toEqual('[1,0,2]\n[1,0,2]');
		});
});
