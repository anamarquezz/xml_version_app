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
    MENU_Nav_opt: [], /* menu dependiendo del menu MODEL_Navi_opt */ 
    xml_selected:'', /* Selected xml */
    option_xmlconfiguration: {
      option: 'configuration',
      modelChilds: '',
      nameModel: ''
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
                idxml: 1,
                name: 'pairing'
              },
              {
                idxml: 2,
                name: 'pot_reset'
              }
            ]
          }, {
            id: 2,
            model: 'RBS10v1',
            suitesxml: [{
              idxml: 1,
              name: 'pairing'
            },
            {
              idxml: 2,
              name: 'pot_reset'
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
                idxml: 1,
                name: 'pairing'
              },
              {
                idxml: 2,
                name: 'pot_reset'
              }
              ]
            }, {
              id: 2,
              model: 'RBS10v1-1',
              suitesxml: [{
                idxml: 1,
                name: 'pairing'
              },
              {
                idxml: 2,
                name: 'pot_reset'
              }
              ]
            },
            {
              id: 3,
              model: 'RBS10v1-2',
              suitesxml: [{
                idxml: 1,
                name: 'pairing'
              },
              {
                idxml: 2,
                name: 'pot_reset'
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
              idxml: 1,
              name: 'pairing'
            },
            {
              idxml: 2,
              name: 'pot_reset'
            }
            ]
          }, {
            id: 7,
            model: 'RBS20v1',
            suitesxml: [{
              idxml: 1,
              name: 'pairing'
            },
            {
              idxml: 2,
              name: 'pot_reset'
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
              idxml: 1,
              name: 'pairing'
            },
            {
              idxml: 2,
              name: 'pot_reset'
            }
            ]
          }, {
            id: 9,
            model: 'RBS750v1',
            suitesxml: [{
              idxml: 1,
              name: 'pairing'
            },
            {
              idxml: 2,
              name: 'pot_reset'
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
              idxml: 1,
              name: 'pairing'
            },
            {
              idxml: 2,
              name: 'pot_reset'
            }
            ]
          }, {
            id: 11,
            model: 'RBS850v1',
            suitesxml: [{
              idxml: 1,
              name: 'pairing'
            },
            {
              idxml: 2,
              name: 'pot_reset'
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
              idxml: 1,
              name: 'pairing'
            },
            {
              idxml: 2,
              name: 'pot_reset'
            }
            ]
          }, {
            id: 13,
            model: 'MS60v1-1',
            suitesxml: [{
              idxml: 1,
              name: 'pairing'
            },
            {
              idxml: 2,
              name: 'pot_reset'
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
                idxml: 1,
                name: 'pairing'
              },
              {
                idxml: 2,
                name: 'pot_reset'
              }
              ]
            }, {
              id: 13,
              model: 'MS60v1-1',
              suitesxml: [{
                idxml: 1,
                name: 'pairing'
              },
              {
                idxml: 2,
                name: 'pot_reset'
              }
              ]
            },
            {
              id: 14,
              model: 'MS60v1-2',
              suitesxml: [{
                idxml: 1,
                name: 'pairing'
              },
              {
                idxml: 2,
                name: 'pot_reset'
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
      ],
      methods: []
    },
    CABLEMODEMS: {
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
    FamiliaDatos: '',
    AccessType: [{
        value: 1,
        text: 'telnet'
      },
      {
        value: 2,
        text: 'smtp'
      },
      {
        value: 3,
        text: 'soap'
      }
    ],
    methods: [{
        id: 1,
        modelid:1,
        idxml:1,
        name: 'config_TBSwitch',
        description: 'CFG TBSWT',
        title: 'config TB Switch',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: true,
        hasParameters: true,
        parameters: [{           
            name: 'conf_script_file',
            List: false,
            component: 'textfield',
            type: 'text',
            value: 'ITS3_TESTBED_SW_CNFG_PAIRING_3'
          },
          {
            name: 'addrs',
            List: true,
            values: [{
              name:'IP',
              value: '169.254.100.100',
              component: 'textfield',
              order: 5,
              type: 'text'
            },
            {
              name:'value',
              value: '192.168.2.102',
              component: 'textfield',
              order: 4,
              type: 'text'
            },
            {
              name: 'bootup_time',
              List: false,
              component: 'textfield',
              type: 'string',
              order: 3,
              value: 30
            },
            {
              name: 'ping_tries',
              List: false,
              component: 'textfield',
              type: 'string',
              order: 2,
              value: 60
            },
            {
              name: 'num_tries',
              List: false,
              component: 'textfield',
              type: 'string',
              order: 1,
              value: 20
            }]
          }
        ]
      },
      {
        id: 2,
        name: 'switchOffAllDuts',
        description: 'OFF ALLDUTS',
        title: 'Switch Off All Duts',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: true,
        hasParameter: false,
        parameters: []
      },
      {
        id: 3,
        name: 'initSkuMgmt',
        description: 'Init',
        title: 'initSkuMgmt',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: false,
        hasParameter: false,
        parameters: []
      },
      {
        id: 4,
        name: 'switchOnDut',
        description: 'ON ALL DUTS',
        title: 'Switch On Dut',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: false,
        hasParameter: true,
        parameters: [{
            name: 'ping',
            List: false,
            component: 'radio',
            type: 'string',
            value: 1
          },
          {
            name: 'bootup_time',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 30
          },
          {
            name: 'num_tries',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 20
          }
        ]
      },
      {
        id: 5,
        name: 'initSkuAccessIntf',
        description: 'Init Access',
        title: 'Switch On Dut',
        sequenceTries: 0,
        execute_once: false,
        hasParameter: true,
        component: '',
        type: '',
        parameters: [{
            name: 'access_type',
            List: false,
            component: 'combobox',
            type: '',
            value: 'telnet'
          },
          {
            name: 'timeout',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 10
          },
          {
            name: 'num_tries',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 20
          }
        ]
      },
      {
        id: 6,
        name: 'skuIntfAccessTest',
        description: 'Init Access',
        title: 'sku Intf Access Test',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: false,
        hasParameter: true,
        parameters: [{
            name: 'access_type',
            List: false,
            component: 'combobox',
            type: '',
            value: 'telnet'
          },
          {
            name: 'fw_cmd',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 'routerinfo'
          },
          {
            name: 'fw_pattern',
            List: false,
            component: 'textfield',
            type: 'string',
            value: '/([V0-9._-]+)/'
          },
          {
            name: 'num_tries',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 3
          }
        ]
      },
      {
        id: 7,
        name: 'fwTest',
        description: 'FW Check',
        title: 'FW Version Check',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: false,
        hasParameter: true,
        parameters: [{
            name: 'access_type',
            List: false,
            component: 'combobox',
            type: '',
            value: 'telnet'
          },
          {
            name: 'fw',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 'V1.0.6.102_2.0.45'
          },
          {
            name: 'fw_cmd',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 'routerinfo'
          },
          {
            name: 'fw_pattern',
            List: false,
            component: 'textfield',
            type: 'string',
            value: '/([V0-9._-]+)/'
          },
          {
            name: 'num_tries',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 3
          }
        ]
      },
      {
        id: 8,
        name: 'readOrbiInfo',
        description: 'RD ORBINFO',
        title: 'Read Orbi Info',
        sequenceTries: 3,
        component: '',
        type: '',
        execute_once: false,
        hasParameter: true,
        parameters: [{
            name: 'access_type',
            List: false,
            component: 'combobox',
            type: '',
            value: 'telnet'
          },
          {
            name: 'info_note',
            List: false,
            component: 'textfield',
            type: 'string',
            value: 'current_info'
          },
          {
            name: 'info_names',
            List: true,
            values: [{
                name: 'info_names',
                component: 'textfield',
                type: 'text',
                order: 1,
                value: 'SN'
              },
              {
                name: 'read_info_cmds',
                component: 'textfield',
                type: 'text',
                order: 2,
                value: 'burnsn'
              },
              {
                name: 'info_patterns',
                component: 'textfield',
                type: 'text',
                order: 3,
                value: 'serial number - ([a-zA-Z0-9]+)'
              }
            ]
          }
        ]
      },
      {
        id: 9,
        name: 'writeOrbiInfo',
        description: 'WT ORBINFO',
        title: 'Write Orbi Info',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: false,
        hasParameter: true,
        parameters: [{
            name: 'access_type',
            List: false,
            component: 'combobox',
            type: '',
            value: 'telnet'
          },
          {
            name: 'cmds',
            List: true,
            values: [{
              name: '',
              component: 'textfield',
              type: 'text',
              value: 'burnsn {serial_number}'
            }]
          }
        ]
      },
      {
        id: 10,
        name: 'pingDUT',
        description: 'Ping DUT',
        title: 'Ping DUT',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: false,
        hasParameter: true,
        parameters: [{
          name: 'num_tries',
          List: false,
          component: 'textfield',
          type: 'string',
          value: 20
        }]
      },
      {
        id: 11,
        name: 'verifyOrbiInfo',
        description: 'VF ORBINFO',
        title: 'Verify Orbi Info',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: false,
        hasParameter: true,
        parameters: [{
            name: 'access_type',
            List: false,
            component: 'textfield',
            type: 'text',
            value: 'telnet'
          },
          {
            name: 'cmds',
            List: true,
            values: [{
              name: '',
              component: 'textfield',
              type: 'text',
              value: 'burnsn'
            }]
          },
          {
            name: 'verification_outputs',
            List: true,
            values: [{
              name: '',
              component: 'textfield',
              type: 'text',
              value: '{serial_number}'
            }]
          }
        ]
      },
      {
        id: 12,
        name: 'sendCmds',
        description: 'send Cmds',
        title: 'Send Comands',
        sequenceTries: 0,
        component: '',
        type: '',
        execute_once: false,
        hasParameter: true,
        parameters: [{
            name: 'access_type',
            List: false,
            component: 'textfield',
            type: 'text',
            value: 'telnet'
          },
          {
            name: 'cmds',
            List: true,
            values: [
              {
                name: '',
                component: 'textfield',
                type: 'text',
                value: 'loaddefault'
              },
              {
                name: '',
                component: 'textfield',
                type: 'text',
                value: 'nvram commit'
              },
              {
                name: '',
                component: 'textfield',
                type: 'text',
                value: 'reboot'
              }
            ]
          }
        ]
      }
    ],
    xmlexample: '<?xml version="1.0" ?>  <TEST_SUITE>         <MODULE> Features_wifi_router </MODULE>         <TEST_SEQ_NUM_TRIES> 1 </TEST_SEQ_NUM_TRIES>         <TEST_SEQ_GRP>             <TEST_SEQ>                 <NORMAL_METHODS>  </TEST_SEQ>    </TEST_SUITE>'
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
        option: values.option,
        modelChilds: values.modelChilds,
        nameModel: values.nameModel
      });
    },
    updateConfiguration({
      commit,
      state
    }, values){

      
      state.xmlOptions = [...new Set(values.map((esc) => esc.number_approval))];

        
     

      commit('set_valueStore', {
        name: values.name,
        value: values.data
      });
    }
  },
  modules: {}
})