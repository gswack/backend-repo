# backend-repo
backend-repo

Verification:
1. Trigger validation
 Need to confirm that the secret params in the build-image workflow are stored correctly in the GitHub reo secrets.
 Confirm the workflow starts when code is pushed to the dev branch.
 Command to verify:
  git checkout dev
  git push origin dev
2. Build artifact validation
 Confirm the application build step completes successfully.
 Command to run locally:
  cd backend-repo
  npm install
  npm run build
3. Docker image build validation
 Confirm the Docker image builds successfully.
 Command to run locally:
  cd backend-repo
  docker build -t <nexus-registry>/backend:dev .
4. Image push validation
 Confirm the image is pushed to the Nexus repository without errors.
 Command to run locally:
  docker login <nexus-registry>
  docker push <nexus-registry>/backend:dev
5. Smoke test validation
 Confirm the pushed image can be pulled and run successfully.
 Commands to run:
  docker pull <nexus-registry>/backend:dev
  docker run -d -p 3000:3000 --name backend-test <nexus-registry>/backend:dev
  curl http://localhost:3000/hotels
  docker rm -f backend-test

  TEST GITHUB ACTIOns - pipelines 1 and 2. test 49
  

