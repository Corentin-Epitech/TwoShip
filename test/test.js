const assert = require("assert")
const { describe } = require("mocha")
const Math = require(".../src/math.js")

describe('Math', () => {
    const math = new Math.math()

    describe('randFloatSpread', () => {
        it ('Should return true if less or equal to 1', () => {
            assert.equal(math.randFloatSpread(1) <= 1)
        })
        it ('Should return true if superior or equal to -1', () => {
            assert.equal(math.randFloatSpread(1) >= -1)
        })
    })

    describe('mapLinear', () => {
        it ('Should return 3', () => {
            assert.equal(math.mapLinear(1,2,3,4,5), 3)
        })
        it ('Shoul return 0.882352941176471', () => {
            assert.equal(math.mapLinear(1,20,3,40,5), 0.882352941176471)
        })
    })

    describe('Lerp', () => {
        it ('Should return 41', () => {
            assert.equal(math.lerp(1,3,20), 41)
        })
        it ('Should return -15.3', () => {
            assert.equal(math.lerp(1.3,-7,2), -15.3)
        })
    })
    
})