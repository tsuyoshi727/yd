module.exports = {
    "id": "zqyd",
    "name": "钟情阅读",
    "keys": ["zqydbody","zqydbody2",],
    "author": "@tom",
    "settings": [{
      "id": "zqydSuffix",
      "name": "当前账号",
      "val": "1",
      "type": "number",
      "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
    }, {
      "id": "zqydCount",
      "name": "账号个数",
      "val": "3",
      "type": "number",
      "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    }, {
      "id": "zqydXH",
      "name": "循环获取ck",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydTXTX",
      "name": "txtx",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydSC",
      "name": "sc",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydnotifyttt",
      "name": "推送控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1推送,默认12点以及23点推送"
    }, {
      "id": "zqydnotifyInterval",
      "name": "通知控制",
      "val": "2",
      "type": "number",
      "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
    }, {
      "id": "zqydMinutes",
      "name": "推送-通知 分钟控制",
      "val": "10",
      "type": "number",
      "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
    }],
    "repo": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icons": ["https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg", "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg"],
    "script": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icon": "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg",
    "favIcon": "mdi-star-outline",
    "favIconColor": "grey",
    "datas": [{
      "key": "zqydbody",
      "val": "p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVRT2FlKyzzeRQkfNpi91m1uMr6_-349OB-6aJlP8QT1ZdQPfuBKAN73038JxG2PDvPLwzRpKLSOsodHj_5p2KvGLJLTxe6lfbK5_TBTkHhXvca5GLmeMMIM2me3E4Xk0LlYXICZPYUVSQ_NUPgfNwN-W2fhort3kHErAGF1S57j9SVRmlrkWoHdNBFsjrwZpauEHGMxseojBpYOA_9G80rn6rNw1jHSpce02INwWJsh1aWigeawfV3j_Fj4aIFQQ_a5I7dfSQHFrxoyV0HLQa_SMoABnKJPNicW4xZTrNPDJz2GVYSlrp0tIDl1b5MrkolpaHBjUKMaEEh4gpNHQeWuT8uByJfJuWi6LLou_eM2nkUuHSYkqtQ0nzkeAmx4L0K87g89T62lLl2JMUlHarAAnz8RDPbYAbvpqZKCWSxs1LwYAy32JAzLkvY9ik9fMKodPohgm19hN0LfnyBLbZpmGjppgUk7NDJ_WOkrUhQytKpN3OAaxXASPY6-RFPZrBLJ7kpFdCEGwZPPHw-ayJ5veJZmuFB67U4H28TDOYXV3WVwRJTl55irfl6N4od_cDFbFcXDfE0M27GPmIj7o4XoWiw9hO10TkZhZB8gtKRkkHcOIMUup2LllgJZmo-QD1W9gxh4JxlytN1d-l6vzg4dAnTJlKZ2My3FJuC5hzgeozQPMwH7SJIHpgIaFy4Ec_yjHv8gplrxJnym5Jypq8aleJNsh3y8vsWoikGX8V4CnDgnV9IXS45oi818rsUvJ-B0wR-CT6EkOOIfMd673yCHU_GssKdlMeT_9-BPWhzmUrZ6kYR2I2Fg%3D%3D\",\"4118\":\"p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLId476codRhI-56uVVSayapgR-EIoewn_NzxPtjzNLP4YmSlhs-IDSAhfAYFv26aOnwlVXFzNDw-4XRVVf8eF1Je-aTaJ5-juBqTCDDy4x3X_bR8W0vHKK0wKVEdGHZmoTIZOcF1Gi0sTt4cbauhdujrjcol3iKLJYJy0uduicpkhwGI7DaRdfbWl5IU0LXmXgGK-9Watj0EnWRHosFRf6OBYy9s8VbieF-oZH0yALs80-dR4wnFzqrly7PRKEEGhB9EYR8Frysvj4z-08bDxLy-j-vBdV65RNGaJ28KgHrTBLuYXQB3e5QXxNnlKiqQhTG_F--rImjrFm4LWIN-pxiBFqeG89sgBQCAv0OhpELydA2R_RDsM4PQbXQUe4oXG0EgykogB8RMv01-PanIAYbDa6EafZjI6G6_fmfgkkV5MwLvDxmFrHxvZaMqTGsx8jbjj-5rrO7RY3m38qaKo-3LuFi6T_P64_UTBcFipbNJfCa1LPKX6tbPqwuOSgtCWnFf-jUl7ravAlax0q_XOE8U9dob7K9u_dAW_BKU-_1tvOIZ-FHgGd99lUL4SIpt0rRQ4bGP8fyDLjaXKXN2qZVZDkXruX4HBlqSROVjji0GDWyq0VOnfOKR3xklZ753ol-3awGg4H-sgCORXsWTJXqsDpZPNpPRpBCPaDp5ZSYlw%3D%3D\",\"4119\"
    }, {
      "key": "zqydbody2",
      "val": ""
    }, {
      "key": "zqydbody3",
      "val": ""
    }],
    "sessions": [],
    "isLoaded": true
  }
  
