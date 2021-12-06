// código del cuadrado
console.group ('Cuadrados');
const ladoCuadrado = 5;
console.log ('Los lados del cuadrado miden: ' + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log ('El perimetro del cuadrado es: ' + perimetroCuadrado);

const AreaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ('El area del cuadrado es: ' + AreaCuadrado + 'cm^2');
console.groupEnd ();

// código del triangulo
console.group ('triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log (
  'Los lados del triangulo miden: ' +
    ladoTriangulo1 +
    'cm, ' +
    ladoTriangulo2 +
    'cm, ' +
    baseTriangulo +
    'cm'
);

const alturaTriangulo = 5.5;
console.log ('la altura del triangulo es de: ' + alturaTriangulo + 'cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ('el perimetro del triangulo es de: ' + perimetroTriangulo + 'cm');

const areaTriangulo = baseTriangulo * alturaTriangulo / 2;
console.log ('El area del triangulo es: ' + areaTriangulo + 'cm^2');
console.groupEnd ();

//Código del círculo
console.group ('circulo');
//Radio
const radioCirculo = 4;
console.log ('El radio del circulo es: ' + radioCirculo + 'cm');

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log ('El diametro del circulo es: ' + diametroCirculo + 'cm');

//PI
const PI = Math.PI;
console.log ('El valor de pi es: ' + PI + '.');

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log ('El perimetro del circulo es: ' + perimetroCirculo + 'cm');

//Área
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log ('El area del circulo es: ' + areaCirculo + 'cm^2');

console.groupEnd ();
