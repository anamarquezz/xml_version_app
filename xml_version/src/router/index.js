import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue' 
import xmlConfiguration from '../views/xmlConfiguration.vue' 
import stations from '../views/stations.vue' 
import xmlVersions from '../views/xmlVersions.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/DASHBOARD',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/XMLCONFIGURATION',
    name: 'xmlConfiguration',
    component: xmlConfiguration
  }, 
  {
    path: '/STATIONS',
    name: 'stations',
    component: stations
  }, 
  {
    path: '/XMLVERSIONS',
    name: 'xmlVersions',
    component: xmlVersions
  }, 
  
  
]

const router = new VueRouter({
  routes
})

export default router
