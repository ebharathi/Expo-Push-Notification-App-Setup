FILES CHANGED:<br/>
1.notification.ts(helper funcrion to register for push-notification)<br/>
2._layout.tsx(where I ccall the register function)<br/>
3.Also you need to login with eas and have project-id setup to work<br/>


API URL<br/>
https://exp.host/--/api/v2/push/send
<br/>REQUEST BODY
<br/>{
    "to": "ExponentPushToken[token....]",
    "sound": "default",
    "title": "Expo Push Notification test",
    "body": "And here is the body!",
    "data": { "someData": "goes here" }
  }
  <br/>
RESPONSE
<br/>{
    "data": {
        "status": "ok",
        "id": "0190f8cc-aee5-7d76-9a4f-4c3f6da81dc2"
    }
}
