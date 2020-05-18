export const phoneMask = value => {
    
  const onlyNumber = value.replace(/\D/g, "");
  const f = onlyNumber.slice(0, 11);
  let finalValue = "";
  for (let i = 0; i < f.length; i++) {
    if (i === 0) {
      finalValue += `(${f[i]}`;
    } else if (i === 2) {
      finalValue += `) ${f[i]}`;
    } else if (i === 7) {
      finalValue += `-${f[i]}`;
    } else {
      finalValue += `${f[i]}`;
    }
  }
  return finalValue;

}