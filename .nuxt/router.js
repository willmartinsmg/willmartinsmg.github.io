import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9ee5fd9c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _dd1c638a = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _275bb364 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _9ee5fd9c,
    name: "contact"
  }, {
    path: "/blog/:slug?",
    component: _dd1c638a,
    name: "blog-slug"
  }, {
    path: "/",
    component: _275bb364,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
