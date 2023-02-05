<h1>JS365Lib</h1>
<hr>
<p>This is a JavaScript library for my conviniency.</p>
<h2>Usage</h2>
<p>&lt;script src="/JS_path/JS365Lib.js"&gt;&lt;/script&gt; or &lt;script src="/JS_path/JS365Lib2.js"&gt;&lt;/script&gt;</p>
<p>JS365Lib2.js has the namespace 'JS365Lib'.</p>
<h2>Functions</h2>
<ol>
 <li>escURL(str): Escape URL special chars.</li>
 <li>escHTML(str): Escape HTML special chars.</li>
 <li>E(id, type="i", index=0): Get the element object.</li>
 <li>getValue(id): Get the value or inner text.</li>
 <li>setValue(id, value, escape=true): Set the value or inner text.</li>
 <li>insertHTML(id, html, position=0): Insert the HTML before/after the element.</li>
 <li>create(tag, elem=null): Create a new element and append it after the element if elem is not null.</li>
 <li>addChild(parent, child): Add the child element to the parent element.</li>
 <li>getAttr(id, attr): Get the attribute value of attr of id element.</li>
 <li>setAttr(id, attr, value): Set the attribute value of attr of id element.</li>
 <li>dropAttr(id, attr): Drop the attribute of attr of id.</li>
 <li>getText(url, callback): Get a text from url then call the callback(str).</li>
 <li>getJSON(url, callback): Get a json from url then call the callback(json).</li>
 <li>fetchText(url, data, method, callback): Get a text from url with parameters then call the callback(str).</li>
 <li>fetchJSON(url, data, method, callback): Get a json from url with parameters then call the callback(json).</li>
 <li>fetchBLOB(url, data, method, callback): Get a blob from url with parameters then call the callback(blob).</li>
 <li>fetchArrayBuffer(url, data, method, callback): Get a buffer from url with parameters then call the callback(buffer).</li>
 <li>postFormData(url, form, callback): Post the form then call the callback(json).</li>
 <li>postJSON(url, data, callback): Post the JSON format data then call the callback(json).</li>
 <li>clickEvent(id, callback): Add a click event listener to the element.</li>
 <li>changeEvent(id, callback): Add a change event listener to the element.</li>
</ol>
<h2>Samples</h2>
<ol>
 <li>index.html: escURL(str) .. E(id, "t", index)</li>
 <li>index2.html: insertHTML(id, html, position) .. changeEvent(id, callback)</li>
 <li>webapi.html: getText(url, callback) .. postJSON(url, data, callback)</li>
</ol>


