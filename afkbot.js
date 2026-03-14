const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'gldevs.aternos.me',  // Sunucu IP
  port: 59715,                 
  username: 'AFKBot',          
  version: false                
});

bot.on('spawn', () => {
  console.log('Bot sunucuya bağlandı ve AFK modunda duruyor!');
});

// Bot sabit duracak, hareket etmeyecek
bot.setControlState('forward', false);
bot.setControlState('back', false);
bot.setControlState('left', false);
bot.setControlState('right', false);
bot.setControlState('jump', false);
