<!DOCTYPE html>
<html lang="ja">
<head>
 <meta charset="utf-8" />
 <meta name="viewport" content="width=device-width,initial-scale=1" />
 <title>JS365Lib 3.0</title>
 <!-- BootstrapのCSS読み込み -->
 <link href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
 <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/vs.min.css" rel="stylesheet">
 <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
 <script>hljs.initHighlightingOnLoad();</script>
 <style>
   code {
     border: solid thin silver;
     border-radius: 8px;
     padding: 5px;
   }
   form {
     margin: 6px;
     padding: 4px;
     border: solid thin silver;
     background-color: whitesmoke;
   }
 </style>
 <script src="/js/JS365Lib2.js"></script>
</head>

<body>
 <!-- ヘッダー -->
 <header  class="container bg-secondary rounded text-white text-center shadow">
  <h1 class="display-2 text-white text-center p-3">JS365Lib 3.0</h1>
 </header>

 <!-- 本文 -->
 <article class="container">
   <div class="fixed-top ms-5 mt-1"><a href="#contents">もくじ</a></div>
   <section class="row">
    <div class="col p-2 mt-5">
     <!-- 概要 -->
      <h2 class="text-success fs-2"><a id="abstraction">概要</a></h2>
      <p>JS365Lib は jQuery の代わりに使える軽量 JavaScript ライブラリであるが、
サーバへのリクエストには Fetch API を使っている。</p>
     <!-- 基本的な要件 -->
      <h3 class="mt-2"><a id="requirement">基本的な要件</a></h3>
      <ul>
        <li>JS365Lib.js は名前空間がないので、名前が衝突する場合は使用できない。一方、JS365Lib2.js は名前空間 "JS365Lib" を持つ。</li>
        <li>JS365Lib の関数は、DOM の構築が終わった後でないと使えない。<br>つまり、window.onload イベントが発生した後で使用する。これは <u>body タグで onload 属性を追加するか、window.onload イベントハンドラを追加する。</u></li>
      </ul>
     <!-- 内容一覧 (もくじ) -->
      <h3 class="mt-2"><a id="contents">内容一覧 (もくじ)</a></h3>
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

      <!-- エスケープ関数 -->
      <h2 class="text-success fs-2 mt-5"><a id="escape_functions">エスケープ関数</a></h2>
      <h3><a id="escURL">escURL(str, param=false)</a></h3>
       <p>escURL(str, param=false) は文字列 str を URL エンコードする。
param は文字列をパラメータとして渡す場合は、true にする。</p>
<p>具体的には param=false なら JavaScript 関数 encodeURI(str) をコールする。param=true ならJavaScript 関数 encodeURIComponent(str) をコールする。</p>
<p>encodeURI(str) は全角文字や空白を %xx に変換する。encodeURIComponent(str) はそれに加え、; , / ? : @ & = + $ # もエンコードする。これは GET メソッドのパラメータなどに使用する。</p>
      <br>

      <h3><a id="escHTML">escHTML(str)</a></h3>
      <p>escHTML(str) はパラメータ文字列 str 内に次の文字が含まれている場合、HTML 文字列として表示できるようにエンコードを行う。</p>
      <p>&amp;, &#x27;, &#x60;, &quot;, &lt;, &gt;</p>
      <br>


      <!-- DOM 関数 -->
      <h2 class="text-success fs-2 mt-5"><a id="dom_functions">DOM 関数</a></h2>
      <!--  E(id, type="i", index=0) -->
      <h3><a id="E">E(id, type="i", index=0)</a></h3>
      <p>この関数は id で指定した HTML 要素オブジェクトを取得する。type は id の意味を表し次のように定義されている。</p>
      <ul>
        <li>"i" : id は要素の id 属性である。(デフォルト)</li>
        <li>"n" : id は要素の name 属性である。</li>
        <li>"c" : id は要素の class 名である。</li>
        <li>"t" : id は要素のタグ名である。</li>
      </ul>
      <p>index は "i" 以外の場合の要素のインデックスである。</p>
      <pre><code>const checkbox1 = E("checkbox1");
