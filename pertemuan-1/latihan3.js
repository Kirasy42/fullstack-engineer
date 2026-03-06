
// OBJECTS
const myObject = {
    "anjing": {
        suara: "guk",
        kaki: 4
    }
};

// OBJECT ACCESS
for (const [nama, info] of Object.entries(myObject)) {
    console.log(nama, info.suara);
}


// ARRAYS
const kumpulan = [];

kumpulan.push("Value pertama");
kumpulan.push("Value kedua");

console.log(kumpulan); // Output: ["Value pertama", "Value kedua"]




//  =====================================
const animals = [];

const anim1 = {
    "anjing": {
        suara: "guk",
        kaki: 4
    }
};

const anim2 = {
    kucing: {
        suara: "meong",
        kaki: 4
    }
};

animals.push(anim1);
animals.push(anim2);

const tes = anim2.kucing.suara;

console.log("Suara Kucing :", tes);







// Object didalam Arrays

const users = [
    {
        name: "Agus",
        age: 22,
        isMarried: false
    },
    {
        name: "Udin",
        age: 23,
        isMarried: true
    }
]