module.exports = function check(str, bracketsConfig) {
  
  let couples = bracketsConfig.map(item => item.join(''));
  let before = 1;
  let after = 0; 
  
  while (before > after) { 
    before = str.length;
    couples.forEach(item => {      
      str = str.replace(item, '');
    });
    after = str.length;
  }  

  return !str.length;
  
}