const radio1 = E("radiogroup", "n", 0);
const radio2 = E("radiogroup", "n", 1);</code></pre>
      <br />

      <!--  elName(name) -->
      <h3><a id="elName">elName(name)</a></h3>
      <p>elName(name) は name で指定された要素(オブジェクト)の配列を返す。この関数は input タグのような name 属性を持つ要素を得るのに使う。
結果は配列となるので注意。配列となるのは、input type="radio" タグの場合を考慮したものである。</p>
      <br>

      <!--  elTag(tag) -->
      <h3><a id="elTag">elTag(tag)</a></h3>
      <p>elTag(tag) はタグ名 (tag) で指定された要素(オブジェクト)の配列を返す。
この関数は、あるタグの属性を一括して変更する場合などに使用できる。</p>
      <br>

      <!--  elClass(class) -->
      <h3><a id="elClass">elClass(class)</a></h3>
      <p>elClass(class) はクラス名 (class) を持つ要素(オブジェクト)の配列を返す。
この関数は、あるクラスを持つ要素を一括してその属性を変更する場合などに使用できる。</p>
      <br>

      <!--  getValue(id) -->
      <h3><a id="getValue">getValue(id)</a></h3>
      <p>getValue(id) は id で指定した要素の value 属性値または innerText 属性値を返す。
id は文字列または要素オブジェクトである。</p>
      <pre><code>const v1 = getValue("text1");
const el = E("check1");
const v2 = getValue(el);
</code></pre>
<br>

      <!--  setValue(id, value, escape=true) -->
      <h3><a id="setValue">setValue(id, value, escape=true)</a></h3>
      <p>setValue(id, value, esc) は id で指定した要素の value 属性値または innerText 属性値を設定する。
id は文字列または要素オブジェクトである。value は設定値で文字列とする。
escape=false とすると HTML をエスケープせずにそのままセットする。</p>
      <p>使用例</p>
      <pre><code>setValue("result", "OK");
const el = E("div1");
setValue(el, "Done.");</code></pre>
<br>

      <!--  insertHTML(id, html, position=1) -->
      <h3><a id="insertHTML">insertHTML(id, html, position=1)</a></h3>
      <p>insertHTML(id, html, position=0) は id で指定した要素の position で指定した位置に HTML (html) を挿入する。
position は 0 ～ 3 までの値を取り、次のような意味である。デフォルトでは開始タグの直前に HTML を挿入する。</p>
      <ul>
        <li>0: id で指定した要素の直前</li>
        <li>1: id で指定した要素の開始タグの直後</li>
        <li>2: id で指定した要素の終了タグの直前</li>
        <li>3: id で指定した要素の直後</li>
      </ul>
      <pre><code>const el = E("insertHTML");
insertHTML(el, "<div class=\"text-primary\">beforebegin</div>", 0);
insertHTML(el, "<div class=\"text-warning\">afterbegin</div>", 1);
insertHTML(el, "<div class=\"text-danger\">beforeend</div>", 2);
insertHTML(el, "<div class=\"text-secondary\">afterend</div>", 3);</code></pre>
<br>

      <!--  clearHTML(id) -->
      <h3><a id="clearHTML">clearHTML(id)</a></h3>
      <p>id で指定した要素に含まれる HTML をクリアする。clearHTML(id) は insertHTML() でタグの内側に挿入した HTML をクリアするのに使用する。</p>
      <p>使用例</p>
      <pre><code>clearHTML("list");</code></pre>
      <br>

      <!--  addChild(parent, tag) -->
      <h3><a id="addChild">addChild(parent, tag)</a></h3>
      <p>parent で指定した親要素の下に tag で指定した要素を追加する。parent, tag は文字列 id または要素である。</p>
      <pre><code>const ul = E("ulParent");
const li1 = addChild(ul, "li");
li1.innerText = "child(1)";
const li2 = addChild(ul, "li");
li2.innerText = "child(2)";</code></pre>
<br>

      <!--  getAttr(id, attr) -->
      <h3><a id="getAttr">getAttr(id, attr)</a></h3>
      <p>id で指定した要素の attr で指定した属性の値を返す。id は文字列または要素オブジェクトとする。</p>
      <pre><code>setValue("attrInfo", getAttr(attrDiv, "style"));</code></pre>
