
<?html
    <div>
        <a href="<%=url%>" target="_blank" style="font-size:small; line-height:1; margin:0; padding:0">
            <%=title%>
        </a>
    </div>
?>

set('htmlTemplate')

<?html
   <div class="row" style="margin:0">
        <button class="success right small radius"
                ng-click="API.emit('addRss')"
                style="padding: 0.5em;font-stretch: ultra-condensed;margin: 0.3rem 0.5em 0.1rem;"
        >
            New RSS Channel...
        </button>
        <button class="success right small radius"
                ng-click="API.emit('changeRss')"
                style="padding: 0.5em;font-stretch: ultra-condensed;margin: 0.3rem 0.5em 0.1rem;"
        >
            Change Selection...
        </button>
    </div>
?>
set('htmlFooter')

<?javascript
    var compiledHtml = _.template($scope.htmlTemplate);
    $scope.channels = $scope.channels.map(function(item){
        return compiledHtml(item)  
    }).join(""); 
?>
get('channels')
wrap(tag:'div', class:'row', style:'margin:0.5em;')
set('channels')

<?html
    <h4> RSS Channels </h4>
?>
append({{channels}})
append({{htmlFooter}})

wrap(
        tag:'div', 
        class:'row', 
        style:'background: #eee;margin:0.25em 0.2em; padding:0.5em; border:1px solid #999;'
    )
return()