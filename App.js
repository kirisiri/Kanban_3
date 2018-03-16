// OGÓLNA FUNKCJA
var prefix = "https://cors-anywhere.herokuapp.com/";
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  X-Client-Id: '2809',
  X-Auth-Token: '29dedeb419d8a6cfb4a5b22bc2e3a0f7'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
	url: (prefix + baseUrl + '/board'), 
	method: 'GET',
	success: function(response){
		setupColumns(response.columns);
	}
});

function setupColumns(columns) {
	columns.forEach(function(column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards);
	});
}
function setupCards(col, cards) {
	cards.forEach(function(card) {
		var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(cardObj);	
	})
}

/*function randomString() {
	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
	var str = '', i;
	for (i = 0; i < 10; i++) {
	  str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
} */

/* TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
var todoColumn = new Column('TO DO');
var doingColumn = new Column('DOING');
var doneColumn = new Column('DONE');

// DODAWANIE KOLUMN DO TABLICY
board.createColumn(todoColumn);
board.createColumn(doingColumn);
board.createColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
var card1 = new Card('New Task');
var card2 = new Card('stworzyc tablice kanban');

// DODAWANIE KART DO KOLUMN
todoColumn.createCard(card1);
doingColumn.createCard(card2); */