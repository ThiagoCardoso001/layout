async function getData() {
    const carsDataResponse = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
    }))
    .filter(car => (car.mpg != null && car.horsepower != null)); //Filtra pelos carros que atendem essas condições

    return cleaned; //Retorna os carros filtrados, que possuem as proprieadades mpg e horsepower
}

async function run() {
    const data = await getData();
    const values = data.map(d => ({
        x: d.horsepower,
        y: d.mpg,

    }));

    //tfvis e uma biblioteca de renderização
    tfvis.render.scatterplot (
        {name: 'Horsepower vs MPG'},
        {values},

        {
            xLabel: 'Horsepower',
            yLabel: 'MPG',
            heigth: 300
        }
    );
}

document.addEventListener('DOMContentLoaded', run);

function createModel() {
    //Cria um modelo sequencial
    const model = tf.sequential();

    //Adiciona uma camada de entrada
    model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));
    //adiciona uma camada de saida
    model.add(tf.layers.dense({units: 1, useBias: true}));

    return model;
}

const model = createModel();

tfvis.show.modelSummary({name: "Modelo"}, model);