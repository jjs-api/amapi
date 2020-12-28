### Indexed tests created with Supertest, Mocha, Chai and Typescript with in-built BDD assertions. 

- These tests were created in line with the previous Postman collection I delivered, containing identical indexing with some minor additions.

- Install steps:
	1. Install node.js
	2. create new folder for tests
	3. ensure you copy following files from repo: 'tsconfig.json' + /tests folder
	4. ensure you run 'npm init -y' inside newly created folder
	5. run 'npm install supertest mocha chai --save-dev' inside newly created folder
	6. run 'npm i --save-dev @types/mocha' inside newly created folder
	7. run 'npm i --save-dev @types/node' inside newly created folder
	
	
- Test details: 
	- Tests contain 58 indexed test files
	- 1 helper class
	- 2 .txt files (for writing tokens to)
	
- Switching from dev to prod env:
	- In helper class comment/uncomment baseUrl and clientId to desired corresponding environment inside method.exports. 

- To run test scripts:
	- cd to tests folder
	- npx mocha *.ts
		
- Expected results on dev:
	- 104 passing
  	- 4 failing
	
- Expected results on prod:
	- 92 passing
  	- 16 failing
	
- Known test issue: 
	- The tests need a delay added between requests, perhaps 250ms, this is something I could do very easily on Postman. I investigated some potential solutions, but nothing definitive as yet. The effect is the tests can intermittently return unexpected errors. 
	
