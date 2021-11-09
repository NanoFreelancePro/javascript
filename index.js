let total = 0;

function plus(x) {
  total += x;
  return total;
}

function moins(x) {
  total -= x;
  return total;
}

function diviser(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total /= x;
    return total;
  }
}

function fois(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
}

function reset() {
  total = 0;
}
