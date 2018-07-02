(function () {  
    document.addEventListener('DOMContentLoaded', function () {  
        var autoClearFiled = document.querySelectorAll('.am-input-autoclear');  //重点,与“HTML中重点1”对应，获取所有class为<span style="font-family:Arial, Helvetica, sans-serif;">.am-input-autoclear</span>的元素  
        if(autoClearFiled){  
            Array.prototype.forEach.call(autoClearFiled, function (elem) {  
                var clearTrigger = elem.querySelector('.am-icon-clear');     //重点，与“HTML中重点2”对应，获取当前的class元素,监听事件  
                clearTrigger.style.visibility = 'hidden'; //隐藏 删除图标  
                var clearInput = elem.querySelector('input[type="text"],input[type="password"],input[type="number"],input[type="tel"],input[type="email"],input[type="url"],input[type="search"]');  
                if (clearTrigger && clearInput) {  
                    clearTrigger.addEventListener('touchstart', function () {  
                        clearInput.value = '';  
                        clearInput.focus();  
                        clearTrigger.style.visibility = 'hidden';  
                    }, false);  
                    clearTrigger.addEventListener('click', function () {  
                        clearInput.value = '';  
                        clearInput.focus();  
                        clearTrigger.style.visibility = 'hidden';  
                    }, false);  
                    clearInput.addEventListener('focus', function () {   
                        clearTrigger.style.visibility = (clearInput.value.length > 0) ? 'visible' : 'hidden';  
                    }, false);  
                    clearInput.addEventListener('input', function () {    
                        clearTrigger.style.visibility = (clearInput.value.length > 0) ? 'visible' : 'hidden';  
                    }, false);  
                    clearInput.addEventListener('blur', function () { //失去焦点  
                        setTimeout(function(){  
//                          clearTrigger.style.visibility = 'hidden';  
                        },200);  
                    }, false);  
                }  
            });  
        }  
    }, false);  
})();  