import truncate from './truncate';
import alpha from './alpha';

export default value => truncate(alpha(value), 33);
