// priority: 0

console.info('Привет, мир! (Вы увидите эту строку только один раз в консоли, во время запуска)')

onEvent('item.registry', event => {
	// Unobtanium
	event.create('white_unobtanium').displayName('Белый унобтаниум')
	event.create('orange_unobtanium').displayName('Оранжевый унобтаниум')
	event.create('magenta_unobtanium').displayName('Пурпурный унобтаниум')
	event.create('light_blue_unobtanium').displayName('Светло-голубой унобтаниум')
	event.create('yellow_unobtanium').displayName('Желтый унобтаниум')
	event.create('lime_unobtanium').displayName('Известковый унобтаниум')
	event.create('pink_unobtanium').displayName('Розовый унобтаниум')
	event.create('gray_unobtanium').displayName('Серый унобтаниум')
	event.create('light_gray_unobtanium').displayName('Светло-серый унобтаниум')
	event.create('cyan_unobtanium').displayName('Циан Унобтаниум')
	event.create('blue_unobtanium').displayName('Синий унобтаниум')
	event.create('brown_unobtanium').displayName('Коричневый унобтаниум')
	event.create('green_unobtanium').displayName('Зеленый унобтаниум')
	event.create('red_unobtanium').displayName('Красный унобтаниум')
	event.create('purple_unobtanium').displayName('Фиолетовый унобтаниум')
	event.create('black_unobtanium').displayName('Черный унобтаниум')
	event.create('rainbow_unobtanium').displayName('Радужный унобтаниум')
})

onEvent('block.registry', event => {

	// Unobtanium
	event.create('white_unobtanium_block').displayName('Белый унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('orange_unobtanium_block').displayName('Оранжевый унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('magenta_unobtanium_block').displayName('Пурпурный унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('light_blue_unobtanium_block').displayName('Светло-голубой унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('yellow_unobtanium_block').displayName('Желтый блок из унобтаниума').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('lime_unobtanium_block').displayName('Известковый блок из унобтаниума').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('pink_unobtanium_block').displayName('Розовый блок из унобтаниума').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('gray_unobtanium_block').displayName('Серый унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('light_gray_unobtanium_block').displayName('Светло-серый унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('cyan_unobtanium_block').displayName('Цианский унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('blue_unobtanium_block').displayName('Синий унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('brown_unobtanium_block').displayName('Коричневый блок из унобтаниума').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('green_unobtanium_block').displayName('Зеленый блок из унобтаниума').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('red_unobtanium_block').displayName('Красный унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('purple_unobtanium_block').displayName('Фиолетовый унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('black_unobtanium_block').displayName('Черный блок из необтаниума').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('rainbow_unobtanium_block').displayName('Радужный унобтаниумный блок').material('metal').hardness(50.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').requiresTool(true)

})