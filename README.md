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




kushal@colorado:~/src/angular/mycontacts$ time ng add @angular/material
✔ Determining Package Manager
  › Using package manager: yarn
✔ Searching for compatible package version
  › Found compatible package version: @angular/material@19.0.0.
✔ Loading package information from registry
✔ Confirming installation
✔ Installing package
✔ Choose a prebuilt theme name, or "custom" for a custom theme: Azure/Blue         [Preview: https://material.angular.io?theme=azure-blue]
✔ Set up global Angular Material typography styles? yes
✔ Include the Angular animations module? Include and enable animations
UPDATE package.json (1105 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.config.ts (428 bytes)
UPDATE angular.json (2850 bytes)
UPDATE src/index.html (519 bytes)
UPDATE src/styles.scss (181 bytes)

real    1m34.255s
user    0m15.900s
sys     0m2.282s
kushal@colorado:~/src/angular/mycontacts$ 




























kushal@colorado:~/src/angular/mycontacts$ time ng add @angular/material
✔ Determining Package Manager
  › Using package manager: yarn
✔ Searching for compatible package version
  › Found compatible package version: @angular/material@19.0.0.
✔ Loading package information from registry
✔ Confirming installation
✔ Installing package
✔ Choose a prebuilt theme name, or "custom" for a custom theme: Azure/Blue         [Preview: https://material.angular.io?theme=azure-blue]
✔ Set up global Angular Material typography styles? yes
✔ Include the Angular animations module? Include and enable animations
UPDATE package.json (1105 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.config.ts (428 bytes)
UPDATE angular.json (2850 bytes)
UPDATE src/index.html (519 bytes)
UPDATE src/styles.scss (181 bytes)

real    1m34.255s
user    0m15.900s
sys     0m2.282s
kushal@colorado:~/src/angular/mycontacts$ sh ~/src/angular/mycontacts/
.git/         node_modules/ public/       src/          update.sh     .vscode/      
kushal@colorado:~/src/angular/mycontacts$ time bash ~/src/angular/mycontacts/update.sh 
Thu Nov 21 09:24:40 AM EST 2024
/home/kushal/src/angular/mycontacts/update.sh: line 10: nvm: command not found
/home/kushal/src/angular/mycontacts/update.sh: line 11: nvm: command not found
v22.11.0
10.9.0

changed 1 package in 1s
Thu Nov 21 09:24:41 AM EST 2024
Thu Nov 21 09:24:41 AM EST 2024
yarn install v1.22.22
info No lockfile found.
[1/4] Resolving packages...
warning karma > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning karma > rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
warning karma > rimraf > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning karma > glob > inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "@angular-devkit/build-angular > @vitejs/plugin-basic-ssl@1.1.0" has unmet peer dependency "vite@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm@5.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm > @inquirer/type@3.0.1" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts@7.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.2" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 13.63s.

real    0m13.876s
user    0m12.387s
sys     0m1.575s
Thu Nov 21 09:24:55 AM EST 2024
On branch master
nothing to commit, working tree clean
On branch master
nothing to commit, working tree clean
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.62s.
yarn run v1.22.22
$ ng update
Using package manager: yarn
Collecting installed dependencies...
Found 24 dependencies.
    We analyzed your package.json and everything seems to be in order. Good work!
Done in 2.23s.
yarn run v1.22.22
$ ng build
Initial chunk files | Names         |  Raw size | Estimated transfer size
chunk-73CGZWJL.js   | -             | 113.91 kB |                33.68 kB
main-KI664OAU.js    | main          |  98.40 kB |                25.31 kB
styles-CXQUZ3PB.css | styles        |   6.98 kB |                 1.13 kB

                    | Initial total | 219.29 kB |                60.12 kB

Lazy chunk files    | Names         |  Raw size | Estimated transfer size
chunk-KYLLRXFE.js   | browser       |  67.49 kB |                17.71 kB

Application bundle generation complete. [10.070 seconds]

Output location: /home/kushal/src/angular/mycontacts/dist/mycontacts

Done in 11.42s.
On branch master
nothing to commit, working tree clean
On branch master
nothing to commit, working tree clean
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
yarn run v1.22.22
$ ng test
✔ Browser application bundle generation complete.
21 11 2024 09:25:30.058:WARN [karma]: No captured browser, open http://localhost:9876/
21 11 2024 09:25:30.073:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
21 11 2024 09:25:30.074:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
21 11 2024 09:25:30.082:INFO [launcher]: Starting browser Chrome
21 11 2024 09:25:30.083:ERROR [launcher]: No binary for Chrome browser on your platform.
  Please, set "CHROME_BIN" env variable.
^C
real    1m18.765s
user    0m45.620s
sys     0m3.655s

kushal@colorado:~/src/angular/mycontacts$                                                                                                                                                                                                                           

kushal@colorado:~/src/angular/mycontacts$ 
kushal@colorado:~/src/angular/mycontacts$ 
kushal@colorado:~/src/angular/mycontacts$ time yarn add karma-jasmine karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage-istanbul-reporter karma-firefox-launcher karma-jasmine-html-reporter karma-spec-reporter
yarn add v1.22.22
[1/4] Resolving packages...
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "@angular-devkit/build-angular > @vitejs/plugin-basic-ssl@1.1.0" has unmet peer dependency "vite@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm@5.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm > @inquirer/type@3.0.1" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts@7.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.2" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
warning "karma-jasmine" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
warning "karma-chrome-launcher" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
warning "karma-jasmine-html-reporter" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
success Saved 8 new dependencies.
info Direct dependencies
├─ karma-chrome-launcher@3.2.0
├─ karma-coverage-istanbul-reporter@3.0.3
├─ karma-firefox-launcher@2.1.3
└─ karma-spec-reporter@0.0.36
info All dependencies
├─ colors@1.4.0
├─ is-docker@2.2.1
├─ is-wsl@2.2.0
├─ istanbul-lib-source-maps@3.0.6
├─ karma-chrome-launcher@3.2.0
├─ karma-coverage-istanbul-reporter@3.0.3
├─ karma-firefox-launcher@2.1.3
└─ karma-spec-reporter@0.0.36
Done in 5.20s.

real    0m5.453s
user    0m6.244s
sys     0m0.975s
kushal@colorado:~/src/angular/mycontacts$ 
kushal@colorado:~/src/angular/mycontacts$ time yarn add --dev karma-jasmine karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage-istanbul-reporter karma-firefox-launcher karma-jasmine-html-reporter karma-spec-reporter @types/node
yarn add v1.22.22
[1/4] Resolving packages...
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
[2/4] Fetching packages...
warning Pattern ["@types/node@^22.9.1"] is trying to unpack in the same destination "/home/kushal/.cache/yarn/v6/npm-@types-node-22.9.1-bdf91c36e0e7ecfb7257b2d75bf1b206b308ca71-integrity/node_modules/@types/node" as pattern ["@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@*","@types/node@>=10.0.0","@types/node@*"]. This could result in non-deterministic behavior, skipping.
[3/4] Linking dependencies...
warning "@angular-devkit/build-angular > @vitejs/plugin-basic-ssl@1.1.0" has unmet peer dependency "vite@^3.0.0 || ^4.0.0 || ^5.0.0".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 9 new dependencies.
info Direct dependencies
├─ @types/node@22.9.1
├─ karma-chrome-launcher@3.2.0
├─ karma-coverage-istanbul-reporter@3.0.3
├─ karma-firefox-launcher@2.1.3
└─ karma-spec-reporter@0.0.36
info All dependencies
├─ @types/node@22.9.1
├─ colors@1.4.0
├─ is-docker@2.2.1
├─ is-wsl@2.2.0
├─ istanbul-lib-source-maps@3.0.6
├─ karma-chrome-launcher@3.2.0
├─ karma-coverage-istanbul-reporter@3.0.3
├─ karma-firefox-launcher@2.1.3
└─ karma-spec-reporter@0.0.36
Done in 5.16s.

real    0m5.403s
user    0m6.192s
sys     0m0.890s
kushal@colorado:~/src/angular/mycontacts$ 
kushal@colorado:~/src/angular/mycontacts$ time git remote add origin git@github.com:kusl/mycontacts.git

real    0m0.010s
user    0m0.009s
sys     0m0.000s
kushal@colorado:~/src/angular/mycontacts$ time bash ~/src/angular/mycontacts/update.sh 