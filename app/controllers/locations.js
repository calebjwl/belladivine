import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      src: '/images/huntsville.jpg',
      title: 'Huntsville, AL',
      mall: 'Parkway Place Mall',
      street: '2801 Memorial Pkwy SW',
      city: 'Huntsville, AL 35801',
      phone: '(256)-382-3493',
      hours1: 'Sunday: 12:00PM-6:00PM',
      hours2: 'Monday-Saturday: 10:00AM-9:00PM',
      directions: 'https://www.google.com/maps/dir//2801+Memorial+Pkwy+SW,+Huntsville,+AL+35801/@34.7074097,-86.6573115,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88626cb6f14df777:0xb6310f3a499528d9!2m2!1d-86.5872708!2d34.7072886',
    },
    {
      src: '/images/fairfield.png',
      title: 'Fairfield, OH',
      mall: 'The Mall at Fairfield Commons',
      street: '2727 Fairfield Commons',
      city: 'Beavercreek, OH 45431',
      phone: '(937)-320-9370',
      hours1: 'Sunday: 12:00PM-6:00PM',
      hours2: 'Monday-Saturday: 10:00AM-9:00PM',
      directions: 'https://www.google.com/maps/dir//The+Mall+at+Fairfield+Commons,+2727+Fairfield+Commons,+Beavercreek,+OH+45431/@39.7673189,-84.1264585,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88409c607dc50449:0xa896241ea23e8449!2m2!1d-84.056418!2d39.767208',
    },
    {
      src: '/images/olmstead.png',
      title: 'North Olmstead, OH',
      mall: 'Great Northern Mall',
      street: '4954 Great Northern Blvd Unit 632',
      city: 'North Olmsted, OH 44070',
      phone: '(440)-782-7972',
      hours1: 'Sunday: 11:00AM-6:00PM',
      hours2: 'Monday-Saturday: 10:00AM-9:00PM',
      directions: 'https://www.google.com/maps/dir//Great+Northern+Mall,+4954+Great+Northern+Mall,+North+Olmsted,+OH+44070/@41.4171475,-81.9759364,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x8830930b268db571:0xd513decb45cdefc0!2m2!1d-81.905896!2d41.41704',
    },
    {
      src: '/images/toledo-map.png',
      title: 'Toledo, OH',
      mall: 'Franklin Park Mall',
      street: '5001 Monroe St',
      city: 'Toledo, OH 43623',
      phone: '(419)-930-5599',
      hours1: 'Sunday: 11:00AM-6:00PM',
      hours2: 'Monday-Saturday: 10:00AM-9:00PM',
      directions: 'https://www.google.com/maps/dir//5001+Monroe+St,+Toledo,+OH+43623/@41.6944114,-83.6468595,15.43z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883c7efa33864b15:0x8df158fc81e338ec!2m2!1d-83.6405727!2d41.6947913',
    },
    {
      src: '/images/cind-dayton.png',
      title: 'Cinderella | Dayton, OH',
      mall: 'Dayton Mall',
      street: '2700 Miamisburg Centerville Rd',
      city: 'Dayton, OH 45459',
      phone: '(937)-312-9969',
      hours1: 'Sunday: 12:00PM-6:00PM',
      hours2: 'Monday-Saturday: 10:00AM-9:00PM',
      directions: 'https://www.google.com/maps/dir//2700+Miamisburg+Centerville+Road,+Dayton,+OH/@39.6346723,-84.2246246,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x884088fc1adf2dfd:0x7f6b7425ccf2910e!2m2!1d-84.2202472!2d39.6346641',
    },
  ],
});
