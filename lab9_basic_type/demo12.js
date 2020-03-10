var s1 = `
{
  "faults": [
    
  ],
  "bugs": [
    {
      "cf_last_resolved": "1998-12-12T17:06:46Z",
      "summary": "Navigator does not free preference hash table when exit.",
      "groups": [
        
      ],
      "cc_detail": [
        {
          "real_name": "Henry Chang [:hchang]",
          "name": "hchang.mozilla@gmail.com",
          "email": "hchang.mozilla@gmail.com",
          "id": 475800,
          "nick": "hchang"
        },
        {
          "id": 555817,
          "email": "jlaster@mozilla.com",
          "nick": "jlast",
          "name": "jlaster@mozilla.com",
          "real_name": "Jason Laster [:jlast]"
        },
        {
          "name": "rexyrexy2@gmail.com",
          "email": "rexyrexy2@gmail.com",
          "id": 463956,
          "nick": "rexyrexy2",
          "real_name": ""
        },
        {
          "email": "tymerkaev@gmail.com",
          "id": 356256,
          "nick": "tymerkaev",
          "name": "tymerkaev@gmail.com",
          "real_name": ""
        },
        {
          "real_name": "Will Levine",
          "nick": "wlevine",
          "email": "wlevine@gmail.com",
          "id": 68465,
          "name": "wlevine@gmail.com"
        }
      ],
      "assigned_to": "mcafee@gmail.com",
      "severity": "minor",
      "see_also": [
        
      ],
      "dupe_of": null,
      "mentors_detail": [
        
      ],
      "cf_user_story": "",
      "component": "XFE",
      "classification": "Graveyard",
      "type": "defect",
      "status": "VERIFIED",
      "last_change_time": "2018-07-16T03:22:35Z",
      "target_milestone": "---",
      "cc": [
        "hchang.mozilla@gmail.com",
        "jlaster@mozilla.com",
        "rexyrexy2@gmail.com",
        "tymerkaev@gmail.com",
        "wlevine@gmail.com"
      ],
      "blocks": [
        
      ],
      "priority": "P3",
      "keywords": [
        
      ],
      "whiteboard": "",
      "mentors": [
        
      ],
      "alias": "firstBug",
      "product": "MozillaClassic Graveyard",
      "cf_qa_whiteboard": "",
      "is_open": false,
      "resolution": "WONTFIX",
      "depends_on": [
        
      ],
      "creator": "weitsang@cs.cornell.edu",
      "is_cc_accessible": true,
      "is_confirmed": true,
      "cf_fx_iteration": "---",
      "comment_count": 18,
      "id": 35,
      "is_creator_accessible": true,
      "votes": 0,
      "op_sys": "Solaris",
      "version": "1998-03-31",
      "url": "",
      "regressions": [
        
      ],
      "qa_contact": "",
      "duplicates": [
        
      ],
      "creator_detail": {
        "real_name": "",
        "nick": "weitsang",
        "email": "weitsang@cs.cornell.edu",
        "id": 55,
        "name": "weitsang@cs.cornell.edu"
      },
      "assigned_to_detail": {
        "email": "mcafee@gmail.com",
        "id": 1672,
        "nick": "mcafee",
        "name": "mcafee@gmail.com",
        "real_name": "Chris McAfee"
      },
      "creation_time": "1998-04-07T08:37:03Z",
      "cf_fx_points": "---",
      "regressed_by": [
        
      ],
      "platform": "Sun",
      "flags": [
        
      ]
    }
  ]
}
`

var o1 = JSON.parse(s1)
console.log(o1)