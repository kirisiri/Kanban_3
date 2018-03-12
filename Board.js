var board = {
	name: 'Tablica Kanban',
	createColumn: function(column) {
	  this.element.append(column.element);
	  initSortable();
	},
	element: $('#board .column-container')
};

$('.create-column').click(function(){
		var columnName = prompt('Enter a column name');
		//board.createColumn(new Column(columnName);
		$.ajax({
			url: baseUrl + '/column',
			methode: 'POST',
			data:{
				name: columnName
			},
			success: function(response) {
				var column = new Column(response.id, columnName);
				board.creatColumn(column);
			}
		}); 
});
	
function initSortable() {
    $('.card-list').sortable({
      connectWith: '.card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }