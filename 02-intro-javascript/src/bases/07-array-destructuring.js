/**
 * array destructuring
 */

const nums = [1,2,3,4];

console.log(nums[1]);

const [, , tres] = nums;

const returnArr = () => {
    return ["ABC", 123];
}

const [letras, numeros] = returnArr();

console.log(letras, numeros);

const useState = (valor) => {
    return [valor, function(newValue) {
        return valor = newValue;
    }]
}

// eslint-disable-next-line
const [count, setCount] = useState(0);
console.log(count);
setCount(1);

