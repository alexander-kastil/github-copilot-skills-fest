# Scaffold the src/octofit-ui project and set up defaults

1. Scaffold the octofit-ui in the src folder using the Angular CLI 19.2 and Node 20.12.2. Change to directory src an execute ng new octofit-ui --routing --ssr=false --style=scss .

2. In src/octofit-ui add environment files using the Angular CLI and the `ng g environments` and add the following entry to both envrionments: apiUrl: "http://localhost:5000/api/".

3. Install bootstrap and import it to the styles array in angular.json in the build and test configuration.

4. Delete the content of the app.component.html except the router-outlet and add the text "Welcome to the OctoFit Tracker App" in a div.

5. In src/octofit-ui execute `ng config -g cli.completion.prompted true` to suppress collection of metrics. Also execute `ng cache disable` to disable the Angular cache.

6. Configure the Angular CLI to create single file components by adding the following entry to the angular.json file:

   ```json
   "schematics": {
       "@schematics/angular:component": {
           "inlineStyle": true,
           "inlineTemplate": true
       }
   }
   ```

7. .Before starting the implementation, share your plan. Keep the order of the tasks. Don't proceed with the next activity until all of these steps are completed.
