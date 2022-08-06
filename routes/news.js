const express = require('express')
const axios = require('axios')
const news = express.Router()

/*root dir. 
GET method
*/
news.get('/', async (req, res) => {
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=e973b1ec238e4da39586b016c46d221b';
        const news_get = await axios.get(url)
        res.render('news', {
            articles: news_get.data.articles
        })
    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})

/* /search
POST method
*/
news.post('/search', async (req, res) => {
    const search = req.body.search
    //console.log(req.body.search)
    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=e973b1ec238e4da39586b016c46d221b`
        const news_get = await axios.get(url)
        res.render('news', {
            articles: news_get.data.articles
        })
    } catch (error) {
        if (error.response) {
            console.log(error)
        }
    }
})

/*selecting category
GET method
*/
news.get('/news/:category', async (req, res) => {
    var category = req.params.category;
    try {
        var url = 'http://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=e973b1ec238e4da39586b016c46d221b';

        const news_get = await axios.get(url)
        res.render('category', {
            articles: news_get.data.articles
        })
    } catch (error) {
        if (error.response) {
            console.log(error)
        }
    }
})
news.get

module.exports = news