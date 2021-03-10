const csc = require('cypress-service-client');

runParallel();

async function runParallel() {
    const serviceBaseUrl = 'http://localhost:3950';
    const environmentName = 'live';

    const result = await csc.runParallel(serviceBaseUrl, environmentName);
    console.log(result);
}
