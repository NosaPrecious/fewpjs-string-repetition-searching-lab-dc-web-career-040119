// Code your solution here
// let heyJude =  function(){
//   let str = "Na na na na na na na, na na na na, hey Jude.";
//   str.repeat(16);
// };
// heyJude();

const heyJude = function(str, num){
  return (new Array(num + 1)).join(str);
};

heyJude("Na na na na na na na, na na na na, hey Jude.", 16);
