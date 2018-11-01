class Calc {
  make(a, b, action) {
    switch (action) {
      case 'plus':
        return a * 1 + b * 1;
      case 'minus':
        return a * 1 - b * 1;
    }
  }
}

export default Calc;
