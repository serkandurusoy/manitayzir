function walkText(node) {
  if (node.nodeType == 3) {
    node.data = node.data
      .replace(/serkandurusoy/g, "cerenin kapatmasi")
      .replace(/Serkan Durusoy/g, "cerenin kapatmasi")
      .replace(/serkan durusoy/g, "cerenin kapatmasi")
      .replace(/serkan/g, "cerenin kapatmasi")
      .replace(/Serkan/g, "cerenin kapatmasi")
      .replace(/tufaneksioglu/g, "fatmanurun kolesi")
      .replace(/Tufan Ekşioğlu/g, "fatmanurun kolesi")
      .replace(/tufan ekşioğlu/g, "fatmanurun kolesi")
      .replace(/tufan eksioglu/g, "fatmanurun kolesi")
      .replace(/Tufan Eksioglu/g, "fatmanurun kolesi")
      .replace(/tufan/g, "fatmanurun kolesi")
      .replace(/Tufan/g, "fatmanurun kolesi")
    ;
  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (let i = 0; i < node.childNodes.length; i++) {
      walkText(node.childNodes[i]);
    }
  }
}
walkText(document.body);

let observeDOM = (function(){
  let MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
    eventListenerSupported = window.addEventListener;

  return function(obj, callback){
    if( MutationObserver ){
      let obs = new MutationObserver(function(mutations, observer){
        if( mutations[0].addedNodes.length )
          callback();
      });
      obs.observe( obj, { childList:true, subtree:true });
    }
    else if( eventListenerSupported ){
      obj.addEventListener('DOMNodeInserted', callback, false);
    }
  };
})();

observeDOM( document.body ,function(){
  walkText(document.body);
});
