function updateStats (){
	event.preventDefault();
	var text = $ ('#user-text').val();
	var words = text.split(' ');
	var count = words.length;
	$('#word-count').html(count);
	var avg = averageWordLength(words);
	$('#average-word').html(avg);
    $('#unique-word').html(uniqueWords(words))
};

function averageWordLength(words) {
	var total = 0;
    for (i=0; i<words.length; i++){
    	total = total + words[i].length
    }
    return (total/words.length);
}

function uniqueWords(words) {
	var unique = 0;
	var seen = {};
	for (i=0; i<words.length; i++){
		var curWord = words[i];
		if (seen[curWord] !== true){

			unique = unique + 1;
		}
		seen[curWord] = true;
	}
	return unique
}

$('#update').submit(updateStats);
