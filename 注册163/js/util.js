// JavaScript Document
/** 

 * $("#ID") 

 * $("Name") 

 */
 
function $(flag) { 

    if (flag.charAt(0) == '#') { 

        return document.getElementById(flag.substring(1)); 

    } else { 

        return document.getElementsByName(flag); 

    } 

} 

/** 

 * 获取子节点 

 * @param Element parent 

 */
 
function children(parent) { 

    var children = []; 

    for (var i = 0; i < parent.childNodes.length; i++) { 

        if (parent.childNodes[i].nodeType == 1) { 

            children.push(parent.childNodes[i]); 

        } 

    } 

    return children; 

} 

/** 

 * 获取上一个兄弟节点 

 * @param Element sibling 

 */
 
function previousNode(sibling){ 

    var previous = sibling.previousSibling; 

    if (previous != null) { 

        if (previous.nodeType == 1) { 

            return previous; 

        } else { 

            return previousNode(previous); 

        } 

    } else { 

        return null; 

    } 

} 

/** 

 * 获取下一个兄弟节点 

 * @param Element sibling 

 */
 
function nextNode(sibling) { 

    var next = sibling.nextSibling; 

    if (next != null) { 

        if (next.nodeType == 1) { 

            return next; 

        } else { 

            return nextNode(next); 

        } 

    } else { 

        return null; 

    } 

} 

/** 

 * 扩展String方法-去首尾空格 

 */
 
String.prototype.trim=function(){ 

        return this.replace(/^\s+|\s+$/g, "");   

}