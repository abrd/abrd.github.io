# Agile Business Rule Development Method

This project delivers, as open source, the content for the Agile Business Rule Methodology used to develop decision management applications and based on hundred of consulting engagements at ILOG Inc and then IBM. It is based from the following [book](http://www.springer.com/business+%26+management/business+information+systems/book/978-3-642-19040-7). The content is product agnostic and support incremental and iterative development for decision services. It starts from a business operation improvement idea that is assessed versus of set of criteria to validate the fit to use a Business Rule Management System, and then addresses all the project implementation tasks.

## How to run locally

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* All git push is done on the `code branch`
* Use `ng build --prod --base-href https://abrd.github.io/` to build the code for github pages
* Use `git push --set-upstream origin source` or `git checkout source` and then commit and push to this branch as this is the branch to hold the source content and Angular app.  
* Use `ngh -d dist/abrd -b master -S` to upload compiled web app to the master branch of the abrd.io repository. Master is the branch used for github pages.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
