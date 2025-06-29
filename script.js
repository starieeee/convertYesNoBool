function boolToWord( bool ){
    //...
    if(bool){
      return "Yes";
    }
    else{
      return "No";
    }
  }
  console.log(boolToWord(false));

//   Second method
function boolToWord( bool ){
    //...
    return bool ? "Yes" : "No";
    
  }
  console.log(boolToWord(true));