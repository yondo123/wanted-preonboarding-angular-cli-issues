import axiosInstance from './interceptor';

export default {
  getIssues(range, page) {
    return axiosInstance({
      url: `issues?per_page=${range}&page=${page}&state=open&sort=comments`,
      method: 'get',
    });
  },

  getDetailIssue(issueNumber) {
    return axiosInstance({
      url: `issues/${issueNumber}`,
      method: 'get',
    });
  },
};
