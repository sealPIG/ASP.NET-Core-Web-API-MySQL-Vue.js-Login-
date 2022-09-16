
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }
const Home = { template: '<div>This is Home</div>' }

const routes = [
  { path: '/Home', component: Home },
  { path: '/Login', component: Login },
  { path: '/Sensor/:UserMod',name: 'Sensor', component: Sensor },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})



const app = Vue.createApp({});


app.component('app-component', {
  template: `
  <nav class="navbar navbar-expand-sm bg-light navber-dark">
  
    <ul class="navbar-nav">
        <li class="nav-item m-1">
            <router-link class="btn btn-light btn-outline-primary"
            to="/Home">Home</router-link>
        </li>
        <li class="nav-item m-1">
            <router-link class="btn btn-light btn-outline-primary"
            to="/Login">Login</router-link>
        </li>
    </ul>
  </nav>
  `
});

app.use(router);
app.mount('#app');