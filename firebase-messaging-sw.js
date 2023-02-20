 // Scripts for firebase and firebase messaging
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
 apiKey: "AIzaSyDnFJ1Pwm4r5F_qaaX1z9XWz7xuir-O-4Y",
             authDomain: "onertrip-f77ba.firebaseapp.com",
             projectId: "onertrip-f77ba",
             storageBucket: "onertrip-f77ba.appspot.com",
             messagingSenderId: "200277164653",
             appId: "1:200277164653:web:a8337c1a1e94073285b564",
 };

 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });