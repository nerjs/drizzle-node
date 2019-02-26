const  { Drizzle } = require('drizzle')


const createDrizzleWrapper = customDrizzle => {
    class DrizzleWrapper extends customDrizzle {
        constructor(options, store) {
            super(options, store)
        }
    }

    return DrizzleWrapper
}

module.exports = createDrizzleWrapper(Drizzle)
module.exports.createDrizzleWrapper = createDrizzleWrapper
