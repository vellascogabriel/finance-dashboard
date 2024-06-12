import { Hono } from "hono";

const app = new Hono()

app.get("/", (c) => c.json("List authors"))
app.post("/", (c) => c.json("Create an Author", 201))
app.get("/:id", (c) => c.json(`Get a Author: ${c.req.param("id")}`))

export default app
