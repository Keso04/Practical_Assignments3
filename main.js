//Task N1
function expo(num, conOperatorVal, cb){
    const helper = num;

    if(conOperatorVal === 0)
       return 1;
    if(conOperatorVal == 1)
       return num;
    return helper * expo(cb(num), conOperatorVal - 1, cb);
}

console.log(expo(5, 3, (num) => num));


//Task N2
async function fetchData(){
    try{
        const rawData = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!rawData.ok){
            throw Error("Not Good Request");
        }
      const data = await rawData.json();
      console.log(data);

      data.forEach((u) => {
        const user = `<li> UserId: ${u.id} Title: ${u.title} Body:${u.body}</li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend', user);
      });
    }
    catch(error){
        console.log(error.message);
    }
}

fetchData();


//Task N3
function returnTheSameObject(obj){
    obj = {
        name: "Mcdonalds",
        logo: "M",
        creator: "Ray Kroc",
        staff: {
            CustomerService: "Ben",
            FoodPreparation: "Nick",
            Hygiene: "Mary",
            Manager: "Kate" 
        },
        adress: {
            city: "New York",
            street: "Broadway"
        }
    }

    const obj2 = {
        ...obj,
        staff: {
            ...obj.staff
        },
        adress: {
            ...obj.adress
        }
    }

    // console.log(obj === obj2)

    return obj2;
}

function AsyncDeepCopy(obj){
    obj = {
        name: "Mcdonalds",
        logo: "M",
        creator: "Ray Kroc",
        staff: {
            CustomerService: "Ben",
            FoodPreparation: "Nick",
            Hygiene: "Mary",
            Manager: "Kate" 
        },
        adress: {
            city: "New York",
            street: "Broadway"
        }
    }

    // obj = 5;  to check if reject() function is working


    return new Promise((resolve, reject) => {
        if(typeof obj === 'object'){
            resolve(returnTheSameObject(obj));
        }
        else{
            reject("There is not an object...Please try again!");
        }
    })
}

obj = {
    name: "Mcdonalds",
    logo: "M",
    creator: "Ray Kroc",
    staff: {
        CustomerService: "Ben",
        FoodPreparation: "Nick",
        Hygiene: "Mary",
        Manager: "Kate" 
    },
    adress: {
        city: "New York",
        street: "Broadway"
    }
}

AsyncDeepCopy(obj)
   .then((res) => console.log(res))
   .catch((err) => console.log(err));
