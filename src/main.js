import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import BaseButton from './components/BaseButton.vue';
import UserData from './components/UserData.vue';
import NewFriend from './components/NewFriend';

const app = createApp(App)

app.component('friend-contact', FriendContact);
app.component('base-button', BaseButton);
app.component('user-data', UserData);
app.component('new-friend', NewFriend);

app.mount('#app');
