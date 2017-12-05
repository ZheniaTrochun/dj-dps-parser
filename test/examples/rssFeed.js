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
            title: item.news.title[0],
            category:(item.news.category) ? item.news.category[0] : '',
            description: item.news.description[0],
            link: item.news.link[0],
            size: item.factor*0.3+0.7
        }
    })
    .sort(_util.comparator['Date']['Z-A'](function(item){
        return item.pubDate
    }));
?> 

<?html
    <div style="border-bottom:1px solid #999; padding:0.2em;">
        <div    class="row" 
                style=" margin:1.5em 0 0 0; 
                        font-size:x-small;
                        font-weight:bold;padding:0;
                        line-height:1.0"
        >
            <span class="right"><%=pubDate%></span>
        </div>
        <div    class="row" 
                style=" margin:0 0 0 0; 
                        font-size:x-small;
                        font-weight:bold;padding:0;
                        line-height:1.0"
        >
            <span class="right">
                <%=feed%>::<%=(category)?((category._text)?category._text:category):''%>
            </span>
        </div>
        <a  href="<%=link%>" target="blank" 
            style=" line-height:1.0;
                    margin:0 0 0 0;
                    padding:0;
                    font-size:<%=size%>em;"
        >
            <%=title%>
        </a>
        <div    class="row" 
                style=" margin:0 0 0 0.5em; 
                        font-size:small;
                        line-height:1.0;"
        >
            <%=description%>
        </div>
    </div> 
?>

set('htmlTemplate')

<?javascript
    var compiledHtml = _.template($scope.htmlTemplate)
    $scope.news = $scope.news.map(function(item){
        return compiledHtml(item)
    }).join("");
?>

// <?html
//     <h4> Relevant News</h4>
// ?>
// append({{news}})
get('news')
wrap(
        tag:'div', 
        class:'row', 
        style:'margin:0.25em 0.2em; padding:0.5em;'
)
return()
