import { Selector } from 'testcafe';

export default class Page {
    textInput: Selector = Selector('.input');
    checkbox: Selector = Selector('.checkbox');
    icon: Selector = Selector('.icon');
    
    //Keypress commands
    enter: string = 'enter';
}