const assert = require('assert');

describe('Test Automation Practice Website', () => {

    it('should open the page and verify title', async () => {
        await browser.url('https://testautomationpractice.blogspot.com/');
        const title = await browser.getTitle();
        assert.strictEqual(title.includes('Automation'), true);
    });

    it('should verify input box', async () => {
        const input = await $('#name');
        await input.setValue('Sourabh');
        const value = await input.getValue();
        assert.strictEqual(value, 'Sourabh');
    });

    it('should click radio button', async () => {
        const radio = await $('#male');
        await radio.click();
        const isSelected = await radio.isSelected();
        assert.strictEqual(isSelected, true);
    });

    it('should select checkbox', async () => {
        const checkbox = await $('#sunday');
        await checkbox.click();
        const isSelected = await checkbox.isSelected();
        assert.strictEqual(isSelected, true);
    });

    it('should select dropdown value', async () => {
        const dropdown = await $('#country');
        await dropdown.selectByVisibleText('India');
        const value = await dropdown.getValue();
        assert.strictEqual(value.toLowerCase(), 'india');
    });

});