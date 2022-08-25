const name = "Joe \"Doe\" ";
let flowers = ['roses', 'violent'];
let color = ['red', 'blue'];
let skill = "coding";

const words = `${flowers[0]} are ${color[0]}, ${flowers[1]} are ${color[1]}, and ${skill} is awesome, my love for coding cannot be measured, my name is ${name}`;

// console.log(words);
// document.write(words)
// console.log(name)

// console.log(words.slice(6))
// a = "php"
// b = "perl"
// c = "pascal"
// d = "python"
// e = "ruby"

// ES5
// const mylist = "<ul>"+
//             "<li>"+a+"</li>"+
//             "<li>"+b+"</li>"+
//             "<li>"+c+"</li>"+
//             "<li>"+d+"</li>"+
//             "<li>"+e+"</li>"+
//             "</ul>";
// document.getElementById('list').innerHTML = mylist;


// const list1 = `<ul>
//                     <li>${a}</li>
//                     <li>${b}</li>
//                     <li>${c}</li>
//                     <li>${d}</li>
//                     <li>${e}</li>
//                 </ul>`;
// document.querySelector("#list").innerHTML = list1;

// let z = "100";
// let max = Number.MAX_VALUE;
// let min = Number.MIN_VALUE;
// let h = 12 ** 2

// let u1 = 12
// console.log(u1.toExponential(2))


// let z = parseFloat(z)

// console.log(min)

// console.log(words.toUpperCase());
// console.log(words.toLowerCase());
// console.log(a.strip())
// console.log(words.replace('Roses', 'African Never Die'))
// console.log(words.endsWith('friday'))
// console.log(words.startsWith('Roses'))
// console.log(words.indexOf('red'))
// console.log(words.lastIndexOf('are'))
// console.log(words)


// let x = 9.656;
// console.log(x.toFixed(0))
// console.log(x.toFixed(1))
// console.log(x.toFixed(2))
// console.log(x.toFixed(3))


// let x1 = 123;
// // console.log(x1.valueOf());

// console.log(Number("10 33"));
// Number(false);

const BIO = {
    firstname: "John",
    lastname: "Doe",
    married: false,
    hubbies: ['coding', 'maths', 'soccer'],
    returnName: function(){
        return this.firstname
    },
    returnLastname: () => {
        return this.lastname
    },
    printAll(){
        console.log(`firstname: ${this.firstname}, lastname: ${this.lastname}`)
    }

}
BIO.printAll();
console.log(BIO.firstname)
console.log(BIO.hubbies[1])

console.log(Math.floor(2.4))