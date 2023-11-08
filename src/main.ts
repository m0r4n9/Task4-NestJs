import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
    const PORT = 8080;
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT);
}

start();
