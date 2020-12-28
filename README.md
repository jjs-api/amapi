Tests created in node with Supertest, Mocha, Chai and Typescript with in-built BDD assertions. 

- Install steps:
	- npm install supertest mocha chai --save-dev
	- npm i --save-dev @types/mocha
	- npm i --save-dev @types/node
	
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
	- The tests need a delay added between requests, perhaps 250ms, this is something I could do very easily on Postman.
	- I investigated some potential solutions, but nothing definitive as yet. 
	- This sometimes causes tests to return errors. 
	
