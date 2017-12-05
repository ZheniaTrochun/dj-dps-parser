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

<?javascript
    
    var compiledDps = _.template($scope.dinadps)
    
    $scope.getChannels = $scope.selectedChannels.map(function(item,index){
        return compiledDps({item:item, index:index})
    }).join("")+'@all({{p}}); return("news")'; 

?>

// Sync all branches and process loaded items

    run({{getChannels}})
    set('news')

<?javascript
    $scope.news = $scope.news.map(function(item, index){
        return item.map(function(n){
            return {
                feed: $scope.selectedChannels[index].title,
                news: n
            }
        })    
    });
?>

get('news')
concat()
set('news')

<?javascript
    $scope.news = $scope.relevantNews.map(function(n){
        var res = $scope.news.filter(function(item){
                return item.news.title[0] == n.label})[0]    
        res.factor = n.value
        return res
    })
    .map(function(item){
        return {
            feed: item.feed,
            pubDate: _util.format.date(new Date(item.news.pubDate[0]),"DD MMM hh:mm"),
            factor: item.factor,
            title:item.news.title[0]
        }
    })
    .sort(_util.comparator['Date']['A-Z'](function(item){
        return item.pubDate
    }));

    $scope.table = {
        header: [{
            metadata:[{
              "id": "relevancy",
              "label": "relevancy",
              "dimension": "indicator",
              "dimensionLabel": "indicator",
              "role": "metric"
            }]
        }],
        body:$scope.news.map(function(item){
            return {
                metadata:[
                    {
                        "id": item.pubDate,
                        "label": item.pubDate,
                        "dimension": "time",
                        "dimensionLabel": "Date of publication",
                        "role": "time",
                        "format":"YYYY MM DD hh:mm"
                    },
                    {
                        "id": item.feed,
                        "label": item.feed,
                        "dimension": "feed",
                        "dimensionLabel": "Feed",
                        "role": "metric"
                    },
                    {
                        "id": item.title,
                        "label": item.title,
                        "dimension": "news",
                        "dimensionLabel": "Message",
                        "role": "metric"
                    }
                ],
                value:[item.factor]
                    
            }
        })        
    };
?> 

get(var:'table', as:'table')
line(x:-1, y:[0], cat:-2)
