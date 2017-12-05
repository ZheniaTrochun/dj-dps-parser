// <?json
//     "589793063977c48c3083cd2a"
// ?>
// set('id')
////////////////////////////////////////////////////////////

load(cache:{{id}}, as:'table')

format(2)
corr(for:'col')

    
    set('t')
    
    <?javascript
        
       
        var th = 0.000001;
        
        for(var i=0; i < $scope.t.body.length-1; i++){
            
            if($scope.t.body[i].value[i] == 1){
            
                for(var j=i+1; j < $scope.t.body.length; j++){
            
                    if($scope.t.body[j].value[i] >= th){
            
                        $scope.t.body[i].metadata[0].label += ", "+ $scope.t.body[j].metadata[0].label;
                        $scope.t.body[i].value[j] = 1;
                        $scope.t.body[j].value = $scope.t.body[j].value.map(function(d){return -1})
            
                    }
            
                }
            
                
            }
            
        }
        $scope.result = $scope.t.body
            .filter(function(row){
                return _.sum(row.value) != -row.value.length
            })
            .map(function(row){
                return '<div><span style="color:#00a;">[ '+ row.metadata[0].label + ' ]</span></div>'
            })
        $scope.result = $scope.result.join('')     
       
    
    ?>
    get(var:'result', as:'html')
    wrap(tag:'div', class:'row', style:'margin:0')
    set('result')
    
    <?html
        <h4> Stable associations of words </h4>
    ?>
    append({{result}})
    
    wrap(
        tag:'div', 
        class:'row', 
        style:'background: #eee;margin:0.25em 0.2em; padding:0.5em; border:1px solid #999;'
    )
    return()

