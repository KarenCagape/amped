import _ from 'lodash';

export default function get(obj, path, defaultValue) {
  return _.get(obj, path, defaultValue) || defaultValue;
}
