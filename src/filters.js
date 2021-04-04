import numeral from "numeral";

const dollarFilter = (value) => {
  if (!value) {
    return "$0";
  }

  return numeral(value).format("($0.00a)");
};

export { dollarFilter };

const percentFilter = (value) => {
  if (!value) {
    return "0%";
  }

  return numeral(value).format("%0");
};

export { percentFilter };
