import { test } from "vitest";
import rule from "./no-moment";
import { RuleTester } from "eslint";

test("no-moment", () => {
  var ruleTester = new RuleTester({
    parserOptions: { sourceType: "module", ecmaVersion: 2020 },
  });
  ruleTester.run("no-moment", rule, {
    valid: ['import { addDays } from "date-fns";'],

    invalid: [
      {
        code: 'import moment from "moment";',
        errors: [
          {
            messageId: "noMoment",
          },
        ],
      },
    ],
  });
});
