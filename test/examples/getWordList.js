    lib(url:'https://dj-dps.herokuapp.com/api/extension', as:'def')
    
// <?json
// "589605953977c48c3083cd1f"
// ?>
// set('id')

load(cache:{{id}},as:"json")
set('news')

<?javascript
    var w = function(phrase){
        return phrase.toString().toLowerCase().split(/[\\.\\ \\,\\?\\!\\:\\;\\-\\"\\'\\(\\)\\[\\]]+/g)    
    }
    
    $scope.words = $scope.news.map(function(item){
        return w(item)
    });
    
    $scope.filter = function(item){
        return item.length >3
    }
    
    $scope.sort = function(a,b){
        return a > b
    }
    
?>
get('words')
concat();
filter({{filter}})
sort({{sort}})
distinct()
cache()
return()