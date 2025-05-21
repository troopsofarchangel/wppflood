"use strict";
// Copyright (c) 2025 Troopsofarchangel.

import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const client = new Client({});

client.on("qr", (qr: string) => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("🤖 Bot pronto!");
});

client.on("message", async (msg: any) => {
    const body = msg.body.trim();

    if (body === "!test") {
        await msg.reply("✅ Bot funcionando!");
    }

    // Comando: !flood <quantidade> <intervalo_em_segundos> <mensagem>
    else if (/^!flood \d+ \d+ .+/i.test(body)) {
        const match = body.match(/^!flood (\d+) (\d+) (.+)/i);
        if (!match) return;

        const total = parseInt(match[1]);
        const delay = parseInt(match[2]) * 1000;
        const text = match[3];

        console.log(`Flood: ${total}x, Delay: ${delay}ms, Msg: ${text}`);

        if (isNaN(total) || isNaN(delay) || total <= 0 || delay < 0) {
            await msg.reply("❌ Use: !flood <quantidade> <segundos> <mensagem>");
            return;
        }

        for (let i = 0; i < total; i++) {
            setTimeout(() => {
                msg.reply(text);
            }, i * delay);
        }
    }
});

client.initialize();
