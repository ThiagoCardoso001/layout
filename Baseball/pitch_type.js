const tf = require('@tensorflow/tfjs');

// função para normalizar um valor entre um determinado intervalo.

function normalize(value, min, max) {
    if (min === undefined || max === undefined) {
        return value;
    }
    return (value - min) / (max - min);
}

const TRAIN_DATA_PATH =
    'https://storage.googleapis.com/mlb-pitch-data/pitch_type_training_data.csv';

const TEST_DATA_PATH = 'https://storage.googleapis.com/mlb-pitch-data/pitch_type_test_data.csv';

// Constantes de dados de treinamento
const VX0_MIN = -18.885;
const VX0_MAX = 18.065;
const VY0_MIN = -152.463;
const VY0_MAX = -86.374;
const VZ0_MIN = -15.5146078412997;
const VZ0_MAX = 9.974;
const AX_MIN = -48.0287647107959;
const AX_MAX = 30.592;
const AY_MIN = 9.397;
const AY_MAX = 49.18;
const AZ_MIN = -49.339;
const AZ_MAX = 2.95522851438373;
const START_SPEED_MIN = 59;
const START_SPEED_MAX = 104.4;

const NUM_PITCH_CLASSES = 7;
const TRAINING_DATA_LENGTH = 7000;

// Converte uma linha do CSV em recursos e rótulos.
// Cada campo de recurso é normalizado nas constantes de dados de treinamento

const csvTransform =
    ({ xs, ys }) => {
        const values = [
            normalize(xs.vx0, VX0_MIN, VX0_MAX),
            normalize(xs.vy0, VY0_MIN, VY0_MAX),
            normalize(xs.vz0, VZ0_MIN, VZ0_MAX), normalize(xs.ax, AX_MIN, AX_MAX),
            normalize(xs.ay, AY_MIN, AY_MAX), normalize(xs.az, AZ_MIN, AZ_MAX),
            normalize(xs.start_speed, START_SPEED_MIN, START_SPEED_MAX),
            xs.left_handed_pitcher
        ];
        return { xs: values, ys: ys.pitch_code };
    }

const trainingData =
    tf.data.csv(TRAIN_DATA_PATH, { columnConfigs: { pitch_code: { isLabel: true } } })
        .map(csvTransform)
        .shuffle(TRAINING_DATA_LENGTH)
        .batch(100);

const model = tf.sequential();
model.add(tf.layers.dense({ units: 250, activation: 'relu', inputShape: [8] }));
model.add(tf.layers.dense({ units: 175, activation: 'relu' }));
model.add(tf.layers.dense({ units: 150, activation: 'relu' }));
model.add(tf.layers.dense({ units: NUM_PITCH_CLASSES, activation: 'softmax' }));

model.compile({
    optimizer: tf.train.adam(),
    loss: 'sparseCategoricalCrossentropy',
    metrics: ['accuracy']
});

async function predictSample(sample) {
  let result = model.predict(tf.tensor(sample, [1,sample.length])).arraySync();
  var maxValue = 0;
  var predictedPitch = 7;
  for (var i = 0; i < NUM_PITCH_CLASSES; i++) {
    if (result[0][i] > maxValue) {
      predictedPitch = i;
      maxValue = result[0][i];
    }
  }
  return pitchFromClassNum(predictedPitch);
}


// Retorna o valor da string para rótulos de campo de beisebol
function pitchFromClassNum(classNum) {
  switch (classNum) {
    case 0:
      return 'Fastball (2-seam)';
    case 1:
      return 'Fastball (4-seam)';
    case 2:
      return 'Fastball (sinker)';
    case 3:
      return 'Fastball (cutter)';
    case 4:
      return 'Slider';
    case 5:
      return 'Changeup';
    case 6:
      return 'Curveball';
    default:
      return 'Unknown';
  }
}

module.exports = {
  model,
  pitchFromClassNum,
  predictSample,
  trainingData,
}


