

// <?json
//     "589735703977c48c3083cd26"
// ?>
// set('id')

// <?json
//     ["трамп","українськ","вася"]
// ?>
// set('tags')

///////////////////////////////////////////////////////////


lib(url:'https://dj-dps.herokuapp.com/api/extension', as:'def')
load(cache:{{id}},as:"json")
set('words')

import('def.words.distance')
run()
set('d')

<?javascript
    
    $scope.tags = $scope.tags
        .map(function(tag){
            return {
                tag: tag,
                words:$scope.words
                    .filter(function(w){
                        var k = Math.abs(tag.length-w.length);
                        k /= _.max([
                                    tag.length,
                                    w.length
                                ])
                        k = Math.sqrt(Math.sqrt(1-k));
                        return (k*$scope.d.levenshtein(tag,w)) > 0.5
                    })
            }
        })
        .map(function(item){
            return '<div><span style="color:#00a;">'
            + item.tag +"</span>"
            + ((item.words.length > 0)
                ? (' <span style="color:#0a0;font-style: italic;font-size:small;">('
                    + item.words.join(", ")
                    + ')</span></div>'
                ) 
                : '<span style="color:#a00;font-style: italic;font-size:small;"> (not found)</span></div>'
                )    
        })
    
      

?>

get('tags')

concat()
html()
wrap(tag:'div', class:'row', style:'margin:0.5em;')
set('res')

<?html
    <h4>Likeness of words</h4>
?>
append({{res}})
wrap(
        tag:'div', 
        class:'row', 
        style:'background: #eee;margin:0.25em 0.2em; padding:0.5em; border:1px solid #999;'
)

return()
