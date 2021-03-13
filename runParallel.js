const csc = require('cypress-service-client');

runParallel();

async function runParallel() {
    const serviceBaseUrl = 'http://localhost:4567';
    const environmentName = 'live';

    const result = await csc.runParallel(serviceBaseUrl, environmentName);
    console.log(result);
}
