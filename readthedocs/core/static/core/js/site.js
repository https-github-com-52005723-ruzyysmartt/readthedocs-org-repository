require=function o(u,f,a){function c(r,t){if(!f[r]){if(!u[r]){var i="function"==typeof require&&require;if(!t&&i)return i(r,!0);if(s)return s(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var e=f[r]={exports:{}};u[r][0].call(e.exports,function(t){return c(u[r][1][t]||t)},e,e.exports,o,u,f,a)}return f[r].exports}for(var s="function"==typeof require&&require,t=0;t<a.length;t++)c(a[t]);return c}({"core/site":[function(t,r,i){r.exports.handle_notification_dismiss=function(){$(document).ready(function(){$("ul.notifications li.notification > a").click(function(t){var n=$(this).attr("href"),r=$(this).parent().attr("data-dismiss-url");r?(t.preventDefault(),$.get(r,function(t,r,i){window.location.href=n})):$(this).hide()})})}},{}]},{},[]);