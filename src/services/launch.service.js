import axios from 'axios';

import { urls } from '../constants/urls';

const launchService = {
  getAll: () => axios.get(urls.launches.base),
};

export { launchService };
