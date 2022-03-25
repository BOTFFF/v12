let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *PERMANEN + PREM* :*Rp 15.000*
╠➥ *PERMANEN* :*Rp 10.000*
╠➥ *PERBULAN* :*Rp 7.000*
╠➥ *PERMINGGU* :*Rp 4.000*
╠➥ *PERHARI* :*Rp 2.000*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ GOPAY
║➥ DANA
║➥ OVO
║➥ SHOPEEPAY
║➥ QRIS ALLPAYMENT
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klik Button Di Bawah
║
╠═〘 Hyzer 〙 ═`.trim(), '❖ Wz-Bot', 'Gopay', '#viadigi', 'Dana', '#viaumobile', m)
}

handler.command = /^sewabot$/i

module.exports = handler
