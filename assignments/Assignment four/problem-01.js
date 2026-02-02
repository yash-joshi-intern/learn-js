/*
Problem 1 — Simple Object Context
Explanation:
  Here at myBrand variable it will have the brand value : "Dell" which is returned by the getBrand() function.
*/

const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};

const myBrand = laptop.getBrand();
console.log(myBrand); // Output: Dell
