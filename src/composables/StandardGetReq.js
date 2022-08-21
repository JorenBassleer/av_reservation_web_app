import { ref } from 'vue';
import axios from 'axios';
import baseAPIUrl from './globals.js';

const getRequest = (typeWanted) => {
    const requestedData = ref([]);
    const error = ref(null);
    const load = async () => {
        axios.get(baseAPIUrl + typeWanted)
        .then((response) => {
            requestedData.value = response.data.data[0];

        })
        .catch((err) => error.value = err);
    }

    return { requestedData, error, load }
}

export default getRequest;