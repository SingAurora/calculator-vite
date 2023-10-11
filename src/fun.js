export function areParenthesesMatching(input) {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    }
  }

  return stack.length === 0;
}
