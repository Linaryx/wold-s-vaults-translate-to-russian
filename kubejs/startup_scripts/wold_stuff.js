
onEvent('item.registry', event => {
    event.create('mysticalagriculture:pogging_seed_base').group('the_vault')
    event.create('mysticalagriculture:echoing_seed_base').group('the_vault')
    event.create('botania:uninfused_terrasteel_ingot').group('the_vault')
})

onEvent('block.registry', event => {
    event.create('the_vault:silver_scrap_1').displayName('1x Сжатый серебряный лом').tagBlock('minecraft:mineable/pickaxe')
    event.create('the_vault:silver_scrap_2').displayName('2x Сжатый серебряный лом').tagBlock('minecraft:mineable/pickaxe')
    event.create('the_vault:chromatic_gold_block').displayName('Блок хроматического золота').tagBlock('minecraft:mineable/pickaxe').tag('forge:storage_blocks/chromatic_gold')
    //Gem Blocks
    event.create('the_vault:block_gem_larimar').displayName('Блок ларимарского самоцвета').tagBlock('forge:storage_blocks/larimar').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_benitoite').displayName('Блок драгоценного камня бенитоит').tagBlock('forge:storage_blocks/benitoite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_wutodie').displayName('Блок самоцветов Вутоди').tagBlock('forge:storage_blocks/wutodie').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_painite').displayName('Блок драгоценных камней из паинита').tagBlock('forge:storage_blocks/painite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_alexandrite').displayName('Блок драгоценных камней александрит').tagBlock('forge:storage_blocks/alexandrite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_black_opal').displayName('Блок драгоценных камней из черного опала').tagBlock('forge:storage_blocks/black_opal').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_echo').displayName('Блок Эхо Гем').tagBlock('forge:storage_blocks/echo').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_sparkletine').displayName('Блок самоцветов Sparkletine').tagBlock('forge:storage_blocks/sparkletine').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_iskallium').displayName('Блок самоцветов вольдиума').tagBlock('forge:storage_blocks/iskallium').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_upaline').displayName('Блок самоцветов Upaline').tagBlock('forge:storage_blocks/upaline').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_xenium').displayName('Блок самоцветов Xeenium').tagBlock('forge:storage_blocks/xenium').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_petzanite').displayName('Блок драгоценного камня Петезанит').tagBlock('forge:storage_blocks/petzanite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_gorginite').displayName('Блок из драгоценного камня горгинит').tagBlock('forge:storage_blocks/gorginite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_bomignite').displayName('Блок самоцвета бомигнита').tagBlock('forge:storage_blocks/bomignite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_tubium').displayName('Блок Тубиум Гем').tagBlock('forge:storage_blocks/tubium').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_ashium').displayName('Блок самоцветов ашиума').tagBlock('forge:storage_blocks/ashium').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
})
