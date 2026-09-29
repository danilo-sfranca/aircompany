const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        return this.planes.filter(plane => plane instanceof PassengerPlane);
    }

    getPasPl() {
        return this.getPassengerPlanes();
    }

    getMilitaryPlanes() {
        return this.planes.filter(plane => plane instanceof MilitaryPlane);
    }

    getExperimentalPlanes() {
        return this.planes.filter(plane => plane instanceof ExperimentalPlane);
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.getPassengerPlanes();
        return passengerPlanes.reduce((planeWithMaxCapacity, currentPlane) =>
            currentPlane.getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()
                ? currentPlane
                : planeWithMaxCapacity
        );
    }

    getTransportMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(
            plane => plane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT
        );
    }

    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(
            plane => plane.getMilitaryType() === MilitaryType.BOMBER
        );
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.Get_Max_Flight_Distance() > b.Get_Max_Flight_Distance() ? 1 : -1));
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMS() > b.getMS() ? 1 : -1));
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity() ? 1 : -1));
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
