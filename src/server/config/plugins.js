import Inert from 'inert';
import Vision from 'vision';
import envVars from './envVars';

export default [{
  register: envVars,
}, {
  register: Inert,
}, {
  register: Vision,
}];
