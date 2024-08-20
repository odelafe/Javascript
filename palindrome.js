window.onload = iniciar;


function iniciar(){

var numero = largestPalindromeProduct();
alert(numero);

function iniciar() {
    window.onload = iniciar;
}

function largestPalindromeProduct() {

    var max = 0;
	
	for(var i=999; i>99; i--)
        for(var j=999; j>99; j--)
            if (esPalindromo(i * j) && i*j>max)
				max = i * j;
    		
	return max;       

    }

    //Problem 4
    function esPalindromo(numero) {
        
        var strNumero = numero.toString();
    
        //var strInvertido = strNumero.split('').reverse().join('');
        const size =  strNumero.length;
        for (var i = 0; i < size/2; i++){
            var posIn = strNumero[i];
            var posFin = strNumero[size-i-1]
            if(posIn != posFin)
                return false;
        }
           
        return true;
    }
    

}


