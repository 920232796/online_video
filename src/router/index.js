import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../views/LogIn.vue'
import Index from "../views/Index.vue"
import View from "../views/View.vue"
import User from "../views/User.vue"
import Teacher from "../views/Teacher.vue"
import StudentTable from "../components/StudentTable.vue"
import CourseTable from "../components/CourseTable.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    component: LogIn
  },
  {
    path: "/",
    name: "index", 
    component: Index
  },
  {
    path: "/view",
    name: "view",
    component: View
  },
  {
    path: "/user",
    name: "user",
    component: User
  },
  {
    path: "/teacher",
    name: "teacher",
    component: Teacher,
    children:[
      {
        path: "/teacher/student_table",
        component: StudentTable
      },
      {
        path: "/teacher/course_table",
        component: CourseTable
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
