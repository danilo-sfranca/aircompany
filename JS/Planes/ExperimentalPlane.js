const Plane = require('./Plane');

class ExperimentalPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.type = type;
        this.classificationLevel = classificationLevel;
    }

    getType() {
        return this.type;
    }

    setType(value) {
        this.type = value;
    }

    getClassificationLevel() {
        return this.classificationLevel;
    }

    setClassificationLevel(value) {
        this.classificationLevel = value;
    }

    get _type() {
        return this.type;
    }

    set _type(value) {
        this.type = value;
    }

    get _classificationLevel() {
        return this.classificationLevel;
    }

    set _classificationLevel(value) {
        this.classificationLevel = value;
    }
}

module.exports = ExperimentalPlane;