<br>

      <!--  setAttr(id, attr, value) -->
      <h3><a id="setAttr">setAttr(id, attr, value)</a></h3>
      <p>id で指定した要素の attr で指定した属性の値を value にする。id は文字列または要素オブジェクトとする。</p>
      <pre><code>setAttr(attrDiv, "style", "border: solid thin gray; width:150px; height:100px;");</code></pre>
<br>

      <!--  dropAttr(id, attr) -->
      <h3><a id="dropAttr">dropAttr(id, attr)</a></h3>
      <p>id で指定した要素の attr で指定した属性を削除する。id は文字列または要素オブジェクトとする。</p>
      <pre><code>dropAttr(attrDiv, "style");</code></pre>
      <br>

      <!--  getCheck(id) -->
      <h3><a id="getCheck">getCheck(id)</a></h3>
      <p>チェックボックス / ラジオボタンのチェック状態を得る。id はチェックボックスの id または要素オブジェクト。</p>
      <pre><code>const b = getCheck("check1");</code></pre>
      <br>

      <!--  getCheckedId(name) -->
      <h3><a id="getCheckedId">getCheckedId(name)</a></h3>
      <p>ラジオボタンのチェックされている id を得る。name はラジオボタンの name 属性値。</p>
      <pre><code>const id = getCheckedId("radio");</code></pre>
      <br>

      <!--  setCheck(id, checked=true) -->
      <h3><a id="setCheck">setCheck(id, checked=true)</a></h3>
      <p>チェックボックス / ラジオボタンのチェック状態をセット・リセットする。id はチェックボックスの id または要素オブジェクトとする。</p>
      <pre><code>setCheck("check1");</code></pre>
      <br>

      <!--  setCheckByIndex(elements, index) -->
      <h3><a id="setCheckByIndex">setCheckByIndex(elements, index)</a></h3>
      <p>ラジオボタングループの指定した番号のラジオボタンをチェック状態にする。elements は name 属性がすべて同じのラジオボタンの配列。
index はそのグループのインデックス。</p>
      <pre><code>setCheckByIndex(radios, 1)</code></pre>
      <br>

      <!--  getSelectValue(id) -->
      <h3><a id="getSelectValue">getSelectValue(id)</a></h3>
      <p>セレクタ― (ドロップダウン) の選択されているオプション(値)を得る。id はセレクタの id または要素オブジェクト。</p>
      <pre><code>const val = getSelectValue("select1");</code></pre>
      <br>

      <!--  setSelect(id, index) -->
      <h3><a id="setSelect">setSelect(id, index, check=true)</a></h3>
      <p>セレクタ― (ドロップダウン) のオプションを選択状態を設定する。id はセレクタの id または要素オブジェクト。
index は子要素である option 要素のインデックス、check はその option 要素の選択状態。</p>
      <pre><code>setSelect("select1", 0);</code></pre>
      <br>

      <!--  setTextStyle(span_id, color="blank", bold=false, italic=false, underline=false, strike=false, font_size="normal") -->
      <h4><a id="setTextStyle">setTextStyle(span_id, color="blank", bold=false, italic=false, underline=false, strike=false, font_size="normal")</a></h4>
      <p>この関数は span タグで囲まれた文字列のスタイルを変更するのに使用する。</p>
      <pre><code>setTextStyle("span1", "red", true);</code></pre>
      <br>

      <!--  setDivStyle(div_id, border_style="solid", border_width="thin", border_color="black", bg_color="white", rounded=false, shadow=false) -->
      <h4><a id="setDivStyle">setDivStyle(div_id, border_style="solid", border_width="thin", border_color="black", bg_color="white", rounded=false, shadow=false)</a></h4>
      <p>この関数は div タグの領域の属性を変更するのに使用する。</p>
      <pre><code>setDivStyle("div1", border_width="2px", border_color="red");</code></pre>
      <br>


      <!-- イベントハンドラ関数 -->
      <h2 class="text-success fs-2 mt-2"><a id="event_functions">イベントハンドラ関数</a></h3>

      <!--  onPageLoad(callback) -->
      <h3><a id="onPageLoad">onPageLoad(callback)</a></h3>
      <p>ウェブページがロードされてすべての要素をアクセスできるようになったときに callback 関数がコールされる。
