import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import CodingChallenges from '../views/CodingChallenges.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Certifications from '../views/Certifications.vue'

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
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/certifications',
    name: 'Certifications',
    component: Certifications
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
