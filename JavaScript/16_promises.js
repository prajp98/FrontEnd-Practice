// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code

let myPromise = new Promise(function (myResolve, myReject) {
	// "Producing Code" (May take some time)

	myResolve(); // when successful
	myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
	function (value) {
		/* code if successful */
	},
	function (error) {
		/* code if some error */
	}
);

// When	Call
// Success	myResolve(result value)
// Error	myReject(error object)

// A JavaScript Promise object can be:

//     Pending
//     Fulfilled
//     Rejected

// The Promise object supports two properties: state and result.

// myPromise.state	myPromise.result
// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object

function myDisplayer(some) {
	console.log(some);
}

myPromise = new Promise(function (myResolve, myReject) {
	let x = 0;

	// The producing code (this may take some time)

	if (x == 0) {
		myResolve("OK");
	} else {
		myReject("Error");
	}
});

myPromise.then(
	function (value) {
		myDisplayer(value);
	},
	function (error) {
		myDisplayer(error);
	}
);


myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value);
  });

  myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );


//   async makes a function return a Promise

//   await makes a function wait for a Promise

async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    console.log(await myPromise);
  }
  
  myDisplay();

  //Without reject
  async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      resolve("I love You !!");
    });
    console.log( await myPromise);
  }
  
  myDisplay();

//   Waiting for a Timeout
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

// Waiting for a File
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  console.log(await myPromise);
}

getFile();