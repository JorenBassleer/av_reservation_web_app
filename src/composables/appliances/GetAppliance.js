import { ref } from 'vue';
import axios from 'axios';
import baseAPIUrl from '../globals';

const getAppliances = (id) => {
  const appliances = ref(null);
  const error = ref(null);

  const load = async () => {
    axios.get(`${baseAPIUrl}appliances` + '/id')
      .then((response) => {
        appliances.value = response.data.data[0];
      })
      .catch((err) => error.value = err);
  };

  return { appliances, error, load };
};

export default getAppliances;
