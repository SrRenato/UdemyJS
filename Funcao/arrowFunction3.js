let comprarComThis = function (param) {
  console.log(this === param);
};

comprarComThis(global);

const obj = {};
comprarComThis = comprarComThis.bind(obj);
comprarComThis(global);
comprarComThis(obj);

let comprarComThisArrow = (param) => console.log(this === param);
comprarComThisArrow(global);
comprarComThisArrow(module.exports);

comprarComThisArrow = comprarComThisArrow.bind(obj);
comprarComThisArrow(obj);
comprarComThisArrow(module.exports);
