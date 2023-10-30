<template>
    <div class="flex items-center mt-8 flex-col min-h-screen">
        <div class="mb-8">
            <button class="p-4 text-white font-bold" @click="register = false" :class="{'underline': !register}">Login</button>
            <button class="p-4 text-white font-bold" @click="register = true" :class="{'underline': register}">Register</button>
        </div>
        <div class="p-8 bg-white rounded-md max-w-lg w-full">
            <h1 class="text-3xl font-bold">{{ swithToRegister }}</h1>
            <form @submit.prevent="submitForm" class="mt-10 space-y-4">
                <div class="flex flex-col space-y-1">
                    <label>Email Adress</label>
                    <input v-model="credential.email" class="p-4 border border-gray-300" type="text" placeholder="Email adress...">
                </div>
                <div class="flex flex-col space-y-1">
                    <label>Password</label>
                    <input v-model="credential.password" class="p-4 border border-gray-300" type="text" placeholder="Password">
                </div>
                <AppBtn type="btn btn-primary" v-if="register" caption="Register"/>
                <AppBtn type="btn btn-primary" v-else caption="Login"/>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import AppBtn from '../components/AppBtn.vue';
import { useStoreAuth} from '../stores/storeAuth';

const register = ref(false);

const storeAuth = useStoreAuth();

const credential = reactive({
    email: '',
    password: ''
})

const swithToRegister = computed(() => {
   return register.value ? 'Register' : 'Login'
})

const submitForm = () => {
    if(!credential.email || !credential.password) {
        alert('please, fill the inputs')
    } else {
        if(register.value) {
            console.log('Register user', credential);
            storeAuth.registerUser(credential);
        } else {
            console.log('Login user:', credential)
            storeAuth.loginUser(credential);
        }
      
    }
}

</script>