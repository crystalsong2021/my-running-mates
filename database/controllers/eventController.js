const Event = require('../models/eventModel.js');

const addEvent = () => {
  console.log('Controller-->');
  return('hello')
  // Rsvp.save({firstName:'test'})
  //   .then(console.log('create'))
  //   .catch(err => {console.log(err)})
//   const filter = {firstName:'test'}
//   const update = {guests: 8}
//   let doc = await Rsvp.findRsvpAndUpdate(filter, update)
 };

const getEvents = (cb)=> {
  console.log('getEvent')
  // try {
  //   const data = await Event.find({});
  //   console.log('data from db', data)
  // } catch (err) {
  //   throw err
  // }
  Event.find({}, (err, data)=>{
    if(err){
      console.log('data not found')
      cb(err, null)
    }else{
      console.log('data from database->', data)
      cb(null, data)
    }
  })
}
module.exports = {addEvent, getEvents};