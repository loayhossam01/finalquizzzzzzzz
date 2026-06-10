require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome! Send me a poll request in the format:\n`/poll Question? | Option 1 | Option 2 | Option 3`', { parse_mode: 'Markdown' }));

bot.help((ctx) => ctx.reply('Use the `/poll` command followed by the question and options separated by `|`.\n\nExample:\n`/poll What is your favorite color? | Red | Blue | Green`', { parse_mode: 'Markdown' }));

async function processPolls(ctx, rawText) {
    const lines = rawText.split(/(?=\/poll\b)|\n/);
    let pollCount = 0;

    for (const line of lines) {
        const text = line.replace(/^\/poll(@\w+)?\s*/, '').trim();
        if (!text) continue;

        const parts = text.split('|').map(p => p.trim()).filter(p => p.length > 0);
        
        if (parts.length < 3) {
            await ctx.reply(`Skipping: Not enough options for "${parts[0] || 'Unknown'}"`);
            continue;
        }

        const question = parts[0];
        const originalOptions = parts.slice(1);

        if (originalOptions.length > 10) {
             await ctx.reply(`Skipping: Too many options (max 10) for "${question.substring(0, 20)}..."`);
             continue;
        }

        // The first option (index 0) in our generated list is always the correct answer.
        // We map them to objects to keep track of which one is correct.
        let optionsObj = originalOptions.map((text, idx) => ({ text: text, isCorrect: idx === 0 }));

        // Shuffle the options so the correct answer isn't always the first one!
        for (let i = optionsObj.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsObj[i], optionsObj[j]] = [optionsObj[j], optionsObj[i]];
        }

        // Find the new position of the correct answer
        const correctOptionIndex = optionsObj.findIndex(opt => opt.isCorrect);
        const finalOptions = optionsObj.map(opt => opt.text);

        try {
            await ctx.replyWithPoll(question, finalOptions, {
                type: 'quiz',
                correct_option_id: correctOptionIndex,
                is_anonymous: true
            });
            pollCount++;
            // Delay to avoid hitting rate limits when creating many polls
            await new Promise(r => setTimeout(r, 1000));
        } catch (err) {
            console.error(err);
            await ctx.reply(`Failed to create poll for "${question.substring(0, 20)}..."`);
        }
    }
    
    if (pollCount === 0) {
        await ctx.reply('No valid polls were created. Please ensure the format is correct: `/poll Question? | Option 1 | Option 2`', { parse_mode: 'Markdown' });
    } else {
        await ctx.reply(`Successfully created ${pollCount} quiz question(s)!`);
    }
}

bot.command('poll', async (ctx) => {
    await processPolls(ctx, ctx.message.text);
});

bot.on('document', async (ctx) => {
    try {
        const fileId = ctx.message.document.file_id;
        const fileUrl = await ctx.telegram.getFileLink(fileId);
        
        const https = require('https');
        https.get(fileUrl, (response) => {
            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', async () => {
                await ctx.reply('File received! Processing polls...');
                await processPolls(ctx, data);
            });
        }).on('error', (err) => {
            console.error(err);
            ctx.reply('Failed to download the file.');
        });
    } catch (err) {
        console.error(err);
        ctx.reply('Failed to process the document.');
    }
});

bot.launch().then(() => {
    console.log('Bot is running...');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
