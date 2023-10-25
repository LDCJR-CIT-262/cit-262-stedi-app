import hello from "../utils/helloworld.js";

    it ("Should say Hello Diego" ,()=>{

const helloString = hello;

    expect(helloString).toBe("Hello Diego");
})
