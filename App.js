var axios = require('axios'),
module.exports = async (key) => {
var data = await axios.get(`http://api.stackexchange.com/2.2/search/advanced?sort=relevance&site=stackoverflow&q=${key.replace(/ /g,"+")}`)
return data.data.items.reverse()
}