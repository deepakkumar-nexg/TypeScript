//Unknown type - when we don't know the type of value which is coming, we define unknown
//unknown is safe
// let data: any;
var data;
data = 20;
data = "hello";
var item;
if (typeof data === 'string') {
    item = data;
}
