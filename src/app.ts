import {Permutation} from './Permutation';


var perm = new Permutation([0,2,1]);
console.log(perm);
console.log(perm.permute(0));

console.log(perm.permute(1));
console.log(perm.permute(2));
var id = new Permutation([0,1,2]);
console.log(perm.operateWith(id));
