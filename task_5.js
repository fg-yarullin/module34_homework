class Device {
    constructor(name, power, voltage) {
        this.name = name,
        this.power = power;
        this.voltage = voltage;
        this.isPluggedIn = false;
        this.isTurnedOn = false,
        this.specifications = {};
    }

    plugIn_unplug() {
        this.isPluggedIn = this.isPluggedIn ? false : true;
        return this.isPluggedIn;
    }

    getSpecificationsList() {
        let str = '';
        for (let [key, value] of Object.entries(this.specifications)) {
            str += `\n\t${key}: ${value}\n`;
        }
        return str;
    }

    logInfo() {
        console.group(`"${this.name}" info`);
            console.log(`Device name: ${this.name}`);
            console.log(`Power: ${this.power} watt`);
            console.log(`Voltage: ${this.voltage} volt`);
            console.log(`isPluggedIn: ${this.isPluggedIn}`);
            console.log(`isTurnedOn: ${this.isTurnedOn}`);
            console.log(`${this.name} is turned ${this.isPluggedIn && this.isTurnedOn ? 'on' : 'off'}`);
            console.log(`${this.name} specifications: ${this.getSpecificationsList()}`)        
        console.groupEnd();
    }

    turn_On_Off() {
        this.isPluggedIn = Math.random() < 0.5;
        this.isTurnedOn = this.isPluggedIn && Math.random() < 0.5;
    }
}

const powerConsumption = function (devicesArray) {
    let sum = 0;
    devicesArray.forEach(element => {
        sum += element.isTurnedOn ? element.power : 0;     
    });
    console.log(`\nPower consumption of all turned on devices is ${sum} watt`)
}

const deskLamp = new Device('Desk Lamp',12, 220);
deskLamp.specifications = {
    adjustable: true,
    style: 'Traditional Lamp',
    lightBulbStyle: 'led'
}
deskLamp.colorTemperature = 4000;
deskLamp.setColorTemperature = function(t) {
    this.colorTemperature = t;
};

const сomputer = new Device('Desktop Computer', 400, 220);
сomputer.specifications = {
    cpu: "10th-generation Intel Core i9",
    graphics: "NVIDIA GeForce RTX 3070 Super",
    ram: "32GB DDR4 2933Mhz", 
    storage: "2TB M.2 PCIe NVME SSD + 2TB SATA 7200RPM HDD"
};
сomputer.reset = function() {
    // reset proccess
};
сomputer.suspend = function() {
    this.power = 50;
};

сomputer.turn_On_Off();
deskLamp.turn_On_Off();

сomputer.logInfo();
deskLamp.logInfo();

const devicesArray = [сomputer, deskLamp];
powerConsumption(devicesArray);