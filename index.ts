const fs = require('fs');
function bestow(env: string): any {
    try{
    let jsonData = fs.readFileSync(__dirname+`/../../config/${env}.json`,{encoding: 'utf8'});
    jsonData = JSON.parse(jsonData);
    return jsonData
    }
    catch(error){
        return {error}
    }
}

module.exports = bestow;
