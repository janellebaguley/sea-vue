<template>
    <v-container>
        <v-layout row>
            <v-flex class="mb-6">
                <v-card class="login-card text-center" tile>
                    <img src="@/../src/assets/oshun.jpeg" alt="Logo" />
                    <v-card-text>
                        <v-container class="login-inner-form">
                            <form @submit.prevent="login">
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <h1 class="logn-header">TheSeaGoddessGrotto</h1>
                                        <h3 class="logn-header">
                                            Sign in to start your session
                                        </h3>
                                        <h4 v-if="error" class="logn-header" style="color: red;">
                                            Wrong Email/Password combination
                                        </h4>
                                        <p v-if="!!error">{{ error.message }}</p>
                                        <v-text-field background-color="white" label="Email" v-model="username" placeholder=" " type="email" required outlined dense></v-text-field>
                                        <v-text-field background-color="white" label="Password" v-model="password" placeholder=" " type="password" required outlined dense></v-text-field>
                                        <v-container class="form-bottom">
                                            <v-row no-gutters style="padding-bottom: 15px">
                                                <v-col md="12" class="text-center">
                                                    <v-btn class="sign-in success" type="submit" style="width:200px">Sign in
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style scoped>
    @media screen and (max-width: 450px) {

        #rc-imageselect,
        .g-recaptcha {
            transform: scale(0.77);
            -webkit-transform: scale(0.77);
            transform-origin: 0 0;
            -webkit-transform-origin: 0 0;
        }
    }

    .center-all {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .h-center {
        margin-left: auto;
        margin-right: auto;
    }

    .theme--light.v-card.login-card {
        max-width: 500px;
        background-color: #ffffff !important;
        margin: 0 auto;
        margin-top: 20vh;
        box-shadow: 0 !important;
    }

    .v-sheet.v-card:not(.v-sheet--outlined) {
        box-shadow: none !important;
    }

    .login-inner-form {
        background-color: #ffffff !important;
        padding: 1rem 2.5rem 0 2.5rem;
    }

    .logn-header {
        font-weight: normal;
        margin-bottom: 1rem;
        color: #4889E0;
    }

    .v-input--selection-controls {
        margin-top: 0;
    }

    .form-bottom {
        padding: 0;
    }
</style>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                error: false
            };
        },
        methods: {
            login() {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.username,
                        password: this.password
                    })
                };
                var url = 'http://localhost:8000/api/auth/signin';
                return fetch(url, requestOptions)
                    .then(this.handleResponse)
                    .then((user) => {
                        //console.log(user);
                        // login successful if there's a jwt token in the response
                        if (user.token) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem('user', JSON.stringify(user));
                            localStorage.setItem('token', user.token);
                            this.$router.push('/users');
                        }
                        return user;
                    });
            },
            handleResponse(response) {
                return response.text().then((text) => {
                    const data = text && JSON.parse(text);
                    if (!response.ok) {
                        if (response.status === 401) {
                            // auto logout if 401 response returned from api
                            
                            this.error = true;
                            //location.reload(true);
                        }
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                });
            },
        }
    };
</script>