/* Codded by @Eva BOT
Telegram: t.me/EvaBOT
youtube https://youtube.com/c/ICHUTECH
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Whats bot - Eva BOT
*/

const QueenSew = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command"

if (Config.WORKTYPE == 'private') {

   QueenSew.addCommand({pattern: 'makermenu', fromMe: true}, (async (message, match) => {    

    await message.sendMessage('```❤❤❤❤❤❤❤❤❤❤❤\n\n\n\n👑Eva TEXT MAKER👑```\n_~*coded by DocEditor*~_\n\n\n\n❤❤❤❤❤❤❤❤❤❤\n\n\n\nClick..👉👉👉 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n\n❤\n🌞Usage: *.freefire*\n🌚Desc: Enters the text as the caption for a freefire themed logo.\n🌝 Example : *.freefire Eva*\n\n🌞Usage: *.cslogo*\n🌚Desc: Enters the text as the caption for a cs go themed logo.\n🌝 Example : *.cslogo Eva*\n\n🌞Usage: *.crosslogo*\n🌚Desc: Enters the text as the caption for a cross themed logo.\n🌝 Example : *.crosslogo Eva*\n\n🌞Usage: *.bpink*\n🌚Desc: Enters the text as the caption for a blackpink themed logo.\n🌝 Example : *.bpink Eva*\n\n🌞Usage: *.ninjalogo*\n🌚Desc: Enters the text as the caption for a ninja themed logo.\n🌝 Example : *.ninjalogo Eva*\n\n🌞Usage: *.logopubg*\n🌚Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.logopubg Eva;BOT*\n\n🌞Usage: *.water2color*\n🌚Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.water2color Eva;BOT*\n\n🌞Usage: *.snowwrite*\n🌚Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.snowwrite Eva;BOT*\n\n🌞Usage: *.logowolf*\n🌚Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.logowolf Eva;BOT*\n\n🌞Usage: *.sparkling*\n🌚Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.sparkling Eva;BOT*\n\n🌞Usage: *.phub*\n🌚Desc: Converts the text into phub logo.\n🌝 Example : *.phub Eva/BOT*\n\n🌞Usage: *.1neon*\n🌚Desc: Converts the text into neon themed image.\n🌝 Example : *.1neon Eva*\n\n🌞Usage: *.naruto*\n🌚Desc: Converts the text into naruto themed image.\n🌝 Example : *.naruto Eva*\n\n🌞Usage: *.blueneon*\n🌚Desc: Converts the text into blueneon themed image.\n🌝 Example : *.blueneon Eva*\n\n🌞Usage: *.2hacker*\n🌚Desc: Converts the text into hacker themed image.\n🌝 Example : *.2hacker Eva*\n\n🌞Usage: *.3hacker*\n🌚Desc: Converts the text into hacker themed image.\n🌝 Example : *.3hacker Eva*\n\n🌞Usage: *.breakwall*\n🌚Desc: Converts the text into breakwall themed image.\n🌝 Example : *.breakwall Eva*\n\n🌞Usage: *.dropwater*\n🌚Desc: Converts the text into dropwater themed image.\n🌝 Example : *.dropwater Eva*\n\n🌞Usage: *.flowertext*\n🌚Desc: Converts the text into flowertext themed image.\n🌝 Example : *.flowertext Eva*\n\n🌞Usage: *.sliktext*\n🌚Desc: Converts the text into sliktext themed image.\n🌝 Example : *.sliktext Eva*\n\n🌞Usage: *.flame*\n🌚Desc: Converts the text into flame themed image.\n🌝 Example : *.flame Eva*\n\n🌞Usage: *.1glow*\n🌚Desc: Converts the text into 1glow themed image.\n🌝 Example : *.1glow Eva*\n\n🌞Usage: *.skytext*\n🌚Desc: Converts the text into skytext themed image.\n🌝 Example : *.skytext Eva*\n\n🌞Usage: *.smoke*\n🌚Desc: Converts the text into smoke themed image.\n🌝 Example : *.smoke Eva*\n\n🌞Usage: *.lithgtext*\n🌚Desc: Converts the text into lithgtext themed image.\n🌝 Example : *.lithgtext Eva*\n\n🌞Usage: *.sfire*\n🌚Desc: Converts the text into sfire themed image.\n🌝 Example : *.sfire Eva*\n\n🌞Usage: *.sandw*\n🌚Desc: Converts the text into sandw themed image.\n🌝 Example : *.sandw Eva*\n\n🌞Usage: *.gplay*\n🌚Desc: Converts the text into gplay themed image.\n🌝 Example : *.gplay Eva*\n\n🌞Usage: *.splay*\n🌚Desc: Converts the text into splay themed image.\n🌝 Example : *.splay Eva*\n\n🌞Usage: *.3dbox*\n🌚Desc: Converts the text into 3dbox themed image.\n🌝 Example : *.3dbox Eva*\n\n🌞Usage: *.leave*\n🌚Desc: Converts the text into leave themed image.\n🌝 Example : *.leave Eva*\n\n🌞Usage: *.blood*\n🌚Desc: It Sends a blood image of the text provided.\n🌝 Example : *.blood Eva*\n\n🌞Usage: *.cloud*\n🌚Desc: It Sends a sky image of the text provided\n🌝 Example : *.cloud Eva*\n\n🌞Usage: *.glue*\n🌚Desc: it makes 3D Glue text\n🌝 Example : *.glue Eva*\n\n🌞Usage: *.watercolour*\n🌚Desc: Converts the text into a watercolour themed image.\n🌝 Example : *.watercolor Eva*\n\n🌞Usage: *.neonlight*\n🌚Desc: Converts the text into a neonlight themed image.\n🌝 Example : *.neonlight Eva*\n\n🌞Usage: *.3dtext*\n🌚Desc: Converts the provided text into a 3D style image.\n🌝 Example : *.3dtext Eva*\n\n🌞Usage: *.galaxy*\n🌚Desc: it makes metal galaxy text\n🌝 Example : *.galaxy Eva/BOT*\n\n🌞Usage: *.skull*\n🌚Desc: it makes skull logo\n🌝 Example : *.skull Eva*\n\n🌞Usage: *.robot*\n🌚Desc: it makes Robot logo\n🌝 Example : *.robot Eva*\n🌞Usage: *.toxic*\n🌚Desc: it makes Toxic logo\n🌝 Example : *.toxic Eva*\n\n🌞Usage: *orangeglass*\n🌚Desc: it makes gradient text\n🌝 Example : *.orangeglass Eva*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*MAKED By Eva BOT*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷···\n');

    }));
    QueenSew.addCommand({ pattern: '1neon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'naruto ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'blueneon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: '2hacker ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'breakwall ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: '3hacker ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'dropwater ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'flowertext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'crosslogo ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sliktext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'flame ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: '1glow ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'somke ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'skytext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'cslogo ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'lithgtext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'xmas ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sfire ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sandw ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'gplay ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'splay ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: '3dbox ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'bpink ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'leave ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({pattern: 'logowolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'logopubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'snowwrite ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
   QueenSew.addCommand({pattern: 'water2color ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    
}

else if (Config.WORKTYPE == 'public') {

    QueenSew.addCommand({pattern: 'makermenu', fromMe: false,}, (async (message, match) => {    

    await message.sendMessage('```👑Eva TEXT MAKER👑```\n_~*coded by DOCEDITOR*~_\n\n🌞Usage: *.freefire*\n🌚Desc: Enters the text as the caption for a freefire themed logo.\n🌝 Example : *.freefire Eva*\n\n🌞Usage: *.cslogo*\n🌚Desc: Enters the text as the caption for a cs go themed logo.\n🌝 Example : *.cslogo Eva*\n\n🌞Usage: *.crosslogo*\n🌚Desc: Enters the text as the caption for a cross themed logo.\n🌝 Example : *.crosslogo Eva*\n\n🌞Usage: *.bpink*\n🌚Desc: Enters the text as the caption for a blackpink themed logo.\n🌝 Example : *.bpink Eva*\n\n🌞Usage: *.ninjalogo*\n🌚Desc: Enters the text as the caption for a ninja themed logo.\n🌝 Example : *.ninjalogo Eva*\n\n🌞Usage: *.logopubg*\n🌚Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.logopubg Eva;BOT*\n\n🌞Usage: *.water2color*\n🌚Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.water2color Eva;BOT*\n\n🌞Usage: *.snowwrite*\n🌚Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.snowwrite Eva;BOT*\n\n🌞Usage: *.logowolf*\n🌚Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.logowolf Eva;BOT*\n\n🌞Usage: *.sparkling*\n🌚Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.sparkling Eva;BOT*\n\n🌞Usage: *.phub*\n🌚Desc: Converts the text into phub logo.\n🌝 Example : *.phub Eva/BOT*\n\n🌞Usage: *.1neon*\n🌚Desc: Converts the text into neon themed image.\n🌝 Example : *.1neon Eva*\n\n🌞Usage: *.naruto*\n🌚Desc: Converts the text into naruto themed image.\n🌝 Example : *.naruto Eva*\n\n🌞Usage: *.blueneon*\n🌚Desc: Converts the text into blueneon themed image.\n🌝 Example : *.blueneon Eva*\n\n🌞Usage: *.2hacker*\n🌚Desc: Converts the text into hacker themed image.\n🌝 Example : *.2hacker Eva*\n\n🌞Usage: *.3hacker*\n🌚Desc: Converts the text into hacker themed image.\n🌝 Example : *.3hacker Eva*\n\n🌞Usage: *.breakwall*\n🌚Desc: Converts the text into breakwall themed image.\n🌝 Example : *.breakwall Eva*\n\n🌞Usage: *.dropwater*\n🌚Desc: Converts the text into dropwater themed image.\n🌝 Example : *.dropwater Eva*\n\n🌞Usage: *.flowertext*\n🌚Desc: Converts the text into flowertext themed image.\n🌝 Example : *.flowertext Eva*\n\n🌞Usage: *.sliktext*\n🌚Desc: Converts the text into sliktext themed image.\n🌝 Example : *.sliktext Eva*\n\n🌞Usage: *.flame*\n🌚Desc: Converts the text into flame themed image.\n🌝 Example : *.flame Eva*\n\n🌞Usage: *.1glow*\n🌚Desc: Converts the text into 1glow themed image.\n🌝 Example : *.1glow Eva*\n\n🌞Usage: *.skytext*\n🌚Desc: Converts the text into skytext themed image.\n🌝 Example : *.skytext Eva*\n\n🌞Usage: *.smoke*\n🌚Desc: Converts the text into smoke themed image.\n🌝 Example : *.smoke Eva*\n\n🌞Usage: *.lithgtext*\n🌚Desc: Converts the text into lithgtext themed image.\n🌝 Example : *.lithgtext Eva*\n\n🌞Usage: *.sfire*\n🌚Desc: Converts the text into sfire themed image.\n🌝 Example : *.sfire Eva*\n\n🌞Usage: *.sandw*\n🌚Desc: Converts the text into sandw themed image.\n🌝 Example : *.sandw Eva*\n\n🌞Usage: *.gplay*\n🌚Desc: Converts the text into gplay themed image.\n🌝 Example : *.gplay Eva*\n\n🌞Usage: *.splay*\n🌚Desc: Converts the text into splay themed image.\n🌝 Example : *.splay Eva*\n\n🌞Usage: *.3dbox*\n🌚Desc: Converts the text into 3dbox themed image.\n🌝 Example : *.3dbox Eva*\n\n🌞Usage: *.leave*\n🌚Desc: Converts the text into leave themed image.\n🌝 Example : *.leave Eva*\n\n🌞Usage: *.blood*\n🌚Desc: It Sends a blood image of the text provided.\n🌝 Example : *.blood Eva*\n\n🌞Usage: *.cloud*\n🌚Desc: It Sends a sky image of the text provided\n🌝 Example : *.cloud Eva*\n\n🌞Usage: *.glue*\n🌚Desc: it makes 3D Glue text\n🌝 Example : *.glue Eva*\n\n🌞Usage: *.watercolour*\n🌚Desc: Converts the text into a watercolour themed image.\n🌝 Example : *.watercolor Eva*\n\n🌞Usage: *.neonlight*\n🌚Desc: Converts the text into a neonlight themed image.\n🌝 Example : *.neonlight Eva*\n\n🌞Usage: *.3dtext*\n🌚Desc: Converts the provided text into a 3D style image.\n🌝 Example : *.3dtext Eva*\n\n🌞Usage: *.galaxy*\n🌚Desc: it makes metal galaxy text\n🌝 Example : *.galaxy Eva/BOT*\n\n🌞Usage: *.marvel*\n🌚Desc: it makes marvel logo text\n🌝 Example : *.marvel Eva;BOT*\n\n🌞Usage: *.skull*\n🌚Desc: it makes skull logo\n🌝 Example : *.skull Eva*\n\n🌞Usage: *.robot*\n🌚Desc: it makes Robot logo\n🌝 Example : *.robot Eva*\n🌞Usage: *.toxic*\n🌚Desc: it makes Toxic logo\n🌝 Example : *.toxic Eva*\n\n🌞Usage: *.nulis*\n🌚Desc: it makes note book \n🌝 Example : *.nulis Eva*\n\n🌞Usage: *orangeglass*\n🌚Desc: it makes gradient text\n🌝 Example : *.orangeglass Eva*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*MAKED By Eva BOT*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n');

    }));

    QueenSew.addCommand({ pattern: '1neon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'naruto ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'nulis ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/nulis?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'blueneon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: '2hacker ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'breakwall ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: '3hacker ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'dropwater ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'flowertext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'crosslogo ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sliktext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'flame ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: '1glow ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'somke ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'skytext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'cslogo ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'lithgtext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'xmas ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sfire ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sandw ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'gplay ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'splay ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: '3dbox ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'bpink ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'leave ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

    }));
    QueenSew.addCommand({pattern: 'logowolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'phub ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'marvel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'glog ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'pcom ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/phub?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${topText}&msg=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'mising ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/missing-image?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&image=https://api.zeks.xyz/logo.jpg&text1=${topText}&text2=${bottomText}&text3=Call%20100`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'mlog ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'logopubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    QueenSew.addCommand({pattern: 'snowwrite ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
   QueenSew.addCommand({pattern: 'water2color ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=pe56AoVTkvHs80EqHNQWRrUYAFu&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Eva BOT*' })

}));
    
    
}

