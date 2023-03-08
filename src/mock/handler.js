import { rest } from "msw";

export const handler = [
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "a",
        firstName: "K",
        lastName: "JY",
      })
    );
  }),
];
