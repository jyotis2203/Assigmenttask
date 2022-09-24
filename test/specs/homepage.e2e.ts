import homepage from "../homepage";

describe("logo test case", async function () {
    it("logo should be displayed", async function () {
        await browser.url("https://www.360logica.com/");
        await homepage.verifylogo();
    })
    it("submenu should appear", async function () {
        await homepage.verifysubmenu();
        await browser.pause(5000);
    })

    it("frameworks submenu should appear", async function () {
        await homepage.verifyframesubmenu();
        await browser.pause(5000);
    })
    it("Resorces submenu should appear", async function () {
        await homepage.verifyresources();
        await browser.pause(5000);
    })
    it("About us submenu should appear", async function () {
        await homepage.verifyaboutus();
        await browser.pause(5000);
    })
    it(" Contact page should appear", async function () {
        await homepage.verifycontact();
        await browser.pause(5000);
    })

    it("Saksoft group submenu should appear", async function(){
        await homepage.verifysaksoftgroup();
    })


    it("Sidebar form should appear", async function(){
        await homepage.verifysidebar();
        await browser.pause(5000);
    })

    it("Sidebar form should appear", async function(){
        await homepage.verifylogin();
        await browser.pause(5000);
    })
})

