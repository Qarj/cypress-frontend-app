const csc = require('cypress-service-client');

startParallel();

async function startParallel() {
    const serviceBaseUrl = 'http://localhost:4567';
    const environmentName = 'live';

    const result = await csc.startParallel(serviceBaseUrl, environmentName);
    console.log(result);
}
