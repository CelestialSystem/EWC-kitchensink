import '../dist/ext-wc';
import { Router } from '@vaadin/router';

const router = new Router(document.getElementById('outlet'));
// const breadcrumbs = new Router(document.getElementById('breadcrumb'));
// breadcrumbs.appendChild()

class HomeView extends HTMLElement {
    // This is called when our element is attached to the DOM
    connectedCallback() {
        this.innerHTML = '<h1>Welcome home!</h1>';
    }
}
// Tell the browser to associate the '<home-view>' tag with HomeView class
customElements.define('home-view', HomeView);

class UserList extends HTMLElement {
    // This is called when our element is attached to the DOM
    connectedCallback() {
        this.innerHTML = '<div><h1>Users List</h1><nav><a href="/users/Tim">Yim</a></nav></div>';
    }
}
// Tell the browser to associate the '<home-view>' tag with HomeView class
customElements.define('user-list', UserList);

class UserProfile extends HTMLElement {
    // This is called when our element is attached to the DOM
    connectedCallback() {
        this.innerHTML = '<h2>i am Tim</h2>';
    }
}
// Tell the browser to associate the '<home-view>' tag with HomeView class
customElements.define('user-profile', UserProfile);

router.setRoutes([
    { path: '/', component: 'home-view' },
    { path: '/users', component: 'user-list' },
    { path: '/users/Tim', component: 'user-profile' },
]);