つまり、callback は window.onload イベントハンドラである。clickEvent(id, callback), changeEvent(id, callback) 関数は本関数
の callback 内でコールする必要がある。</p>
       <pre><code>onPageLoad(() => {
  clickEvent("button1", () => { .... }
});</code></pre>
     <br>

      <!--  clickEvent(id, callback) -->
      <h3><a id="clickEvent">clickEvent(id, callback)</a></h3>
      <p>id で指定した要素をクリックしたとき発生するイベントのハンドラを登録する。id は文字列または要素オブジェクトとする。
この関数は、onPageLoad(callback) の callback 内でコールすること。</p>
      <pre><code>clickEvent("button1", () => {
 count++;
 setValue("event1", count);
});</code></pre>
      <br>

      <!--  changeEvent(id, callback) -->
      <h3><a id="changeEvent">changeEvent(id, callback)</a></h3>
      <p>id で指定した要素で選択項目を変更したときき発生するイベントのハンドラを登録する。
id は文字列または要素オブジェクトとする。この関数は、onPageLoad(callback) の callback 内でコールすること。</p>
      <p>使用例</p>
      <pre><code>changeEvent("select1", () => {
 setValue("event2", getValue("select1"));
});</code></pre>
      <br>

      <!-- シリアライズ関数 -->
      <h2 class="text-success fs-2 mt-2"><a id="serialize_functions">シリアライズ関数</a></h2>
      <!--  hash_to_params(hash) -->
      <h3><a id="hash_to_params">hash_to_params(hash)</a></h3>
      <p>オブジェクト (hash) を URL エンコードされたパラメータに変換する。例えば、hash = {"a":0, "b":1} の場合、
"a=0&b=1" に変換される。</p>
      <pre><code>const hash = {"a":0, "b":1};
const param = hash_to_params(hash);</code></pre>
      <br>

      <!--  array_to_params(idlist) -->
      <h3><a id="array_to_params">array_to_params(idlist)</a></h3>
      <p>value 属性を持つ HTML 要素の id 配列に基づいて、その HTML 要素の value を取得して URL エンコードされたパラメータに変換する。
例えば、hash = {"text1", "check1"} の場合、"text1=Hello&check1=c1" に変換される。</p>
      <pre><code>const idlist = ["text1", "check1"];
const param = array_to_params(idlist);</code></pre>
      <br>

      <!-- ウェブリクエスト関数 -->
      <h2 class="text-success fs-2 mt-2"><a id="request_functions">ウェブリクエスト関数</a></h2>
      <!--  fetchGET(url, data=null) -->
      <h3><a id="fetchGET">await fetchGET(url, data=null)</a></h3>
      <p>fetchGET(url) は url に GET メソッドでリクエストを行い テキスト (text/plain)、JSON (application/json)、HTML (text/html)
あるいは XML (application/xml) として応答として受け取る。受け取るデータがどの形式かは Response の Content-Type で判別する。
data はパラメータのオブジェクト (Hash) または null とする。</p>
      <pre><code>const result = await fetchGET("/echo?message=" + getValue("text1"));
const result = await fetchGET("/echo", {"message":"Hello World!"});</code></pre>
      <br>

      <!--  fetchPOST(url, data) -->
      <h3><a id="fetchPOST">await fetchPOST(url, data)</a></h3>
      <p>fetchGET(url) は url に POST メソッドでリクエストを行い テキスト (text/plain)、JSON (application/json)、HTML (text/html)
あるいは XML (application/xml) として応答として受け取る。受け取るデータがどの形式かは Response の Content-Type で判別する。
data はパラメータのオブジェクト (Hash) とする。</p>
      <pre><code>const result = await fetchPOST("/echo", {"message":"Hello"})</code></pre>
      <br>

      <!--  fetchMultipartForm(url, form) -->
      <h3><a id="fetchMultipartForm">await fetchMultipartForm(url, form)</a></h3>
      <p>マルチパートフォーム (属性 enctype="multipart/form-data" を持つ) form を url で指定したホストに POST する。
form は FormData に変換可能な form 要素とする。つまり、form およびその子要素は name 属性を持つものとする。
結果は JSON として返される。</p>
      <pre><code>const result = await fetchMultipartForm("/post_mpform", form1);</code></pre>
      <br>

      <!--  fetchJSON(url, obj) -->
      <h3><a id="fetchJSON">await fetchJSON(url, obj)</a></h3>
      <p>JSON データあるいはオブジェクトを JSON 形式のデータに変換し url で指定したホストへ POST する。結果は JSON として返される。</p>
      <pre><code>const data = {"a":0, "b":1};
const result = await fetchJSON("/post_json", data);</code></pre>
      <br>

      <!--  fetchBLOB(url, buffer) -->
      <h3><a id="fetchBLOB">await fetchBLOB(url, buffer)</a></h3>
      <p>buffer で与えられたバイト列を url で指定されるホストへ POST する。buffer の内容は純粋なバイナリーデータで、エンコードする必要はない。
結果は JSON として返される。</p>
      <pre><code>const result = await fetchBLOB("/post_blob", buffer);</code></pre>
      <br>

      <!-- ストレージ関数 -->
      <h2 id="storage" class="text-success fs-2 mt-2"><a id="storage">ストレージ関数</a></h2>
      <!--  getStorageKeys(prefix="", session=true) -->
      <h3><a id="getStorageKeys"></a>getStorageKeys(prefix="", session=true)</h3>
      <p>先頭が prefix で始まるストレージのキーを列挙する。session=true のときは sessionStorage、false のときは localStorage が対象になる。なお、列挙差有れるキーは、prefix を取り除いたものになる。</p>
      <pre><code>// 登録済みの DB を listDB に設定する。
function recoverListDB() {
  const dbkeys = getStorageKeys(prefix=PREFIX, session=false);
  for (const key of dbkeys) {
    if (key == "currentDB") {
      const currentDB = getStorageValue(key, PREFIX, session=false);
      setValue("currentDB", currentDB);
    }
    else {
      const db = getStorageValue(key, PREFIX, session=false);
      insertHTML(listDB, `&lt;option value=\"${key}\">${db}&lt;/option>\n`, 2);
    }
  }
}</code></pre>
      <br>

      <!--  getStorageValue(key, prefix="", session=true) -->
      <h3><a id="getStorageValue"></a>getStorageValue(key, prefix="", session=true)</h3>
      <p>指定した prefix で始まるキーの値を得る。つまり、prefix + key が実際のストレージのキーである。session の意味は getStorageKeys() と同じ。</p>
      <pre><code>const db = getStorageValue(key, PREFIX, session=false);</code></pre>
      <br>

      <!--  setStorageValue(key, value, prefix="", session=true) -->
      <h3><a id="setStorageValue"></a>setStorageValue(key, value, prefix="", session=true)</h3>
      <p>指定した prefix で始まるキーの値を value にする。キーが存在しない場合は、そのキーが追加される。つまり、prefix + key が実際のストレージのキーである。session の意味は getStorageKeys() と同じ。</p>
      <pre><code>setStorageValue("currentDB", dbpath, prefix=PREFIX, session=false);</code></pre>
      <br>

      <!--  clearSessionStorage() -->
      <h3><a id="clearSessionStorage"></a>clearSessionStorage()</h3>
      <p>sessionStorage のすべてのキーを削除する。localStorage は他のアプリとの共有なので、個別にキーを削除するものとする。</p>
      <pre><code>clearSessionStorage();</code></pre>
      <br>

      <!--  deleteStorageKey(key, prefix="", session=true) -->
      <h3><a id="deleteStorageKey"></a>deleteStorageKey(key, prefix="", session=true)</h3>
      <p>指定した prefix で始まるキーを削除する。session の意味は getStorageKeys() と同じ。</p>
      <pre><code>deleteStorageKey("x", PREFIX);</code></pre>
      <br>

      <!-- Drag &amp; Drop 関数 -->
      <h2 id="dragdrop" class="text-success fs-2 mt-2"></a>Drag &amp; Drop 関数</h2>
      <!--  onDrop(event, control, p) -->
      <h3><a id="onDrop">onDrop(event, control, p)</a></h3>
      <p>ファイルがドラッグ＆ドロップ領域にドロップしたときにコールする。event はドロップイベント、control は input[type="file"] オブジェクト、p はメッセージを表示する領域 (p タグなど)</p>
      <p>この関数を直接、イベントハンドラとして使用するのではなく、Drop イベントハンドラからコールすること。後述の使用例を参照。</p>
      <br>

      <!--  onDragOver(event) -->
      <h3><a id="onDragOver">onDragOver(event)</a></h3>
      <p>ファイルがドラッグ＆ドロップ領域を移動したときのハンドラ。<</p>
      <br>

      <!--  onDragOver(event) -->
      <h3><a id="onDragEnter">onDragEnter(event)</a></h3>
      <p>ファイルがドラッグ＆ドロップ領域に入ったときのハンドラ。</p>
      <br>
      <h4>ドラッグ＆ドロップの使用例</h4>
      <pre><code>&lt;!DOCTYPE html>
&lt;html lang="ja">
&lt;head>
 &lt;meta charset="utf-8" />
 &lt;meta name="viewport" content="width=device-width,initial-scale=1" />
 &lt;title>Drag &amp; Drop&lt;/title>
 &lt;!-- BootstrapのCSS読み込み -->
 &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
 &lt;style>
   #dest {
     width:640px;
     height:100px;
     border: solid thin gray;
     background-color:lightgray;
     border-radius:6px;
   }
   #message {
     text-align: center;
     margin-top:50px;
     margin-left:10px;
   }
 &lt;/style>
 &lt;script src="/js/JS365Lib3.js">&lt;/script>
 &lt;script>
    function dropAction(e) {
      onDrop(e, form1.file1, "dest");
    }
 &lt;/script>
