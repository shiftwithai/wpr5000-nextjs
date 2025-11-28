

export function join(...classNames) {
  let className = '';
  let seperator = '';
  
  classNames.forEach((c) => {
    if(c) {
      className += seperator + c
      seperator = ' ';
    }
  });

  return className;
}