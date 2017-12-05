
<?json
    "58d143f8087c0e04000ecd7f"
?>
set('id')
////////////////////////////////////////////////////////////

load(cache:{{id}}, as:'table')

format(2)
aggregate(for:'row', add:['sum'])
last(for:'col')
order(for:'row', by:0, as:'za')
limit(15)
transpose()

hbar()