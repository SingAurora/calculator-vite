import { areParenthesesMatching} from "./fun";
import { expect, test } from "vitest"

test('areParenthesesMatching', () => {
  expect(areParenthesesMatching("(()))")).toBe(false);
})
