import { Hono } from "hono"
import { handle } from "hono/vercel"
import authors from "./authors"
import book from "./book"

export const runtime = "edge"

const app = new Hono().basePath('/api')

app.route("/authors", authors)
app.route("/books", book)

export const GET = handle(app)
export const POST = handle(app)
