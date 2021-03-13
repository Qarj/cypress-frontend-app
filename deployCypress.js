const csc = require('cypress-service-client');

deployCypressTests();

async function deployCypressTests() {
    const serviceBaseUrl = 'http://localhost:4567';
    const environmentName = 'live';

    const result = await csc.deployCypressFolder(serviceBaseUrl, environmentName);
    console.log(result);
}
