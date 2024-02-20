import './App.css';
import Pokemon from './pokemon';

const test = [
  {
      "pokemon": {
          "name": "psyduck",
          "url": "https://pokeapi.co/api/v2/pokemon/54/"
      },
      "version_details": [
          {
              "encounter_details": [
                  {
                      "chance": 60,
                      "condition_values": [],
                      "max_level": 30,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  },
                  {
                      "chance": 30,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  }
              ],
              "max_chance": 90,
              "version": {
                  "name": "diamond",
                  "url": "https://pokeapi.co/api/v2/version/12/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 60,
                      "condition_values": [],
                      "max_level": 30,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  },
                  {
                      "chance": 30,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  }
              ],
              "max_chance": 90,
              "version": {
                  "name": "pearl",
                  "url": "https://pokeapi.co/api/v2/version/13/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 60,
                      "condition_values": [],
                      "max_level": 30,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  },
                  {
                      "chance": 30,
                      "condition_values": [],
                      "max_level": 30,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  }
              ],
              "max_chance": 90,
              "version": {
                  "name": "platinum",
                  "url": "https://pokeapi.co/api/v2/version/14/"
              }
          }
      ]
  },
  {
      "pokemon": {
          "name": "golduck",
          "url": "https://pokeapi.co/api/v2/pokemon/55/"
      },
      "version_details": [
          {
              "encounter_details": [
                  {
                      "chance": 5,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  }
              ],
              "max_chance": 10,
              "version": {
                  "name": "diamond",
                  "url": "https://pokeapi.co/api/v2/version/12/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 5,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  }
              ],
              "max_chance": 10,
              "version": {
                  "name": "pearl",
                  "url": "https://pokeapi.co/api/v2/version/13/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 5,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "surf",
                          "url": "https://pokeapi.co/api/v2/encounter-method/5/"
                      },
                      "min_level": 20
                  }
              ],
              "max_chance": 10,
              "version": {
                  "name": "platinum",
                  "url": "https://pokeapi.co/api/v2/version/14/"
              }
          }
      ]
  },
  {
      "pokemon": {
          "name": "magikarp",
          "url": "https://pokeapi.co/api/v2/pokemon/129/"
      },
      "version_details": [
          {
              "encounter_details": [
                  {
                      "chance": 60,
                      "condition_values": [],
                      "max_level": 6,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 4
                  },
                  {
                      "chance": 30,
                      "condition_values": [],
                      "max_level": 7,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 3
                  },
                  {
                      "chance": 5,
                      "condition_values": [],
                      "max_level": 10,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 5
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 10,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 5
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 10,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 5
                  },
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 20,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 15
                  },
                  {
                      "chance": 15,
                      "condition_values": [],
                      "max_level": 25,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 10
                  }
              ],
              "max_chance": 155,
              "version": {
                  "name": "diamond",
                  "url": "https://pokeapi.co/api/v2/version/12/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 60,
                      "condition_values": [],
                      "max_level": 6,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 4
                  },
                  {
                      "chance": 30,
                      "condition_values": [],
                      "max_level": 7,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 3
                  },
                  {
                      "chance": 5,
                      "condition_values": [],
                      "max_level": 10,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 5
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 10,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 5
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 10,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 5
                  },
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 20,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 15
                  },
                  {
                      "chance": 15,
                      "condition_values": [],
                      "max_level": 25,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 10
                  }
              ],
              "max_chance": 155,
              "version": {
                  "name": "pearl",
                  "url": "https://pokeapi.co/api/v2/version/13/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 60,
                      "condition_values": [],
                      "max_level": 6,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 4
                  },
                  {
                      "chance": 30,
                      "condition_values": [],
                      "max_level": 7,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 3
                  },
                  {
                      "chance": 5,
                      "condition_values": [],
                      "max_level": 10,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 5
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 10,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 5
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 15,
                      "method": {
                          "name": "old-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/2/"
                      },
                      "min_level": 5
                  },
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 20,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 15
                  },
                  {
                      "chance": 15,
                      "condition_values": [],
                      "max_level": 25,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 10
                  }
              ],
              "max_chance": 155,
              "version": {
                  "name": "platinum",
                  "url": "https://pokeapi.co/api/v2/version/14/"
              }
          }
      ]
  },
  {
      "pokemon": {
          "name": "gyarados",
          "url": "https://pokeapi.co/api/v2/pokemon/130/"
      },
      "version_details": [
          {
              "encounter_details": [
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 15,
                      "condition_values": [],
                      "max_level": 55,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 40
                  }
              ],
              "max_chance": 55,
              "version": {
                  "name": "diamond",
                  "url": "https://pokeapi.co/api/v2/version/12/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 15,
                      "condition_values": [],
                      "max_level": 55,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 40
                  }
              ],
              "max_chance": 55,
              "version": {
                  "name": "pearl",
                  "url": "https://pokeapi.co/api/v2/version/13/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 15,
                      "condition_values": [],
                      "max_level": 55,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 40
                  }
              ],
              "max_chance": 55,
              "version": {
                  "name": "platinum",
                  "url": "https://pokeapi.co/api/v2/version/14/"
              }
          }
      ]
  },
  {
      "pokemon": {
          "name": "barboach",
          "url": "https://pokeapi.co/api/v2/pokemon/339/"
      },
      "version_details": [
          {
              "encounter_details": [
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 20,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 15
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 25,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 10
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 25,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 10
                  }
              ],
              "max_chance": 45,
              "version": {
                  "name": "diamond",
                  "url": "https://pokeapi.co/api/v2/version/12/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 20,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 15
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 25,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 10
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 25,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 10
                  }
              ],
              "max_chance": 45,
              "version": {
                  "name": "pearl",
                  "url": "https://pokeapi.co/api/v2/version/13/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 20,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 15
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 25,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 10
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 25,
                      "method": {
                          "name": "good-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/3/"
                      },
                      "min_level": 10
                  }
              ],
              "max_chance": 45,
              "version": {
                  "name": "platinum",
                  "url": "https://pokeapi.co/api/v2/version/14/"
              }
          }
      ]
  },
  {
      "pokemon": {
          "name": "whiscash",
          "url": "https://pokeapi.co/api/v2/pokemon/340/"
      },
      "version_details": [
          {
              "encounter_details": [
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 50,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 20
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 50,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 20
                  }
              ],
              "max_chance": 45,
              "version": {
                  "name": "diamond",
                  "url": "https://pokeapi.co/api/v2/version/12/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 50,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 20
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 50,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 20
                  }
              ],
              "max_chance": 45,
              "version": {
                  "name": "pearl",
                  "url": "https://pokeapi.co/api/v2/version/13/"
              }
          },
          {
              "encounter_details": [
                  {
                      "chance": 40,
                      "condition_values": [],
                      "max_level": 40,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 30
                  },
                  {
                      "chance": 4,
                      "condition_values": [],
                      "max_level": 55,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 40
                  },
                  {
                      "chance": 1,
                      "condition_values": [],
                      "max_level": 55,
                      "method": {
                          "name": "super-rod",
                          "url": "https://pokeapi.co/api/v2/encounter-method/4/"
                      },
                      "min_level": 40
                  }
              ],
              "max_chance": 45,
              "version": {
                  "name": "platinum",
                  "url": "https://pokeapi.co/api/v2/version/14/"
              }
          }
      ]
  }
]

function App() {
  return (
    <div className="App">
      <Pokemon encounter={test}/>
    </div>
  );
}

export default App;
