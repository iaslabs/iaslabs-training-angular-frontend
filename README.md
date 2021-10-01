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
 - Realizar el frontend para un CRUD de technician, utilizando los componentes ya establecidos en el artefacto.
    campos del técnico:
		- technician ID: valor requerido.
		- name: valor requerido, no permite caracteres especiales.
		- lastName: valor requerido, no permite caracteres especiales.
 - Mostrar en una lista todos los técnicos creados.
 - Crear una nueva rama con la siguiente estructura "feature/primerNombre-primerApellido"
## -------------------------- STEPS for basic flow  ------------------

## STEP-1
 - La ruta "localhost:4200/technician" debe de mostrar la información del componente "TechnicianComponent" 
 - Agregar los campos del modelo del technician en la interface "TechnicianModel"
## STEP-2
 - En el componente "FormTechnicianComponent" se debe de crear los campos del formulario utilizando "Reactiveform"
 - Agregar mensaje infomartivo sobre los errores del campo.
## STEP-3
 - En el servicio "TechnicianService" se deben de agregar los métodos crear, eliminar, actualizar y dos consultas 
	(una con ID para un técnico en especifico y otras sin id para consultar la lista). donde la URL de petición será "URL-petición/technician"
## STEP 4
 - En el componente "TechnicianComponent" se debe de obtener los datos del formulario al darle click en el botón guardar del componente "FormTechnicianComponent", 
	si este se encuentra valido.
 - Al recibir la información del formulario, se debe de llamar al metodo crear del servicio "TechnicianService" y si mostrar una alerta informando el resultado de la petición.

 
 ## -------------------------- Topics to evaluate ---------------------
 
  - buenas practicas, apoyarse del SonarLint
     - guia de instalación https://labs.ias.com.co/docs/guides/sonarlint/vscode
	 - enlace de credenciales de sonarLint de IAS https://labs.ias.com.co/docs/guides/sonarlint/sonarias
  - funcionalidad de la aplicación (cumpliendo los requerimientos

 ## ------------------------- supporting documentation ---------------------
 
     reactiveForms: https://angular.io/guide/reactive-forms
	 routes: https://angular.io/guide/router
	 httpClient: https://angular.io/guide/http
	 
	 
 
 