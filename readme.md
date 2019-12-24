# bestow-config
Get your configuration "json" file by just passing filename

## Structure
```
ProjectName
      node_modules
      config
           uat.json
           dev.json
      other files
      package.json
   ```

## How to Run

```
    npm install bestow-config --save
    
    const bestow = require("bestow-config");
    
    const jsonData = bestow("uat")
```

## How to Use
-  Create **config** folder in root of your project.
- Create json config files with json as extension like eg: uat.json, dev.json, prod.json and then put all your json content into it.
- Now calling bestow("environment_file_name")  will give you all json content of that file.

## GPR and NPM
In package.json file </br>
  "name": "@yogain123/bestow-config"  // This will publish to github package resgistry </br>
  "name": "bestow-config"             // This will publish to npm/yarn

Author: Yogendra Saxena
