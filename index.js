import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// Cambia esto por tu webhook real de Discord
const WEBHOOK_URL = "https://discord.com/api/webhooks/1404651097913561223/asUe86-PIYYWlC314fGkZGzYJLbJ7J4Sg7CjXYrTpCssaCG7Iv9aRr-WrRhayw8grGBn";

app.post("/webhook", async (req, res) => {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error(`Discord devolvió ${response.status}`);
        }

        res.json({ success: true });
    } catch (err) {
        console.error("Error enviando a Discord:", err);
        res.status(500).json({ error: "Error enviando a Discord" });
    }
});

app.get("/", (req, res) => {
    res.send("Relay funcionando 🚀");
});

app.listen(3000, () => {
    console.log("Servidor escuchando en puerto 3000");
});
