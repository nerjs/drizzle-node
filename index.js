const  { Drizzle } = require('drizzle')
const Window = require('window');

const createDrizzleWrapper = customDrizzle => {
    class DrizzleWrapper extends customDrizzle {
        constructor(options, store) {
            const window = new Window();
            global.window = window
            global.document = window.document
            global.navigator = window.navogator
            super(options, store)
        }
    }

    return DrizzleWrapper
}

module.exports = createDrizzleWrapper(Drizzle)
module.exports.createDrizzleWrapper = createDrizzleWrapper
