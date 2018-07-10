$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FormSubmit.feature");
formatter.feature({
  "line": 1,
  "name": "Form automation",
  "description": "As a user I want to fill my form\nalso I submit it",
  "id": "form-automation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Form filling and submition",
  "description": "",
  "id": "form-automation;form-filling-and-submition",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user navigates to the app url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user fills first name with value \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills last name with value \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Select Gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills date of birth \"\u003cdob\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills address with value \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills company \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select role",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select salary",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select expectationOne",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user select expectationTwo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select self developmentOne",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select self developmentTwo",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enter \"\u003ccomment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user submit form",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "form is submitted successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "form-automation;form-filling-and-submition;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "dob",
        "address",
        "email",
        "password",
        "company",
        "comment"
      ],
      "line": 26,
      "id": "form-automation;form-filling-and-submition;;1"
    },
    {
      "cells": [
        "Nick",
        "Jackson",
        "08/08/1990",
        "333 W Wacker Dr",
        "test@ing1.com",
        "Testing1",
        "Forte1",
        "Nick\u0027s comment"
      ],
      "line": 27,
      "id": "form-automation;form-filling-and-submition;;2"
    },
    {
      "cells": [
        "Sergii",
        "Opanasiuk",
        "09/09/1999",
        "4250 N Lassal",
        "test@ing2.com",
        "Testing2",
        "Forte2",
        "Sergii\u0027s comment"
      ],
      "line": 28,
      "id": "form-automation;form-filling-and-submition;;3"
    },
    {
      "cells": [
        "Benson",
        "Kamary",
        "05/06/2000",
        "449 N Canal",
        "test@ing3.com",
        "Testing3",
        "Forte3",
        "Benson\u0027s comment"
      ],
      "line": 29,
      "id": "form-automation;form-filling-and-submition;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2621809454,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Form filling and submition",
  "description": "",
  "id": "form-automation;form-filling-and-submition;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user navigates to the app url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user fills first name with value \"Nick\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills last name with value \"Jackson\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Select Gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills date of birth \"08/08/1990\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills address with value \"333 W Wacker Dr\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills \"test@ing1.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills password \"Testing1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills company \"Forte1\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select role",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select salary",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select expectationOne",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user select expectationTwo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select self developmentOne",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select self developmentTwo",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enter \"Nick\u0027s comment\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user submit form",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "form is submitted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.someTestInfo()"
});
formatter.result({
  "duration": 940307394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nick",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameWithValue(String)"
});
formatter.result({
  "duration": 222357333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jackson",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameForValue(String)"
});
formatter.result({
  "duration": 79776970,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectGender()"
});
formatter.result({
  "duration": 66266666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/08/1990",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userFillsDateOfBirth(String)"
});
formatter.result({
  "duration": 140832969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "333 W Wacker Dr",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsAddressWithValueAddress(String)"
});
formatter.result({
  "duration": 102383030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@ing1.com",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userFills(String)"
});
formatter.result({
  "duration": 80706909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing1",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userFillsPassword(String)"
});
formatter.result({
  "duration": 72272000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Forte1",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userFillsCompany(String)"
});
formatter.result({
  "duration": 66339394,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectRole()"
});
formatter.result({
  "duration": 90908606,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSalary()"
});
formatter.result({
  "duration": 52806303,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationOne()"
});
formatter.result({
  "duration": 50260849,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationTwo()"
});
formatter.result({
  "duration": 56254060,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentOne()"
});
formatter.result({
  "duration": 78640969,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentTwo()"
});
formatter.result({
  "duration": 62594909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nick\u0027s comment",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnterComment(String)"
});
formatter.result({
  "duration": 89594667,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSubmitForm()"
});
formatter.result({
  "duration": 92413091,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 32960000,
  "status": "passed"
});
formatter.after({
  "duration": 724950303,
  "status": "passed"
});
formatter.before({
  "duration": 2049056970,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Form filling and submition",
  "description": "",
  "id": "form-automation;form-filling-and-submition;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user navigates to the app url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user fills first name with value \"Sergii\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills last name with value \"Opanasiuk\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Select Gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills date of birth \"09/09/1999\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills address with value \"4250 N Lassal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills \"test@ing2.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills password \"Testing2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills company \"Forte2\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select role",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select salary",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select expectationOne",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user select expectationTwo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select self developmentOne",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select self developmentTwo",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enter \"Sergii\u0027s comment\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user submit form",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "form is submitted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.someTestInfo()"
});
formatter.result({
  "duration": 1402216243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sergii",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameWithValue(String)"
});
formatter.result({
  "duration": 257537455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Opanasiuk",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameForValue(String)"
});
formatter.result({
  "duration": 111866667,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectGender()"
});
formatter.result({
  "duration": 69505455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/09/1999",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userFillsDateOfBirth(String)"
});
formatter.result({
  "duration": 161833212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4250 N Lassal",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsAddressWithValueAddress(String)"
});
formatter.result({
  "duration": 120542061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@ing2.com",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userFills(String)"
});
formatter.result({
  "duration": 105666909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing2",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userFillsPassword(String)"
});
formatter.result({
  "duration": 75533576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Forte2",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userFillsCompany(String)"
});
formatter.result({
  "duration": 86590546,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectRole()"
});
formatter.result({
  "duration": 88876606,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSalary()"
});
formatter.result({
  "duration": 53003636,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationOne()"
});
formatter.result({
  "duration": 50502788,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationTwo()"
});
formatter.result({
  "duration": 49731878,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentOne()"
});
formatter.result({
  "duration": 69794910,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentTwo()"
});
formatter.result({
  "duration": 62215272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sergii\u0027s comment",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnterComment(String)"
});
formatter.result({
  "duration": 96745213,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSubmitForm()"
});
formatter.result({
  "duration": 83278545,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 37262060,
  "status": "passed"
});
formatter.after({
  "duration": 807404122,
  "status": "passed"
});
formatter.before({
  "duration": 2124045576,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Form filling and submition",
  "description": "",
  "id": "form-automation;form-filling-and-submition;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user navigates to the app url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user fills first name with value \"Benson\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills last name with value \"Kamary\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Select Gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills date of birth \"05/06/2000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills address with value \"449 N Canal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills \"test@ing3.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills password \"Testing3\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills company \"Forte3\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select role",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select salary",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select expectationOne",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user select expectationTwo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select self developmentOne",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select self developmentTwo",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enter \"Benson\u0027s comment\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user submit form",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "form is submitted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.someTestInfo()"
});
formatter.result({
  "duration": 637903031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Benson",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameWithValue(String)"
});
formatter.result({
  "duration": 206433940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kamary",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameForValue(String)"
});
formatter.result({
  "duration": 79584485,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectGender()"
});
formatter.result({
  "duration": 108544969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/06/2000",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userFillsDateOfBirth(String)"
});
formatter.result({
  "duration": 193622303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "449 N Canal",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsAddressWithValueAddress(String)"
});
formatter.result({
  "duration": 79424969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@ing3.com",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userFills(String)"
});
formatter.result({
  "duration": 78283151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing3",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userFillsPassword(String)"
});
formatter.result({
  "duration": 64406303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Forte3",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userFillsCompany(String)"
});
formatter.result({
  "duration": 70570666,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectRole()"
});
formatter.result({
  "duration": 81671758,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSalary()"
});
formatter.result({
  "duration": 61024000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationOne()"
});
formatter.result({
  "duration": 48264727,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationTwo()"
});
formatter.result({
  "duration": 50068364,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentOne()"
});
formatter.result({
  "duration": 64233212,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentTwo()"
});
formatter.result({
  "duration": 61953939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Benson\u0027s comment",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnterComment(String)"
});
formatter.result({
  "duration": 125098666,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSubmitForm()"
});
formatter.result({
  "duration": 90153697,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 30518788,
  "status": "passed"
});
formatter.after({
  "duration": 700789818,
  "status": "passed"
});
});