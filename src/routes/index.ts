import { createRouter, createWebHashHistory } from 'vue-router'
const routeDefines = [
    { path: "/basic/hello", title: "快速开始", component: "@/demos/basic/hello" }
]

function generateRoutes(routeList: any[]) {
    let routes: any[] = [
        {
            path: "/",
            redirect: "/basic/hello",
        }
    ]
    routeList.map(i => {
        routes.push({
            path: i.path,
            name: i.path,
            component: () => import(i.component)
        })
    })
    return routes;
}

export default createRouter({
    history: createWebHashHistory(),
    routes: generateRoutes(routeDefines)
})