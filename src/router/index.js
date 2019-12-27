import Vue from 'vue'
import Router from 'vue-router'
import JavaBasicGrammar from '@/components/JavaBasicGrammar'
import ClassAndObj from '@/components/ClassAndObj'
import Singleton from '@/components/Singleton'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/java',
      name: 'JavaBasicGrammar',
      component: JavaBasicGrammar,
      // children: [
      //   {
      //     path: 'co', // class and object
      //     name: 'ClassAndObj',
      //     component: ClassAndObj
      //   }
      // ]
    },
    {
      path: '/java/co', // class and object
      name: 'ClassAndObj',
      component: ClassAndObj
    },



    {
      path: '/dp/singleton', // Design patterns
      name: 'Singleton',
      component: Singleton
    }
  ]
})
