var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});

//  x-www-form-urlencoded로 들어오는 데이터 파싱
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));	// 정적 파일 위치 설정

app.post('/music', function (req, res) {
    console.log('req.body:', req.body);
    var title = req.body.title;
    var singer = req.body.singer;

    res.send('urlencoded -> title:' + title + ', singer:' + singer);
});