// const addAppointment=async(e, hour,day,date,doc)=>{
//     const datee = e.target.id
//     const currentTime = e.target.innerHTML;

//     if(!login)
//     {
      
//        history.push('/Signin');
//       console.log(login)
//      }
//     else
//     {
//       // db.collection('Users').doc(usrID).update({
//       //   appointment:{date:date,day:day,hour:hour,DoctorName:doc.Name}
//       // })
//      const usrObj={
//       date: date,
//       day: day,
//       hour: hour,
//       DoctorName:doc.Name
//     }
//       db.collection('Users').doc(usrID).get().then(doc => {
//         console.log(doc.data().appointment);
//         usrAppointment=doc.data().appointment
//         console.log('usrAppointment',usrAppointment)
//         usrAppointment.push(usrObj)
//       })

//       console.log('usrAppointment after add new appointment',usrAppointment)
//       localStorage.setItem('AppDate',date)
//       localStorage.setItem('AppDay',day)
//       localStorage.setItem('AppHour',hour)
//       localStorage.setItem('AppDoc',doc.Name)
//       const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
//             where('Name','==',doc.Name));

//             const details = await getDocs(docts)
//             details.forEach((doc) => {
//               console.log(doc.data().timeTables)

//               const myTimes = doc.data().timeTables;
//               myTimes && myTimes.map(time => {
//                 if(time.date == datee ) { //
//                   // console.log('one',time);//get complete object
//                   //loop on hours to edit status
//                   time.hours.map(hour => {
//                     // console.log('one', hour.hour, 'two', currentTime, 'three', 
//                     // (hour.hour.split(":")[0] === currentTime.split(":")[0]) && 
//                     // (hour.hour.split(":")[1] == currentTime.split(":")[1]));
//                     console.log('before hour', time);
//                     if((hour.hour.split(":")[0] === currentTime.split(":")[0]) && 
//                     Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(currentTime.split(":")[1])) {
//                       // console.log('hey', hour.hour, 'and', currentTime);
//                       // console.log('hello time', hour);
//                       const hoursOld = [...time.hours, {hour: hour.hour, status: 'busy'}];
//                       const crntTime = hoursOld.find(hour => (hour.hour.split(":")[0] == currentTime.split(":")[0]) && 
//                       Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(currentTime.split(":")[1]));
//                       const index = hoursOld.indexOf(crntTime);

//                       const newObj = hoursOld.pop(index);
                
//                       console.log('hoursOd', hoursOld);
//                       console.log('newObj', newObj);
//                       var newObj2 = {
//                         date: time.date,
//                         day: time.day,
//                         hours: [...time.hours, {hour: hour.hour, status: 'busy'}]
//                       }

//                       console.log('new',newObj2);
//                       let test = newObj2.hours.filter( (ele, ind) => ind === newObj2.hours.findLastIndex( elem => elem.hour === ele.hour ))
//                        console.log('after filter test ',test)

//                        var newObj3 = {
//                         date: time.date,
//                         day: time.day,
//                         hours:test
//                       }
//                       console.log('newObj3 ',newObj3)
//                       newTimeTabes.push(newObj3);
//                       console.log('add newObj3', newTimeTabes);
//                       console.log('usrAppointment after new obj3',usrAppointment)

//                       db.collection('Users').doc(usrID).update({
//                         appointment: usrAppointment
//                       })
//                     }
//                   })
//                 } else {
//                   console.log('two', time);
//                   newTimeTabes.push(time);
//                 }
//               }) 

//               console.log('new time', newTimeTabes);
//               db.collection('Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').doc(doc.id).update({
//                 timeTables:newTimeTabes
//              })

              
//             //    updateDoc(db.collection('Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').doc(doc.id), {
//             //     stuts: arrayRemove("busy")
//             // });

//                 history.push('/Reservation');
//             })

//     }