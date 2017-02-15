console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';
// var article = '<article></article>';


function makeMiddleEarth() {
  // your answers here
  $('body').append(section);
  $('section').prop('id', 'middle-earth');
  for(i = 0; i < lands.length; i++){
      //add each genres to the list
      $('#middle-earth').append('<article id="'+lands[i]+'">' + '<h1>' + lands[i] + '</h1>' + '</article>');
  }
}

makeMiddleEarth();

function makeHobbits(){
  // your answers here
  $('article').first().append('<ul>' + '</ul>');
  for(i = 0; i < hobbits.length; i++){
    $('ul').append('<li>' + hobbits[i] + '</li>');
    $('li').prop('class', 'hobbit');
  }
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
  var div = $('div').prop('id', 'the-ring').prop('class', 'magic-imbued-jewelry');
  // var frodo = $('.hobbits[0]');
  $(".magic-imbued-jewelry").detach().appendTo($('li').first())
  // $('.hobbits').first().('#magic-imbued-jewelry');
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
  $('#Rivendell').append('<aside></aside>')
  $('aside').append('<ul>' + '</ul>')
  for(i = 0; i < buddies.length; i++){
    $('aside').append('<li>' + buddies[i] + '</li>');
  }
  // $('li').prop('class', 'buddy');
}

makeBuddies();

function beautifulStranger(){
  // your answers here
  var strider = $("li:contains('Strider')")
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
}

theBalrog();

function hornOfGondor() {
  // your answers here
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
