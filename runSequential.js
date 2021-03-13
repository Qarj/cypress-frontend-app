const csc = require('cypress-service-client');

runSequential();

async function runSequential() {
    const serviceBaseUrl = 'http://localhost:4567';
    const environmentName = 'live';

    const result = await csc.runSequential(serviceBaseUrl, environmentName);
    console.log(result);
}
