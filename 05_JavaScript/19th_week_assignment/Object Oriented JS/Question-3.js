// <!-- Question-3 :-  Create a Temperature class in JavaScript that manages both Celsius and Fahrenheit temperatures with getters and setters for each unit, allowing for automatic conversion between the two scales. The class should have an initial state of 0°C and 32°F, and it should validate input values for temperature updates, ensuring they are numeric. When setting the temperature in either Celsius or Fahrenheit, the class should correctly update the corresponding value in the other scale. For example, setting the Celsius temperature to 25°C should automatically update the Fahrenheit temperature to 77°F. Your challenge is to implement the Temperature class following the provided code structure and requirements while ensuring that it handles conversions and input validation accurately.

class Temperature {
  constructor() {
    this.celsius = 0;
    this.fahrenheit = 32;
  }

  // Set Celsius and auto update Fahrenheit: =>>>
  set setCelsius(temp) {
    if (typeof temp === "number") {
      this.celsius = temp;
      this.fahrenheit = this.celsius * (9 / 5) + 32;
    }
  }

  // Set fahrenheit and auto update Celsius: =>>>
  set setFahrenheit(temp) {
    if (typeof temp === "number") {
      this.fahrenheit = temp;
      this.celsius = (this.fahrenheit - 32) * (5 / 9);
    }
  }

  // Get_Celsius: =>>>
  get getCelsius() {
    return this.celsius;
  }

  // Get_Fahrenheit: =>>>
  get getFahrenheit() {
    return this.fahrenheit;
  }
}

// Test-Case: =>>>
const temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}°C`);
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`);
console.log();

temperature.setCelsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);
console.log();

temperature.setFahrenheit = 68;
console.log(`Celsius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);

// When we run this function, we will have the following information printed/output : >>>

// **************************** //
//                              //
// Initial Celsius: 0°C         //
// Initial Fahrenheit: 32°F     //
//                              //
// Celsius: 25°C                //
// Fahrenheit: 77°F             //
//                              //
// Celsius: 20°C                //
// Fahrenheit: 68°F             //
//                              //
//                              //
// **************************** //
