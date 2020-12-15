#### READ FIRST: REF codes are direct references to Postman test collection 'TheAgileMonkeys API TESTS.postman_collection.json', where folders and requests are indexed clearly.

### Section 1. Meeting acceptance criteria

#### The acceptance criteria that the API must meet are the following:

	• A user can:
	◦ List all customers in the database. ↓
	###### REF: 7. Query/CustomerReadModels/onCreate

	◦ Get full customer information, including a photo URL. ↓
	###### REF: 6. Queries/CustomerReadModel/onCreate & 7. Query/CustomerReadModels/onCreate 

	◦ Create a new customer:  ↓
	###### REF: 5. Mutations/SaveCustomer/Create

	▪ A customer should have (an asterisk indicates that it is a required field): ↓
	###### REF: 6. Queries/CustomerReadModel/onCreate & 7. Query/CustomerReadModels/onCreate 
	▪ * name,
	▪ * surname,
	▪ * id (autogenerated),
	▪ photoUrl ↓
	###### REF: 18.4 & 18.5 & 18.6
	▪ * userId
  
	▪ Image uploads should be able to be managed. ↓
	###### REF: 5. Mutations/SaveCustomer/Create

	▪ The customer should have a reference to the user who created it.  ↓
	###### REF: 5. Mutations/SaveCustomer/Create & 18. Add customer with newly created Admin end2end workflow

	◦ Update an existing customer. ↓
	###### REF: 9. Queries/CustomerReadModel/onUpdate & 10. Query/CustomerReadModels/onUpdate

	▪ The customer should hold a reference to the last user who modified it.  ↓
	###### REF: 9. Queries/CustomerReadModel/onUpdate & 10. Query/CustomerReadModels/onUpdate 
	& 18.5 query/CustomerReadModel get customerId:4 data

	◦ Delete an existing customer. ↓
	###### REF: 11. Mutations/DeleteCustomer/Delete

	• An admin can also:   
	◦ Manage users:
	▪ Create users. ↓
	###### REF: 2. Mutations/Create/SaveUser
	▪ Delete users.  ↓
	###### REF: 16. Mutations/UserReadModel/Delete
	▪ Update users. ↓
	###### REF: 14. ChangeUserRole/Tests & see Issues Noted below
	▪ List users.   ↓
	###### REF: 3. Queries/UserReadModel/onCreate & 4. Query/UserReadModels/onCreate
	▪ Change admin status.   ↓
	###### REF: 14. ChangeUserRole/Tests


### Section 2. Automated testing using Postman.
The reason for selecting Postman for this task, is I've being using it for API testing since 2014 so I have a large amount of experience using  it. In turn I can work very fast with it, and create, organise and manage a lot of requests and automaated tests simultaneously on different environments without tripping myself up. 

I have exported the Postman json files for tests, dev encironment and prod environment. I have added a delay of 500ms, I've noticed especially on prod environment a delay is required for the tests to run smoothly. This manifests mostly on REF: 18.5

Postman json files should be imported in Postman app as follows:
TheAgileMonkeys API TESTS.postman_collection.json -----> Import into collections
dev.postman_environment. json -----> Import into environments
prod.postman_environment. json -----> Import into environments

These files can also be run inside of Newman CLI, which is what I generally use for running API test Jenkins jobs for example. This needs a node.js install.

### Section 3. Issues noted: 
	1. photoUrl key is not accepted inside SaveCustomer mutation, photo is accepted.
	###### REF 5.1, 5.2, 5.3, 6.1, 6.2, 6.3

	2. On prod for query CustomerReadModel an empty value is returned for photo/photoUrl, on dev "test-qa-judeshiels-dev-app/1/photo.jpg" or variant is returned. 
	###### REF: 6.1, 6.2, 6.3

	3. When running UserReadModel on user with an updated role Admin->User, null result is returned.
	It appears ChangeUserRole does not support validation. I can enter any text into role field and it will return 'True' for ChangeUserRole inside the response body. 
	###### REF: 14.2, 14.3, 14.4, 14.5

	4. Username is used on mutation 'SaveUser' , id is used on queries inside 'UserReadModel', schema makes no reference to username, should the mutations tab list required arguments also?
	###### REF: 2.1, 3.1

	5. I can in theory update user role using ChangeUserRole, but not id/username or password through SaveUser? 
	SaveUser requires unique email each time effectively creating a new user entry, not updating details of existing user. 
	I mention it because this is not consistent with SaveCustomer behaviour which will update customer through recognising customer id.
	###### REF: 14.2, 15,1, 15,2

	6. id should be displayed in CustomerReadModel/CustomerReadModels response body same as userId?
	###### REF: 6.1, 7.1

	7. Ordering is not implemented inside schema, this means using Postman tests I needed to descope tests or modify test assertions to be less specific.

### Section 4. Expected test results
	#### 55 requests contained in Postman Suite
	#### Dev environment tests - expect 324 tests passed 23 tests failed 
	#### Prod environment tests - expect 321 tests passed 26 tests failed
	#### for failed test examples, see Issues noted above.
