let Test = require('./Test');

describe('Test Suite', () => {
    let test = new Test();
    
    it('should run request', () => {
        
        test.sendRequest();
    });
        
});