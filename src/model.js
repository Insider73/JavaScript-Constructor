import image from './assets/image.png'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом Java Script!',{
        tag:'h2',
        styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
    }),
    new ImageBlock(image, {
        alt:'Глаз дракона',
        styles: 'padding: 2rem 0; justify-content: center;',
        imageStyles: 'width: 700px;'
    }),
    new TextBlock('JavaScript - это круто',{
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    }),
    new TextColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'Применяем принципы SOLID и ООП',
        'JavaScript - это круто'
    ], {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    })
]