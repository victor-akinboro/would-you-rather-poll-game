import { getInitialData } from '../utils/api';
import { fetchQuestions } from '../actions/questions';
import { fetchUsers } from '../actions/users';

export const fetchData = () => {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(fetchQuestions(questions));
      dispatch(fetchUsers(users));
    });
  };
}
