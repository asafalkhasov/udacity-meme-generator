<template>
    <b-navbar toggleable="lg" type="dark" variant="danger">
        <b-navbar-brand>Udacity Meme Generator</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav pills>
                <b-nav-item :to="{'name': 'my-codes'}">My Meme</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" v-if="!$auth.loading">
                <b-button @click="createCode" variant="white">
                    <strong>
                    New Meme
                    </strong>
                    <b-icon icon="plus"/>
                </b-button>
                <b-nav-item-dropdown right v-if="$auth.isAuthenticated">
                    <template #button-content>
                        <b-button variant="primary">
                        {{ $auth.user.name }}
                        </b-button>
                    </template>
                    <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item v-else @click="login"> Log in </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class NavigationBar extends Vue {
    // Log the user out
    logout() {
        this.$auth.logout({
            returnTo: window.location.origin,
        });
    }
    login() {
        this.$auth.loginWithRedirect({});
    }
    myCodes(){
        this.$router.push({name: "my-memes"});
    }
    explore(){
        this.$router.push({name: "explore"});
    }
    createCode(){
        this.$router.push({name: "new-meme"});
    }
}
</script>