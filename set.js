const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA62WSY7jRhaG7xJbqizOg4AEmmNqoETNomT0IkQGyZA4ByklVRBgoNu98SlseOV1LX2B6lO0URcxmMpEJmA7nQ2UVgRF/vG96X/8CNIMEzRCDeh9BHmJT7BC7WXV5Aj0gFYHASpBB/iwgqAH8ChORoV2OqwSRg7vt05eMExor9ZON0kMM+43KevQznrC8Hfg2gF5vY+x94agzO+r6FD5ZXfrDAL9ZG8uzGEqJ959MgnCwk58Uy5Pi+OEIXfg2ipCXOI0NPMIJaiE8Qg1U4jL9+F79uCQHWfC0lxS9sNBlu7ZM9k1dBNTU95Ut7G48/MaZQ+m/D78ueiVwcmRD5vFRdlsioOVaIlOJe7GubCew7LD4yUcBuu5y9/wCQ5T5A98lFa4at6dd2Is2Etknd39ngtYfa72JVz51g5yi4JdDvYT5UgxUpZo6ex94FNfi5RpNVL47XrUROtBVDh1qVO6cV7Pk6rvc13OJ64a9dXX4NPyuVeO/0/e1UFXpaOpUyvIsF1334W7iVAkU2dNnVcrQpOYcgVKRdGGvA/fTS88pefuSHEpFQtLRY8u3JYM+csF2svCLgLY3YeUuZ6TF3xY1eVblCwFc9vw7Jja28PEngQTiEeDg5vYfW1nNz6lk5kFyz0fD3LdoChnnOeysgkziknYqA/x6v5gjZthwteC4BKh0G1GVe8eIzqiZuCDHnPtgBKFmFQlrHCWtvdYTuwA6J8WyCtR9Zhe4FrHlVYk6sLzjjFR6MroT/URsfIsbo5L57hTjUOw87cHcXAHOiAvMw8Rgvw+JlVWNmNECAwRAb1vHyvVBl2iJKvQEPttpByv0JLMsZzCy/8g35wjWBGY59+kqAIdEJRZMkagV5U16oDHN3RV5GROkAyRUXlVNiWOkURG5VhV0jlTFdsYk9upS5wgUsEkBz1G4jlRESWFvXa+EojIc6ZCy5aoSzzL0prAmiajGgJrKqZuatLfgChfDURWJF4QaZkxDIUxdEsWeJ1RTVHQJEYUWO1NEJn+eiCMzrOCJfKiqEmGbnCMRbOipBu0RfOWyQpvg7DcVwPhNIZWeFoxdYazaJkVTcaUGcsUTF3gVM56G4Rjr//sgBQ9VDeTaUdDZDogwCWpVmmdxxn0nx3o+U/oeVmdVosm9fT2ApWg9+o2qiqchqQNrU5h6UX4hPQ2DtALYEzQtQN8dMIeavXAmQijk8APllKh2OpiN11Ii/W5Ha8oS2+PeEoApUDgP6C9J37gGch9gBwjfgj2Es9LAlLQngdtOm7+3r7zl3ZjSufJfOYNN1Lkb5lxV/PEfC/Psntn8GgZN59AJfKfs7yH3rHOl9kRpW/oGuJg0lWz83Q7Gl98nBr6jkk49mgU3ivdm/+A3seXnapn/qPefGbYiyUD2mq15/yxHXrCHxsihe3T4H+//ufL9z+b//3u8y+/ffr3b59++PzL50+ff/ry/c9f/vVje/xTbVphH1UQx6S1lzHeVfVMMwdBWpfy/b1qhqoequClls8GfjNITjTOljBzCqeOS81vImfrpd18jo9LStSVZG0X4+qo4XSW3f2JCOgBnnelkVaP/R0iu3Q2r+KVXBs1Dgm1OQwWD15+v9pG3iUt5EEjLbi9Y7mO2J3I6bCbXKSVq+LJSTUETSpS/0EdbT19abRu/9xTrw+LpW7IhP460qgSmUNjE46Oh4w/sZdBEpwPfbpmu9DMlrj2MHGdaHdZu5qfO9sko6dGKS2bqUU23HhEiTMtp4j+cLbV8LZaHldb/PRJgZ9M/9aBAUaPG/qpNn9bw5dhoK+dVxpPO/8vGk7zqVDW0MooDmUOz66XLZP+sCuutrnZrcPTLl6IB3unbnN6BK7tlOcxrIKsTEAPwNQvM+yDDoghqdSXef4T95aVDkgaNc8XFayebQCo7c/AFrj+DsWclQLOCgAA',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254748387615",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "yes", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