&lt;/head>

&lt;body>
 &lt;!-- ヘッダー -->
 &lt;header class="container">
  &lt;h1 class="header-1 text-center p-5 border rounded border-warning bg-light">Drag &amp; Drop&lt;/h1>
  &lt;p class="text-center">&lt;a href="/">HOME&lt;/a>&lt;/p>
 &lt;/header>

 &lt;!-- 本文 -->
 &lt;article class="container mt-5">
  &lt;form name="form1" method="POST" enctype="multipart/form-data" action="/file_upload">
   &lt;input type="file" name="file1" style="display:none">
   &lt;div id="dest" class="border bg-light text-center"  draggable="true"
     ondragenter="onDragEnter(event);"
     ondragover="onDragOver(event);"
     ondrop="dropAction(event)">
    ここへドロップ (1個のみ)
   &lt;/div>
   &lt;div style="margin-left:28%;margin-top:25px;">&lt;button type="submit" class="btn btn-primary">upload&lt;/button>&lt;/div>
  &lt;/form>
  &lt;div id="message">&lt;/div>
 &lt;/article>

 &lt;!-- フッター -->
 &lt;footer class="container">
  &lt;p class="text-center mt-4">&lt;a href="#top">TOP&lt;/a>&lt;/p>
  &lt;p>&nbsp;&lt;/p>
 &lt;/footer>
 &lt;!-- BootstrapのJS読み込み -->
 &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js">&lt;/script>
