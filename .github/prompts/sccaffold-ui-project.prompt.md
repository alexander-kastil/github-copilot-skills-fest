# Scaffold the octofit-ui project and set up defaults

1. Scaffold the octofit-ui to src using the Angular CLI 19.2 and Node 20.12.2.

2. Change to directory src an execute ng new octofit-ui --routing --ssr=false --style=scss

3. In src/octofit-ui add environment files using the Angular CLI and the `ng g environments` and add the following entry to both envrionments: apiUrl: "http://localhost:5000/api/".

4. Install bootstrap and import it to the styles array in angular.json in the build and test configuration.

5. Delete the content of the app.component.html except the router-outlet and add the text "Welcome to the OctoFit Tracker App" in a div.

6. In src/octofit-ui execute `ng cache disable` to disable the Angular cache.

7. Configure the Angular CLI to create single file components by adding the following entry to the angular.json file. Example:

```json
"schematics": {
    "@schematics/angular:component": {
        "inlineStyle": true,
        "inlineTemplate": true
    }
}
```
