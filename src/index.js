import { model } from "./model";
import { Site } from "./classes/site";
import { Sidebar } from "./classes/sidebar";
import './styles/main.css'

const site = new Site('#site');

const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)



/*Вариант без использования классов*/
//import {templates} from "./templates";
// const generate = templates[block.type]
// if (generate) {
//     const html = generate(block)
//     site.insertAdjacentHTML('beforeend', html)
// }