&lt;/body>
&lt;/html></code></pre>
      <br>

      <!-- HTML 作成関数 -->
      <h2 id="html" class="text-success fs-2 mt-2"><a id="storage">HTML 作成関数</a></h2>
      <!--  htmlTable(rows, header=false, table="", tr="", th="", td="") -->
      <h3><a id="htmlTable">htmlTable(rows, header=false, table="", tr="", th="", td="")</a></h3>
      <p>HTML の表を作成する。rows は表のデータ行列である。header=true の場合は、rows の最初の行が表題データであることを意味する。false の場合はすべてデータとみなす。</p>
      <p>table, tr, th, td はそれぞれのタグのクラスを指定する。("" はクラスの指定なしを意味する)</p>
      <p>使用例</p>
      <pre><code>const data = [["A", "B"], ["C", "D"], ["E", "F"]];
setValue("result", htmlTable(data, false, "table"), false);</code></pre>
      <br>

      <!--  htmlList(data, type="ul", ul="", li="") -->
      <h3><a id="htmlList">htmlList(data, type="ul", ul="", li="")</a></h3>
      <p>HTML のリストを作成する。data は一覧のデータ配列である。type は "ul" または "ol" である。</p>
      <p>ul, li はそれぞれのタグのクラスを指定する。("" はクラスの指定なしを意味する)</p>
      <pre><code>const data = ["async", "await", "function"];
