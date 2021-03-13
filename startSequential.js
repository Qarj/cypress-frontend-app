const csc = require('cypress-service-client');

startSequential();

async function startSequential() {
    const serviceBaseUrl = 'http://localhost:4567';
    const environmentName = 'live';

    const result = await csc.startSequential(serviceBaseUrl, environmentName);
    console.log(result);
}
