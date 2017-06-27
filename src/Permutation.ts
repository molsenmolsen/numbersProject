export class Permutation{
		constructor(private perm: number[] ){
		}

		
		public permute(no: number):number{

								if (no >= 0 && no < this.perm.length){
						return this.perm[no];
				}
				return null;
		}
		public getLength(){
				return this.perm.length;
		}
		public operateWith(rhs: Permutation):Permutation{
				var newPerm = [];
				for (var i=0; i< rhs.getLength(); i++){
						newPerm[i]= this.permute(rhs.permute(i));
				}
				return new Permutation(newPerm);
		}
		public equals(rhs: Permutation){
				return this.perm === rhs.perm;
		}
}
