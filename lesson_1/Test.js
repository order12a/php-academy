let Client = require('node-rest-client').Client;
let client = new Client();

class Test{

    sendRequest(){
        let responseData = {};

        let args = {
            data: { test: "hello" },
            headers: { "Content-Type": "application/json" }
        };
 
        client.post("http://remote.site/rest/xml/method", args, function (data, response) {
            // parsed response body as js object 
            console.log(data);
            // raw response 
            responseData = response;
            console.log(response);
            });
        }
}

module.exports = Test;