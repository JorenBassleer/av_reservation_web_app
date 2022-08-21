import { ref } from 'vue';
import axios from 'axios';
import baseAPIUrl from '../globals';

const getAppliances = () => {
    const appliances = ref([]);
    const errorAppliances = ref(null);

    const loadAppliances = async () => {
        axios.get(baseAPIUrl + 'appliances')
        .then((response) => {
            appliances.value = response.data.data[0];

        })
        .catch((err) => errorAppliances.value = err);
    }

    return { appliances, errorAppliances, loadAppliances }
}

export default getAppliances;