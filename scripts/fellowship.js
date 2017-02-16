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
  };
};

makeMiddleEarth();

function makeHobbits(){
  // your answers here
  var HobbitList = '<ul id="hobbitUlist"></ul>';
  $('article:first-child').append(HobbitList);
  for(i = 0; i < hobbits.length; i++){
    $('ul').append('<li>' + hobbits[i] + '</li>');
    $('li').prop('class', 'hobbit');
  };
};

makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
  var div = $('div').prop('id', 'the-ring').prop('class', 'magic-imbued-jewelry');
  // var frodo = $('.hobbits[0]');
  $(".magic-imbued-jewelry").detach().appendTo($('#hobbitUlist > li:first-child'));
  // $('.hobbits').first().('#magic-imbued-jewelry');
};

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
  $('#Rivendell').append('<aside id="buddyList"></aside>')
  $('aside').append("<ul>" + '</ul>')
  for(i = 0; i < buddies.length; i++){
    $('#buddyList > ul').append('<li = buddies>' + buddies[i] + '</li>');
  };
  // $('li').prop('class', 'buddy');
};

makeBuddies();

function beautifulStranger(){
  // your answers here
  // var strider = $("li:contains('Strider')")
  // $(strider).text('Aragon')
  $('#buddyList > ul > li:nth-child(4)').html('Aragorn');
};

beautifulStranger();

function leaveTheShire(){
  // your answers here
    // $("#hobbitList").detach().appendTo($('#buddyList');
        $("#hobbitUlist").detach().appendTo('#middle-earth > article:nth-child(2)');
};

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
  $('#Rivendell').append('<div id="thefellowship">' + '</div');
  for (var i = 0; i < buddies.length; i++){
    $('#buddyList > ul > li:nth-child(1)').detach().appendTo('#thefellowship');
    // alert(buddies[i] + ' ' + 'has' + ' ' + 'joined' + ' ' + 'your' + ' ' + 'party');
  };
  for (var i = 0; i < hobbits.length; i++){
    $('#hobbitUlist > li:nth-child(1)').detach().appendTo('#thefellowship');
        // alert(hobbits[i] + ' ' + 'has' + ' ' + 'joined' + ' ' + 'your' + ' ' + 'party');
  };
};

forgeTheFellowship();

function theBalrog(){
  // your answers here
  $('#thefellowship > li:nth-child(1)').text('Gandalf the White');
  $('#thefellowship > li:nth-child(1)').css('background-color', 'white').css('border', '2px solid grey');
};

theBalrog();

function hornOfGondor() {
  // your answers here
  var Boromir = $('#thefellowship > li:nth-child(5)');
  // alert('The horn of Gondor has been blown!');
  // alert('Boromir\'s been killed by the Uruk-hai!');
  $(Boromir).remove();
};

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
  var Frodo = $('#thefellowship > li:nth-child(5)');
  var Sam = $('#thefellowship > li:nth-child(6)');
  var Mordor = $('#middle-earth > article:nth-child(3)');
  $(Frodo).appendTo(Mordor);
  $(Sam).appendTo(Mordor);
  $(Mordor).append('<div id = "mount-doom">' + '</div>')
};

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
  var Mordor = $('#middle-earth > article:nth-child(3)');
  $(Mordor).append('<div id = "gollum">' + '</div>');
  $('#the-ring').detach().appendTo('#gollum');
  $('#gollum').detach().appendTo('#mount-doom');

};

weWantsIt();

function thereAndBackAgain(){
  // your answers here
  $('#gollum').remove();
  $('#the-ring').remove();
  $('.hobbit').detach().appendTo('#middle-earth > article:nth-child(1)');
};

thereAndBackAgain();



