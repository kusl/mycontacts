# Mycontacts

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.









































kushal@colorado:~/src/angular$ node --version
v22.11.0
kushal@colorado:~/src/angular$ ng --version
19.0.0
kushal@colorado:~/src/angular$ time ng new mycontacts2024
 
Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics.

   no
Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled
✔ Which stylesheet format would you like to use? Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no
CREATE mycontacts2024/README.md (1477 bytes)
CREATE mycontacts2024/.editorconfig (314 bytes)
CREATE mycontacts2024/.gitignore (587 bytes)
CREATE mycontacts2024/angular.json (2796 bytes)
CREATE mycontacts2024/package.json (1045 bytes)
CREATE mycontacts2024/tsconfig.json (915 bytes)
CREATE mycontacts2024/tsconfig.app.json (424 bytes)
CREATE mycontacts2024/tsconfig.spec.json (434 bytes)
CREATE mycontacts2024/.vscode/extensions.json (130 bytes)
CREATE mycontacts2024/.vscode/launch.json (470 bytes)
CREATE mycontacts2024/.vscode/tasks.json (938 bytes)
CREATE mycontacts2024/src/main.ts (250 bytes)
CREATE mycontacts2024/src/index.html (300 bytes)
CREATE mycontacts2024/src/styles.scss (80 bytes)
CREATE mycontacts2024/src/app/app.component.scss (0 bytes)
CREATE mycontacts2024/src/app/app.component.html (19903 bytes)
CREATE mycontacts2024/src/app/app.component.spec.ts (940 bytes)
CREATE mycontacts2024/src/app/app.component.ts (291 bytes)
CREATE mycontacts2024/src/app/app.config.ts (310 bytes)
CREATE mycontacts2024/src/app/app.routes.ts (77 bytes)
CREATE mycontacts2024/public/favicon.ico (15086 bytes)
⠙ Installing packages (npm)...
⠸ Installing packages (npm)...
✔ Packages installed successfully.
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint:   git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint:   git branch -m <name>
    Successfully initialized git.

real    3m0.904s
user    0m45.782s
sys     0m9.832s
kushal@colorado:~/src/angular$ time ng new mycontacts --experimental-zoneless=true --package-manager=yarn --strict=true --view-encapsulation=ShadowDom
✔ Which stylesheet format would you like to use? Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no
CREATE mycontacts/README.md (1473 bytes)
CREATE mycontacts/.editorconfig (314 bytes)
CREATE mycontacts/.gitignore (587 bytes)
CREATE mycontacts/angular.json (2718 bytes)
CREATE mycontacts/package.json (1041 bytes)
CREATE mycontacts/tsconfig.json (915 bytes)
CREATE mycontacts/tsconfig.app.json (424 bytes)
CREATE mycontacts/tsconfig.spec.json (434 bytes)
CREATE mycontacts/.vscode/extensions.json (130 bytes)
CREATE mycontacts/.vscode/launch.json (470 bytes)
CREATE mycontacts/.vscode/tasks.json (938 bytes)
CREATE mycontacts/src/main.ts (250 bytes)
CREATE mycontacts/src/index.html (296 bytes)
CREATE mycontacts/src/styles.scss (80 bytes)
CREATE mycontacts/src/app/app.component.scss (0 bytes)
CREATE mycontacts/src/app/app.component.html (19903 bytes)
CREATE mycontacts/src/app/app.component.spec.ts (1068 bytes)
CREATE mycontacts/src/app/app.component.ts (287 bytes)
CREATE mycontacts/src/app/app.config.ts (317 bytes)
CREATE mycontacts/src/app/app.routes.ts (77 bytes)
CREATE mycontacts/public/favicon.ico (15086 bytes)
✔ Packages installed successfully.
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint:   git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint:   git branch -m <name>
    Successfully initialized git.

real    0m31.498s
user    0m19.186s
sys     0m6.403s
kushal@colorado:~/src/angular$ 
