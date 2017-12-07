
// <?json
//     "589793063977c48c3083cd2a"
// ?>
// set('id')
////////////////////////////////////////////////////////////

load(cache:{{id}}, as:'table')
pca(for:'row',return:'scores')
format(2)
set('table'

<?javascript
    $scope.table.body = $scope.table.body.map(function(row){
        return {
            metadata: [row.metadata[0]],
            value: row.value
        }
    }) 
?>
get(var:'table', as:'table')

scatter(x:0,y:[1,2])