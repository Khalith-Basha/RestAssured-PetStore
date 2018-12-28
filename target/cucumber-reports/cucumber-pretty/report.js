$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/petCRUD.feature");
formatter.feature({
  "name": "PET CRUD",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "\tGet the pet details",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PETGet"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "user set param /pet/3310",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDef.userSetContentJson(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user make GET call",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDef.whenuserMakehttpMethod(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDef.validate_the_status_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate json schema",
  "rows": [
    {
      "cells": [
        "jsonSchemaValue"
      ]
    },
    {
      "cells": [
        "Pet/schemas/pet"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_json_schema(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate expected response",
  "rows": [
    {
      "cells": [
        "expectedResponse"
      ]
    },
    {
      "cells": [
        "Pet/getPetExpected"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_expected_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "\tCreate new pet",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PETCreate"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "user set param /pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDef.userSetContentJson(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user set the request body with Dyanmic values in resquest body and expected response",
  "rows": [
    {
      "cells": [
        "RequestBody",
        "id",
        "status",
        "expectedResponse"
      ]
    },
    {
      "cells": [
        "Pet/petDetail",
        "random",
        "randomStatus",
        "Pet/createPetExpected"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.user_set_the_request_body(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user make POST call",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDef.whenuserMakehttpMethod(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDef.validate_the_status_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate json schema",
  "rows": [
    {
      "cells": [
        "jsonSchemaValue"
      ]
    },
    {
      "cells": [
        "Pet/schemas/pet"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_json_schema(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate response",
  "rows": [
    {
      "cells": [
        "id",
        "status",
        "Category,name"
      ]
    },
    {
      "cells": [
        "Existing",
        "Existing",
        "automation"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate expected response",
  "rows": [
    {
      "cells": [
        "expectedResponse"
      ]
    },
    {
      "cells": [
        "Pet/createPetExpected"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_expected_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "\tUpdate and Get the pet details",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PETUpdate"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "user set param /pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDef.userSetContentJson(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user set the request body with Dyanmic values in resquest body and expected response",
  "rows": [
    {
      "cells": [
        "RequestBody",
        "id",
        "status",
        "expectedResponse"
      ]
    },
    {
      "cells": [
        "Pet/createPetExpected",
        "random",
        "randomStatus",
        "Pet/UpdatePetExpected"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.user_set_the_request_body(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user make PUT call",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDef.whenuserMakehttpMethod(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDef.validate_the_status_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate json schema",
  "rows": [
    {
      "cells": [
        "jsonSchemaValue"
      ]
    },
    {
      "cells": [
        "Pet/schemas/pet"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_json_schema(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate response",
  "rows": [
    {
      "cells": [
        "id",
        "status",
        "Category,name"
      ]
    },
    {
      "cells": [
        "Existing",
        "Existing",
        "automation"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate expected response",
  "rows": [
    {
      "cells": [
        "expectedResponse"
      ]
    },
    {
      "cells": [
        "Pet/UpdatePetExpected"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_expected_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user set param /pet/ExistingID",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDef.userSetContentJson(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user make GET call",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDef.whenuserMakehttpMethod(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDef.validate_the_status_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate json schema",
  "rows": [
    {
      "cells": [
        "jsonSchemaValue"
      ]
    },
    {
      "cells": [
        "Pet/schemas/pet"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_json_schema(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate expected response",
  "rows": [
    {
      "cells": [
        "expectedResponse"
      ]
    },
    {
      "cells": [
        "Pet/UpdatePetExpected"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_expected_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "\tCreate and Delete the pet details",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PETCreateDelete"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "user set param /pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDef.userSetContentJson(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user set the request body with Dyanmic values in resquest body and expected response",
  "rows": [
    {
      "cells": [
        "RequestBody",
        "id",
        "status",
        "expectedResponse"
      ]
    },
    {
      "cells": [
        "Pet/petDetail",
        "random",
        "randomStatus",
        "Pet/createPetExpected"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.user_set_the_request_body(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user make POST call",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDef.whenuserMakehttpMethod(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDef.validate_the_status_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate json schema",
  "rows": [
    {
      "cells": [
        "jsonSchemaValue"
      ]
    },
    {
      "cells": [
        "Pet/schemas/pet"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_json_schema(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate response",
  "rows": [
    {
      "cells": [
        "id",
        "status",
        "Category,name"
      ]
    },
    {
      "cells": [
        "Existing",
        "Existing",
        "automation"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate expected response",
  "rows": [
    {
      "cells": [
        "expectedResponse"
      ]
    },
    {
      "cells": [
        "Pet/createPetExpected"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_expected_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user set param /pet/ExistingID",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDef.userSetContentJson(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user make DELETE call",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDef.whenuserMakehttpMethod(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDef.validate_the_status_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate expected response is empty",
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_expected_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PETNotPetFound"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "user set param /pet/121212121345534",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDef.userSetContentJson(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user make GET call",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDef.whenuserMakehttpMethod(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the status code as 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDef.validate_the_status_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate json schema",
  "rows": [
    {
      "cells": [
        "jsonSchemaValue"
      ]
    },
    {
      "cells": [
        "Pet/schemas/noPetFound"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_json_schema(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate error response",
  "rows": [
    {
      "cells": [
        "message"
      ]
    },
    {
      "cells": [
        "Pet not found"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_error_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate expected response",
  "rows": [
    {
      "cells": [
        "expectedResponse"
      ]
    },
    {
      "cells": [
        "Pet/notPetFound"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDef.validate_expected_response(DataTable)"
});
formatter.result({
  "status": "passed"
});
});