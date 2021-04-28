import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProDev from '../views/ProDev.vue'
import TraderDashboards from '../views/TraderDashboards.vue'
import CodingChallenges from '../views/CodingChallenges.vue'
import Blog from '../views/Blog.vue'
import NewBlog from '../views/NewBlog.vue'
import SingleBlog from '../views/SingleBlog.vue'
import Contact from '../views/Contact.vue'
import Certifications from '../views/Certifications.vue'

import { fAuth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  const user = fAuth.currentUser
  if(!user){
    next({ name: 'Home' })
  } else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/prodev',
    name: 'ProDev',
    component: ProDev
  },
  {
    path: '/traderdashboards',
    name: 'TraderDashboards',
    component: TraderDashboards
  },
  {
    path: '/challenges',
    name: 'CodingChallenges',
    component: CodingChallenges
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/new-blog',
    name: 'NewBlog',
    component: NewBlog,
    beforeEnter: requireAuth
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/certifications',
    name: 'Certifications',
    component: Certifications
  },
  {
    path: '/blog/:id',
    name: 'SingleBlog',
    component: SingleBlog,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
