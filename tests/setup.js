// jest.config.js
//Sync object
module.exports = {
  verbose: true,
};

//Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};

// this enzyme stuff below was the default stuff in the boiler plate and maybe can be deleted.

// import enzyme from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// enzyme.configure({
//   adapter: new Adapter()
// })
