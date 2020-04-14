/**
 * Cucumber Constructor
 */
const { setWorldConstructor } = require("cucumber")
const puppeteer = require("puppeteer")
const scope = require("./scope")

const World = function() {
    scope.driver = puppeteer
    scope.config = {
        headless: true,
        slowMo: 10,
        width: 1280,
        height: 1024,
    }
    scope.context = {}
}

setWorldConstructor(World)