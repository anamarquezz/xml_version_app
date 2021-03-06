import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var me = this;
export default new Vuex.Store({
  state: {
    userNavigation_option: '',
    XML_Navi_opt: 'XMLCONFIGURATION',
    /* {DASHBOARD, XML-CONFIGURATION, STATIONS, XML-VERSIONS} */
    MODEL_Navi_opt: 'PAIRING',
    /* {PAIRING, ROUTERS, CABLE, CABLE-MODEMS} */
    MENU_Nav_opt: [] /* menu dependiendo del menu MODEL_Navi_opt */ ,
    option_xmlconfiguration:{
      option:'configuration',
      modelChilds:'',
      nameModel:''     
    },

    PAIRING: {
      background: 'light-blue darken-3',
      title: 'PAIRING',
      models: [{
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
      ]
    },
    ROUTERS: {
      background: 'light-blue darken-2',
      title: 'ROUTERS',
      models: [{
          id: 8,
          model: 'EAX80',
          ispairign: false

        },
        {
          id: 9,
          model: 'RAX20',
          ispairign: true
        },
        {
          id: 10,
          model: 'RAX35',
          ispairign: true

        },
        {
          id: 11,
          model: 'RAX40',
          ispairign: true
        },
        {
          id: 12,
          model: 'RAX45',
          ispairign: true
        }, {
          id: 13,
          model: 'RAX80',
          ispairign: true
        },
        {
          id: 14,
          model: 'RAX120',
          ispairign: true
        }
      ]
    },
    CABLE: {
      background: 'light-blue darken-4',
      title: 'CABLE',
      models: [{
          id: 15,
          model: 'CABLE1',
          ispairign: false

        },
        {
          id: 16,
          model: 'CABLE2',
          ispairign: true
        },
        {
          id: 17,
          model: 'CABLE3',
          ispairign: true

        },
        {
          id: 18,
          model: 'CABLE4',
          ispairign: true
        },
        {
          id: 19,
          model: 'CABLE5',
          ispairign: true
        }, {
          id: 20,
          model: 'CABLE6',
          ispairign: true
        },
        {
          id: 21,
          model: 'CABLE7',
          ispairign: true
        }
      ]
    },
    CABLEMODEMS:{
      background: 'light-blue darken-3',
      title: 'CABLE MODEMS',
      models: [{
          id: 15,
          model: 'CABLEM1',
          ispairign: false

        },
        {
          id: 16,
          model: 'CABLEM2',
          ispairign: true
        },
        {
          id: 17,
          model: 'CABLEM3',
          ispairign: true

        },
        {
          id: 18,
          model: 'CABLEM4',
          ispairign: true
        },
        {
          id: 19,
          model: 'CABLEM5',
          ispairign: true
        }, {
          id: 20,
          model: 'CABLEM6',
          ispairign: true
        },
        {
          id: 21,
          model: 'CABLEM7',
          ispairign: true
        }
      ]
    },
    FamiliaDatos: ''
  },
  mutations: {
    set_value: (state, prop) => {
      state[prop.name] = prop.value;
    },
    set_valueStore: (state, prop) => {
      state[prop.name] = state[prop.value];
    },
    set_valueswith: (state, prop) => {
      option_xmlconfiguration.option = prop.option,
      option_xmlconfiguration.modelChilds = prop.modelChilds,
      option_xmlconfiguration.nameModel = prop.nameModel
    }
  },
  actions: {
    actualizarFamilias({      
      commit      
    }, familia) {
      commit('set_valueStore', {
        name: 'FamiliaDatos',
        value: familia
      });
    },
    actualizar_optionXML({      
      commit      
    }, values) {
      commit('set_valueswith', {
        option:values.option,
        modelChilds: values.modelChilds,
        nameModel: values.nameModel
      });
    }
  },
  modules: {}
})