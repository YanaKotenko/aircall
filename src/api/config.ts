import axios from 'axios';

const calls = [
  {
    id: 1,
    direction: 'inbound', // "inbound" or "outbound" call
    from: '+123234234', // Caller's number
    to: '+9342432', // Callee's number
    duration: 12314, // Duration of a call (in seconds)
    isArchived: false, // Boolean that indicates if the call is archived or not
    callType: 'answered', // The type of the call, it can be a missed, answered or voicemail.
    via: '+00099888', // Aircall number used for the call.
    createdAt: 'date', // When the call has been made.
    notes: [{
      id: 222,
      content: 'fw jhg fhgfwfg',
    }]
  },{
    id: 2,
    direction: 'outbound',
    from: '+551234234',
    to: '+7669342432',
    duration: 786867,
    isArchived: true,
    callType: 'voicemail',
    via: '+00066699888',
    createdAt: 'date 2',
    notes: [{
      id: 2223333,
      content: 'Hhhhhh fw jhg fhgfwfg',
    }]
  },{
    id: 3,
    direction: 'outbound',
    from: '+88551234234',
    to: '+647669342432',
    duration: 4353867,
    isArchived: false,
    callType: 'missed',
    via: '+4466699888',
    createdAt: 'date 3',
    notes: [{
      id: 4444,
      content: 'Some note sadasd',
    }]
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, calls))

export const getAccessToken = () => {
  const body = {
    username: 'Yana',
    password: 'Yana',
  }
  axios.post(`https://frontend-test-api.aircall.io/auth/login`, body)
    .then((res) => {
      console.log(res);
    })
}
