class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;  // Speed in km/h
    }

    // Method to accelerate the car
    accelerate(amount) {
        this.speed += amount;
        console.log(`The car accelerated by ${amount} km/h. Current speed: ${this.speed} km/h.`);
    }

    // Method to brake the car
    brake(amount) {
        if (this.speed - amount >= 0) {
            this.speed -= amount;
            console.log(`The car braked by ${amount} km/h. Current speed: ${this.speed} km/h.`);
        } else {
            this.speed = 0;
            console.log("The car has stopped. Current speed: 0 km/h.");
        }
    }

    // Method to check the current speed of the car
    checkSpeed() {
        console.log(`Current speed: ${this.speed} km/h.`);
    }

    // Optional: Display the car details
    carInfo() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

// Example usage:
const myCar = new Car("Tesla", "Model S", 2023);

myCar.carInfo(); // Shows car info
myCar.checkSpeed(); // Shows initial speed (0 km/h)

myCar.accelerate(50); // Accelerates by 50 km/h
myCar.accelerate(30); // Accelerates by another 30 km/h
myCar.brake(40); // Brakes by 40 km/h
myCar.brake(100); // Attempts to brake more than current speed (should stop the car)

myCar.checkSpeed(); // Shows final speed
