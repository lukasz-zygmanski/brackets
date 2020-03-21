module.exports = (str, bracketsConfig) => {
  const brackets = bracketsConfig.map(elem => elem.join(''))

  const removeBrackets = (str) => {
    const replacedString = brackets.reduce((acc, item) => acc.replace(item, ''), str);
    
    return replacedString === str ? replacedString : removeBrackets(replacedString);
  }
  return !!!removeBrackets(str).length;
}
