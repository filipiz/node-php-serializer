//http://stackoverflow.com/questions/3885817/how-to-check-if-a-number-is-float-or-integer
function isInt(n) {
   return typeof n === 'number' && parseFloat(n) == parseInt(n, 10) && !isNaN(n);
} 

module.exports = {
  serialize : function(){
    
    if ( arguments.length != 1 ){
      throw '.serialize() expects 1 parameter. '+ arguments.length +' given';
    }

    var item = arguments[0];
    var val = null;

    switch ( typeof(item) ) {

      case 'object' :
        if (item === null) {
          val = 'N;';
        
        } else if (item.prototype){
          val = 'o:';
        
        } else {

          var isArray = (item instanceof Array);
          var length = 0;
          var objval = '{';
          
          for (var key in item){
            if (item.hasOwnProperty(key)){
              length++;
              if (isArray) key = parseInt(key, 10);
              objval += this.serialize(key);
              objval += this.serialize(item[key]);  
            }
          }

          objval += '}';
          val = 'a:'+length+':'+objval; 
        }
        break; 
      
      case 'string' :
        val = 's:'+item.length+':"'+item+'";';
        break; 
      
      case 'number' :
        if (isInt(item)){
          //TODO create tests to deal with integer limits on JS and PHP
          val = 'i:'+item+';';
        } else {
          val = 'd:'+item+';';
        }
        break; 

      case 'boolean' :
        val = 'b:'+ ((item) ? 1 : 0) +';';
        break; 

      case 'undefined' :
        val = 'N;';
        break; 
    }

    return val;
  }
};