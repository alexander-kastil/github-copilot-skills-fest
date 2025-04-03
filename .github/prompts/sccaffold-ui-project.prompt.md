# Angular UI Scaffolding

Scaffold the octofit-ui to src using the Angular CLI 19.2 and Node 20.12.2. cd to src an execute ng new octofit-ui --routing --ssr=false --style=scss . In src/octofit-ui add environment files using the Angular CLI and the `ng g environments` and add the following entry to both envrionments: apiUrl: "http://localhost:5000/api/". Install bootstrap and import it to the styles array in angular.json in the build and test configuration. Delete the content of the app.component.html except the router-outlet and add the text "Welcome to the OctoFit Tracker App" in a div.
