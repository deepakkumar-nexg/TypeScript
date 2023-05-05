//Unknown type - when we don't know the type of value which is coming, we define unknown

//unknown is safe


// let data: any;
let data: unknown;
data = 20;
data = "hello";
let item: string;

if(typeof data === 'string') {

    item = data;
}

