import { promises as fs } from "node:fs";
import path from "node:path";
import { createFileRoute } from "@tanstack/react-router";

const REGISTRY_DIR = path.join(process.cwd(), "public", "r");

export const Route = createFileRoute("/r/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = params.id.replace(/\.json$/i, "");

        if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
          return new Response("Invalid ID", { status: 400 });
        }

        try {
          const content = await fs.readFile(
            path.join(REGISTRY_DIR, `${id}.json`),
            "utf-8",
          );

          return new Response(content, {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Cache-Control": "public, max-age=3600",
            },
          });
        } catch (error) {
          if (
            error instanceof Error &&
            "code" in error &&
            error.code === "ENOENT"
          ) {
            console.error(error);
            return new Response("Component not found", {
              status: 404,
            });
          }

          throw error;
        }
      },
    },
  },
});
