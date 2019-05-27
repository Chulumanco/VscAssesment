function Foo(bar) {
    this.bar = bar || Foo.enum.VAL1; //If bar is null, set to enum value.
}

//Define static enum on Foo.
Foo.enum = { VAL1: 1, VAL2: 2, VAL3: 3 };

console.log(new Foo().bar); //1
console.log(new Foo(Foo.enum.VAL3).bar); //3