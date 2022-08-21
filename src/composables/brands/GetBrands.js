import { ref } from 'vue';
import axios from 'axios';
import baseAPIUrl from '../globals';

const getBrands = () => {
    const brands = ref([]);
    const errorBrands = ref(null);

    const loadBrands = async () => {
        axios.get(baseAPIUrl + 'brands')
        .then((response) => {
            brands.value = response.data.data[0];

        })
        .catch((err) => errorBrands.value = err);
    }

    return { brands, errorBrands, loadBrands }
}

export default getBrands;