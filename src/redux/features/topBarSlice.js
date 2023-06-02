import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users : [
    {
      userId : '1',
      userFirstName:'test first name',
      userEmail:'test email',
      userPassword:'test password',
      sexe:'test sexe',
      birthDate:'test birthDate',
      photoURl:'photoURl',
    },
    {
      userId : '2',
      userFirstName:'test first name',
      userEmail:'test email',
      userPassword:'test password',
      sexe:'test sexe',
      birthDate:'test birthDate',
      photoURl:'photoURl',
    },
    {
      userId : '3',
      userFirstName:'test first name',
      userEmail:'test email',
      userPassword:'test password',
      sexe:'test sexe',
      birthDate:'test birthDate',
      photoURl:'photoURl',
    }
  ],
  organizers : [
    {
      id : '1',
      FirstName:'test first name',
      LastName:'test Last Name',
      email:'test email',
      password:'test password',
      organizationName:'test organizationName',
    },
    {
      id : '2',
      FirstName:'test first name',
      LastName:'test Last Name',
      email:'test email',
      password:'test password',
      organizationName:'test organizationName',
    },
    {
      id : '3',
      FirstName:'test first name',
      LastName:'test Last Name',
      email:'test email',
      password:'test password',
      organizationName:'test organizationName',
    },
  
  ],
  event : [
    {
      id : '1',
      eventName:'test eventName',
      eventPrice:'test eventPrice',
      description_event:'test description_event',
      dateEvent:'test dateEvent',
      locationEvent:'test locationEvent',
      imageEvent:'test imageEvent',
      statusEvent:'test statusEvent',
      placesNumber:'test placesNumber',
      typeEvenement:'test typeEvenement',
      idOrganizer:'test idOrganizer',
    },
    {
      id : '2',
      eventName:'test eventName',
      eventPrice:'test eventPrice',
      description_event:'test description_event',
      dateEvent:'test dateEvent',
      locationEvent:'test locationEvent',
      imageEvent:'test imageEvent',
      statusEvent:'test statusEvent',
      placesNumber:'test placesNumber',
      typeEvenement:'test typeEvenement',
      idOrganizer:'test idOrganizer',
    },
  
  ],
  ticket : [
    {
      id : '1',
      date:'test date',
      packId:'test packId',
      eventId:'test eventId',
      userId:'test userId',
      status:'test status',
      note:'test note',
    },
    {
      id : '2',
      date:'test date',
      packId:'test packId',
      eventId:'test eventId',
      userId:'test userId',
      status:'test status',
      note:'test note',
    },
  
  ],
  super_admin : [
    {
      id : '1',
      lastName:'hamid',
      firstName:'benchakir',
      password:'test password',
      email:'test email',
      auth_code:'test auth_code',
      auth_expiring:'test auth_expiring',
    },
  ],
  authentification : {
    connection : {
      isConnected : false,
      authLoading : false
    },
    signIn:{
      loading : false,
      data : null,
      error:null,
      successMessage:null
    },
    signUp:{
      loading : false,
      data : null,
      error:null,
      successMessage:null
    },
  },
  slider:{
    loading : false,
    error:null,
    successMessage:null,
    data : {
      slides : [
        {
          id : 1,
          title : 'test title',
          type : 'event',
          event : {}
        },
        {
          id : 1,
          title : 'test title',
          type : 'event',
          event : {}
        }
      ],
      success : true
    }
  },



};

const topBarSlice = createSlice({ 
  name: "topBar",
  initialState,
});

export default topBarSlice;
