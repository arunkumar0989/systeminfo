const express = require('express');
const { OutgoingMessage } = require('http');
const app = express();

const path = require('path');

const directory = path.join(__dirname, "publics");

app.set('view engine', 'hbs');
const port = 2005;
const si = require('systeminformation');
let temp;
let temps;
let tempos;
let tempose;
let temposte;
app.use(express.static(directory));


app.get('/', (req, res) => {

    const testing =
        si.cpu()
        .then(data => {
            return data.manufacturer;
        })
    const out = async() => {
        temp = await testing;
    }

    const tests = si.battery().
    then(data => {
        console.log(data);
        return data.percent
    })
    const outer = async() => {
        temps = await tests;

    }
    const testos = si.battery().
    then(data => { return data.isCharging });

    const outers = async() => {
        tempos = await testos;
    }
    const testose = si.diskLayout().
    then(data => {
        data = (data[0].size / 1073741824).toFixed(2);
        console.log(data);
        return data;
    });

    const outerze = async() => {
        tempose = await testose;
    }
    const testost = si.osInfo().then(data => {
        console.log(data.platform);
        return data.platform;
    });
    const outerzes = async() => {
        temposte = await testost;
    }



    outers();

    outerze();

    out();
    outer();
    outerzes();



    res.render('test', {
        ip: temp,
        testos: temps,
        testose: tempos,
        tempost: tempose,
        temposts: temposte

    });




});

app.listen(port);