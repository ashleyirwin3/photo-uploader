console.log('test')

const app = angular.module('photoApp', ['ngRoute'])

  var config = {
    apiKey: "AIzaSyC3E1tE8FTSzFENSmocZTNMmYjdpS748Rs",
    authDomain: "photo-uploader-9294d.firebaseapp.com",
    databaseURL: "https://photo-uploader-9294d.firebaseio.com",
    storageBucket: "photo-uploader-9294d.appspot.com",
    messagingSenderId: "726341124404"
  };
  firebase.initializeApp(config);

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: 'partials/home.html',
    })
})
