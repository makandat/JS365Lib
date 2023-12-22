# JS365Lib.js 3.0
<!-- 概要 -->
## <a id="abstraction">概要</a>
JS365Lib は jQuery の代わりに使える軽量 JavaScript ライブラリであるが、
サーバへのリクエストには Fetch API を使っている。

<!-- 基本的な要件 -->
### <a id="requirement">基本的な要件</a>
* JS365Lib.js は名前空間がないので、名前が衝突する場合は使用できない。一方、JS365Lib2.js は名前空間 "JS365Lib" を持つ。
* JS365Lib の関数は、DOM の構築が終わった後でないと使えない。<br>つまり、window.onload イベントが発生した後で使用する。これは <u>body タグで onload 属性を追加するか、window.onload イベントハンドラを追加する。

<!-- 内容一覧 (もくじ) -->
### <a id="contents">内容一覧 (もくじ)</a>
      <ul>
        <li><a href="#abstraction">概要</a>
          <ul>
          <li><a href="#requirement">基本的な要件</a></li>
          <li><a href="#contents">内容一覧 (もくじ)</a></li>
          </ul>
        </li>
        <li><a href="#escape_functions">エスケープ</a>
          <ul>
          <li><a href="#escURL">escURL(str, param=false)</a></li>
          <li><a href="#escHTML">escHTML(str)</a></li>
          </ul>
        </li>
        <li><a href="#dom_functions">DOM 関数</a></li>
          <ul>
           <li><a href="#E">E(d, type="i", index=0)</a></li>
           <li><a href="#elName">elName(name)</a></li>
           <li><a href="#elTag">elTag(name, typename=null)</a></li>
           <li><a href="#elClass">elClass(name)</a></li>
           <li><a href="#getValue">getValue(id)</a></li>
           <li><a href="#setValue">setValue(id, value)</a></li>
           <li><a href="#insertHTML">insertHTML(id, html, position=0)</a></li>
           <li><a href="#clearHTML">clearHTML(id)</a></li>
           <li><a href="#addChild">addChild(parent, child)</a></li>
           <li><a href="#getAttr">getAttr(id, attr)</a></li>
           <li><a href="#setAttr">setAttr(id, attr, value)</a></li>
           <li><a href="#dropAttr">dropAttr(id, attr)</a></li>
           <li><a href="#getCheck">getCheck(id)</a></li>
           <li><a href="#getCheckedId">getCheckedId(name)</a></li>
           <li><a href="#setCheck">setCheck(id, checked=true)</a></li>
           <li><a href="#setCheckByIndex">setCheckByIndex(elements, index)</a></li>
           <li><a href="#getSelectValue">getSelectValue(id)</a></li>
           <li><a href="#setSelect">setSelect(id, index)</a></li>
           <li><a href="#setTextStyle">setTextStyle(span_id, color="blank", bold=false, italic=false, underline=false, strike=false, font_size="normal")</a></li>
           <li><a href="#setDivStyle">setDivStyle(div_id, border_style="solid", border_width="thin", border_color="black", bg_color="white", rounded=false, shadow=false)</a></li>
          </ul>
        <li><a href="#event_functions">イベントハンドラ関数</a>
          <ul>
           <li><a href="#onPageLoad">onPageLoad(callback)</a></li>
           <li><a href="#clickEvent">clickEvent(id, callback)</a></li>
           <li><a href="#changeEvent">changeEvent(id, callback)</a></li>
           <li><a href="#bullet">bullet(shape="rect", width=32, height=32, border_width=1, border_color="black", bg_color="white")</a></li>
          </ul>
        </li>
        <li><a href="#request_functions">ウェブリクエスト関数</a>
          <ul>
           <li><a href="#fetchGET">fetchGET(url, data=null)</a></li>
           <li><a href="#fetchPOST">fetchPOST(url, data)</a></li>
           <li><a href="#fetchMultipartForm">fetchMultipartForm(url, form)</a></li>
           <li><a href="#fetchJSON">fetchJSON(url, json)</a></li>
           <li><a href="#fetchBLOB">fetchBLOB(url, buffer)</a></li>
          </ul>
        </li>
        <li><a href="#storage">ストレージ関数</a>
         <ul>
          <li><a href="#getStorageKeys">getStorageKeys(prefix="", session=true)</a></li>
          <li><a href="#getStorageValue">getStorageValue(key, prefix="", session=true)</a></li>
          <li><a href="#setStorageValue">setStorageValue(key, value, prefix="", session=true)</a></li>
          <li><a href="#clearSessionStorage">clearSessionStorage()</a></li>
          <li><a href="#deleteStorageKey">deleteStorageKey(key, prefix="", session=true)</a></li>
         </ul>
        </li>
        <li><a href="#dragdrop">Drag &amp; Drop 関数</a>
         <ul>
          <li><a href="#onDrop">onDrop(event, control, listid)</a></li>
          <li><a href="#onDragOver">onDragOver(event)</a></li>
          <li><a href="#onDragEnter">onDragEnter(event)</a></li>
         </ul>
        <li><a href="#html">HTML 作成関数</a>
         <ul>
          <li><a href="#htmlTable">htmlTable(rows, header=false, table="", tr="", th="", td="")</a></li>
          <li><a href="#htmlList">htmlList(data, type="ul", ul="", li="")</a></li>
          <li><a href="#htmlAnchor">htmlAnchor(url, text, target="")</a></li>
          <li><a href="#bullet">bullet(shape="rect", width=32, height=32, border_width=1, border_color="black", bg_color="white")</a></li>
         </ul>
        </li>
        <li><a href="#cookie">クッキー関数
         <ul>
          <li><a href="#getAllCookie">getAllCookie()</a></li>
          <li><a href="#setCookie">setCookie(key, value)</a></li>
          <li><a href="#removeCookie">removeCookie(key)</a></li>
         </ul>
        </li>
        <li><a href="#other_functions">日付時刻関数</a>
          <ul>
           <li><a href="#getNowString">getNowString()</a></li>
           <li><a href="#parseJSTString">parseJSTString(str)</a></li>
           <li><a href="#parseUTCString">parseUTCString(str)</a></li>
           <li><a href="#getDateTimeString">getDateTimeString(dtime)</a></li>
          </ul>
        </li>
      </ul>
      <br>

## 具体的内容は index.html 参照。
