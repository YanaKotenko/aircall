const calls = [
  {
    id: 1,
    direction: 'inbound', // "inbound" or "outbound" call
    from: '+123234234', // Caller's number
    to: '+9342432', // Callee's number
    duration: 12314, // Duration of a call (in seconds)
    is_archived: false, // Boolean that indicates if the call is archived or not
    call_type: 'answered', // The type of the call, it can be a missed, answered or voicemail.
    via: '+00099888', // Aircall number used for the call.
    created_at: 'date', // When the call has been made.
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
    is_archived: true,
    call_type: 'voicemail',
    via: '+00066699888',
    created_at: 'date 2',
    notes: [{
      id: 2223333,
      content: 'Hhhhhh fw jhg fhgfwfg',
    }]
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, calls))
