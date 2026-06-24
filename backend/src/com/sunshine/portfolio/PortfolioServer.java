package com.sunshine.portfolio;

import com.sun.net.httpserver.Headers;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.Instant;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executors;

public class PortfolioServer {
    private static final int DEFAULT_PORT = 8080;

    public static void main(String[] args) throws IOException {
        Path frontendDir = resolveFrontendDirectory();
        Path projectRoot = frontendDir.getParent();
        Path imagesDir = projectRoot.resolve("Images");
        Path submissionsFile = projectRoot.resolve("backend").resolve("data").resolve("contact-submissions.jsonl");
        int port = resolvePort();

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/api/health", exchange -> sendJson(exchange, 200,
                "{\n" +
                        "  \"status\": \"ok\",\n" +
                        "  \"service\": \"sunshine-portfolio-api\"\n" +
                        "}\n"));
        server.createContext("/api/profile", exchange -> sendJson(exchange, 200, cloudProfileJson()));
        server.createContext("/api/contact", new ContactHandler(submissionsFile));
        if (Files.isDirectory(imagesDir)) {
            server.createContext("/images/", new StaticFileHandler(imagesDir, "/images/", false));
        }
        server.createContext("/", new StaticFileHandler(frontendDir, "/", true));
        server.setExecutor(Executors.newCachedThreadPool());
        server.start();

        System.out.println("Sunshine Portfolio server is running at http://localhost:" + port);
        System.out.println("Serving frontend files from: " + frontendDir.toAbsolutePath());
    }

    private static int resolvePort() {
        String value = System.getenv("PORTFOLIO_PORT");

        if (value == null || value.trim().isEmpty()) {
            return DEFAULT_PORT;
        }

        try {
            return Integer.parseInt(value.trim());
        } catch (NumberFormatException ignored) {
            return DEFAULT_PORT;
        }
    }

    private static Path resolveFrontendDirectory() throws IOException {
        Path cwd = Paths.get("").toAbsolutePath().normalize();
        List<Path> candidates = Arrays.asList(
                cwd.resolve("frontend"),
                cwd.resolve("..").resolve("frontend").normalize(),
                cwd.resolve("..").resolve("..").resolve("frontend").normalize()
        );

        for (Path candidate : candidates) {
            if (Files.isDirectory(candidate)) {
                return candidate;
            }
        }

        throw new IOException("Could not find the frontend directory.");
    }

    private static String cloudProfileJson() {
        return "{\n" +
                "  \"name\": \"Makanaka Kaguda\",\n" +
                "  \"title\": \"Cloud Computing & IoT Student | Azure Cloud Engineering Learner\",\n" +
                "  \"headline\": \"Cloud Computing & IoT Student Building Toward Azure Cloud Engineering\",\n" +
                "  \"summary\": \"Learning Microsoft Azure and building practical cloud-connected systems using IoT, Python, Java, serverless functions, and cloud databases.\",\n" +
                "  \"location\": \"Zimbabwe\",\n" +
                "  \"email\": \"kagudamakanaka@gmail.com\",\n" +
                "  \"currentProject\": \"Azure IoT Smart Agriculture Monitoring System\",\n" +
                "  \"status\": \"In progress\",\n" +
                "  \"focus\": [\"Microsoft Azure\", \"Azure IoT Hub\", \"Azure Functions\", \"Cloud databases\", \"Monitoring\", \"Cloud deployment\"],\n" +
                "  \"programmingFoundation\": [\"Java\", \"Python\", \"REST APIs\", \"Backend development\", \"Automation scripts\"]\n" +
                "}\n";
    }

    private static String profileJson() {
        return "{\n" +
                "  \"name\": \"Makanaka Kaguda\",\n" +
                "  \"headline\": \"My focus is on building reliable software, thoughtful web experiences, and smart digital solutions from Harare\",\n" +
                "  \"summary\": \"I create practical digital products with a strong Java foundation and a growing full stack mindset. I care about software that works well, feels professional, and leaves a clear impression the moment people land on the page.\",\n" +
                "  \"location\": \"Harare, Zimbabwe\",\n" +
                "  \"heroImageUrl\": \"/images/GLP_0732 (1).jpg.jpeg\",\n" +
                "  \"aboutImageUrl\": \"/images/WhatsApp Image 2026-04-22 at 14.11.55.jpeg\",\n" +
                "  \"brandImageUrl\": \"/images/GLP_0684.jpg.jpeg\",\n" +
                "  \"contact\": {\n" +
                "    \"email\": \"kagudamakanaka@gmail.com\",\n" +
                "    \"emailUrl\": \"mailto:kagudamakanaka@gmail.com\",\n" +
                "    \"availability\": \"Available for freelance, collaborations, and client projects\"\n" +
                "  },\n" +
                "  \"about\": {\n" +
                "    \"intro\": \"I am Makanaka Kaguda, a developer based in Harare who enjoys building software that solves real problems in a clear and thoughtful way.\",\n" +
                "    \"story\": \"Java is where I feel strongest, especially when it comes to structured backend thinking, but I am also actively expanding into full stack development so I can shape both the logic behind a product and the experience people see.\",\n" +
                "    \"mission\": \"My goal is to create digital solutions that feel professional, dependable, and human, whether that means a web platform, a business tool, or a smart system with real-world impact.\"\n" +
                "  },\n" +
                "  \"expertise\": [\n" +
                "    {\n" +
                "      \"label\": \"Java Development\",\n" +
                "      \"level\": 90\n" +
                "    },\n" +
                "    {\n" +
                "      \"label\": \"Web Development\",\n" +
                "      \"level\": 78\n" +
                "    },\n" +
                "    {\n" +
                "      \"label\": \"Smart Systems\",\n" +
                "      \"level\": 72\n" +
                "    }\n" +
                "  ],\n" +
                "  \"focusAreas\": [\n" +
                "    \"Java development\",\n" +
                "    \"Full-stack Java growth\",\n" +
                "    \"Modern web development\",\n" +
                "    \"IoT systems\",\n" +
                "    \"Smart systems projects\"\n" +
                "  ],\n" +
                "  \"services\": [\n" +
                "    {\n" +
                "      \"title\": \"Java Development\",\n" +
                "      \"description\": \"Backend logic, APIs, clean architecture, and dependable Java applications built with business value in mind.\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"title\": \"Web Development\",\n" +
                "      \"description\": \"Responsive websites, portfolio builds, business platforms, and polished user experiences for modern brands.\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"title\": \"IoT Systems\",\n" +
                "      \"description\": \"Connected device ideas, automation flows, and digital systems designed for monitoring, control, and insight.\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"title\": \"Smart Projects\",\n" +
                "      \"description\": \"Creative projects that combine software, devices, and purposeful design to solve practical problems.\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"projects\": [\n" +
                "    {\n" +
                "      \"title\": \"Client Management Dashboard\",\n" +
                "      \"category\": \"Java + Web\",\n" +
                "      \"description\": \"A professional dashboard concept for managing users, workflows, reports, and clean backend operations.\",\n" +
                "      \"stack\": [\"Java\", \"REST API\", \"SQL\", \"React\"],\n" +
                "      \"imageTitle\": \"Business workflow UI\",\n" +
                "      \"imageCaption\": \"Clean operations, reporting, and structured client data\",\n" +
                "      \"liveUrl\": \"#contact\",\n" +
                "      \"repoUrl\": \"mailto:kagudamakanaka@gmail.com?subject=Project%20Inquiry%20-%20Client%20Management%20Dashboard\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"title\": \"Smart Monitoring System\",\n" +
                "      \"category\": \"IoT Project\",\n" +
                "      \"description\": \"A smart system concept focused on sensor-driven monitoring, automation logic, and efficient decision making.\",\n" +
                "      \"stack\": [\"Java\", \"IoT\", \"Sensors\", \"Automation\"],\n" +
                "      \"imageTitle\": \"Connected device flow\",\n" +
                "      \"imageCaption\": \"Automation, alerts, and practical smart-system thinking\",\n" +
                "      \"liveUrl\": \"#contact\",\n" +
                "      \"repoUrl\": \"mailto:kagudamakanaka@gmail.com?subject=Project%20Inquiry%20-%20Smart%20Monitoring%20System\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"title\": \"Professional Portfolio Platform\",\n" +
                "      \"category\": \"Frontend + Backend\",\n" +
                "      \"description\": \"A bold portfolio experience designed to showcase services, credibility, personality, and easy client contact.\",\n" +
                "      \"stack\": [\"HTML\", \"CSS\", \"JavaScript\", \"Java Backend\"],\n" +
                "      \"imageTitle\": \"Brand-forward presentation\",\n" +
                "      \"imageCaption\": \"Strong identity, polished visuals, and client-ready messaging\",\n" +
                "      \"liveUrl\": \"#contact\",\n" +
                "      \"repoUrl\": \"mailto:kagudamakanaka@gmail.com?subject=Project%20Inquiry%20-%20Professional%20Portfolio%20Platform\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"socials\": [\n" +
                "    {\n" +
                "      \"name\": \"Instagram\",\n" +
                "      \"label\": \"@sunshine_.zw\",\n" +
                "      \"url\": \"https://www.instagram.com/sunshine_.zw?igsh=ZnA2bDY5enM5N21x\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"name\": \"WhatsApp\",\n" +
                "      \"label\": \"+263 71 038 4113\",\n" +
                "      \"url\": \"https://wa.me/263710384113\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"name\": \"LinkedIn\",\n" +
                "      \"label\": \"Makanaka Kaguda\",\n" +
                "      \"url\": \"https://www.linkedin.com/in/makanaka-kaguda-a9abb6247?trk=contact-info\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"stats\": [\n" +
                "    {\n" +
                "      \"label\": \"Based In\",\n" +
                "      \"value\": \"Harare\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"label\": \"Core Stack\",\n" +
                "      \"value\": \"Java + Web\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"label\": \"Available\",\n" +
                "      \"value\": \"For Projects\"\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";
    }

    private static void sendJson(HttpExchange exchange, int statusCode, String body) throws IOException {
        sendResponse(exchange, statusCode, body, "application/json; charset=utf-8");
    }

    private static void sendResponse(HttpExchange exchange, int statusCode, String body, String contentType) throws IOException {
        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        Headers headers = exchange.getResponseHeaders();
        headers.set("Content-Type", contentType);
        headers.set("Cache-Control", "no-cache");
        exchange.sendResponseHeaders(statusCode, bytes.length);
        exchange.getResponseBody().write(bytes);
        exchange.close();
    }

    private static String readBody(HttpExchange exchange) throws IOException {
        InputStream inputStream = exchange.getRequestBody();
        ByteArrayOutputStream buffer = new ByteArrayOutputStream();
        byte[] chunk = new byte[1024];
        int read;

        while ((read = inputStream.read(chunk)) != -1) {
            buffer.write(chunk, 0, read);
        }

        return new String(buffer.toByteArray(), StandardCharsets.UTF_8);
    }

    private static Map<String, String> parseFormBody(String body) throws IOException {
        Map<String, String> values = new LinkedHashMap<String, String>();

        if (body == null || body.trim().isEmpty()) {
            return values;
        }

        String[] pairs = body.split("&");
        for (String pair : pairs) {
            String[] parts = pair.split("=", 2);
            String key = URLDecoder.decode(parts[0], "UTF-8");
            String value = parts.length > 1 ? URLDecoder.decode(parts[1], "UTF-8") : "";
            values.put(key, value);
        }

        return values;
    }

    private static String escapeJson(String value) {
        if (value == null) {
            return "";
        }

        return value
                .replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\r", "\\r")
                .replace("\n", "\\n");
    }

    private static String methodNotAllowedJson(String method) {
        return "{\n" +
                "  \"status\": \"error\",\n" +
                "  \"message\": \"Method " + escapeJson(method) + " is not allowed on this endpoint.\"\n" +
                "}\n";
    }

    private static final class ContactHandler implements HttpHandler {
        private final Path submissionsFile;

        private ContactHandler(Path submissionsFile) {
            this.submissionsFile = submissionsFile;
        }

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.getResponseHeaders().set("Allow", "POST");
                sendJson(exchange, 405, methodNotAllowedJson(exchange.getRequestMethod()));
                return;
            }

            Map<String, String> form = parseFormBody(readBody(exchange));
            String name = valueOrEmpty(form.get("name"));
            String email = valueOrEmpty(form.get("email"));
            String phone = valueOrEmpty(form.get("phone"));
            String service = valueOrEmpty(form.get("service"));
            String message = valueOrEmpty(form.get("message"));

            if (name.isEmpty() || email.isEmpty() || message.isEmpty()) {
                sendJson(exchange, 400,
                        "{\n" +
                                "  \"status\": \"error\",\n" +
                                "  \"message\": \"Name, email, and message are required.\"\n" +
                                "}\n");
                return;
            }

            Files.createDirectories(submissionsFile.getParent());

            String entry = "{"
                    + "\"submittedAt\":\"" + escapeJson(Instant.now().toString()) + "\","
                    + "\"name\":\"" + escapeJson(name) + "\","
                    + "\"email\":\"" + escapeJson(email) + "\","
                    + "\"phone\":\"" + escapeJson(phone) + "\","
                    + "\"service\":\"" + escapeJson(service) + "\","
                    + "\"message\":\"" + escapeJson(message) + "\""
                    + "}\n";

            Files.write(
                    submissionsFile,
                    entry.getBytes(StandardCharsets.UTF_8),
                    StandardOpenOption.CREATE,
                    StandardOpenOption.APPEND
            );

            sendJson(exchange, 201,
                    "{\n" +
                            "  \"status\": \"success\",\n" +
                            "  \"message\": \"Thanks for reaching out. Your message has been received and saved.\",\n" +
                            "  \"email\": \"kagudamakanaka@gmail.com\"\n" +
                            "}\n");
        }

        private String valueOrEmpty(String value) {
            return value == null ? "" : value.trim();
        }
    }

    private static final class StaticFileHandler implements HttpHandler {
        private final Path baseDirectory;
        private final String pathPrefix;
        private final boolean fallbackToIndex;

        private StaticFileHandler(Path baseDirectory, String pathPrefix, boolean fallbackToIndex) {
            this.baseDirectory = baseDirectory;
            this.pathPrefix = pathPrefix;
            this.fallbackToIndex = fallbackToIndex;
        }

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String requestPath = exchange.getRequestURI().getPath();
            String relativePath = toRelativePath(requestPath);
            Path filePath = baseDirectory.resolve(relativePath).normalize();

            if (!filePath.startsWith(baseDirectory)) {
                sendResponse(exchange, 403, "Forbidden", "text/plain; charset=utf-8");
                return;
            }

            if (!Files.exists(filePath) || Files.isDirectory(filePath)) {
                if (fallbackToIndex) {
                    filePath = baseDirectory.resolve("index.html");
                } else {
                    sendResponse(exchange, 404, "Not Found", "text/plain; charset=utf-8");
                    return;
                }
            }

            byte[] content = Files.readAllBytes(filePath);
            Headers headers = exchange.getResponseHeaders();
            headers.set("Content-Type", detectContentType(filePath));
            headers.set("Cache-Control", "no-cache");
            exchange.sendResponseHeaders(200, content.length);
            exchange.getResponseBody().write(content);
            exchange.close();
        }

        private String toRelativePath(String requestPath) {
            if ("/".equals(pathPrefix)) {
                return "/".equals(requestPath) ? "index.html" : requestPath.substring(1);
            }

            String trimmed = requestPath.startsWith(pathPrefix)
                    ? requestPath.substring(pathPrefix.length())
                    : requestPath;

            return trimmed.isEmpty() ? "index.html" : trimmed;
        }

        private String detectContentType(Path filePath) {
            String fileName = filePath.getFileName().toString().toLowerCase();

            if (fileName.endsWith(".html")) {
                return "text/html; charset=utf-8";
            }
            if (fileName.endsWith(".css")) {
                return "text/css; charset=utf-8";
            }
            if (fileName.endsWith(".js")) {
                return "application/javascript; charset=utf-8";
            }
            if (fileName.endsWith(".json")) {
                return "application/json; charset=utf-8";
            }
            if (fileName.endsWith(".png")) {
                return "image/png";
            }
            if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {
                return "image/jpeg";
            }
            if (fileName.endsWith(".svg")) {
                return "image/svg+xml";
            }
            if (fileName.endsWith(".pdf")) {
                return "application/pdf";
            }

            return "application/octet-stream";
        }
    }
}
