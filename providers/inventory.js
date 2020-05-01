import uuid from "uuid/v4";

let inventory = [];

inventory.map((i) => {
  i.id = uuid();
  return i;
});

export default inventory;
