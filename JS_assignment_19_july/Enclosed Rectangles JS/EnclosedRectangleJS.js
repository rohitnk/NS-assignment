let RectangleA = {
  top: "20px",
  right: "200px",
  height: "400px",
  width: "610px",
  children: [],
};

let RectangleB = {
  top: "20px",
  right: "200px",
  height: "400px",
  width: "600px",
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

console.log(ra, rb);

function equalDataCration(r) {
  if (r.top && r.left && r.height && r.width) {
    r.bottom = 10000 - (r.top + r.height);
    r.right = 10000 - (r.width + r.left);
  } else if (r.top && r.left && r.bottom && r.right) {
    r.height = 10000 - (r.top + r.bottom);
    r.width = 10000 - (r.left - r.right);
  } else if (r.bottom && r.right && r.height && r.width) {
    r.top = 10000 - (r.bottom + r.height);
    r.left = 10000 - (r.width + r.right);
  } else if (r.top && r.right && r.height && r.width) {
    r.left = 10000 - (r.width + r.right);
    r.bottom = 10000 - (r.top + r.height);
  } else if (r.bottom && r.left && r.height && r.width) {
    r.top = 10000 - (r.bottom + r.height);
    r.right = 10000 - (r.width + r.left);
  }
}

equalDataCration(ra);
equalDataCration(rb);

function main() {
  //output will be in the array [oa , ob ]                       ob is in oa
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

// console.log(throwResult(main()));

// console.log(ra, rb);

function drawRect(obj, color) {
  const canvas = document.getElementById("canvas");
  canvas.style.width = "900";
  canvas.style.height = "900";
  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.strokeRect(obj.left, obj.top, obj.width, obj.height);
}

drawRect(rb, "green");
drawRect(ra, "red");
