import {Permutation} from './Permutation';
export class PermutationGroup{
		constructor(private perms: Permutation[]){

		}

		public toString():string{
				var out = '';
				for (var i=0;i<this.perms.length;i++){
						out += this.perms[i].toString();
						if (i< this.perms.length-1){
								out +='\n';
						}
				}
				return out;
}
}
