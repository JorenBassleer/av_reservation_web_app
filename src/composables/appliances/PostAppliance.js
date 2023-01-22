import { ref } from 'vue';
import axios from 'axios';
import baseAPIUrl from '../globals';

const postAppliance = () => {
  const newAppliance = ref();
  const error = ref(null);

  const load = async (appliance) => {
    await axios.post(`${baseAPIUrl}appliances`, appliance)
      .then((response) => {
        newAppliance.value = response.data.data;
      })
      .catch((err) => {
        error.value = err;
      });
  };
  return { newAppliance, error, load };
};

export default postAppliance;
