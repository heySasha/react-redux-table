const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const buildingsController = require('./api/controlers/buildings');
const classroomsController = require('./api/controlers/classrooms');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});


app.get('/api', (req, res) => {
    res.send('Hey!');
});

/*     BUILDINGS                */
app.get('/api/buildings', buildingsController.all);
app.delete('/api/buildings/:id', buildingsController.delete);
app.put('/api/buildings/:id', buildingsController.update);
app.post('/api/buildings', buildingsController.create);
/*      CLASSROOMS              */
app.get('/api/classrooms', classroomsController.all);
app.get('/api/classrooms/:id', classroomsController.ofBuilding);
app.delete('/api/classrooms/:id', classroomsController.delete);
app.put('/api/classrooms/:id', classroomsController.update);
app.post('/api/classrooms', classroomsController.create);

db.connect(err => {
    if (err) {
        return console.log(err);
    }
    app.listen( app.get('port'), () => console.log(`Start server! ${app.get('port')}`) );
});


