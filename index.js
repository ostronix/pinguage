import ping from 'pinguage'

const getPing = async () => await ping.request ('https://api.vk.com')

exports.ping = getPing ()
