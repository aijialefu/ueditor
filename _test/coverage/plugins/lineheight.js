/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/lineheight.js']) {
  _$jscoverage['plugins/lineheight.js'] = [];
  _$jscoverage['plugins/lineheight.js'][13] = 0;
  _$jscoverage['plugins/lineheight.js'][14] = 0;
  _$jscoverage['plugins/lineheight.js'][15] = 0;
  _$jscoverage['plugins/lineheight.js'][16] = 0;
  _$jscoverage['plugins/lineheight.js'][18] = 0;
  _$jscoverage['plugins/lineheight.js'][19] = 0;
  _$jscoverage['plugins/lineheight.js'][22] = 0;
  _$jscoverage['plugins/lineheight.js'][23] = 0;
  _$jscoverage['plugins/lineheight.js'][24] = 0;
  _$jscoverage['plugins/lineheight.js'][25] = 0;
}
_$jscoverage['plugins/lineheight.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///import plugins\\paragraph.js</span>","<span class=\"c\">///commands &#34892;&#38388;&#36317;</span>","<span class=\"c\">///commandsName  LineHeight</span>","<span class=\"c\">///commandsTitle  &#34892;&#38388;&#36317;</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * @description &#35774;&#32622;&#34892;&#20869;&#38388;&#36317;</span>","<span class=\"c\"> * @name baidu.editor.execCommand</span>","<span class=\"c\"> * @param   {String}   cmdName     lineheight&#35774;&#32622;&#34892;&#20869;&#38388;&#36317;</span>","<span class=\"c\"> * @param   {String}   value              &#20540;</span>","<span class=\"c\"> * @author zhuwenxuan</span>","<span class=\"c\"> */</span>","UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'lineheight'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","    <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","    me<span class=\"k\">.</span>setOpt<span class=\"k\">(</span><span class=\"k\">{</span><span class=\"s\">'lineheight'</span><span class=\"k\">:[</span><span class=\"s\">'1'</span><span class=\"k\">,</span> <span class=\"s\">'1.5'</span><span class=\"k\">,</span><span class=\"s\">'1.75'</span><span class=\"k\">,</span><span class=\"s\">'2'</span><span class=\"k\">,</span> <span class=\"s\">'3'</span><span class=\"k\">,</span> <span class=\"s\">'4'</span><span class=\"k\">,</span> <span class=\"s\">'5'</span><span class=\"k\">]</span><span class=\"k\">}</span><span class=\"k\">);</span>","    me<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'lineheight'</span><span class=\"k\">]</span> <span class=\"k\">=</span>  <span class=\"k\">{</span>","        execCommand <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span> cmdName<span class=\"k\">,</span>value <span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>execCommand<span class=\"k\">(</span><span class=\"s\">'paragraph'</span><span class=\"k\">,</span><span class=\"s\">'p'</span><span class=\"k\">,</span><span class=\"k\">{</span>style<span class=\"k\">:</span><span class=\"s\">'line-height:'</span><span class=\"k\">+</span> <span class=\"k\">(</span>value <span class=\"k\">==</span> <span class=\"s\">\"1\"</span> <span class=\"k\">?</span> <span class=\"s\">\"normal\"</span> <span class=\"k\">:</span> value <span class=\"k\">+</span> <span class=\"s\">'em'</span><span class=\"k\">)</span> <span class=\"k\">}</span><span class=\"k\">);</span>","            <span class=\"k\">return</span> <span class=\"k\">true</span><span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        queryCommandValue <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> pN <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>filterNodeList<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>selection<span class=\"k\">.</span>getStartElementPath<span class=\"k\">(),</span><span class=\"k\">function</span><span class=\"k\">(</span>node<span class=\"k\">)</span><span class=\"k\">{</span><span class=\"k\">return</span> domUtils<span class=\"k\">.</span>isBlockElm<span class=\"k\">(</span>node<span class=\"k\">)</span><span class=\"k\">}</span><span class=\"k\">);</span>","            <span class=\"k\">if</span><span class=\"k\">(</span>pN<span class=\"k\">)</span><span class=\"k\">{</span>","                <span class=\"k\">var</span> value <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getComputedStyle<span class=\"k\">(</span>pN<span class=\"k\">,</span><span class=\"s\">'line-height'</span><span class=\"k\">);</span>","                <span class=\"k\">return</span> value <span class=\"k\">==</span> <span class=\"s\">'normal'</span> <span class=\"k\">?</span> <span class=\"s\">1</span> <span class=\"k\">:</span> value<span class=\"k\">.</span>replace<span class=\"k\">(</span><span class=\"s\">/[^\\d.]*/ig</span><span class=\"k\">,</span><span class=\"s\">\"\"</span><span class=\"k\">);</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","<span class=\"k\">}</span><span class=\"k\">;</span>","",""];
_$jscoverage['plugins/lineheight.js'][13]++;
UE.plugins.lineheight = (function () {
  _$jscoverage['plugins/lineheight.js'][14]++;
  var me = this;
  _$jscoverage['plugins/lineheight.js'][15]++;
  me.setOpt({"lineheight": ["1", "1.5", "1.75", "2", "3", "4", "5"]});
  _$jscoverage['plugins/lineheight.js'][16]++;
  me.commands.lineheight = {execCommand: (function (cmdName, value) {
  _$jscoverage['plugins/lineheight.js'][18]++;
  this.execCommand("paragraph", "p", {style: ("line-height:" + ((value == "1")? "normal": (value + "em")))});
  _$jscoverage['plugins/lineheight.js'][19]++;
  return true;
}), queryCommandValue: (function () {
  _$jscoverage['plugins/lineheight.js'][22]++;
  var pN = domUtils.filterNodeList(this.selection.getStartElementPath(), (function (node) {
  _$jscoverage['plugins/lineheight.js'][22]++;
  return domUtils.isBlockElm(node);
}));
  _$jscoverage['plugins/lineheight.js'][23]++;
  if (pN) {
    _$jscoverage['plugins/lineheight.js'][24]++;
    var value = domUtils.getComputedStyle(pN, "line-height");
    _$jscoverage['plugins/lineheight.js'][25]++;
    return ((value == "normal")? 1: value.replace(/[^\d.]*/gi, ""));
  }
})};
});
