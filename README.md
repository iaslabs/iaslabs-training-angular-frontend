# TrainingAngularFrontendTechnician

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## -------------------------- IAS training Requirements  -  Angular technician  
 - Create a frontend for a Technician (CRUD), use components already created.
    form fields:
		- TechnicianId: Required.
		- name: Required, without special characters, max 40 characters.
		- lastName: Required, without special characters, max 40 characters.
 - Show all Technicians in a list.
 - Create a branch with the follow structure "feature/firstName-firstLastName"
## -------------------------- STEPS for basic flow  ------------------

## STEP-1
 - Create main route "localhost:4200/technician" should be for the component "TechnicianComponent" 
 - Create interface "TechnicianModel" with all technician's attributes
## STEP-2
 - Create form in "FormTechnicianComponent" - should be with "Reactiveform"
 - Add validation of fields.
## STEP-3
 - Create CRUD request in the service "TechnicianService" with a aditional query for a specific Technician for ID
## STEP 4
 - Get values of the form in "TechnicianComponent" when the event click is execute in the form "FormTechnicianComponent", if this form is valid.
 - When you get the values of the form, should call the methods of the service "TechnicianService", show an alert with the answer for the service.
 
 ## -------------------------- Topics to evaluate ---------------------
 
  - Coding best practices
  - Entire functionality (requirements)
  - unit test 80% coverage.

 ## ------------------------- supporting documentation ---------------------
 
   reactiveForms: https://angular.io/guide/reactive-forms
	 routes: https://angular.io/guide/router
	 httpClient: https://angular.io/guide/http
	 