import Database from "./Database";
import http from "http";

export default class {
    private server: http.Server;
    // public database: Database;

    constructor() {
        this.server = http.createServer();
    }

    public initialise = (
        port: 3000 | 443 | 80 | 8080,
        mode: "DEV" | "PRODUCTION" | "TEST",
    ) => {
        const database = new Database(mode);
        this.server.listen(port, "127.0.0.1", () =>
            console.log(
                "[ByteBase | 🌐🪵] -> Started the server in %s mode (::%s).",
                mode,
                port,
            ),
        );
    };
}
