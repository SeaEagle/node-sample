const { default: axios } = require("axios");

axios.get(
    'http://localhost:8080/metric/property', 
    {}
).then((res)=>{
    console.log(res.data);
});