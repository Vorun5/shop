import { ProductCategory } from './product-category'

export type Product = {
  id: string
  name: string
  category: ProductCategory
  quantity: number
  unitPrice: number
  img?: string
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Смартфон',
    category: 'Electronics',
    quantity: 20,
    unitPrice: 999,
    img: 'https://cdn.discordapp.com/attachments/1083850928161030224/1180444245316862022/darkbomber-7d86783d9b44ade571e7e2f783008ee7.png?ex=657d715f&is=656afc5f&hm=5bae4795894e4d3b354642cec1415163107bf95a84f139872adc4fbc95e58394&',
  },
  {
    id: '2',
    name: 'Футболка',
    category: 'Clothing',
    quantity: 50,
    unitPrice: 24.99,
    img: 'https://cdn.discordapp.com/attachments/1083850928161030224/1180444243060346890/1716600800_6_1_1.jpg?ex=657d715f&is=656afc5f&hm=13fbd3fc88617a2d48e98efc054a28277dbe331a9c65e690de32405b3fdd59ee&',
  },
  {
    id: '3',
    name: 'Кофемашина',
    category: 'Home and Kitchen',
    quantity: 10,
    unitPrice: 500,
    img: 'https://cdn.discordapp.com/attachments/1083850928161030224/1180444246168326195/b16a32e40ad18a67.jpg?ex=657d715f&is=656afc5f&hm=40f5da1a46ff778e37d143e47a10b3bac51d0c471b988518e192e2cc74b14d31&',
  },
  {
    id: '4',
    name: 'Война и мир',
    category: 'Books',
    quantity: 30,
    unitPrice: 14.99,
    img: 'https://cdn.discordapp.com/attachments/1083850928161030224/1180444243353927791/cover.png?ex=657d715f&is=656afc5f&hm=1437822779923c7115bb97752f0d69dcb01b1fcdbd2ed3a3df16876fe2bdcbb5&',
  },
  {
    id: '5',
    name: 'Машинка',
    category: 'Toys',
    quantity: 15,
    unitPrice: 11,
    img: 'https://cdn.discordapp.com/attachments/1083850928161030224/1180444244238946334/canva-MACZWFB9zc4.jpg?ex=657d715f&is=656afc5f&hm=8c82cc7706e760283ec8056ce3ca6c375bc62f290f2b8b2493f6723e251e2832&',
  },
]
