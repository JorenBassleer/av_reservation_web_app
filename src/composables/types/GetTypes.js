import { ref } from 'vue';
import axios from 'axios';
import baseAPIUrl from '../globals';

const getTypes = () => {
    const types = ref([]);
    const errorTypes = ref(null);

    const loadTypes = async () => {
        axios.get(baseAPIUrl + 'types')
        .then((response) => {
            types.value = response.data.data[0];

        })
        .catch((err) => errorTypes.value = err);
    }

    return { types, errorTypes, loadTypes }
}

export default getTypes;