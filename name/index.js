/* JSON */

const calisanlar = {
  ad: "Ali",
  soyad: "Test",
  age: 10,
  isStudent: false,
};

console.log(calisanlar);
// JSON.stringify JS objesini bir string yapısına çevirir
const calisanlar1 = JSON.stringify(calisanlar);
console.log(typeof calisanlar1);
console.log(calisanlar1);
// JSON.parse içerisine gönderilen string veriyi eski haline çevirir
const eskiHali = JSON.parse(calisanlar1);
console.log(eskiHali);

/*
 * Bir mahallede birden çok ev vardır, her evde yaşayan kişi sayısı ve bunların bir
 * aile olduğunuz düşünürsek bunların soyadlarını ve her ailenin toplamda kaç dil konuştuğunu
 * ve ayrıca aile içinde kadın ve erkek sayısını belirten bir json yapısını oluşturunuz
 */

function calculateSum(a, b) {
  let number1 = a;
  debugger;
  let number2 = b;
  let result = number1 + number2;
  debugger;
  return result;
}

let result = calculateSum(5, 3);
console.log(result);

debugger;

const number = 6;
const number1 = 5;
const topla = number + number1;
console.log(topla);
