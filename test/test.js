const assert = require("assert")
const { describe } = require("mocha")
const Math = require("../src/math")
const event = require("../src/events")

describe('Math', () => {
    

    describe('randFloatSpread', () => {
        it ('Should return true if less or Equal to 1', () => {
            assert.strictEqual(Math.randFloatSpread(1) <= 1, true)
        })
        it ('Should return true if superior or Equal to -1', () => {
            assert.strictEqual(Math.randFloatSpread(1) >= -1 , true)
        })
    })

    describe('mapLinear', () => {
        it ('Should return 3', () => {
            assert.strictEqual(Math.mapLinear(1,2,3,4,5), 3)
        })
        it ('Should return 0.882352941176471', () => {
            assert.strictEqual(Math.mapLinear(1,20,3,40,5), 0.882352941176471)
        })
    })

    describe('Lerp', () => {
        it ('Should return 41', () => {
            assert.strictEqual(Math.lerp(1,3,20), 41)
        })
        it ('Should return -15.3', () => {
            assert.strictEqual(Math.lerp(1.3,-7,2), -15.3)
        })
    })

    describe('Clamp', () => {
        it (' If range is 15-35 should return 15 for value 10 ', () => {
            assert.strictEqual(Math.clamp(10,15,35), 15)
        })
        it (' If range is 15-35 should return 20 for value 20 ', () => {
            assert.strictEqual(Math.clamp(20,15,35), 20)
        })
        it (' If range is 15-35 should return 35 for value 50 ', () => {
            assert.strictEqual(Math.clamp(50,15,35), 35)
        })
    })
    
    describe('RandFloat', () => {
        it ('Should return true if number is between 5 and 10', () => {
            const value = Math.randFloat(5, 10)
            assert.strictEqual( value >= 5 && value <= 10 , true )
        })
        it ('Should return true if number is  between -10 and -5', () => {
            const value = Math.randFloat(-10, -5)
            assert.strictEqual( value <= -5 && value >= -10 , true )
        })
    })

    
})

describe("Events", () => {
    describe('Trigger', () => {
        it ('Take a target , a type and an event, should return target', () => {
            assert.strictEqual(event.trigger("target","type","event"), "target")
        })
    })
})