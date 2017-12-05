

// <?json
//     "589793063977c48c3083cd2a"
// ?>
// set('id')
////////////////////////////////////////////////////////////

load(cache:{{id}}, as:'table')

format(2)
aggregate(for:'col', add:['sum'])
last()
order(for:'col', by:0, as:'za')

hbar()