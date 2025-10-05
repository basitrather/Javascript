// The Math object provides constants (e.g., Math.PI) and functions (e.g., Math.sqrt(x)).

/*
⚙️ Common Math Constants

    Constant	    Description	                                    Example
    Math.PI	        Ratio of circle’s circumference to diameter	    3.1415926535
    Math.E	        Euler’s number (base of natural logs)	        2.718...
    Math.SQRT2	    Square root of 2	                            1.414...
    Math.SQRT1_2	Square root of ½	                            0.707...
    Math.LN2	    Natural log of 2	                            0.693...
    Math.LN10	    Natural log of 10	                            2.302...
*/

/*
🧭 Basic Operations

    Method	        Description	           Example
    Math.abs(x)	    Absolute value	       Math.abs(-5) → 5
    Math.sqrt(x)	Square root	           Math.sqrt(16) → 4
    Math.pow(x, y)	x raised to power y	   Math.pow(2, 3) → 8
    Math.cbrt(x)	Cube root	           Math.cbrt(27) → 3
    Math.sign(x)	Returns 1, -1, or 0	   Math.sign(-5) → -1
*/

/* 
🔄 Rounding Methods (most used in real life)

    Method	        Description                                	 Example	         Result
    Math.round(x)	Rounds to nearest integer	                 Math.round(2.5)	    3
    Math.ceil(x)	Rounds up to next integer	                 Math.ceil(2.1)	        3
    Math.floor(x)	Rounds down to previous integer	             Math.floor(2.9)	    2
    Math.trunc(x)	Removes decimal part (just keeps integer)	 Math.trunc(2.9)	    2
*/
// A function to generate random numbers from a given minimum and maximum number
const randomNumberGenerator = function (min, max) {
  Math.floor(Math.random() * 6) + 1; //This generates from 1 to 6 but we have min and max
  return Math.trunc(Math.random() * (max - min)) + min; //Returns from min to max
};
console.log(randomNumberGenerator(30, 40));

// roundingIntegers
