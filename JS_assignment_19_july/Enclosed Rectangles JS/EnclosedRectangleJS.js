let RectangleA = {
  top: "20px",
  left: "20px",
  height: "40px",
  width: "60px",
  children: [],
};

let RectangleB = {
  top: "30px",
  left: "30px",
  height: "20px",
  width: "30px",
  children: [],
};

function copydata(obj, target) {
  for (const el in obj) {
    target[el] = parseInt(obj[el]);
  }
}

let ra = {};
let rb = {};

copydata(RectangleA, ra);
copydata(RectangleB, rb);

function equalDataCration(r) {
  if (r.top && r.left && r.height && r.width) {
    r.bottom = 5000 - (r.top + r.height);
    r.right = 5000 - (r.width + r.left);
  } else if (r.top && r.left && r.bottom && r.right) {
    r.height = 5000 - (r.top + r.bottom);
    r.width = 5000 - (r.left - r.right);
  } else if (r.bottom && r.right && r.height && r.width) {
    r.top = 5000 - (r.bottom + r.height);
    r.left = 5000 - (r.width + r.right);
  } else if (r.top && r.right && r.height && r.width) {
    r.left = 5000 - (r.width + r.right);
    r.bottom = 5000 - (r.top + r.height);
  } else if (r.bottom && r.left && r.height && r.width) {
    r.top = 5000 - (r.bottom + r.height);
    r.right = 5000 - (r.width + r.left);
  }
}

equalDataCration(ra);
equalDataCration(rb);

function main() {
  //output will be in the array [oa , ob ]  ob is in oa
  // if b is in a
  if (
    ra.top > rb.top &&
    ra.bottom > rb.bottom &&
    ra.left > rb.left &&
    ra.right > rb.right
  ) {
    return [RectangleB, RectangleA];
  }
  if (
    rb.top >= ra.top &&
    rb.bottom >= ra.bottom &&
    rb.left >= ra.left &&
    rb.right >= ra.right
  ) {
    return [RectangleA, RectangleB];
  } else return [null, RectangleA];
}

function throwResult([oa, ob]) {
  //ob is in oa
  if (oa == null) return ob;
  for (const el in oa) {
    if (oa[el] != oa.children)
      ob[el] = `${Math.abs(parseInt(oa[el]) - parseInt(ob[el]))}px`;
  }
  // oa.children = [];
  oa.children[0] = ob;
  return oa;
}

console.log(throwResult(main()));
