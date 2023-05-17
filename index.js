  function shout(string) 
  {
    return string.toUpperCase();
  }

  function whisper(string) 
  {
    return string.toLowerCase();
  }

  function logShout(string) 
  {
    console.log(shout(string));
  }

  function logWhisper(string) 
  {
    console.log(whisper(string));
  }

  function sayHiToHeadphonedRoommate(string) 
  {
    let s = "";
    switch(string){
        case "hello":
            s = "I can\'t hear you!";
            break;

        case "HELLO":
            s = "YES INDEED!";
            break;

        case "Let\'s have dinner together!":
            s = "I would love to!";
            break;
    }

    return s;
  }
