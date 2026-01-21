let b = 30
{
    console.log("Hello")

    var a = 3
    let b = 3
    const c = 3
    console.log(a)
    console.log(b)
    console.log(c)
}
    console.log(a)
    console.log(b)
    // console.log(c)

    //closures

    // function x(){
    //     let a = 2;
    //     function y(){
    //         console.log(a);
    //     }
    //     return y
    // }
    // var xy = x();

    // ////
    // console.log(xy)
    // console.log(xy())


    // console.log("Edge Case")

    
    // function x(){
    //     let ax = 2;
    //     function y(){
    //         console.log(ax);
    //     }
    //     y()
    //     ax = 200;
    //     //will point to ax only - > not the value
    //     return y
    // }
    // var xy = x();

    // ////
    // console.log(xy)
    // console.log(xy())

    console.log("Edge Case Two - Concept")

    fucOne(){
        var fucOneVar = 1
        fucTwo(){
            var fucTwoVar = 2
            fucThree(){
                var fucThreeVar = 3
                console.log(fucOneVar,fucTwoVar,fucThreeVar)
            }
            fucThree()
        }
        fucTwo()
    }
    fucOne()