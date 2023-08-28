/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '',
    'X': '🌹',
    'I': '☀️',
    'PLAYER': '🌧️',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '💀',
    'WIN': '🏆',
    'HEART': '❤️',
  };
  
  const maps = [];
  // Nivel 1
  // maps.push(`
  //   ---------X
  //   -XXXXXXX-X
  //   -X-------X
  //   -X-XXXXXXX
  //   -X-------X
  //   -XXXXXXX-X
  //   -X-------X
  //   -X-XXXXXXX
  //   -X------IX
  //   OXXXXXXXXX
  // `);
  // // Nivel 2
  // maps.push(`
  //   -O-XXXXXXX
  //   X--XXX---X
  //   XX-----XXX
  //   X--XX-XXXX
  //   X-XXX--XXX
  //   X-XXXX-XXX
  //   X---XX--XX
  //   XX--XXX-XX
  //   XXXX-----I
  //   X----XXXXX
  // `);
  // Nivel 3
  maps.push(`
    XI--XXXXX-
    X-XXXX----
    X-----XX--
    XXXX------
    ------XX--
    --XXXX----
    -----XXXXX
    --XXXXX---
    X-XX-----O
    X-----XXX-
  `);
  // Nivel 4
  maps.push(`
    -------XX-
    --XXXX----
    -----XXX--
    XXXX--XX--
    ---O--XX--
    XXXXXXXX--
    ---I---XX-
    -XXXXXX---
    --XXX---XX
    ------XXXX
  `);
  // Nivel 5
  maps.push(`
    ---XXXXX-I
    -X-XXXX--X
    -X-XXX--XX
    -X-XX--XXX
    -X----XXXX
    --XXXXXXXX
    X--------X
    XXXXXXX--X
    --XX----XX
    O-----XXXX
  `);
