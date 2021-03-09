const csc = require('cypress-service-client');

deployCypressTests();

async function deployCypressTests() {
    const serviceBaseUrl = 'http://localhost:3950';
    const environmentName = 'live';

    const result = await csc.deployCypressFolder(serviceBaseUrl, environmentName);
    console.log(result);
}
