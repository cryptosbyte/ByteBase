import { Sequelize, Model, DataTypes } from "sequelize";

export default class {
    private database: Sequelize;

    constructor(mode: "DEV" | "PRODUCTION" | "TEST") {
        this.database = new Sequelize({
            dialect: "sqlite",
            storage: "./bin/database.sqlite",
            logging:
                mode === "DEV" || mode === "TEST"
                    ? (...message) =>
                          console.log("[ByteBase | 💾🪵] -> ", message)
                    : false,
        });

        try {
            this.database.authenticate().then(
                () =>
                    console.log(
                        "[ByteBase | 💾🪵] -> Database Connection has been established.",
                    ),
                () =>
                    console.log(
                        "[ByteBase | 💾🪵] -> Database Connection has failed.",
                    ),
            );
        } catch (error) {
            console.log("[ByteBase | 💾🪵] -> ", error);
        }
    }
}