const html = htmlList(data);
insertHTML("div1", html);</code></pre>
      <br>

      <!--  htmlAnchor(url, text, target="") -->
      <h3><a id="htmlAnchor">htmlAnchor(url, text, target="")</a></h3>
      <p>a タグを作成する。url はリンク先、text は表示文字列、target は target 属性である。<p>
      <pre><code>const a = htmlAnchor("http://localhost", "Home");
insertHTML("div1", a);</code></pre>
      <br>

      <!--  bullet(shape="rect", width=32, height=32, border_width=1, border_color="black", bg_color="white") -->
      <h3><a id="bullet">bullet(shape="rect", width=32, height=32, border_width=1, border_color="black", bg_color="white")</a></h3>
      <p>この関数は 円または矩形の SVG を生成する。主に小さな図形を HTML ページに埋め込むのに使用する。</p>
      <pre><code>const svg = bullet("circle", 16, 16, 1, "black", "silver")
insertHTML("div1", svg);</code></pre>
      <br>

      <!-- クッキー関数 -->
      <h2 class="text-success fs-2 mt-2"><a id="cookie">クッキー関数</a></h2>
      <p>(注意) クッキー関数は Response オブジェクトの Set-Cookie ヘッダの設定によっては無効になることがある。</p></p>
      <!--  getAllCookie() -->
      <h3><a id="getAllCookie"></a>getAllCookie()</h3>
      <p>取得可能なすべてのクッキーを辞書形式で取得する。辞書のキーはクッキー名、値はクッキーの値である。</p>
      <pre><code>cookies = getAllCookie();</code></pre>
      <br>

      <!--  setCookie(key, value) -->
      <h3><a id="setCookie"></a>setCookie(key, value)</h3>
      <p>１つのクッキーを追加あるいは変更する。key はクッキーの名前で存在しない場合は値 value の追加となり、存在する場合は値が value に更新される。</p>
      <pre><code>setCookie("address", "192.168.1.10");</code></pre>
      <br>

      <!--  removeCookie(key) -->
      <h3><a id="removeCookie"></a>removeCookie(key)</h3>
      <p>名前が key であるクッキーを削除する。</p>
      <pre><code>removeCookie("name1");</code></pre>
      <br>


      <!-- 日付時刻関数 -->
      <h2 id="html" class="text-success fs-2 mt-2"><a id="datetime">日付時刻関数</a></h2>
      <!--  getNowString() -->
      <h3><a id="getNowString">getNowString()</a></h3>
      <p>yyyy-mm-dd hh:mm:ss 形式かつ JST の現在の時刻を文字列として返す。</p>
      <pre><code>const now = getNowString();</code></pre>
      <br>

      <!--  parseJSTString(str) -->
      <h3><a id="parseJSTString">parseJSTString(str)</a></h3>
      <p>yyyy-mm-dd hh:mm:ss 形式の文字列を JST として Date オブジェクトに変換する。</p>
      <pre><code>const date1 = parseJSTString("2020-01-01 00:00:00")</code></pre>
      <br>

      <!--  parseUTCString(str) -->
      <h3><a id="parseUTCString">parseUTCString(str)</a></h3>
      <p>dd-mm-yyyy hh:mm:ss 形式の文字列を UTC として Date オブジェクトに変換する。</p>
      <pre><code>const utc = parseUTCString("01-01-2020 00:00:00")<</code></pre>
      <br>

      <!--  getDateTimeString(dtime) -->
      <h3><a id="getDateTimeString">getDateTimeString(dtime)</a></h3>
      <p>Date オブジェクトを YYYY-mm-dd HH:MM;SS 形式の文字列として返す。</p>
      <pre><code>const now = getDateTimeString(new Date());</code></pre>
      <br>

    </div>
   </section>
 </article>

 <!-- フッター -->
 <footer class="container">
  <p class="text-center mt-4"><a href="#top">TOP</a></p>
  <p>&nbsp;</p>
 </footer>
 <!-- BootstrapのJS読み込み -->
 <script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
