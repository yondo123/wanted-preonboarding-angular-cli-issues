import axiosInstance from './interceptor';

export default {
  getIssues() {
    return axiosInstance({
      url: 'issues',
      method: 'get',
    });
  },
};
