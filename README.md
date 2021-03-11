# cypress-frontend-app

Demo frontend app to use with cypress-service. See: https://github.com/Qarj/cypress-service

Contains sample tests only.

# Develop and run your Cypress tests locally for your app

npm run cypress:open:dev
npm run cypress:open:preprod
npm run cypress:open:prod

# Deploy your tests to your cypress-service server

npm run deploy:cypress

# Start your tests to run sequentially, but don't wait for a result

npm run start-seq:cypress

# Run your tests sequentially and wait for the results

npm run run-seq:cypress

# Start your tests to run in parallel, but don't wait for a result

npm run start-parallel:cypress

# Run your tests in parallel and wait for the results

npm run run-parallel:cypress

# Deploy your tests and run them in parallel and wait for the results

npm run deploy:run
