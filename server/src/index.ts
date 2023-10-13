import express from "express";
import config from "config";
import {router} from "./routes/routes";
import {cors} from "./middlewares/cors.middleware";

const app = express();
const routerURL: string = config.get("routerURL");
const PORT = config.get("serverPort");

app.use(cors);
app.use(routerURL, router);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on port:", PORT);
        });
    } catch (e) {
        console.log((e as Error).message);
    }
};
start();