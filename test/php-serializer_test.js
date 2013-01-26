var php = require('../lib/php-serializer.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['php-serialize'] = {
  setUp: function(done) {
    // setup here
    done();
  },

  testInitialization: function(test){
    //test.expect(1);

    //test.throws( php.serialize(), "should throw an error if no parameter is given" );
    // test.throws( php.serialize( 1, 2 ), "should throw an error if more then 1 parameter is given" );
    //test.doesNotThrow( php.serialize( true ), "one parameter should not throw erro" );
    test.done();
  },
  
  testFalsies: function(test) {
    test.expect(2);
    
    // tests here
    test.equal( php.serialize(undefined), 'N;', "undefined should become 'N;'");
    test.equal( php.serialize(null), 'N;', "null should become 'N;'");

    test.done();
  },

  testStrings : function(test) {
    test.expect(3);

    test.equal( php.serialize(""), 's:0:"";', 'empty string should become \'s:0:"";\'');
    test.equal( php.serialize("test"), 's:4:"test";', 'test string should become \'s:4:"test";\'');
   
    var  linebreak = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n'+
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n'+
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n'+
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n'+
      'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n'+
      'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n';

    test.equal( php.serialize(linebreak), 
        's:447:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n'+
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n'+
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n'+
        'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n'+
        'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n'+
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";', 

        'Lorem ipsum with line breaks should be 447 character long');

    test.done();
  },

  testIntegers : function(test) {
    test.expect(8);
    test.equal( php.serialize(0), 'i:0;', 'integer 0 shoudl become \'i:0;\'' );
    test.equal( php.serialize(-1), 'i:-1;', 'integer 0 shoudl become \'i:-1;\'' );
    test.equal( php.serialize(1), 'i:1;', 'integer 1 shoudl become \'i:1;\'' );
    test.equal( php.serialize(2147483648), 'i:2147483648;', 'integer 2147483648 shoudl become \'i:2147483648;\'' );
    test.equal( php.serialize(9007199254740992), 'i:9007199254740992;', 'integer 9007199254740992 shoudl become \'i:9007199254740992;\'' );

    //TODO create tests to deal with integer limits on PHP x JS.
    // test.equal( php.serialize(9007199254740993), 'i:9007199254740993;', 'integer 9007199254740993 shoudl become \'i:9007199254740993;\'' );
    // test.equal( php.serialize(9223372036854775807), 'i:9223372036854775807;', 'integer 9223372036854775807 shoudl become \'i:9223372036854775807;\'' );
    test.done();
  },
/*
  testDoubles : function(test) {
    test.expect(1);
    test.ok(false, "TODO - Doubles");
    test.done();
  },

  testBooleans : function(test) {
    test.expect(1);
    test.ok(false, "TODO - Booleans");
    test.done();
  },

  testArrays : function(test) {
    test.expect(1);
    test.ok(false, "TODO - Arrays");
    test.done();
  },

  testMaps : function(test) {
    test.expect(1);
    test.ok(false, "TODO - Maps");
    test.done();
  },

  testObjects : function(test) {
    test.expect(1);
    test.ok(false, "TODO - Objects");
    test.done();
  }
*/
};

exports['php-unserialize'] = {
  setUp: function(done) {
    done();
  }
};
