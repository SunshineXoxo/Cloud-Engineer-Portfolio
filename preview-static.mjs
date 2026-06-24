import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, isAbsolute, join, normalize, relative, resolve } from "node:path";

const port = Number.parseInt(process.env.PORT || "8090", 10);
const root = resolve("frontend");

const contentTypes = new Map([
    [".html", "text/html; charset=utf-8"],
    [".css", "text/css; charset=utf-8"],
    [".js", "application/javascript; charset=utf-8"],
    [".json", "application/json; charset=utf-8"],
    [".svg", "image/svg+xml"],
    [".jpg", "image/jpeg"],
    [".jpeg", "image/jpeg"],
    [".png", "image/png"],
    [".pdf", "application/pdf"],
    [".txt", "text/plain; charset=utf-8"],
]);

function isInsideRoot(filePath) {
    const pathFromRoot = relative(root, filePath);
    return pathFromRoot === "" || (!pathFromRoot.startsWith("..") && !isAbsolute(pathFromRoot));
}

async function findFile(requestPath) {
    const decodedPath = decodeURIComponent(requestPath.split("?")[0]);
    const routePath = decodedPath === "/" ? "/index.html" : decodedPath;
    const filePath = normalize(resolve(root, routePath.slice(1)));

    if (!isInsideRoot(filePath)) {
        return null;
    }

    try {
        const fileStat = await stat(filePath);
        return fileStat.isDirectory() ? join(filePath, "index.html") : filePath;
    } catch {
        return join(root, "index.html");
    }
}

const server = createServer(async (request, response) => {
    const filePath = await findFile(request.url || "/");

    if (!filePath) {
        response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Forbidden");
        return;
    }

    try {
        const body = await readFile(filePath);
        response.writeHead(200, {
            "Content-Type": contentTypes.get(extname(filePath).toLowerCase()) || "application/octet-stream",
            "Cache-Control": "no-cache",
        });
        response.end(body);
    } catch {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not found");
    }
});

server.listen(port, "127.0.0.1", () => {
    console.log(`Static preview running at http://127.0.0.1:${port}`);
});
