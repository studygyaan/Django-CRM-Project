// ==================================================
// 
// jquery-input-mask-phone-number v1.0
//
// Licensed (The MIT License)
// 
// Copyright © Raja Rama Mohan Thavalam <rajaram.tavalam@gmail.com>
//
// ==================================================

(function($){$.fn.usPhoneFormat=function(options){var params=$.extend({format:'xxx-xxx-xxxx',international:!1,},options);if(params.format==='xxx-xxx-xxxx'){$(this).bind('paste',function(e){e.preventDefault();var inputValue=e.originalEvent.clipboardData.getData('Text');if(!$.isNumeric(inputValue)){return!1}else{inputValue=String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3"));$(this).val(inputValue);$(this).val('');inputValue=inputValue.substring(0,12);$(this).val(inputValue)}});$(this).on('keypress',function(e){if(e.which!=8&&e.which!=0&&(e.which<48||e.which>57)){return!1}
var curchr=this.value.length;var curval=$(this).val();if(curchr==3&&e.which!=8&&e.which!=0){$(this).val(curval+"-")}else if(curchr==7&&e.which!=8&&e.which!=0){$(this).val(curval+"-")}
$(this).attr('maxlength','12')})}else if(params.format==='(xxx) xxx-xxxx'){$(this).on('keypress',function(e){if(e.which!=8&&e.which!=0&&(e.which<48||e.which>57)){return!1}
var curchr=this.value.length;var curval=$(this).val();if(curchr==3&&e.which!=8&&e.which!=0){$(this).val('('+curval+')'+" ")}else if(curchr==9&&e.which!=8&&e.which!=0){$(this).val(curval+"-")}
$(this).attr('maxlength','14')});$(this).bind('paste',function(e){e.preventDefault();var inputValue=e.originalEvent.clipboardData.getData('Text');if(!$.isNumeric(inputValue)){return!1}else{inputValue=String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3"));$(this).val(inputValue);$(this).val('');inputValue=inputValue.substring(0,14);$(this).val(inputValue)}})}}}(jQuery))