function valid (form) {
	var n1 = form.n1.value;
	var n2 = form.n2.value;
	var n3 = form.n3.value;
	var n4 = form.n4.value;
	var cvv = form.CVVCode.value;
	var name = form.name.value;
	var num = 0;
	var cardH = /^[0-9]{4}$/;
	var cvvH = /^[0-9]{3}$/;
	var humanH = /^[a-z' 'a-z]{4,}$/i;
	/*=== Проверка кода карты ===*/
	if (!cardH.test(n1)){document.getElementById('n1').classList.add('err');}
		else{document.getElementById('n1').classList.remove('err');num++;}
	if (!cardH.test(n1)){document.getElementById('n2').classList.add('err');}
		else{document.getElementById('n2').classList.remove('err');num++;}
	if (!cardH.test(n1)){document.getElementById('n3').classList.add('err');}
		else{document.getElementById('n3').classList.remove('err');num++;}
	if (!cardH.test(n1)){document.getElementById('n4').classList.add('err');}
		else{document.getElementById('n4').classList.remove('err');num++;}
	/*=== Проверка cvv кода ===*/
	if (!cvvH.test(cvv)){document.getElementById('CVVCode').classList.add('err')}
		else{document.getElementById('CVVCode').classList.remove('err');num++;}
	/*=== Проверка держателя карты ===*/
	if (!humanH.test(name)){document.getElementById('name').classList.add('err');}
		else {document.getElementById('name').classList.remove('err');num++;}
	
	if (num===6){form.submit();}
};

/*=== Заполнение списков месяца и года ===*/
window.onload = function() { 
		listOfDate();
	};
	function listOfDate() {
	/*=== Год ===*/
		var n = new Date().getFullYear();
    for (var i = 1;i<50;i++){
    	var year = document.getElementById('year');
    	var option = document.createElement('option');
		option.value = n;
        option.innerHTML = n;
	    year.appendChild(option);
	    year++;
    }
    /*=== Месяц ===*/
    for (var i = 1; i <= 12; i++){
		var month = document.getElementById('month');
		var option = document.createElement('option');
		option.value = i;
		option.innerHTML = i;
		month.appendChild(option);
	}
};