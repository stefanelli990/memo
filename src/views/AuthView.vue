<template>
    <div class="flex">
        <div class="min-h-screen bg-white w-1/2 p-8 hidden lg:block">
            <div class="bg-auth-img bg-cover bg-no-repeat bg-center h-full rounded-xl relative">
                <h1 class="text-white font-bold text-5xl max-w-sm absolute bottom-8 left-8">Start Your Note-Taking Journey!</h1>
            </div>
        </div>
        <div class="flex items-center justify-center flex-col min-h-screen w-full lg:w-1/2 bg-white p-4 lg:pr-8 lg:pb-8 lg:pt-8 lg:pl-0">
            <div class="rounded-md max-w-md w-full">
                <form @submit.prevent="submitForm">
                    <div v-if="!register">
                        <h1 class="text-2xl lg:text-3xl font-bold mb-10">Login to your account</h1>
              
                    <AppInputs :value="credential.email" @input="updateField($event, 'email')" :id="credential.email" :name="credential.email"  label="Email" placeholder="Enter your email"/>
                
                    <AppInputs :value="credential.password" @input="updateField($event, 'password')" :id="credential.password" :name="credential.password" label="Password" placeholder="Enter your password"/>
                    <AppBtn class="my-4"  type="btn btn-primary"  caption="Login"/>
                    </div>
                    <div v-else>
                        <h1 class="text-2xl lg:text-3xl font-bold mb-10">Create an account</h1>
                        <div class="grid grid-cols-2 gap-x-4">
                   
                    <AppInputs :value="credential.firstName" @input="updateField($event, 'firstName')" :id="credential.firstName" :name="credential.firstName" label="First Name" placeholder="Enter your first name"/>
                    <AppInputs :value="credential.lastName" @input="updateField($event, 'lastName')" :id="credential.lastName" :name="credential.lastName" label="Last Name" placeholder="Enter your last name"/>
                    <AppInputs :value="credential.email" @input="updateField($event, 'email')" :id="credential.email" :name="credential.email" class="col-span-2" label="Email" placeholder="Enter your email"/>
             
                    <AppInputs :value="credential.password" @input="updateField($event, 'password')" :id="credential.password" :name="credential.password" class="col-span-2" label="Password" placeholder="Enter your password"/>
                    <AppBtn class="col-span-2 my-4" type="btn btn-primary"  caption="Register"/>
                        </div>
                    </div>
                </form>
                    <div v-if="!register" class="text-center font-medium">Don’t have an Account? <button class="text-primaryColor font-bold hover:underline" @click="register = true">Register</button></div>
                    <div v-else class="text-center font-medium">Already have an Account? <button class="text-primaryColor font-bold hover:underline" @click="register = false">Log in</button></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import AppBtn from '../components/AppBtn.vue';
import { useStoreAuth} from '../stores/storeAuth';
import AppInputs from '../components/AppInputs.vue';

const register = ref(false);

const emailInput = ref('')
const passwordInput = ref('')
const firstNameInput = ref('')
const lastNameInput = ref('')

const storeAuth = useStoreAuth();

const credential = reactive({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
})

const updateField = (e, field) => {
    if (field === 'email') {
        credential.email = e.target.value;
    } else if (field === 'password') {
        credential.password = e.target.value;
    } else if (field === 'firstName') {
        credential.firstName = e.target.value;
    } else if (field === 'lastName') {
        credential.lastName = e.target.value;
    }
}


const submitForm = () => {
    if (!credential.email || !credential.password) {
        alert('Please fill in the email and password fields');
    } else if (register.value && (!credential.firstName || !credential.lastName)) {
        alert('Please fill in the first name and last name fields');
    } else {
        if (register.value) {
            console.log('Register user', credential);
            storeAuth.registerUser(credential);
        } else {
            console.log('Login user:', credential);
            storeAuth.loginUser(credential);
        }
    }
}

</script>