

<?html
   <h4>Relevant News</h4>
    <div    class="row" 
            style=" position:relative;
                    margin:0;" 
    >
        <div    class= "column medium-3 left"
                 style="color: #333;
                        margin: -2px -5px 0 1em;
                        font-size: small;
                        border: 2px solid #333;
                        border-bottom: none;
                        border-radius: 10px 10px 0 0;
                        padding: 5.5px 1em;
                        top: 2px;
                        background: #ffffff;
                        cursor:pointer;
                        z-index:5"
                ng-click = "API.emit('setFeedView')"        
        >
            as Feed            
        </div>    
        <div    class="column medium-3 left" 
                style=" border: 1px solid #999;
                        font-size: small;
                        border-bottom: none;
                        border-radius: 10px 10px 0 0;
                        padding: 5px 1em;
                        top: 0px;
                        background: #ffffff;
                        color: #999;
                        cursor:pointer;"
                ng-click = "API.emit('setTimelineView')"        
        >
            as Timeline            
        </div>    
    </div>
    <div    class="row" 
            style=" height: 5px;
                    margin: 0;
                    border-top: 2px solid #999;
                    background: #fff;"
    >

    </div>
?> 

wrap(
        tag:'div', 
        class:'row', 
        style:'margin:0.25em 0.2em; padding:0.5em;'
    )
return()