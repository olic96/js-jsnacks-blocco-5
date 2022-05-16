let zucchineOver15 = [];
let zucchineUnder15 = [];
let zuchine = [];

for(let i = 0; i < 10; i++) {
  zuchine.push({
    length: Math.floor(Math.random() * 25) + 1,
  });
}

for(let i = 0; i < zuchine.length; i++) {
  if(zuchine[i].length <= 15) {
    zucchineUnder15.push(zuchine[i].length);
  } else {
    zucchineOver15.push(zuchine[i].length);
  }
}