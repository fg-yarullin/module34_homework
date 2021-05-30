class Device {
    constructor(name, power, voltage) {
        this.name = name,
        this.power = power;
        this.voltage = voltage;
        this.isPluggedIn = false;
        this.isTurnedOn = false;
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
        this.isPluggedIn = Math.random() < 0.7;
        this.isTurnedOn = this.isPluggedIn && Math.random() < 0.7;
    }
}

const powerConsumption = function (devicesArray) {
    let sum = 0;
    devicesArray.forEach(element => {
        sum += element.isTurnedOn ? element.power : 0;     
    });
    console.log(`\nPower consumption of all turned on devices is ${sum} watt`)
}

class DeskLamp extends Device {
    constructor(name, power, voltage, colorTemperature) {
        super(name, power, voltage);
        this.specifications = {
            adjustable: true,
            style: 'Traditional Lamp',
            lightBulbStyle: 'led'
        }
        this.colorTemperature = colorTemperature;
    }   
    setColorTemperature(t) {
        this.colorTemperature = t;
    };
}

class Computer extends Device {
    constructor(name, power, voltage, colorTemperature) {
        super(name, power, voltage);
        this.specifications = {
            cpu: "10th-generation Intel Core i9",
            graphics: "NVIDIA GeForce RTX 3070 Super",
            ram: "32GB DDR4 2933Mhz", 
            storage: "2TB M.2 PCIe NVME SSD + 2TB SATA 7200RPM HDD"
        }
    }
    reset() {
        // reset proccess
    };
    suspend() {
        this.power = 50;
    };
}

const deskLamp = new DeskLamp('Desk Lamp',12, 220, 3000);

const сomputer = new Computer('Desktop Computer', 400, 220);

сomputer.turn_On_Off();
deskLamp.turn_On_Off();

сomputer.logInfo();
deskLamp.logInfo();

const devicesArray = [сomputer, deskLamp];
powerConsumption(devicesArray);
