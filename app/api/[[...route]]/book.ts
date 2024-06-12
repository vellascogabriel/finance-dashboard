import { Hono } from "hono";


const app = new Hono()

app.get("/", (c) => {
    return c.json({ message: "Get a Book"})
})

app.post("/", (c) => {
    return c.json({ message: "Create a Book"}, 201)
})

app.get("/:id", (c) => {
    return c.json({ message: `Get a Book: ${c.req.param("id")}`})
})

export default app