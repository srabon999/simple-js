/*function fac(n){
  if (n==1 || n==0) {
    return 1;
  } else {
  return  n*fac(n-1)
    
  }
}
//var nm=myfun(4);
console.log(fac(4));
*/
function log(num){
    if(num > 5){
        return;
    }
    console.log(num);
    log(num +2);
    
}

log(2);
