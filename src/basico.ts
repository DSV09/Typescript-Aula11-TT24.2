let message = "hello World";
message.toLowerCase();
// message(); // This expression is not callable. Type 'String' has no call signatures.

const user = {
    name: "Daniel",
    age: 26
}

// user.location; //Property 'location' does not exist on type '{ name: string; age: number; }'

// message.toLocalLowerCase();  //Property 'toLocalLowerCase' does not exist on type 'string'. Did you mean 'toLocaleLowerCase'?