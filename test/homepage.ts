class Homepage {

    private get logo() {
        return $(".fusion-standard-logo");
    }
    private get sloutionsbutton() {
        return $("(//a/span[text()='Solutions'])[1]");
    }
    private get submenu() {
        return $("//a/span[text()='Quality Assurance']")
    }
    private get frameworkbutton() {
        return $("(//span[text()='Frameworks'])[1]")
    }
    private get framesubmenu() {
        return $("(//a/span[text()='UNITE'])[1]")
    }
    private get resources() {
        return $("(//a/span[text()='Resources'])[1]")
    }
    private get resourcessubmenu() {
        return $("(//a/span[text()='Blog'])[1]")
    }
    private get aboutus() {
        return $("(//a/span[text()='About Us'])[1]")
    }

    private get aboutussubmenu() {
        return $("(//a/span[text()='Management Team'])[1]")
    }

    private get contact() {
        return $("(//a/span[text()='Contact'])[1]")
    }

    private get saksoftgroup() {
        return $("(//a/span[text()='Saksoft Group'])[1]")
    }

    private get acumasolutions() {
        return $("(//a/span[text()='Acuma Solutions'])[1]")
    }
    private get fabicon() {
        return $("li[class='fusion-custom-menu-item fusion-main-menu-sliding-bar']")
    }

    private get sidebar() {
        return $(".fusion-sliding-bar")
    }
    private get username(){
        return $('(//input[@id="name"])[2]')
}
private get email(){
    return $('(//input[@id="email_address"])[2]')
}
private get phoneno(){
    return $('(//input[@id="phone"])[2]')
}
private get website(){
    return $('(//input[@id="website"])[2]')
}
private get message(){
    return $('.fusion-column #message')
}
private get Sendbutton(){
    return $("(//button[@type='submit'])[2]")
}
private get result(){
    return $(".fusion-column .alert.success")
}
 

    public async verifylogo() {
        (await this.logo.waitForDisplayed({ timeout: 5000 }));
        expect(await this.logo.isDisplayed()).toBe(true);
    }

    public async verifysubmenu() {
        (await this.sloutionsbutton).moveTo();
        (await this.submenu.waitForDisplayed({ timeout: 5000 }));
        expect(await this.submenu.isDisplayed()).toBe(true);
        (await this.submenu).click();
    }
    public async verifyframesubmenu() {
        (await this.frameworkbutton).moveTo();
        (await this.framesubmenu.waitForDisplayed({ timeout: 5000 }));
        expect(await this.framesubmenu.isDisplayed()).toBe(true);
        (await this.framesubmenu).click();
    }

    public async verifyresources() {
        (await this.resources).moveTo();
        (await this.resourcessubmenu.waitForDisplayed({ timeout: 5000 }));
        expect(await this.resourcessubmenu.isDisplayed()).toBe(true);
    }

    public async verifyaboutus() {
        (await this.aboutus).moveTo();
        (await this.aboutussubmenu.waitForDisplayed({ timeout: 5000 }));
        expect(await this.aboutussubmenu.isDisplayed()).toBe(true);
        (await this.aboutussubmenu).click();
    }

    public async verifycontact() {
        (await this.contact.waitForDisplayed({ timeout: 5000 }));
        expect(await this.contact.isDisplayed()).toBe(true);
        (await this.contact).click();
    }
    public async verifysaksoftgroup() {
        (await this.saksoftgroup).moveTo();
        (await this.acumasolutions.waitForDisplayed({ timeout: 5000 }));
        expect(await this.acumasolutions.isDisplayed()).toBe(true);
        //(await this.acumasolutions).click();
    }

    public async verifysidebar() {
        (await this.fabicon).click();
        (await this.sidebar.waitForDisplayed({ timeout: 5000 }));
        expect(await this.sidebar.isDisplayed()).toBe(true);

    }
    public async verifylogin() {
        await this.username.setValue("Test");
        await this.email.setValue("testuser@360logica.com");
        await this.phoneno.setValue("987987987");
        await this.website.setValue("www.360logica.com");
        await this.message.setValue("Hello my name");
        (await this.Sendbutton).waitForClickable({ timeout: 5000 });
        (await this.Sendbutton).click();
        (await this.result.waitForDisplayed({ timeout: 10000 }));
        expect(await this.result.isDisplayed()).toBe(true);

    }
}
export default new Homepage(); 