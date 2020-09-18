import axios from "axios";

const instance = axios.create({

    // this api was created when the firbase emulator was started
    baseURL: 'http://localhost:5001/challenge-68141/us-central1/api' // THE API {cloud function} URL
});

export default instance;