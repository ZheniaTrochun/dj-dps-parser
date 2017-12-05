//   <?javascript
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

   
   lib(url:'https://dj-dps.herokuapp.com/api/extension', as:'def')

<?dps
    @async('p[<%=index%>]')
        call(
            ext: 'def.load.rss.getChannelHeadlines',
            url: '<%=item.url%>',
            encoding: '<%=item.encoding%>'
        )
        set('data')
    @sync(vars:['news[<%=index%>]'], values:['data'])
?>

    set('dpsTemplate')

<?javascript
    
    var compiledDps = _.template($scope.dpsTemplate)
    
    $scope.getChannels = $scope.selectedChannels.map(function(item,index){
        return compiledDps({item:item, index:index})
    }).join("")+'@all({{p}}); return("news")'; 

?>

// Sync all branches and process loaded items
    run({{getChannels}})
    concat()
    distinct()
    cache()
    select('$.data_id')
    set('id')
    return('id[0]')    

