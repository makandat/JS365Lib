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
#### エスケープ
* escURL(str, param=false)
* escHTML(str)

#### DOM 関数
* E(d, type="i", index=0)
* elName(name)
* elTag(name, typename=null)
* elClass(name)
* getValue(id)
* setValue(id, value)
* insertHTML(id, html, position=0)
* clearHTML(id)
* addChild(parent, child)
* getAttr(id, attr)
* setAttr(id, attr, value)
* dropAttr(id, attr)
* getCheck(id)
* getCheckedId(name)
* setCheck(id, checked=true)
* setCheckByIndex(elements, index)
* getSelectValue(id)
* setSelect(id, index)
* setTextStyle(span_id, color="blank", bold=false, italic=false, underline=false, strike=false, font_size="normal")
* setDivStyle(div_id, border_style="solid", border_width="thin", border_color="black", bg_color="white", rounded=false, shadow=false)

#### イベントハンドラ関数
* onPageLoad(callback)
* clickEvent(id, callback)
* changeEvent(id, callback)

#### ウェブリクエスト関数
* fetchGET(url, data=null)
* fetchPOST(url, data)
* fetchMultipartForm(url, form)
* fetchJSON(url, json)
* fetchBLOB(url, buffer)

#### ストレージ関数
* getStorageKeys(prefix="", session=true)
* getStorageValue(key, prefix="", session=true)
* setStorageValue(key, value, prefix="", session=true)
* clearSessionStorage()
* deleteStorageKey(key, prefix="", session=true)

#### Drag &amp; Drop 関数
* onDrop(event, control, listid)
* onDragOver(event)
* onDragEnter(event)

#### HTML 作成関数
* htmlTable(rows, header=false, table="", tr="", th="", td="")
* htmlList(data, type="ul", ul="", li="")
* htmlAnchor(url, text, target="")
* bullet(shape="rect", width=32, height=32, border_width=1, border_color="black", bg_color="white")

#### クッキー関数
* getAllCookie()
* setCookie(key, value)
* removeCookie(key)

#### 日付時刻関数
* getNowString()
* parseJSTString(str)
* parseUTCString(str)
* getDateTimeString(dtime)

#### 具体的内容は index.html 参照。
