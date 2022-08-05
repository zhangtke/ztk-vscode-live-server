# Settings

* **`ztkLiveServer.settings.port`:** Customize Port Number of your Live Server.  If you want random port number, set it as `0`.
    *  _Default value is `5500`._

    <hr>
 
* **`ztkLiveServer.settings.root`:** To change root of server in between workspace folder structure,  use `/` and absolute path from workspace.
    * _Example: `/sub_folder1/sub_folder2`_. Now `sub_folder2` will be root of the server.
    
    *  _Default value is "`/`".(The Workspace Root)_.

    <hr>
 
* **`ztkLiveServer.settings.CustomBrowser`:** To change your system's default browser.
    * _Default value is `null` ~~[String, not `null`]~~. (It will open your system's default browser.)_
    * *Available Options :*
        * chrome
        * chrome:PrivateMode
        * firefox
        * firefox:PrivateMode
        * microsoft-edge
        * blisk

    _Not enough? need more? open an/a issue/pull request on github. For now, use `ztkLiveServer.settings.AdvanceCustomBrowserCmdLine` settings (see below)._
    
    <hr>

* **`ztkLiveServer.settings.AdvanceCustomBrowserCmdLine`:**  To set your any favorite browser (Eg: Chrome Canary, Firefox Nightly) using advance Command Line. _(You can specify full path of your favorite custom browser)_.

    * _This setting will override `CustomBrowser` and `ChromeDebuggingAttachment` settings._
    * _Default Value is `null`_ 
    * _Examples:_
        * _chrome --incognito --headless --remote-debugging-port=9222_
        * _C:\\Program Files\\Firefox Developer Edition\\firefox.exe --private-window_

    > Note: Either use `AdvanceCustomBrowserCmdLine` or `CustomBrowser`. If you use both, `AdvanceCustomBrowserCmdLine` has higher priority.
    
    <hr>
 
* **`ztkLiveServer.settings.ChromeDebuggingAttachment`:** To Enable Chrome Debugging Attachment to Live Server. [[Quick Gif Demo](../images/Screenshot/ChromeDebugging.gif?raw=true)].
    * _**NOTE**: You must have to install [ `Debugger for Chrome.`](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)_
    
    * _If the value is `true`, Start Live Server and select 'Attach to Chrome' from Debug Window to start debugging. [`Debugger for Chrome`](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) Extension will inject debugging feature into running instance of browser window._
   
    *  _Default value is `false`._


    <hr>




* **`ztkLiveServer.settings.NoBrowser`:** If it is true live server will start without browser opened.
    
    * _Default Value is `false`_ 

    
    <hr>


* **`ztkLiveServer.settings.ignoreFiles`:** To ignore specific file changes.
    * _Default value is:_
    ```json
    [
        ".vscode/**",
        "**/*.scss",
        "**/*.sass",
        "**/*.ts"
    ]
    ```
    Now, by default Live Server will not track changes of your `.scss` &  `.sass` files. 

    <hr>

* **`ztkLiveServer.settings.donotShowInfoMsg`:** To turn off information pop-up messages like _"Server starts with port xxxx"_ or like that.  To turn off it, you can set the value as `true` or you can click to _"Don't show again"_ when a information message pop-up.
       
    * _Default value is : `false`_
    
    
    <hr>


* **`ztkLiveServer.settings.host`:** To switch host name between `localhost` and `127.0.0.1` or anything else. 
    * _Default is `127.0.0.1`._
     
    <hr>
* ~~**`ztkLiveServer.settings.additionalTagsForLiveReload`:** *(Experimental Feature - BETA)*~~
    > _[This Settings is dropped and this feature can be replacemented with Live Server Web Extension]_
  
    <hr>

* **`ztkLiveServer.settings.donotVerifyTags`:** To turn off prompt warning message if body or head or other supporting tag is missing in your HTML.
    * _Default value if `false`_

    
    <hr>


* **`ztkLiveServer.settings.https`:** To enable https protocol.
    * *Properties :*
    ```js
     "ztkLiveServer.settings.https": {
        "enable": false, //set it true to enable the feature.
        "cert": "C:\\https\\server.cert", //full path
        "key": "C:\\https\\server.key", //full path
        "passphrase": "12345"
    },
    ```
    
    <hr>


* **`ztkLiveServer.settings.proxy`:** To enable proxy.
    * *Properties :*
    ```js
    /* 
         In easy word, it means you're shifting your real url (actual PHP url) 
         to another url (which LiveSever will start).
    */

     "ztkLiveServer.settings.proxy": {
        "enable": false, //set it true to enable the feature.
        "mappers":  [{
            "route": "/",// 映射路由路径
            "target": "http://127.0.0.1:80"// 映射目标路径
        }]
    },
    ```

     <hr>

* **`ztkLiveServer.settings.useWebExt:`** : If it is `true`, Live Reload will be fully controled by the [Live Server Web Extension](https://github.com/ritwickdey/live-server-web-extension). And also, it does not matter if your HTML have `<body>` tag or not, Live Reload will work for every file. :smile:
    * Default is `false`

    <hr>

* **`ztkLiveServer.settings.fullReload:`** : By Default Live Server inject CSS changes without full reloading of browser. You can change this behavior by making this setting as `true`. 
    
    * Default: `false`

    <hr>
    
* **`ztkLiveServer.settings.wait:`** : Delay before live reloading. Value in milliseconds.
    
    * Default: `100`

    <hr>

* **`ztkLiveServer.settings.mount:`** : Mount a directory to a route.
    
    * Default: `[]`

    * Example: 
    ```js
    {
        "ztkLiveServer.settings.mount": [
            ["/", "/path1"],
            ["/", "/path2"],
            ["/root", "/dist"]
        ]
    }
    ```

    <hr>

* **`ztkLiveServer.settings.useLocalIp:`** : Use local IP as host.
    
    * Default: `false`

    <hr>

* **`ztkLiveServer.settings.file:`** : Path to the entry point file. Useful for SPA 
    
    * Default: `""`

    <hr>

* **`ztkLiveServer.settings.multiRootWorkspaceName:`** : This the entry point of server when you're in multiroot workspace. 
    
    * Default: `null`

    * You can change it using Command Palette `ctrl+shift+p` & type `Live Server: Change Live Server workspace`
    
    * Tips: You don't need to set this setting, Live Server is smart enough, it'll eigher ask what you want or automatically set the correct workspace if open the server by right clicking any HTML file.    
    <hr>

* **`ztkLiveServer.settings.htmlReplaceFilters:`** : 用于替换html的文本内容。获取html内容时，对符合正则规则的文本进行替换，pathMatch为文件路径匹配，replacePairs为正则替换对列表，每对第一个值为正则匹配字符串，后一个为替换字符串
    <hr>