import Index from "@/components/Index"
import {createRouter, createWebHistory} from "vue-router";
import Main from "@/components/Main";
import NotFound from "@/components/errors/NotFound";
import request from "@/ajax/request";
import storage from "@/storage/storage";


async function checkLogin() {
    try {
        const res = await request.auth.checkLogin({
            jws: storage.getJws(),
        })
        return res.data
    } catch (e) {
        console.log(e)
    }
}

const routes = [
    {
        path: "/",
        meta: {
            requiresNotAuth: true
        },
        component: Index,
    },
    {
        path: "/main",
        meta: {
            requiresAuth: true
        },
        component: Main
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

router.beforeEach((to, from, next) => {
    let log = checkLogin()
    if (to.matched.some(route => route.meta.requiresAuth)) {
        log.then(res => {
            if (!res.login) {
                next("/")
            } else {
                next()
            }
            console.log(res)
            console.log("/main")
        })
    } else if (to.matched.some(route => route.meta.requiresNotAuth)) {
        log.then(res => {
            if (res.login) {
                next("/main")
            } else {
                next()
            }
            console.log(res)
            console.log("/")
        })
    } else {
        next()
    }
})

export default router

