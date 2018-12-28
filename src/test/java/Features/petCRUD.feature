Feature: PET CRUD 

@PETGet @all 
Scenario: 
	Get the pet details
	Given user set param /pet/3310 
	When user make GET call 
	Then validate the status code as 200 
	And validate json schema 
		|jsonSchemaValue|
		|Pet/schemas/pet|
	And validate expected response 
		|expectedResponse	|
		|Pet/getPetExpected	|
		
@PETCreate @Regression @all 
Scenario: 
	Create new pet
	Given user set param /pet 
	And user set the request body with Dyanmic values in resquest body and expected response 
		|RequestBody  |id	 |status	  |expectedResponse|
		|Pet/petDetail|random|randomStatus|Pet/createPetExpected| 
	When user make POST call 
	Then validate the status code as 200 
	And validate json schema 
		|jsonSchemaValue|
		|Pet/schemas/pet|
	And validate response 
		|id		 |status  |Category,name|
		|Existing|Existing|automation	|
	And validate expected response 
		|expectedResponse	  |
		|Pet/createPetExpected|
		
@PETUpdate @all 
Scenario: 
	Update and Get the pet details
	Given user set param /pet 
	And user set the request body with Dyanmic values in resquest body and expected response 
		|RequestBody  			|id	   |status	    |expectedResponse|
		|Pet/createPetExpected	|random|randomStatus|Pet/UpdatePetExpected| 
	When user make PUT call 
	Then validate the status code as 200 
	And validate json schema 
		|jsonSchemaValue|
		|Pet/schemas/pet|
	And validate response 
		|id		 |status  |Category,name|
		|Existing|Existing|automation	|
	And validate expected response 
		|expectedResponse	  |
		|Pet/UpdatePetExpected|
	Given user set param /pet/ExistingID 
	When user make GET call 
	Then validate the status code as 200 
	And validate json schema 
		|jsonSchemaValue|
		|Pet/schemas/pet|
	And validate expected response 
		|expectedResponse	|
		|Pet/UpdatePetExpected|	
@PETCreateDelete @all 
Scenario: 
	Create and Delete the pet details
	Given user set param /pet 
	And user set the request body with Dyanmic values in resquest body and expected response 
		|RequestBody  |id	 |status	  |expectedResponse|
		|Pet/petDetail|random|randomStatus|Pet/createPetExpected| 
	When user make POST call 
	Then validate the status code as 200 
	And validate json schema 
		|jsonSchemaValue|
		|Pet/schemas/pet|
	And validate response 
		|id		 |status  |Category,name|
		|Existing|Existing|automation	|
	And validate expected response 
		|expectedResponse	  |
		|Pet/createPetExpected|
	Given user set param /pet/ExistingID 
	When user make DELETE call 
	Then validate the status code as 200 
	And validate expected response is empty 
	
@PETNotPetFound @all 
Scenario: 
	Given user set param /pet/121212121345534 
	When user make GET call 
	Then validate the status code as 404 
	And validate json schema 
		|jsonSchemaValue|
		|Pet/schemas/noPetFound|
	And validate error response
		|message|
		|Pet not found|
	And validate expected response 
		|expectedResponse|
		|Pet/notPetFound |	 
		#	When user make "GET" call with "/pet/findByStatus"
		#	|paramKey|paramValue|
		#	|status	 |available |
		#	Then validate the response as "200"
		#	And validate the 
		#	And I create invoice through manually 
		#		|GuestName		|ProductName   |IncomeCategory|VAT			   |Price|PaymentMethod|Start Date|End Date|
		#		|BDD Client BDD |BDDMembership1|Memberships   |BTW 21% (21.00%)|0.00|Mollie - sepa|runtime|runtime|
		#	And I retrive the invoice number from invoice detail page 
		#	And User is navigate Clients and Staff page 
		#	Then manual invoice should create with zero price and with start date and end date 
		
