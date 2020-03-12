import { Selector } from 'testcafe';
import Page from './page-model';

const dataSet = require('./data.json');
const page = new Page();

fixture `Data-Driven Tests`
    .page `http://localhost:8081/`;

dataSet.forEach(data => {
    test(`Enter '${data.input}'`, async t => {
        await t.typeText(page.textInput, data.input).pressKey(page.enter);
        await t.click(page.checkbox);
        await t.click(page.icon);
    });
});