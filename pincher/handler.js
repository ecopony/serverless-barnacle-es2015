import Claws from './Claws';


export default (event, context) => {
  let claws = new Claws();

  return context.done(null, claws.pinch());
}

