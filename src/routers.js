import Home from "./components/home.vue";
import Header from "./components/header"
import Footer from "./components/footer"

const routers = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/header',
        name: 'header',
        component: Header
    },
    {
        path: '/footer',
        name: 'footer',
        component: Footer
    }
]

// export default routers 必须写在文件底部，而且后面还需要接一空行，否则无法通过 ESlint 语法验证
export default routers
