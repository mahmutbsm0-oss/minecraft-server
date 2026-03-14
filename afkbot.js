const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'gldevs.aternos.me',
  port: 59715,
  username: 'AFKBot',
  version: false
});

bot.on('spawn', () => {
  console.log('Bot sunucuya bağlandı ve AFK modunda duruyor!');

  // Sadece spawn olduktan sonra kontrol komutları çalıştır
  bot.setControlState('forward', false);
  bot.setControlState('back', false);
  bot.setControlState('left', false);
  bot.setControlState('right', false);
  bot.setControlState('jump', false);
});

// Bağlantı hatalarını yakala
bot.on('error', (err) => {
  console.log('Bot bağlanamadı:', err.message);
});

bot.on('end', () => {
  console.log('Bot sunucudan ayrıldı veya sunucu kapalı.');
});
