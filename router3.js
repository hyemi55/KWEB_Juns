const { Router } = require('express');
const factorial = require('./factorial');
const router = Router();

router.get('/', (req, res) => {
    const data = req.query;
    res.send(Object.keys(data).map(k => `${k}: ${data[k]}`).join('\n'));
});
router.post('/', (req, res) => {
    const data = req.body;
    res.send(Object.keys(data).map(k => `${k}: ${data[k]}`).join('\n'));
});

router.get('/board/page/:page', (req, res) => {
    const { page } = req.params;
    res.send(`This is page #${page}`);
});

router.get('/factorial', (req, res) => {
    const { number } = req.query;
    res.redirect(`/factorial/${number}`);
});
router.get('/factorial/:number', (req, res) => {
    const { number } = req.params;
    res.send(`${number}! = ${factorial(number)}`);
});

router.get('/login', (req, res) => {
    res.render('login.pug');
});
router.post('/login', (req, res) => {
    const data = req.body;
    res.send(Object.keys(data).map(k => `${k}: ${data[k]}`).join('\n'));
})

module.exports = router;