### Indexed tests created with Supertest, Mocha, Chai and Typescript with in-built BDD assertions. 

- These tests were created in line with the previous Postman collection I delivered, containing identical indexing with some minor additions.

1. Install steps:
	1. Install node.js
	2. create new folder for tests
	3. ensure you copy following files from repo: 'tsconfig.json' + /tests folder
	4. ensure you run 'npm init -y' inside newly created folder
	5. run 'npm install supertest mocha chai --save-dev' inside newly created folder
	6. run 'npm i --save-dev @types/mocha' inside newly created folder
	7. run 'npm i --save-dev @types/node' inside newly created folder
	
	
2. Test details: 
	- Tests contain 58 indexed test files
	- 1 helper class
	- 2 .txt files (for writing tokens to)
	
3. Switching from dev to prod env:
	- In helper class comment/uncomment baseUrl and clientId to desired corresponding environment inside method.exports. 

4. To run test scripts:
	- cd to tests folder
	- npx mocha *.ts
		
5. Expected results on dev:
	- 104 passing
  	- 4 failing
	- expected failing tests: 15.1, 14.4, 14.3, 14.2 
	
6. Expected results on prod:
	- 92 passing
  	- 16 failing
	- expected failing tests as above plus photoUrl issue which does not occur same as on dev, impacted: 10.1 x 3, 9.3, 9.2, 9.1 , 7.1 x 3, 6.3, 6.2, 6.1.
	
