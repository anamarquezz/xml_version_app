import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userNavigation_option: '',
    XML_Navi_opt: 'XMLCONFIGURATION',
    /* {DASHBOARD, XML-CONFIGURATION, STATIONS, XML-VERSIONS} */
    MODEL_Navi_opt: 'PAIRING',
    /* {PAIRING, ROUTERS, CABLE, CABLE-MODEMS} */
    MENU_Nav_opt: [] /* menu dependiendo del menu MODEL_Navi_opt */,
    AllPairing: [
      {
        id: 1,
        model: 'RBK12v1',
        ispairign: true,
        childs: [{
          id: 1,
          model: 'RBR10v1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }, {
          id: 2,
          model: 'RBS10v1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }]
      },
      {
        id: 2,
        model: 'RBK13v1',
        ispairign: true,
        childs: [{
            id: 1,
            model: 'RBR10v1',
            suitesxml: [{
                id: 1,
                name: 'pairing.xml'
              },
              {
                id: 2,
                name: 'pot_reset.xml'
              }
            ]
          }, {
            id: 2,
            model: 'RBS10v1-1',
            suitesxml: [{
                id: 1,
                name: 'pairing.xml'
              },
              {
                id: 2,
                name: 'pot_reset.xml'
              }
            ]
          },
          {
            id: 3,
            model: 'RBS10v1-2',
            suitesxml: [{
                id: 1,
                name: 'pairing.xml'
              },
              {
                id: 2,
                name: 'pot_reset.xml'
              }
            ]
          }
        ]
      },
      {
        id: 3,
        model: 'RBK20v1',
        ispairign: true,
        childs: [{
          id: 6,
          model: 'RBR20v1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }, {
          id: 7,
          model: 'RBS20v1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }]
      },
      {
        id: 4,
        model: 'RBK752v1',
        ispairign: true,
        childs: [{
          id: 8,
          model: 'RBR750v1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }, {
          id: 9,
          model: 'RBS750v1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }]
      },
      {
        id: 5,
        model: 'RBK852v1',
        ispairign: true,
        childs: [{
          id: 10,
          model: 'RBR850v1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }, {
          id: 11,
          model: 'RBS850v1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }]
      },
      {
        id: 6,
        model: 'MK62v1',
        ispairign: true,
        childs: [{
          id: 12,
          model: 'MR60V1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }, {
          id: 13,
          model: 'MS60v1-1',
          suitesxml: [{
              id: 1,
              name: 'pairing.xml'
            },
            {
              id: 2,
              name: 'pot_reset.xml'
            }
          ]
        }, ]
      },
      {
        id: 7,
        model: 'MK63v1',
        ispairign: true,
        childs: [{
            id: 12,
            model: 'MR60V1',
            suitesxml: [{
                id: 1,
                name: 'pairing.xml'
              },
              {
                id: 2,
                name: 'pot_reset.xml'
              }
            ]
          }, {
            id: 13,
            model: 'MS60v1-1',
            suitesxml: [{
                id: 1,
                name: 'pairing.xml'
              },
              {
                id: 2,
                name: 'pot_reset.xml'
              }
            ]
          },
          {
            id: 14,
            model: 'MS60v1-2',
            suitesxml: [{
                id: 1,
                name: 'pairing.xml'
              },
              {
                id: 2,
                name: 'pot_reset.xml'
              }
            ]
          }
        ]
      }
    ],
  },
  mutations: {    
  set_value: (state,prop) => {
    state[prop.name] = prop.value;
  },
  },
  actions: {   
  },
  modules: {}
})