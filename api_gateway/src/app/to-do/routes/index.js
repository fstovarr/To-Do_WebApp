import { GetWelcome } from "../controllers/to-do";

export default [
  {
    name: "/",
    children: [
      { name: "/welcome", type: "GET", controller: GetWelcome },
      // { name: "/details", type: "GET", controller: GetDetails },
      // { name: "/address", type: "GET", controller: GetAddress }
    ]
  }
];
