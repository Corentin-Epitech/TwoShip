const assert = require("assert")
const { describe } = require("mocha")
const Math = require("../src/math")

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
    
})