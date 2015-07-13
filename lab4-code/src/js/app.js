import Fib from './fib';
import jquery from 'jquery';

class App {
	onFibButtonClick() {
		var fibGenerator = new Fib();
		var fibResult = '.fib-result';
		$(fibResult).html(fibGenerator.randomFib());
	}
}

$(function(){
	var app = new App();
	var fibButtonElement = '.fib-button';
	$(fibButtonElement).on('click', app.onFibButtonClick);
});