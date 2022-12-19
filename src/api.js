import _ from "lodash";

const errors = ["💥Error!💥", "💥Bug!💥", "💥Mistake!💥", "💥Noooo!💥"];

export function getData() {
  const amount = _.random(1, 10);
  const succeeded = _.random(0, 1.0, true) > 0.3;

  if (succeeded) {
    return amount;
  } else {
    const errorMessage = _.sample(errors);
    throw Error(errorMessage);
  }
}
