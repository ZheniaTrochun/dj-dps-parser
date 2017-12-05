<************************************************************
*  Creates timeline series for selected rss chalnnels       *
*                                                           *
*   selectedChannels - the array of channels                *
*           {url, encoding, title}                          *
*   relevantNews - the array of relevant news               *
*           {label}                                         *
*                                                           *
************************************************************>
// Debug preinstalation

// <?json
// [
//     {"label":"Опубліковані зображення смартфона Google Pixel 2","value":3},
//     {"label":"Google купив підрозділ Twitter","value":2},
//     {"label":"Ford показав, яким буде новий Mustang (відео)","value":1},
//     {"label":"Ера штучного інтелекту і робототехніки неминуча - засновник Google","value":0.7},
//     {"label":"Ракету Falcon 9 запущено успішно","value":0.56}]
// ?>
// set('relevantNews')


// <?javascript
//     $scope.selectedChannels = [
//     {
//         url:"http://127.0.0.1:8088/libs/rss/pravda.xml",
//         encoding:'win1251',
//         title:"pravda.ua"
//     }
//     ,
//     {
//         url:"http://127.0.0.1:8088/libs/rss/tyzhden.xml",
//         encoding:'utf8',
//         title:"tyshden.ua"
//     },
//     {
//         url:"http://127.0.0.1:8088/libs/rss/all-news.xml",
//         encoding:'utf8',
//         title:"liga.net"
//     },
//     {
//         url:"http://127.0.0.1:8088/libs/rss/finance.xml",
//         encoding:'win1251',
//         title:"finance.ua"
//     }
    
// ];

// ?>







// Define getItems procedure
// 
//     _arguments.url - The url of rss channel
//     _arguments.encoding - The xml encoding of rss channels
// 
//     returns items of rss channel

    <?dps

        load(
            url:{{_arguments.url}},
            as:"xml",
            encode:{{_arguments.encoding}}
        )
    
        json()
        select("$.rss..item.*")
        return()
    ?>
    set("getItems")
    
    
// define dps template for dps dinamic generation
// object {item, index} is required

<?dps
    @async('p[<%=index%>]')

    run(
            script: {{getItems}},
            url:'<%=item.url%>',
            encoding:'<%=item.encoding%>'
        )
    set('data')    

    @sync(vars:['news[<%=index%>]'], values:['data'])      
?>

set('dinadps')
    
// generate dps for rss channels loading

<?javascript
    
    var compiledDps = _.template($scope.dinadps)
    
    $scope.getChannels = $scope.selectedChannels.map(function(item,index){
        return compiledDps({item:item, index:index})
    }).join("")+'@all({{p}}); return("news")'; 

?>

// Sync all branches and process loaded items

    run({{getChannels}})
    set('news')
    
//  generate timeline series

<?javascript
    $scope.res = {
            tag:"timeline",
            dictionary:[{key:"key", value:"value"}],
            data:{series:[]}
    };
    
    $scope.rn = $scope.relevantNews.map(function(t){return t.label})
    
    // $scope.news = $scope.news.map(function(c){
    //     return c.filter(function(n){
    //         $scope.rn.indexOf(n.title[0]) >= 0
    //     })
    // })
    
    $scope.res.data.series = $scope.selectedChannels
        .map(function(item, index){
            return {
                category: {label: item.title},
                values: $scope.news[index]
                    .filter(function(n){
                        return $scope.rn
                        .indexOf(n.title[0]) >=0 
                    })
                    .map(function(n){
                        return {
                            type: "instant",
                            start: new Date(n.pubDate[0]),
                            category: {label: item.title},
                            context: {
                              headline: n.title[0],
                              html: n.description[0]
                            },
                            end: new Date(n.pubDate[0])
                        }
                })
                
            }
        })
        .filter(function(s){
            return s.values.length > 0
        })
        

?>
 return('res') 
