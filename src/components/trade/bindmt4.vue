<template>
  <div>
    <ul class="bindmtnav">
      <li class="">实盘账户(Live)</li>
      <li class="bindactive">模拟盘账户(Demo)</li>
    </ul>
    <div class="mamseat"></div>
    <ul class="ibox crbox2"><!----> <!---->
      <li>
        <div class="crtitle left">经纪商</div>
        <input type="text" placeholder="请选择经纪商" class="crinp left">
        <div class="crightimgbox"><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3M0M5MDdDRDI4QzAxMUU4ODI4NUU2ODczQzAxMTgyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3M0M5MDdDRTI4QzAxMUU4ODI4NUU2ODczQzAxMTgyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjczQzkwN0NCMjhDMDExRTg4Mjg1RTY4NzNDMDExODJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjczQzkwN0NDMjhDMDExRTg4Mjg1RTY4NzNDMDExODJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0JzIlQAAAI9JREFUeNrk1jESgDAIBMDA+DsdH+vo+7BNkYTjwEo6mzWod6OYWascbcVTDm79xXU//f6CIuexQye0L1a2LChZdHTCFDpbmUZXz5BCvZcSRpEPO4SiSYHRSPQgNJplF2XKQeByAMa8G2glFgENXV0rMba+hE1KGFuBFDYDaWwEpjC2vkoL1s/l/35FXgEGAIizHjqloOsDAAAAAElFTkSuQmCC"
          alt="" class="crightimg"></div>
      </li>
      <li>
        <div class="crtitle left">服务器</div>
        <input type="text" placeholder="请选择服务器" class="crinp left">
        <div class="crightimgbox"><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3M0M5MDdDRDI4QzAxMUU4ODI4NUU2ODczQzAxMTgyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3M0M5MDdDRTI4QzAxMUU4ODI4NUU2ODczQzAxMTgyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjczQzkwN0NCMjhDMDExRTg4Mjg1RTY4NzNDMDExODJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjczQzkwN0NDMjhDMDExRTg4Mjg1RTY4NzNDMDExODJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0JzIlQAAAI9JREFUeNrk1jESgDAIBMDA+DsdH+vo+7BNkYTjwEo6mzWod6OYWascbcVTDm79xXU//f6CIuexQye0L1a2LChZdHTCFDpbmUZXz5BCvZcSRpEPO4SiSYHRSPQgNJplF2XKQeByAMa8G2glFgENXV0rMba+hE1KGFuBFDYDaWwEpjC2vkoL1s/l/35FXgEGAIizHjqloOsDAAAAAElFTkSuQmCC"
          alt="" class="crightimg"></div>
      </li>
      <li>
        <div class="crtitle left">账号</div>
        <input type="text" placeholder="请选择MT4账号" class="crinp left"></li>
      <li>
        <div class="crtitle left">密码</div>
        <input type="text" placeholder="请选择MT4密码" class="crinp left"></li>
    </ul>
    <div class="creremark"><img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAABhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYdhGYcpeIbnAAAAHXRSTlMA+iSaWAbnwRYMnvXrVNCJdjs2CMhh3tq5TzGVyRaAPO0AAAEKSURBVDjLhZPpkoMgEIRnGBVF4hVzbDb9/q+5wlqAkRT9R6mvqTmYoaiukrVhblapOjpLSY+gXtQHvo4M6Glu67qdJw3weD1cHwCjkrMBhuT8avBY6KDlgeYV/BbPU1rdE1bt8Qfomk6qNYb/PEbcW8qovWP0AZgXymoBuyACk4EXs0U1EKKuh8pwdtcU+o4q6Czny/bVqEgwfeU0QWjF7H5vKsNpxkoWreNoVMqrvVJYYrgm/SI4fiKnGr03BEfg0eBDBEfkIYRP0kucI/KQpCszOjZ+C9iX6RsVHSnfG+VbHR0J31tNJnksSblDUnzu0sCUR648tOWxLy9OefXKyxvX/22Z7fuw/n++YBb2YhIGXgAAAABJRU5ErkJggg=="
      alt="" class="cretip2">
      <div class="crewatch">我已阅读并同意<a href="#/protocol" class="fobomb_remarkf">《服务+免责协议》</a></div>
    </div>
    <button class="crbtn">提&nbsp;&nbsp;&nbsp;&nbsp;交</button> <!----> <!----> <!----> <!----></div>
</template>

<script>
  export default {
    name: "bindmt4"
  }
</script>

<style>* {
  margin: 0;
  padding: 0;
}</style>


<style type="text/css">
  .loginbomb {
    padding: .5rem 1rem;
    width: 4rem;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    position: fixed;
    top: 40%;
    border-radius: 4px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 11
  }

  .ibanner {
    width: 100%;
    height: 7.5rem
  }

  .ibanner > img {
    width: 100%;
    height: 100%
  }

  .noticebox {
    width: 100%;
    height: 2rem;
    background: #fff;
    border-bottom: 1px solid #dedfe0;
    position: relative
  }

  .notice {
    float: left;
    margin: .55rem .5rem
  }

  .notice, .noticei {
    width: .75rem;
    height: .75rem
  }

  .noticei {
    position: absolute;
    top: .65rem;
    right: .65rem
  }

  .noticet {
    height: 2rem;
    line-height: 2rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    border-right: 1px solid #dfdfdf;
    width: 80%;
    float: left
  }

  .pointbox {
    width: .4rem;
    height: .4rem;
    border-radius: 5px;
    background: red;
    position: absolute;
    top: .5rem;
    right: .3rem
  }

  .swiperbtn {
    width: 5rem
  }

  .swiperbtn, .swiperbtn2 {
    height: 1.4rem;
    position: absolute;
    bottom: 1.2rem;
    left: 10%
  }

  .swiperbtn2 {
    width: 4.5rem
  }

  .homeswiper .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1
  }

  .homeswiper .swiper-pagination-bullet-active {
    background-color: #611987
  }

  .ilist {
    padding: .5rem 0;
    height: 3.2rem;
    text-align: center
  }

  .ilistmq {
    width: 24%;
    height: 3.3rem;
    color: #333;
    display: inline-block
  }

  .ilistimg {
    width: 2rem;
    height: 2rem;
    margin-bottom: .2rem
  }

  .excellent {
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem
  }

  .excellent_img {
    width: .8rem;
    height: .8rem;
    margin-right: .3rem;
    margin-top: .2rem;
    float: left
  }

  .excellent_icon {
    width: .35rem;
    height: .7rem;
    margin-left: .3rem;
    float: right;
    margin-top: .25rem
  }

  .excebody {
    width: 100%;
    height: 4.9rem;
    border: 1px solid #dedfe0;
    border-radius: 10px;
    margin-top: .8rem;
    box-shadow: 0 0 2px #ccc;
    position: relative
  }

  .excebody1 {
    width: 30%;
    height: 5.3rem;
    position: relative
  }

  .excebody2 {
    position: absolute;
    width: 40%;
    height: 5.3rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-left: 1px solid #dedfe0;
    border-right: 1px solid #dedfe0;
    border-top: 1px solid #dedfe0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    z-index: 2;
    box-shadow: 0 0 5px #dedfe0
  }

  .excebody_in {
    position: relative
  }

  .exceuser {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: .3rem
  }

  .exceuser, .exceuser2 {
    border-radius: 50%;
    border: 1px solid #ccc
  }

  .exceuser2 {
    width: 1.4rem;
    height: 1.4rem;
    margin-top: .5rem
  }

  .excename {
    line-height: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .62rem
  }

  .excenum {
    color: #611987;
    font-size: .75rem;
    line-height: 1rem
  }

  .exceprofit {
    color: #777;
    font-size: .6rem
  }

  .exceicon {
    width: 1rem;
    height: 1.2rem;
    position: absolute;
    left: .4rem;
    top: .4rem
  }

  .home_tradestar, .mql_excellent {
    display: block
  }

  .cattle {
    width: 100%;
    height: 3.2rem;
    margin-top: .3rem
  }

  .cattle > li {
    width: 31%;
    height: 3.1rem;
    float: left;
    padding-left: 2%
  }

  .cattle > li:first-child, .cattle > li:nth-child(2) {
    border-right: 1px solid #dedfe0
  }

  .cattlebox {
    float: left;
    text-align: left;
    line-height: 1rem;
    margin-top: .3rem;
    width: 67%
  }

  .cattleuser {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .3rem;
    float: left;
    border-radius: 50%;
    border: 1px solid #ccc
  }

  .cattlefont1 {
    font-size: .6rem;
    color: #666
  }

  .swiper-pagination-bullet-active {
    background: #fff
  }

  .noticebox_href {
    display: block
  }

  .mql_time {
    text-align: left;
    color: #999;
    line-height: 1rem;
    margin-bottom: .3rem
  }

  .mql_top {
    height: 2rem;
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0
  }

  .mql_top > li {
    float: left;
    height: 2rem;
    line-height: 2rem
  }

  .mql_top > li:first-child {
    width: 15%
  }

  .mql_top > li:nth-child(2) {
    width: 10%
  }

  .mql_top > li:nth-child(3) {
    width: 30%
  }

  .mql_top > li:nth-child(4), .mql_top > li:nth-child(5), .mql_top > li:nth-child(6) {
    width: 15%
  }

  .mql_content {
    height: 2.5rem;
    color: #333
  }

  .mql_content > li {
    float: left
  }

  .mql_content > li:first-child {
    width: 15%;
    height: 2.5rem;
    line-height: 2.5rem
  }

  .mql_content > li:nth-child(2) {
    width: 10%;
    height: 2.5rem;
    font-size: .6rem
  }

  .mql_content > li:nth-child(3) {
    width: 30%;
    height: 2.5rem
  }

  .mql_content > li:nth-child(4) {
    width: 15%;
    height: 2.5rem;
    line-height: 2.5rem
  }

  .mql_content > li:nth-child(5), .mql_content > li:nth-child(6) {
    width: 15%;
    height: 2rem;
    line-height: 2.5rem
  }

  .mql_icon {
    width: 1.1rem;
    height: .8rem;
    margin-top: .4rem
  }

  .mql_icon2 {
    width: .45rem;
    height: .45rem;
    margin-top: 1rem
  }

  .mql_text {
    padding-top: .5rem
  }

  .mql_text, .mql_text2 {
    text-align: left;
    font-size: .6rem;
    margin-left: .3rem;
    float: left;
    height: 2.5rem;
    width: 86%
  }

  .mql_text2 {
    padding-top: .8rem
  }

  .mql_icon3 {
    width: .4rem;
    height: 2.5rem;
    float: left
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/css/home.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvY3NzL2hvbWUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsbUJBQXFCLFdBQVcsZ0NBQXFDLFdBQWEsZUFBZ0IsUUFBUyxrQkFBbUIsQUFDckksT0FBVSxRQUFXLGNBQWUsVUFBWSxDQUFDLEFBQ3JELFNBQVMsV0FBWSxhQUFlLENBQUMsQUFDckMsYUFBYSxXQUFZLFdBQWEsQ0FBQyxBQUN2QyxXQUFXLFdBQVcsWUFBWSxnQkFBaUIsZ0NBQWdDLGlCQUFtQixDQUFDLEFBQ3ZHLFFBQXFDLFdBQVcsbUJBQXNCLENBQUMsQUFDdkUsaUJBRFEsYUFBYyxhQUFlLENBQytDLEFBQXBGLFNBQXNDLGtCQUFrQixXQUFZLFlBQWMsQ0FBRSxBQUNwRixTQUFTLFlBQVksaUJBQWtCLFdBQVcsZ0JBQWlCLHVCQUF3QixtQkFBb0IsZ0JBQWlCLEFBQ2hJLCtCQUFnQyxVQUFVLFVBQVcsQ0FBQyxBQUN0RCxVQUFVLFlBQWEsYUFBYyxrQkFBbUIsZUFBZ0Isa0JBQW1CLFVBQVcsV0FBYSxDQUFDLEFBQ3BILFdBQVcsVUFBWSxDQUEyRCxBQUNsRix1QkFEdUIsY0FBZSxrQkFBbUIsY0FBYyxRQUFVLENBQ0ksQUFBckYsWUFBWSxZQUFjLENBQTJELEFBQ3JGLHNDQUFzQyxzQkFBdUIsU0FBVyxDQUFDLEFBQ3pFLDZDQUE2Qyx3QkFBMEIsQ0FBQyxBQUN4RSxPQUFPLGdCQUFvQixjQUFlLGlCQUFtQixDQUFDLEFBQzlELFNBQVMsVUFBVyxjQUFlLFdBQVksb0JBQXNCLENBQUMsQUFDdEUsVUFBVSxXQUFZLFlBQWEsbUJBQXNCLENBQUMsQUFDMUQsV0FBVyxXQUFXLGNBQWUsa0JBQW9CLENBQUMsQUFDMUQsZUFBZSxZQUFjLGFBQWUsbUJBQXFCLGlCQUFtQixVQUFZLENBQUMsQUFDakcsZ0JBQWdCLGFBQWUsYUFBZSxrQkFBb0IsWUFBYSxpQkFBb0IsQ0FBQyxBQUNwRyxVQUFVLFdBQVksY0FBZSx5QkFBeUIsbUJBQW9CLGlCQUFtQix3QkFBNkIsaUJBQW1CLENBQUMsQUFDdEosV0FBVyxVQUFXLGNBQWUsaUJBQW1CLENBQUMsQUFDekQsV0FBVyxrQkFBbUIsVUFBVyxjQUFlLFNBQVksT0FBVSxRQUFXLGNBQWlCLDhCQUE4QiwrQkFBK0IsQUFDdkssNkJBQTZCLDRCQUE2Qiw2QkFBOEIsc0JBQXdCLFVBQVcsMEJBQWdDLENBQUMsQUFDNUosYUFBYSxpQkFBbUIsQ0FBQyxBQUNqQyxVQUFVLGFBQWMsY0FBZSxnQkFBbUIsQ0FBMkMsQUFDckcscUJBRDBELGtCQUFtQixxQkFBdUIsQ0FDRSxBQUF0RyxXQUFXLGFBQWMsY0FBZSxnQkFBbUIsQ0FBMkMsQUFDdEcsVUFBVSxtQkFBb0IsZ0JBQWlCLHVCQUF3QixtQkFBb0IsZ0JBQW1CLENBQUMsQUFDL0csU0FBUyxjQUFlLGlCQUFtQixnQkFBa0IsQ0FBQyxBQUM5RCxZQUFZLFdBQVksZUFBa0IsQ0FBQyxBQUMzQyxVQUFVLFdBQVksY0FBZSxrQkFBbUIsV0FBYSxTQUFZLENBQUMsQUFHbEYsK0JBQWdCLGFBQWUsQ0FBQyxBQUVoQyxRQUFRLFdBQVksY0FBZSxnQkFBbUIsQ0FBQyxBQUN2RCxXQUFXLFVBQVcsY0FBZSxXQUFZLGVBQWlCLENBQUMsQUFFbkUsK0NBQXdCLDhCQUErQixDQUFDLEFBQ3hELFdBQVcsV0FBWSxnQkFBaUIsaUJBQWtCLGlCQUFtQixTQUFXLENBQUMsQUFDekYsWUFBWSxhQUFjLGNBQWUsbUJBQXFCLFdBQVksa0JBQW1CLHFCQUF1QixDQUFDLEFBQ3JILGFBQWEsZ0JBQWtCLFVBQVksQ0FBQyxBQUM1QyxpQ0FBaUMsZUFBa0IsQ0FBQyxBQUNwRCxnQkFBZ0IsYUFBZSxDQUFDLEFBRWhDLFVBQVUsZ0JBQWlCLFdBQVksaUJBQWtCLG1CQUFzQixDQUFDLEFBQ2hGLFNBQVMsWUFBYSw2QkFBOEIsK0JBQWlDLENBQUMsQUFDdEYsWUFBWSxXQUFZLFlBQWEsZ0JBQWtCLENBQUMsQUFDeEQsd0JBQXlCLFNBQVcsQ0FBQyxBQUNyQyx5QkFBeUIsU0FBVyxDQUFDLEFBQ3JDLHlCQUF5QixTQUFXLENBQUMsQUFHckMsMkVBQXlCLFNBQVcsQ0FBQyxBQUNyQyxhQUFhLGNBQWUsVUFBWSxDQUFDLEFBQ3pDLGdCQUFnQixVQUFZLENBQUMsQUFDN0IsNEJBQTZCLFVBQVcsY0FBZSxrQkFBb0IsQ0FBQyxBQUM1RSw2QkFBNkIsVUFBVyxjQUFlLGVBQWtCLENBQUMsQUFDMUUsNkJBQTZCLFVBQVcsYUFBZSxDQUFDLEFBQ3hELDZCQUE2QixVQUFXLGNBQWUsa0JBQW9CLENBQUMsQUFFNUUsMERBQTZCLFVBQVcsWUFBYSxrQkFBb0IsQ0FBQyxBQUMxRSxVQUFVLGFBQWMsYUFBZSxnQkFBbUIsQ0FBQyxBQUMzRCxXQUFXLGFBQWUsY0FBZ0IsZUFBaUIsQ0FBQyxBQUM1RCxVQUF1RyxpQkFBb0IsQ0FBQyxBQUM1SCxxQkFEVSxnQkFBaUIsZ0JBQWtCLGtCQUFvQixXQUFZLGNBQWUsU0FBVyxDQUNzQixBQUE3SCxXQUF3RyxpQkFBb0IsQ0FBQyxBQUM3SCxXQUFXLFlBQWMsY0FBZSxVQUFZLENBQUMiLCJmaWxlIjoiaG9tZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5ib21ie3BhZGRpbmc6IDAuNXJlbSAxcmVtO3dpZHRoOjRyZW07YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO2NvbG9yOiB3aGl0ZTtwb3NpdGlvbjogZml4ZWQ7dG9wOiA0MCU7Ym9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGVmdDogMHB4O3JpZ2h0OiAwcHg7bWFyZ2luOiAwIGF1dG87ei1pbmRleDogMTE7fVxyXG4uaWJhbm5lcnt3aWR0aDogMTAwJTtoZWlnaHQ6IDcuNXJlbTt9XHJcbi5pYmFubmVyPmltZ3t3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7fVxyXG4ubm90aWNlYm94e3dpZHRoOjEwMCU7aGVpZ2h0OjJyZW07YmFja2dyb3VuZDogI2ZmZjtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGVkZmUwO3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5ub3RpY2V7d2lkdGg6MC43NXJlbTtoZWlnaHQ6MC43NXJlbTtmbG9hdDpsZWZ0O21hcmdpbjowLjU1cmVtIDAuNXJlbTt9XHJcbi5ub3RpY2Vpe3dpZHRoOjAuNzVyZW07aGVpZ2h0OjAuNzVyZW07cG9zaXRpb246YWJzb2x1dGU7dG9wOjAuNjVyZW07cmlnaHQ6MC42NXJlbTsgfVxyXG4ubm90aWNldHtoZWlnaHQ6MnJlbTtsaW5lLWhlaWdodDogMnJlbTtjb2xvcjojOTk5O292ZXJmbG93OiBoaWRkZW47dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7d2hpdGUtc3BhY2U6IG5vd3JhcDt0ZXh0LWFsaWduOiBsZWZ0O1xyXG5ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO3dpZHRoOjgwJTtmbG9hdDpsZWZ0O31cclxuLnBvaW50Ym94e3dpZHRoOjAuNHJlbTtoZWlnaHQ6MC40cmVtO2JvcmRlci1yYWRpdXM6IDVweDtiYWNrZ3JvdW5kOiByZWQ7cG9zaXRpb246IGFic29sdXRlO3RvcDowLjVyZW07cmlnaHQ6MC4zcmVtO30gIFxyXG4uc3dpcGVyYnRue3dpZHRoOiA1cmVtO2hlaWdodDogMS40cmVtO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206MS4ycmVtO2xlZnQ6IDEwJTt9XHJcbi5zd2lwZXJidG4ye3dpZHRoOiA0LjVyZW07aGVpZ2h0OiAxLjRyZW07cG9zaXRpb246IGFic29sdXRlO2JvdHRvbToxLjJyZW07bGVmdDogMTAlO31cclxuLmhvbWVzd2lwZXIgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO29wYWNpdHk6IDE7fVxyXG4uaG9tZXN3aXBlciAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjNjExOTg3O31cclxuLmlsaXN0e3BhZGRpbmc6IDAuNXJlbSAwcHg7aGVpZ2h0OiAzLjJyZW07dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmlsaXN0bXF7d2lkdGg6IDI0JTtoZWlnaHQ6IDMuM3JlbTtjb2xvcjogIzMzMztkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uaWxpc3RpbWd7d2lkdGg6IDJyZW07aGVpZ2h0OiAycmVtO21hcmdpbi1ib3R0b206IDAuMnJlbTt9XHJcbi5leGNlbGxlbnR7d2lkdGg6MTAwJTtoZWlnaHQ6IDEuM3JlbTtsaW5lLWhlaWdodDogMS4zcmVtO31cclxuLmV4Y2VsbGVudF9pbWd7d2lkdGg6IDAuOHJlbTtoZWlnaHQ6IDAuOHJlbTttYXJnaW4tcmlnaHQ6IDAuM3JlbTttYXJnaW4tdG9wOiAwLjJyZW07ZmxvYXQ6IGxlZnQ7fVxyXG4uZXhjZWxsZW50X2ljb257d2lkdGg6IDAuMzVyZW07aGVpZ2h0OiAwLjdyZW07bWFyZ2luLWxlZnQ6IDAuM3JlbTtmbG9hdDogcmlnaHQ7bWFyZ2luLXRvcDogMC4yNXJlbTt9XHJcbi5leGNlYm9keXt3aWR0aDogMTAwJTtoZWlnaHQ6IDQuOXJlbTtib3JkZXI6MXB4IHNvbGlkICNkZWRmZTA7Ym9yZGVyLXJhZGl1czogMTBweDttYXJnaW4tdG9wOiAwLjhyZW07Ym94LXNoYWRvdzogMHB4IDBweCAycHggI2NjYztwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uZXhjZWJvZHkxe3dpZHRoOiAzMCU7aGVpZ2h0OiA1LjNyZW07cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmV4Y2Vib2R5Mntwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDQwJTtoZWlnaHQ6IDUuM3JlbTtib3R0b206IDBweDtsZWZ0OiAwcHg7cmlnaHQ6IDBweDttYXJnaW46IDBweCBhdXRvO2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGVkZmUwO2JvcmRlci1yaWdodDoxcHggc29saWQgI2RlZGZlMDtcclxuYm9yZGVyLXRvcDoxcHggc29saWQgI2RlZGZlMDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O2JhY2tncm91bmQtY29sb3I6IHdoaXRlO3otaW5kZXg6IDI7Ym94LXNoYWRvdzogMHB4IDBweCA1cHggI2RlZGZlMDt9XHJcbi5leGNlYm9keV9pbntwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uZXhjZXVzZXJ7d2lkdGg6IDEuMnJlbTtoZWlnaHQ6IDEuMnJlbTttYXJnaW4tdG9wOiAwLjNyZW07Ym9yZGVyLXJhZGl1czogNTAlO2JvcmRlcjogMXB4IHNvbGlkICNjY2M7fVxyXG4uZXhjZXVzZXIye3dpZHRoOiAxLjRyZW07aGVpZ2h0OiAxLjRyZW07bWFyZ2luLXRvcDogMC41cmVtO2JvcmRlci1yYWRpdXM6IDUwJTtib3JkZXI6IDFweCBzb2xpZCAjY2NjO31cclxuLmV4Y2VuYW1le2xpbmUtaGVpZ2h0OiAxLjJyZW07b3ZlcmZsb3c6IGhpZGRlbjt0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczt3aGl0ZS1zcGFjZTogbm93cmFwO2ZvbnQtc2l6ZTogMC42MnJlbTt9XHJcbi5leGNlbnVte2NvbG9yOiAjNjExOTg3O2ZvbnQtc2l6ZTogMC43NXJlbTtsaW5lLWhlaWdodDogMXJlbTt9XHJcbi5leGNlcHJvZml0e2NvbG9yOiAjNzc3O2ZvbnQtc2l6ZTogMC42cmVtO31cclxuLmV4Y2VpY29ue3dpZHRoOiAxcmVtO2hlaWdodDogMS4ycmVtO3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwLjRyZW07dG9wOiAwLjRyZW07fVxyXG5cclxuLm1xbF9leGNlbGxlbnR7ZGlzcGxheTogYmxvY2s7fVxyXG4uaG9tZV90cmFkZXN0YXJ7ZGlzcGxheTogYmxvY2s7fVxyXG5cclxuLmNhdHRsZXt3aWR0aDogMTAwJTtoZWlnaHQ6IDMuMnJlbTttYXJnaW4tdG9wOiAwLjNyZW07fVxyXG4uY2F0dGxlPmxpe3dpZHRoOiAzMSU7aGVpZ2h0OiAzLjFyZW07ZmxvYXQ6IGxlZnQ7cGFkZGluZy1sZWZ0OiAyJTt9XHJcbi5jYXR0bGU+bGk6bnRoLWNoaWxkKDEpe2JvcmRlci1yaWdodDoxcHggc29saWQgI2RlZGZlMDt9XHJcbi5jYXR0bGU+bGk6bnRoLWNoaWxkKDIpe2JvcmRlci1yaWdodDoxcHggc29saWQgI2RlZGZlMDt9XHJcbi5jYXR0bGVib3h7ZmxvYXQ6IGxlZnQ7dGV4dC1hbGlnbjogbGVmdDtsaW5lLWhlaWdodDogMXJlbTttYXJnaW4tdG9wOiAwLjNyZW07d2lkdGg6IDY3JTt9XHJcbi5jYXR0bGV1c2Vye3dpZHRoOiAxLjVyZW07aGVpZ2h0OiAxLjVyZW07bWFyZ2luLXJpZ2h0OiAwLjNyZW07ZmxvYXQ6IGxlZnQ7Ym9yZGVyLXJhZGl1czogNTAlO2JvcmRlcjogMXB4IHNvbGlkICNjY2M7fVxyXG4uY2F0dGxlZm9udDF7Zm9udC1zaXplOiAwLjZyZW07Y29sb3I6ICM2NjY7fVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kOiB3aGl0ZTt9XHJcbi5ub3RpY2Vib3hfaHJlZntkaXNwbGF5OiBibG9jazt9XHJcblxyXG4ubXFsX3RpbWV7dGV4dC1hbGlnbjogbGVmdDtjb2xvcjogIzk5OTtsaW5lLWhlaWdodDogMXJlbTttYXJnaW4tYm90dG9tOiAwLjNyZW07fVxyXG4ubXFsX3RvcHtoZWlnaHQ6IDJyZW07Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRmZTA7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRmZTA7fVxyXG4ubXFsX3RvcD5saXtmbG9hdDogbGVmdDtoZWlnaHQ6IDJyZW07bGluZS1oZWlnaHQ6IDJyZW07fVxyXG4ubXFsX3RvcD5saTpudGgtY2hpbGQoMSl7d2lkdGg6IDE1JTt9XHJcbi5tcWxfdG9wPmxpOm50aC1jaGlsZCgyKXt3aWR0aDogMTAlO31cclxuLm1xbF90b3A+bGk6bnRoLWNoaWxkKDMpe3dpZHRoOiAzMCU7fVxyXG4ubXFsX3RvcD5saTpudGgtY2hpbGQoNCl7d2lkdGg6IDE1JTt9XHJcbi5tcWxfdG9wPmxpOm50aC1jaGlsZCg1KXt3aWR0aDogMTUlO31cclxuLm1xbF90b3A+bGk6bnRoLWNoaWxkKDYpe3dpZHRoOiAxNSU7fVxyXG4ubXFsX2NvbnRlbnR7aGVpZ2h0OiAyLjVyZW07Y29sb3I6ICMzMzM7fVxyXG4ubXFsX2NvbnRlbnQ+bGl7ZmxvYXQ6IGxlZnQ7fVxyXG4ubXFsX2NvbnRlbnQ+bGk6bnRoLWNoaWxkKDEpe3dpZHRoOiAxNSU7aGVpZ2h0OiAyLjVyZW07bGluZS1oZWlnaHQ6IDIuNXJlbTt9XHJcbi5tcWxfY29udGVudD5saTpudGgtY2hpbGQoMil7d2lkdGg6IDEwJTtoZWlnaHQ6IDIuNXJlbTtmb250LXNpemU6IDAuNnJlbTt9XHJcbi5tcWxfY29udGVudD5saTpudGgtY2hpbGQoMyl7d2lkdGg6IDMwJTtoZWlnaHQ6IDIuNXJlbTt9XHJcbi5tcWxfY29udGVudD5saTpudGgtY2hpbGQoNCl7d2lkdGg6IDE1JTtoZWlnaHQ6IDIuNXJlbTtsaW5lLWhlaWdodDogMi41cmVtO31cclxuLm1xbF9jb250ZW50PmxpOm50aC1jaGlsZCg1KXt3aWR0aDogMTUlO2hlaWdodDogMnJlbTtsaW5lLWhlaWdodDogMi41cmVtO31cclxuLm1xbF9jb250ZW50PmxpOm50aC1jaGlsZCg2KXt3aWR0aDogMTUlO2hlaWdodDogMnJlbTtsaW5lLWhlaWdodDogMi41cmVtO31cclxuLm1xbF9pY29ue3dpZHRoOiAxLjFyZW07aGVpZ2h0OiAwLjhyZW07bWFyZ2luLXRvcDogMC40cmVtO31cclxuLm1xbF9pY29uMnt3aWR0aDogMC40NXJlbTtoZWlnaHQ6IDAuNDVyZW07bWFyZ2luLXRvcDogMXJlbTt9XHJcbi5tcWxfdGV4dHt0ZXh0LWFsaWduOiBsZWZ0O2ZvbnQtc2l6ZTogMC42cmVtO21hcmdpbi1sZWZ0OiAwLjNyZW07ZmxvYXQ6IGxlZnQ7aGVpZ2h0OiAyLjVyZW07d2lkdGg6IDg2JTtwYWRkaW5nLXRvcDogMC41cmVtO31cclxuLm1xbF90ZXh0Mnt0ZXh0LWFsaWduOiBsZWZ0O2ZvbnQtc2l6ZTogMC42cmVtO21hcmdpbi1sZWZ0OiAwLjNyZW07ZmxvYXQ6IGxlZnQ7aGVpZ2h0OiAyLjVyZW07d2lkdGg6IDg2JTtwYWRkaW5nLXRvcDogMC44cmVtO31cclxuLm1xbF9pY29uM3t3aWR0aDogMC40cmVtO2hlaWdodDogMi41cmVtO2Zsb2F0OiBsZWZ0O30iXSwic291cmNlUm9vdCI6IiJ9 */</style>

<style type="text/css">
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1
  }

  .swiper-container-no-flexbox .swiper-slide {
    float: left
  }

  .swiper-container-vertical > .swiper-wrapper {
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box
  }

  .swiper-container-android .swiper-slide, .swiper-wrapper {
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -o-transform: translate(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0)
  }

  .swiper-container-multirow > .swiper-wrapper {
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto
  }

  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative
  }

  .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
    height: auto
  }

  .swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-transition-property: -webkit-transform, height;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform, height
  }

  .swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000
  }

  .swiper-wp8-horizontal {
    -ms-touch-action: pan-y;
    touch-action: pan-y
  }

  .swiper-wp8-vertical {
    -ms-touch-action: pan-x;
    touch-action: pan-x
  }

  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    -moz-background-size: 27px 44px;
    -webkit-background-size: 27px 44px;
    background-size: 27px 44px;
    background-position: 50%;
    background-repeat: no-repeat
  }

  .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
    opacity: .35;
    cursor: auto;
    pointer-events: none
  }

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E");
    left: 10px;
    right: auto
  }

  .swiper-button-prev.swiper-button-black, .swiper-container-rtl .swiper-button-next.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E")
  }

  .swiper-button-prev.swiper-button-white, .swiper-container-rtl .swiper-button-next.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E")
  }

  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E");
    right: 10px;
    left: auto
  }

  .swiper-button-next.swiper-button-black, .swiper-container-rtl .swiper-button-prev.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E")
  }

  .swiper-button-next.swiper-button-white, .swiper-container-rtl .swiper-button-prev.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E")
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 10
  }

  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0
  }

  .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2
  }

  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    appearance: none
  }

  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer
  }

  .swiper-pagination-white .swiper-pagination-bullet {
    background: #fff
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff
  }

  .swiper-pagination-white .swiper-pagination-bullet-active {
    background: #fff
  }

  .swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000
  }

  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    -webkit-transform: translate3d(0, -50%, 0);
    -moz-transform: translate3d(0, -50%, 0);
    -o-transform: translateY(-50%);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
  }

  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 5px 0;
    display: block
  }

  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px
  }

  .swiper-pagination-progress {
    background: rgba(0, 0, 0, .25);
    position: absolute
  }

  .swiper-pagination-progress .swiper-pagination-progressbar {
    background: #007aff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    transform-origin: left top
  }

  .swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {
    -webkit-transform-origin: right top;
    -moz-transform-origin: right top;
    -ms-transform-origin: right top;
    -o-transform-origin: right top;
    transform-origin: right top
  }

  .swiper-container-horizontal > .swiper-pagination-progress {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0
  }

  .swiper-container-vertical > .swiper-pagination-progress {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0
  }

  .swiper-pagination-progress.swiper-pagination-white {
    background: hsla(0, 0%, 100%, .5)
  }

  .swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar {
    background: #fff
  }

  .swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar {
    background: #000
  }

  .swiper-container-3d {
    -webkit-perspective: 1200px;
    -moz-perspective: 1200px;
    -o-perspective: 1200px;
    perspective: 1200px
  }

  .swiper-container-3d .swiper-cube-shadow, .swiper-container-3d .swiper-slide, .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top, .swiper-container-3d .swiper-wrapper {
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d
  }

  .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10
  }

  .swiper-container-3d .swiper-slide-shadow-left {
    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(transparent));
    background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
    background-image: -moz-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
    background-image: -o-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
    background-image: linear-gradient(270deg, rgba(0, 0, 0, .5), transparent)
  }

  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .5)), to(transparent));
    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
    background-image: -moz-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
    background-image: -o-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
    background-image: linear-gradient(90deg, rgba(0, 0, 0, .5), transparent)
  }

  .swiper-container-3d .swiper-slide-shadow-top {
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .5)), to(transparent));
    background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
    background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
    background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
    background-image: linear-gradient(0deg, rgba(0, 0, 0, .5), transparent)
  }

  .swiper-container-3d .swiper-slide-shadow-bottom {
    background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, .5)), to(transparent));
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
    background-image: -moz-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
    background-image: -o-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), transparent)
  }

  .swiper-container-coverflow .swiper-wrapper, .swiper-container-flip .swiper-wrapper {
    -ms-perspective: 1200px
  }

  .swiper-container-cube, .swiper-container-flip {
    overflow: visible
  }

  .swiper-container-cube .swiper-slide, .swiper-container-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1
  }

  .swiper-container-cube .swiper-slide .swiper-slide, .swiper-container-flip .swiper-slide .swiper-slide {
    pointer-events: none
  }

  .swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-active .swiper-slide-active, .swiper-container-flip .swiper-slide-active, .swiper-container-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
  }

  .swiper-container-cube .swiper-slide-shadow-bottom, .swiper-container-cube .swiper-slide-shadow-left, .swiper-container-cube .swiper-slide-shadow-right, .swiper-container-cube .swiper-slide-shadow-top, .swiper-container-flip .swiper-slide-shadow-bottom, .swiper-container-flip .swiper-slide-shadow-left, .swiper-container-flip .swiper-slide-shadow-right, .swiper-container-flip .swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden
  }

  .swiper-container-cube .swiper-slide {
    visibility: hidden;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    width: 100%;
    height: 100%
  }

  .swiper-container-cube.swiper-container-rtl .swiper-slide {
    -webkit-transform-origin: 100% 0;
    -moz-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0
  }

  .swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-next, .swiper-container-cube .swiper-slide-next + .swiper-slide, .swiper-container-cube .swiper-slide-prev {
    pointer-events: auto;
    visibility: visible
  }

  .swiper-container-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .6;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    z-index: 0
  }

  .swiper-container-fade.swiper-container-free-mode .swiper-slide {
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out
  }

  .swiper-container-fade .swiper-slide {
    pointer-events: none;
    -webkit-transition-property: opacity;
    -moz-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity
  }

  .swiper-container-fade .swiper-slide .swiper-slide {
    pointer-events: none
  }

  .swiper-container-fade .swiper-slide-active, .swiper-container-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
  }

  .swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    text-align: center
  }

  .swiper-zoom-container > canvas, .swiper-zoom-container > img, .swiper-zoom-container > svg {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain
  }

  .swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0, 0, 0, .1)
  }

  .swiper-container-horizontal > .swiper-scrollbar {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%
  }

  .swiper-container-vertical > .swiper-scrollbar {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%
  }

  .swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0, 0, 0, .5);
    border-radius: 10px;
    left: 0;
    top: 0
  }

  .swiper-scrollbar-cursor-drag {
    cursor: move
  }

  .swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    -webkit-transform-origin: 50%;
    -moz-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-animation: swiper-preloader-spin 1s steps(12) infinite;
    -moz-animation: swiper-preloader-spin 1s steps(12) infinite;
    animation: swiper-preloader-spin 1s steps(12) infinite
  }

  .swiper-lazy-preloader:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E");
    background-position: 50%;
    -webkit-background-size: 100%;
    background-size: 100%;
    background-repeat: no-repeat
  }

  .swiper-lazy-preloader-white:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E")
  }

  @-webkit-keyframes swiper-preloader-spin {
    to {
      -webkit-transform: rotate(1turn)
    }
  }

  @keyframes swiper-preloader-spin {
    to {
      transform: rotate(1turn)
    }
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/libs/swiper/css/swiper.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvbGlicy9zd2lwZXIvY3NzL3N3aXBlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0Esa0JBQ0UsaUJBQWtCLEFBQ2xCLGtCQUFtQixBQUNuQixrQkFBbUIsQUFDbkIsZ0JBQWlCLEFBRWpCLFNBQVcsQ0FDWixBQUNELDJDQUNFLFVBQVksQ0FDYixBQUNELDJDQUNFLDRCQUE2QixBQUM3Qix5QkFBMEIsQUFDMUIsMEJBQTJCLEFBQzNCLDhCQUErQixBQUMvQixxQkFBdUIsQ0FDeEIsQUFDRCxnQkFDRSxrQkFBbUIsQUFDbkIsV0FBWSxBQUNaLFlBQWEsQUFDYixVQUFXLEFBQ1gsb0JBQXFCLEFBQ3JCLGlCQUFrQixBQUNsQixvQkFBcUIsQUFDckIscUJBQXNCLEFBQ3RCLGFBQWMsQUFDZCw4Q0FBK0MsQUFDL0Msd0NBQXlDLEFBQ3pDLG9DQUFxQyxBQUNyQyxzQ0FBdUMsQUFDdkMsOEJBQStCLEFBQy9CLCtCQUFnQyxBQUNoQyw0QkFBNkIsQUFDN0Isc0JBQXdCLENBQ3pCLEFBQ0Qsd0RBRUUsZ0NBQTBDLEFBQzFDLDZCQUF1QyxBQUN2QywwQkFBa0MsQUFDbEMsNEJBQXNDLEFBQ3RDLHVCQUFrQyxDQUNuQyxBQUNELDJDQUNFLDJCQUE0QixBQUM1Qix3QkFBeUIsQUFDekIsbUJBQW9CLEFBQ3BCLHVCQUF3QixBQUN4QixjQUFnQixDQUNqQixBQUNELDRDQUNFLDRDQUE2QyxBQUM3Qyx5Q0FBMEMsQUFDMUMsd0NBQXlDLEFBQ3pDLHVDQUF3QyxBQUN4QyxvQ0FBcUMsQUFDckMsYUFBZSxDQUNoQixBQUNELGNBQ0Usc0JBQXVCLEFBQ3ZCLGtCQUFtQixBQUNuQixjQUFlLEFBQ2YsV0FBWSxBQUNaLFlBQWEsQUFDYixpQkFBbUIsQ0FDcEIsQUFFRCx3RUFFRSxXQUFhLENBQ2QsQUFDRCw2Q0FDRSx3QkFBeUIsQUFDekIscUJBQXNCLEFBQ3RCLCtCQUFnQyxBQUNoQyx1QkFBd0IsQUFD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QW9CLEFBQ3BCLE9BQVEsQUFDUixLQUFPLENBQ1IsQUFDRCw4QkFDRSxXQUFhLENBQ2QsQUFFRCx1QkFDRSxXQUFZLEFBQ1osWUFBYSxBQUNiLGtCQUFtQixBQUNuQixTQUFVLEFBQ1YsUUFBUyxBQUNULGtCQUFtQixBQUNuQixpQkFBa0IsQUFDbEIsV0FBWSxBQUNaLDZCQUE4QixBQUM5QiwwQkFBMkIsQUFDM0IscUJBQXNCLEFBQ3RCLDhEQUFvRSxBQUNwRSwyREFBaUUsQUFDakUscURBQTRELENBQzdELEFBQ0QsNkJBQ0UsY0FBZSxBQUNmLFdBQVksQUFDWixXQUFZLEFBQ1osWUFBYSxBQUNiLGdtQ0FBMDdDLEFBQzE3Qyx3QkFBeUIsQUFDekIsNkJBQThCLEFBQzlCLHFCQUFzQixBQUN0QiwyQkFBNkIsQ0FDOUIsQUFDRCxtQ0FDRSw0bENBQXU3QyxDQUN4N0MsQUFDRCx5Q0FDRSxHQUNFLCtCQUFrQyxDQUNuQyxDQUNGLEFBQ0QsaUNBQ0UsR0FDRSx1QkFBMEIsQ0FDM0IsQ0FDRiIsImZpbGUiOiJzd2lwZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFN3aXBlciAzLjQuMVxyXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xyXG4gKiBcclxuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXHJcbiAqIFxyXG4gKiBDb3B5cmlnaHQgMjAxNiwgVmxhZGltaXIgS2hhcmxhbXBpZGlcclxuICogVGhlIGlEYW5nZXJvLnVzXHJcbiAqIGh0dHA6Ly93d3cuaWRhbmdlcm8udXMvXHJcbiAqIFxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcclxuICogXHJcbiAqIFJlbGVhc2VkIG9uOiBEZWNlbWJlciAxMywgMjAxNlxyXG4gKi9cclxuLnN3aXBlci1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvKiBGaXggb2YgV2Via2l0IGZsaWNrZXJpbmcgKi9cclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLW5vLWZsZXhib3ggLnN3aXBlci1zbGlkZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1vei10cmFuc2Zvcm07XHJcbiAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW8tdHJhbnNmb3JtO1xyXG4gIC1tcy10cmFuc2l0aW9uLXByb3BlcnR5OiAtbXMtdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdyA+IC5zd2lwZXItd3JhcHBlciB7XHJcbiAgLXdlYmtpdC1ib3gtbGluZXM6IG11bHRpcGxlO1xyXG4gIC1tb3otYm94LWxpbmVzOiBtdWx0aXBsZTtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xyXG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcclxuICBmbGV4LXNocmluazogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi8qIEF1dG8gSGVpZ2h0ICovXHJcbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsXHJcbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyIHtcclxuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XHJcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybSwgaGVpZ2h0O1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1vei10cmFuc2Zvcm07XHJcbiAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW8tdHJhbnNmb3JtO1xyXG4gIC1tcy10cmFuc2l0aW9uLXByb3BlcnR5OiAtbXMtdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xyXG59XHJcbi8qIGExMXkgKi9cclxuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1ub3RpZmljYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IC0xMDAwO1xyXG59XHJcbi8qIElFMTAgV2luZG93cyBQaG9uZSA4IEZpeGVzICovXHJcbi5zd2lwZXItd3A4LWhvcml6b250YWwge1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbn1cclxuLnN3aXBlci13cDgtdmVydGljYWwge1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi14O1xyXG4gIHRvdWNoLWFjdGlvbjogcGFuLXg7XHJcbn1cclxuLyogQXJyb3dzICovXHJcbi5zd2lwZXItYnV0dG9uLXByZXYsXHJcbi5zd2lwZXItYnV0dG9uLW5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogMjdweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTIycHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAyN3B4IDQ0cHg7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDI3cHggNDRweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggNDRweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXHJcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC4zNTtcclxuICBjdXJzb3I6IGF1dG87XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnN3aXBlci1idXR0b24tcHJldixcclxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnonJTIwZmlsbCUzRCclMjMwMDdhZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNrLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDAwMDAwJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtcclxufVxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGUsXHJcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnonJTIwZmlsbCUzRCclMjNmZmZmZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpO1xyXG59XHJcbi5zd2lwZXItYnV0dG9uLW5leHQsXHJcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDA3YWZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtcclxuICByaWdodDogMTBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjayxcclxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1ibGFjayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyeiclMjBmaWxsJTNEJyUyMzAwMDAwMCclMkYlM0UlM0MlMkZzdmclM0VcIik7XHJcbn1cclxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzZmZmZmZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtcclxufVxyXG4vKiBQYWdpbmF0aW9uIFN0eWxlcyAqL1xyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcztcclxuICAtbW96LXRyYW5zaXRpb246IDMwMG1zO1xyXG4gIC1vLXRyYW5zaXRpb246IDMwMG1zO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4vKiBDb21tb24gU3R5bGVzICovXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcclxuLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSxcclxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4vKiBCdWxsZXRzICovXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuYnV0dG9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQ6ICMwMDdhZmY7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLTUwJSwgMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC01MCUsIDApO1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4vKiBQcm9ncmVzcyAqL1xyXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzcyAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDdhZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzcyAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XHJcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzcyB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3Muc3dpcGVyLXBhZ2luYXRpb24tYmxhY2sgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcbi8qIDNEIENvbnRhaW5lciAqL1xyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCB7XHJcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTIwMHB4O1xyXG4gIC1tb3otcGVyc3BlY3RpdmU6IDEyMDBweDtcclxuICAtby1wZXJzcGVjdGl2ZTogMTIwMHB4O1xyXG4gIHBlcnNwZWN0aXZlOiAxMjAwcHg7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXHJcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3cge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20ocmdiYSgwLCAwLCAwLCAwLjUpKSwgdG8ocmdiYSgwLCAwLCAwLCAwKSkpO1xyXG4gIC8qIFNhZmFyaSA0KywgQ2hyb21lICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogQ2hyb21lIDEwKywgU2FmYXJpIDUuMSssIGlPUyA1KyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIEZpcmVmb3ggMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIE9wZXJhIDExLjEwLTEyLjAwICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogRmlyZWZveCAxNissIElFMTAsIE9wZXJhIDEyLjUwKyAqL1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDAsIDAsIDAsIDAuNSkpLCB0byhyZ2JhKDAsIDAsIDAsIDApKSk7XHJcbiAgLyogU2FmYXJpIDQrLCBDaHJvbWUgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIENocm9tZSAxMCssIFNhZmFyaSA1LjErLCBpT1MgNSsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIEZpcmVmb3ggMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogT3BlcmEgMTEuMTAtMTIuMDAgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogRmlyZWZveCAxNissIElFMTAsIE9wZXJhIDEyLjUwKyAqL1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDAsIDAsIDAsIDAuNSkpLCB0byhyZ2JhKDAsIDAsIDAsIDApKSk7XHJcbiAgLyogU2FmYXJpIDQrLCBDaHJvbWUgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogQ2hyb21lIDEwKywgU2FmYXJpIDUuMSssIGlPUyA1KyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICAvKiBGaXJlZm94IDMuNi0xNSAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogT3BlcmEgMTEuMTAtMTIuMDAgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIEZpcmVmb3ggMTYrLCBJRTEwLCBPcGVyYSAxMi41MCsgKi9cclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSgwLCAwLCAwLCAwLjUpKSwgdG8ocmdiYSgwLCAwLCAwLCAwKSkpO1xyXG4gIC8qIFNhZmFyaSA0KywgQ2hyb21lICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIENocm9tZSAxMCssIFNhZmFyaSA1LjErLCBpT1MgNSsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogRmlyZWZveCAzLjYtMTUgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIE9wZXJhIDExLjEwLTEyLjAwICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICAvKiBGaXJlZm94IDE2KywgSUUxMCwgT3BlcmEgMTIuNTArICovXHJcbn1cclxuLyogQ292ZXJmbG93ICovXHJcbi5zd2lwZXItY29udGFpbmVyLWNvdmVyZmxvdyAuc3dpcGVyLXdyYXBwZXIsXHJcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci13cmFwcGVyIHtcclxuICAvKiBXaW5kb3dzIDggSUUgMTAgZml4ICovXHJcbiAgLW1zLXBlcnNwZWN0aXZlOiAxMjAwcHg7XHJcbn1cclxuLyogQ3ViZSArIEZsaXAgKi9cclxuLnN3aXBlci1jb250YWluZXItY3ViZSxcclxuLnN3aXBlci1jb250YWluZXItZmxpcCB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC1tcy1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUsXHJcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcclxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXHJcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLyogQ3ViZSAqL1xyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItY3ViZS5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXNsaWRlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCxcclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXByZXYsXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0ICsgLnN3aXBlci1zbGlkZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1MHB4KTtcclxuICBmaWx0ZXI6IGJsdXIoNTBweCk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4vKiBGYWRlICovXHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUuc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgLnN3aXBlci1zbGlkZSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcbi5zd2lwZXItem9vbS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gaW1nLFxyXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gc3ZnLFxyXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gY2FudmFzIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcbi8qIFNjcm9sbGJhciAqL1xyXG4uc3dpcGVyLXNjcm9sbGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMSU7XHJcbiAgYm90dG9tOiAzcHg7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDNweDtcclxuICB0b3A6IDElO1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbn1cclxuLnN3aXBlci1zY3JvbGxiYXItZHJhZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG4uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZyB7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcbi8qIFByZWxvYWRlciAqL1xyXG4uc3dpcGVyLWxhenktcHJlbG9hZGVyIHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIxcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgc3RlcHMoMTIsIGVuZCkgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IHN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBzdGVwcygxMiwgZW5kKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBzdGVwcygxMiwgZW5kKSBpbmZpbml0ZTtcclxufVxyXG4uc3dpcGVyLWxhenktcHJlbG9hZGVyOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMTIwJTIwMTIwJyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB4bWxucyUzQXhsaW5rJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhsaW5rJyUzRSUzQ2RlZnMlM0UlM0NsaW5lJTIwaWQlM0QnbCclMjB4MSUzRCc2MCclMjB4MiUzRCc2MCclMjB5MSUzRCc3JyUyMHkyJTNEJzI3JyUyMHN0cm9rZSUzRCclMjM2YzZjNmMnJTIwc3Ryb2tlLXdpZHRoJTNEJzExJyUyMHN0cm9rZS1saW5lY2FwJTNEJ3JvdW5kJyUyRiUzRSUzQyUyRmRlZnMlM0UlM0NnJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoNjAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDkwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxMjAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDE1MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjM3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTgwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNDYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyMTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy41NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDI0MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjY2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjcwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNzUnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMDAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy44NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMzMCUyMDYwJTJDNjApJyUyRiUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5zd2lwZXItbGF6eS1wcmVsb2FkZXItd2hpdGU6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyM2ZmZiclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluIHtcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzd2lwZXItcHJlbG9hZGVyLXNwaW4ge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */</style>

<style type="text/css">
  .banner {
    overflow: hidden
  }

  .banner, .swiperimg {
    width: 100%;
    height: 7.2rem
  }

  .swiper-pagination-bullet-active {
    background: #fff
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/components/banner.vue */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9jb21wb25lbnRzL2Jhbm5lci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsUUFBc0MsZUFBaUIsQ0FDdEQsQUFDRCxtQkFGUyxXQUFZLEFBQUMsYUFBZSxDQUdwQyxBQUNELGlDQUFpQyxlQUFrQixDQUNsRCIsImZpbGUiOiJiYW5uZXIudnVlIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi9hc3NldHMvbGlicy9zd2lwZXIvY3NzL3N3aXBlci5jc3MnO1xuLmJhbm5lciB7d2lkdGg6IDEwMCU7IGhlaWdodDogNy4ycmVtOyBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN3aXBlcmltZ3t3aWR0aDogMTAwJTtoZWlnaHQ6Ny4ycmVtO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7YmFja2dyb3VuZDogd2hpdGU7XG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */</style>

<style type="text/css">
  .loginbomb {
    padding: .5rem 1rem;
    width: 4rem;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    position: fixed;
    top: 40%;
    border-radius: 4px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 11
  }

  .ibanner {
    width: 100%;
    height: 7.5rem
  }

  .ibanner > img {
    width: 100%;
    height: 100%
  }

  .noticebox {
    width: 100%;
    height: 2rem;
    background: #fff;
    border-bottom: 1px solid #dedfe0;
    position: relative
  }

  .notice {
    float: left;
    margin: .55rem .5rem
  }

  .notice, .noticei {
    width: .75rem;
    height: .75rem
  }

  .noticei {
    position: absolute;
    top: .65rem;
    right: .65rem
  }

  .noticet {
    height: 2rem;
    line-height: 2rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    border-right: 1px solid #dfdfdf;
    width: 80%;
    float: left
  }

  .pointbox {
    width: .4rem;
    height: .4rem;
    border-radius: 5px;
    background: red;
    position: absolute;
    top: .5rem;
    right: .3rem
  }

  .swiperbtn {
    width: 5rem
  }

  .swiperbtn, .swiperbtn2 {
    height: 1.4rem;
    position: absolute;
    bottom: 1.2rem;
    left: 10%
  }

  .swiperbtn2 {
    width: 4.5rem
  }

  .homeswiper .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1
  }

  .homeswiper .swiper-pagination-bullet-active {
    background-color: #611987
  }

  .ilist {
    padding: .5rem 0;
    height: 3.2rem;
    text-align: center
  }

  .ilistmq {
    width: 24%;
    height: 3.3rem;
    color: #333;
    display: inline-block
  }

  .ilistimg {
    width: 2rem;
    height: 2rem;
    margin-bottom: .2rem
  }

  .excellent {
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem
  }

  .excellent_img {
    width: .8rem;
    height: .8rem;
    margin-right: .3rem;
    margin-top: .2rem;
    float: left
  }

  .excellent_icon {
    width: .35rem;
    height: .7rem;
    margin-left: .3rem;
    float: right;
    margin-top: .25rem
  }

  .excebody {
    width: 100%;
    height: 4.9rem;
    border: 1px solid #dedfe0;
    border-radius: 10px;
    margin-top: .8rem;
    box-shadow: 0 0 2px #ccc;
    position: relative
  }

  .excebody1 {
    width: 30%;
    height: 5.3rem;
    position: relative
  }

  .excebody2 {
    position: absolute;
    width: 40%;
    height: 5.3rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-left: 1px solid #dedfe0;
    border-right: 1px solid #dedfe0;
    border-top: 1px solid #dedfe0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    z-index: 2;
    box-shadow: 0 0 5px #dedfe0
  }

  .excebody_in {
    position: relative
  }

  .exceuser {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: .3rem
  }

  .exceuser, .exceuser2 {
    border-radius: 50%;
    border: 1px solid #ccc
  }

  .exceuser2 {
    width: 1.4rem;
    height: 1.4rem;
    margin-top: .5rem
  }

  .excename {
    line-height: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .62rem
  }

  .excenum {
    color: #611987;
    font-size: .75rem;
    line-height: 1rem
  }

  .exceprofit {
    color: #777;
    font-size: .6rem
  }

  .exceicon {
    width: 1rem;
    height: 1.2rem;
    position: absolute;
    left: .4rem;
    top: .4rem
  }

  .home_tradestar, .mql_excellent {
    display: block
  }

  .cattle {
    width: 100%;
    height: 3.2rem;
    margin-top: .3rem
  }

  .cattle > li {
    width: 31%;
    height: 3.1rem;
    float: left;
    padding-left: 2%
  }

  .cattle > li:first-child, .cattle > li:nth-child(2) {
    border-right: 1px solid #dedfe0
  }

  .cattlebox {
    float: left;
    text-align: left;
    line-height: 1rem;
    margin-top: .3rem;
    width: 67%
  }

  .cattleuser {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .3rem;
    float: left;
    border-radius: 50%;
    border: 1px solid #ccc
  }

  .cattlefont1 {
    font-size: .6rem;
    color: #666
  }

  .swiper-pagination-bullet-active {
    background: #fff
  }

  .noticebox_href {
    display: block
  }

  .mql_time {
    text-align: left;
    color: #999;
    line-height: 1rem;
    margin-bottom: .3rem
  }

  .mql_top {
    height: 2rem;
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0
  }

  .mql_top > li {
    float: left;
    height: 2rem;
    line-height: 2rem
  }

  .mql_top > li:first-child {
    width: 15%
  }

  .mql_top > li:nth-child(2) {
    width: 10%
  }

  .mql_top > li:nth-child(3) {
    width: 30%
  }

  .mql_top > li:nth-child(4), .mql_top > li:nth-child(5), .mql_top > li:nth-child(6) {
    width: 15%
  }

  .mql_content {
    height: 2.5rem;
    color: #333
  }

  .mql_content > li {
    float: left
  }

  .mql_content > li:first-child {
    width: 15%;
    height: 2.5rem;
    line-height: 2.5rem
  }

  .mql_content > li:nth-child(2) {
    width: 10%;
    height: 2.5rem;
    font-size: .6rem
  }

  .mql_content > li:nth-child(3) {
    width: 30%;
    height: 2.5rem
  }

  .mql_content > li:nth-child(4) {
    width: 15%;
    height: 2.5rem;
    line-height: 2.5rem
  }

  .mql_content > li:nth-child(5), .mql_content > li:nth-child(6) {
    width: 15%;
    height: 2rem;
    line-height: 2.5rem
  }

  .mql_icon {
    width: 1.1rem;
    height: .8rem;
    margin-top: .4rem
  }

  .mql_icon2 {
    width: .45rem;
    height: .45rem;
    margin-top: 1rem
  }

  .mql_text {
    padding-top: .5rem
  }

  .mql_text, .mql_text2 {
    text-align: left;
    font-size: .6rem;
    margin-left: .3rem;
    float: left;
    height: 2.5rem;
    width: 86%
  }

  .mql_text2 {
    padding-top: .8rem
  }

  .mql_icon3 {
    width: .4rem;
    height: 2.5rem;
    float: left
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/css/home.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvY3NzL2hvbWUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsbUJBQXFCLFdBQVcsZ0NBQXFDLFdBQWEsZUFBZ0IsUUFBUyxrQkFBbUIsQUFDckksT0FBVSxRQUFXLGNBQWUsVUFBWSxDQUFDLEFBQ3JELFNBQVMsV0FBWSxhQUFlLENBQUMsQUFDckMsYUFBYSxXQUFZLFdBQWEsQ0FBQyxBQUN2QyxXQUFXLFdBQVcsWUFBWSxnQkFBaUIsZ0NBQWdDLGlCQUFtQixDQUFDLEFBQ3ZHLFFBQXFDLFdBQVcsbUJBQXNCLENBQUMsQUFDdkUsaUJBRFEsYUFBYyxhQUFlLENBQytDLEFBQXBGLFNBQXNDLGtCQUFrQixXQUFZLFlBQWMsQ0FBRSxBQUNwRixTQUFTLFlBQVksaUJBQWtCLFdBQVcsZ0JBQWlCLHVCQUF3QixtQkFBb0IsZ0JBQWlCLEFBQ2hJLCtCQUFnQyxVQUFVLFVBQVcsQ0FBQyxBQUN0RCxVQUFVLFlBQWEsYUFBYyxrQkFBbUIsZUFBZ0Isa0JBQW1CLFVBQVcsV0FBYSxDQUFDLEFBQ3BILFdBQVcsVUFBWSxDQUEyRCxBQUNsRix1QkFEdUIsY0FBZSxrQkFBbUIsY0FBYyxRQUFVLENBQ0ksQUFBckYsWUFBWSxZQUFjLENBQTJELEFBQ3JGLHNDQUFzQyxzQkFBdUIsU0FBVyxDQUFDLEFBQ3pFLDZDQUE2Qyx3QkFBMEIsQ0FBQyxBQUN4RSxPQUFPLGdCQUFvQixjQUFlLGlCQUFtQixDQUFDLEFBQzlELFNBQVMsVUFBVyxjQUFlLFdBQVksb0JBQXNCLENBQUMsQUFDdEUsVUFBVSxXQUFZLFlBQWEsbUJBQXNCLENBQUMsQUFDMUQsV0FBVyxXQUFXLGNBQWUsa0JBQW9CLENBQUMsQUFDMUQsZUFBZSxZQUFjLGFBQWUsbUJBQXFCLGlCQUFtQixVQUFZLENBQUMsQUFDakcsZ0JBQWdCLGFBQWUsYUFBZSxrQkFBb0IsWUFBYSxpQkFBb0IsQ0FBQyxBQUNwRyxVQUFVLFdBQVksY0FBZSx5QkFBeUIsbUJBQW9CLGlCQUFtQix3QkFBNkIsaUJBQW1CLENBQUMsQUFDdEosV0FBVyxVQUFXLGNBQWUsaUJBQW1CLENBQUMsQUFDekQsV0FBVyxrQkFBbUIsVUFBVyxjQUFlLFNBQVksT0FBVSxRQUFXLGNBQWlCLDhCQUE4QiwrQkFBK0IsQUFDdkssNkJBQTZCLDRCQUE2Qiw2QkFBOEIsc0JBQXdCLFVBQVcsMEJBQWdDLENBQUMsQUFDNUosYUFBYSxpQkFBbUIsQ0FBQyxBQUNqQyxVQUFVLGFBQWMsY0FBZSxnQkFBbUIsQ0FBMkMsQUFDckcscUJBRDBELGtCQUFtQixxQkFBdUIsQ0FDRSxBQUF0RyxXQUFXLGFBQWMsY0FBZSxnQkFBbUIsQ0FBMkMsQUFDdEcsVUFBVSxtQkFBb0IsZ0JBQWlCLHVCQUF3QixtQkFBb0IsZ0JBQW1CLENBQUMsQUFDL0csU0FBUyxjQUFlLGlCQUFtQixnQkFBa0IsQ0FBQyxBQUM5RCxZQUFZLFdBQVksZUFBa0IsQ0FBQyxBQUMzQyxVQUFVLFdBQVksY0FBZSxrQkFBbUIsV0FBYSxTQUFZLENBQUMsQUFHbEYsK0JBQWdCLGFBQWUsQ0FBQyxBQUVoQyxRQUFRLFdBQVksY0FBZSxnQkFBbUIsQ0FBQyxBQUN2RCxXQUFXLFVBQVcsY0FBZSxXQUFZLGVBQWlCLENBQUMsQUFFbkUsK0NBQXdCLDhCQUErQixDQUFDLEFBQ3hELFdBQVcsV0FBWSxnQkFBaUIsaUJBQWtCLGlCQUFtQixTQUFXLENBQUMsQUFDekYsWUFBWSxhQUFjLGNBQWUsbUJBQXFCLFdBQVksa0JBQW1CLHFCQUF1QixDQUFDLEFBQ3JILGFBQWEsZ0JBQWtCLFVBQVksQ0FBQyxBQUM1QyxpQ0FBaUMsZUFBa0IsQ0FBQyxBQUNwRCxnQkFBZ0IsYUFBZSxDQUFDLEFBRWhDLFVBQVUsZ0JBQWlCLFdBQVksaUJBQWtCLG1CQUFzQixDQUFDLEFBQ2hGLFNBQVMsWUFBYSw2QkFBOEIsK0JBQWlDLENBQUMsQUFDdEYsWUFBWSxXQUFZLFlBQWEsZ0JBQWtCLENBQUMsQUFDeEQsd0JBQXlCLFNBQVcsQ0FBQyxBQUNyQyx5QkFBeUIsU0FBVyxDQUFDLEFBQ3JDLHlCQUF5QixTQUFXLENBQUMsQUFHckMsMkVBQXlCLFNBQVcsQ0FBQyxBQUNyQyxhQUFhLGNBQWUsVUFBWSxDQUFDLEFBQ3pDLGdCQUFnQixVQUFZLENBQUMsQUFDN0IsNEJBQTZCLFVBQVcsY0FBZSxrQkFBb0IsQ0FBQyxBQUM1RSw2QkFBNkIsVUFBVyxjQUFlLGVBQWtCLENBQUMsQUFDMUUsNkJBQTZCLFVBQVcsYUFBZSxDQUFDLEFBQ3hELDZCQUE2QixVQUFXLGNBQWUsa0JBQW9CLENBQUMsQUFFNUUsMERBQTZCLFVBQVcsWUFBYSxrQkFBb0IsQ0FBQyxBQUMxRSxVQUFVLGFBQWMsYUFBZSxnQkFBbUIsQ0FBQyxBQUMzRCxXQUFXLGFBQWUsY0FBZ0IsZUFBaUIsQ0FBQyxBQUM1RCxVQUF1RyxpQkFBb0IsQ0FBQyxBQUM1SCxxQkFEVSxnQkFBaUIsZ0JBQWtCLGtCQUFvQixXQUFZLGNBQWUsU0FBVyxDQUNzQixBQUE3SCxXQUF3RyxpQkFBb0IsQ0FBQyxBQUM3SCxXQUFXLFlBQWMsY0FBZSxVQUFZLENBQUMiLCJmaWxlIjoiaG9tZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5ib21ie3BhZGRpbmc6IDAuNXJlbSAxcmVtO3dpZHRoOjRyZW07YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO2NvbG9yOiB3aGl0ZTtwb3NpdGlvbjogZml4ZWQ7dG9wOiA0MCU7Ym9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGVmdDogMHB4O3JpZ2h0OiAwcHg7bWFyZ2luOiAwIGF1dG87ei1pbmRleDogMTE7fVxyXG4uaWJhbm5lcnt3aWR0aDogMTAwJTtoZWlnaHQ6IDcuNXJlbTt9XHJcbi5pYmFubmVyPmltZ3t3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7fVxyXG4ubm90aWNlYm94e3dpZHRoOjEwMCU7aGVpZ2h0OjJyZW07YmFja2dyb3VuZDogI2ZmZjtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGVkZmUwO3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5ub3RpY2V7d2lkdGg6MC43NXJlbTtoZWlnaHQ6MC43NXJlbTtmbG9hdDpsZWZ0O21hcmdpbjowLjU1cmVtIDAuNXJlbTt9XHJcbi5ub3RpY2Vpe3dpZHRoOjAuNzVyZW07aGVpZ2h0OjAuNzVyZW07cG9zaXRpb246YWJzb2x1dGU7dG9wOjAuNjVyZW07cmlnaHQ6MC42NXJlbTsgfVxyXG4ubm90aWNldHtoZWlnaHQ6MnJlbTtsaW5lLWhlaWdodDogMnJlbTtjb2xvcjojOTk5O292ZXJmbG93OiBoaWRkZW47dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7d2hpdGUtc3BhY2U6IG5vd3JhcDt0ZXh0LWFsaWduOiBsZWZ0O1xyXG5ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmRmO3dpZHRoOjgwJTtmbG9hdDpsZWZ0O31cclxuLnBvaW50Ym94e3dpZHRoOjAuNHJlbTtoZWlnaHQ6MC40cmVtO2JvcmRlci1yYWRpdXM6IDVweDtiYWNrZ3JvdW5kOiByZWQ7cG9zaXRpb246IGFic29sdXRlO3RvcDowLjVyZW07cmlnaHQ6MC4zcmVtO30gIFxyXG4uc3dpcGVyYnRue3dpZHRoOiA1cmVtO2hlaWdodDogMS40cmVtO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206MS4ycmVtO2xlZnQ6IDEwJTt9XHJcbi5zd2lwZXJidG4ye3dpZHRoOiA0LjVyZW07aGVpZ2h0OiAxLjRyZW07cG9zaXRpb246IGFic29sdXRlO2JvdHRvbToxLjJyZW07bGVmdDogMTAlO31cclxuLmhvbWVzd2lwZXIgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO29wYWNpdHk6IDE7fVxyXG4uaG9tZXN3aXBlciAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjNjExOTg3O31cclxuLmlsaXN0e3BhZGRpbmc6IDAuNXJlbSAwcHg7aGVpZ2h0OiAzLjJyZW07dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmlsaXN0bXF7d2lkdGg6IDI0JTtoZWlnaHQ6IDMuM3JlbTtjb2xvcjogIzMzMztkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uaWxpc3RpbWd7d2lkdGg6IDJyZW07aGVpZ2h0OiAycmVtO21hcmdpbi1ib3R0b206IDAuMnJlbTt9XHJcbi5leGNlbGxlbnR7d2lkdGg6MTAwJTtoZWlnaHQ6IDEuM3JlbTtsaW5lLWhlaWdodDogMS4zcmVtO31cclxuLmV4Y2VsbGVudF9pbWd7d2lkdGg6IDAuOHJlbTtoZWlnaHQ6IDAuOHJlbTttYXJnaW4tcmlnaHQ6IDAuM3JlbTttYXJnaW4tdG9wOiAwLjJyZW07ZmxvYXQ6IGxlZnQ7fVxyXG4uZXhjZWxsZW50X2ljb257d2lkdGg6IDAuMzVyZW07aGVpZ2h0OiAwLjdyZW07bWFyZ2luLWxlZnQ6IDAuM3JlbTtmbG9hdDogcmlnaHQ7bWFyZ2luLXRvcDogMC4yNXJlbTt9XHJcbi5leGNlYm9keXt3aWR0aDogMTAwJTtoZWlnaHQ6IDQuOXJlbTtib3JkZXI6MXB4IHNvbGlkICNkZWRmZTA7Ym9yZGVyLXJhZGl1czogMTBweDttYXJnaW4tdG9wOiAwLjhyZW07Ym94LXNoYWRvdzogMHB4IDBweCAycHggI2NjYztwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uZXhjZWJvZHkxe3dpZHRoOiAzMCU7aGVpZ2h0OiA1LjNyZW07cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmV4Y2Vib2R5Mntwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDQwJTtoZWlnaHQ6IDUuM3JlbTtib3R0b206IDBweDtsZWZ0OiAwcHg7cmlnaHQ6IDBweDttYXJnaW46IDBweCBhdXRvO2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGVkZmUwO2JvcmRlci1yaWdodDoxcHggc29saWQgI2RlZGZlMDtcclxuYm9yZGVyLXRvcDoxcHggc29saWQgI2RlZGZlMDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O2JhY2tncm91bmQtY29sb3I6IHdoaXRlO3otaW5kZXg6IDI7Ym94LXNoYWRvdzogMHB4IDBweCA1cHggI2RlZGZlMDt9XHJcbi5leGNlYm9keV9pbntwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uZXhjZXVzZXJ7d2lkdGg6IDEuMnJlbTtoZWlnaHQ6IDEuMnJlbTttYXJnaW4tdG9wOiAwLjNyZW07Ym9yZGVyLXJhZGl1czogNTAlO2JvcmRlcjogMXB4IHNvbGlkICNjY2M7fVxyXG4uZXhjZXVzZXIye3dpZHRoOiAxLjRyZW07aGVpZ2h0OiAxLjRyZW07bWFyZ2luLXRvcDogMC41cmVtO2JvcmRlci1yYWRpdXM6IDUwJTtib3JkZXI6IDFweCBzb2xpZCAjY2NjO31cclxuLmV4Y2VuYW1le2xpbmUtaGVpZ2h0OiAxLjJyZW07b3ZlcmZsb3c6IGhpZGRlbjt0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczt3aGl0ZS1zcGFjZTogbm93cmFwO2ZvbnQtc2l6ZTogMC42MnJlbTt9XHJcbi5leGNlbnVte2NvbG9yOiAjNjExOTg3O2ZvbnQtc2l6ZTogMC43NXJlbTtsaW5lLWhlaWdodDogMXJlbTt9XHJcbi5leGNlcHJvZml0e2NvbG9yOiAjNzc3O2ZvbnQtc2l6ZTogMC42cmVtO31cclxuLmV4Y2VpY29ue3dpZHRoOiAxcmVtO2hlaWdodDogMS4ycmVtO3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwLjRyZW07dG9wOiAwLjRyZW07fVxyXG5cclxuLm1xbF9leGNlbGxlbnR7ZGlzcGxheTogYmxvY2s7fVxyXG4uaG9tZV90cmFkZXN0YXJ7ZGlzcGxheTogYmxvY2s7fVxyXG5cclxuLmNhdHRsZXt3aWR0aDogMTAwJTtoZWlnaHQ6IDMuMnJlbTttYXJnaW4tdG9wOiAwLjNyZW07fVxyXG4uY2F0dGxlPmxpe3dpZHRoOiAzMSU7aGVpZ2h0OiAzLjFyZW07ZmxvYXQ6IGxlZnQ7cGFkZGluZy1sZWZ0OiAyJTt9XHJcbi5jYXR0bGU+bGk6bnRoLWNoaWxkKDEpe2JvcmRlci1yaWdodDoxcHggc29saWQgI2RlZGZlMDt9XHJcbi5jYXR0bGU+bGk6bnRoLWNoaWxkKDIpe2JvcmRlci1yaWdodDoxcHggc29saWQgI2RlZGZlMDt9XHJcbi5jYXR0bGVib3h7ZmxvYXQ6IGxlZnQ7dGV4dC1hbGlnbjogbGVmdDtsaW5lLWhlaWdodDogMXJlbTttYXJnaW4tdG9wOiAwLjNyZW07d2lkdGg6IDY3JTt9XHJcbi5jYXR0bGV1c2Vye3dpZHRoOiAxLjVyZW07aGVpZ2h0OiAxLjVyZW07bWFyZ2luLXJpZ2h0OiAwLjNyZW07ZmxvYXQ6IGxlZnQ7Ym9yZGVyLXJhZGl1czogNTAlO2JvcmRlcjogMXB4IHNvbGlkICNjY2M7fVxyXG4uY2F0dGxlZm9udDF7Zm9udC1zaXplOiAwLjZyZW07Y29sb3I6ICM2NjY7fVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kOiB3aGl0ZTt9XHJcbi5ub3RpY2Vib3hfaHJlZntkaXNwbGF5OiBibG9jazt9XHJcblxyXG4ubXFsX3RpbWV7dGV4dC1hbGlnbjogbGVmdDtjb2xvcjogIzk5OTtsaW5lLWhlaWdodDogMXJlbTttYXJnaW4tYm90dG9tOiAwLjNyZW07fVxyXG4ubXFsX3RvcHtoZWlnaHQ6IDJyZW07Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRmZTA7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRmZTA7fVxyXG4ubXFsX3RvcD5saXtmbG9hdDogbGVmdDtoZWlnaHQ6IDJyZW07bGluZS1oZWlnaHQ6IDJyZW07fVxyXG4ubXFsX3RvcD5saTpudGgtY2hpbGQoMSl7d2lkdGg6IDE1JTt9XHJcbi5tcWxfdG9wPmxpOm50aC1jaGlsZCgyKXt3aWR0aDogMTAlO31cclxuLm1xbF90b3A+bGk6bnRoLWNoaWxkKDMpe3dpZHRoOiAzMCU7fVxyXG4ubXFsX3RvcD5saTpudGgtY2hpbGQoNCl7d2lkdGg6IDE1JTt9XHJcbi5tcWxfdG9wPmxpOm50aC1jaGlsZCg1KXt3aWR0aDogMTUlO31cclxuLm1xbF90b3A+bGk6bnRoLWNoaWxkKDYpe3dpZHRoOiAxNSU7fVxyXG4ubXFsX2NvbnRlbnR7aGVpZ2h0OiAyLjVyZW07Y29sb3I6ICMzMzM7fVxyXG4ubXFsX2NvbnRlbnQ+bGl7ZmxvYXQ6IGxlZnQ7fVxyXG4ubXFsX2NvbnRlbnQ+bGk6bnRoLWNoaWxkKDEpe3dpZHRoOiAxNSU7aGVpZ2h0OiAyLjVyZW07bGluZS1oZWlnaHQ6IDIuNXJlbTt9XHJcbi5tcWxfY29udGVudD5saTpudGgtY2hpbGQoMil7d2lkdGg6IDEwJTtoZWlnaHQ6IDIuNXJlbTtmb250LXNpemU6IDAuNnJlbTt9XHJcbi5tcWxfY29udGVudD5saTpudGgtY2hpbGQoMyl7d2lkdGg6IDMwJTtoZWlnaHQ6IDIuNXJlbTt9XHJcbi5tcWxfY29udGVudD5saTpudGgtY2hpbGQoNCl7d2lkdGg6IDE1JTtoZWlnaHQ6IDIuNXJlbTtsaW5lLWhlaWdodDogMi41cmVtO31cclxuLm1xbF9jb250ZW50PmxpOm50aC1jaGlsZCg1KXt3aWR0aDogMTUlO2hlaWdodDogMnJlbTtsaW5lLWhlaWdodDogMi41cmVtO31cclxuLm1xbF9jb250ZW50PmxpOm50aC1jaGlsZCg2KXt3aWR0aDogMTUlO2hlaWdodDogMnJlbTtsaW5lLWhlaWdodDogMi41cmVtO31cclxuLm1xbF9pY29ue3dpZHRoOiAxLjFyZW07aGVpZ2h0OiAwLjhyZW07bWFyZ2luLXRvcDogMC40cmVtO31cclxuLm1xbF9pY29uMnt3aWR0aDogMC40NXJlbTtoZWlnaHQ6IDAuNDVyZW07bWFyZ2luLXRvcDogMXJlbTt9XHJcbi5tcWxfdGV4dHt0ZXh0LWFsaWduOiBsZWZ0O2ZvbnQtc2l6ZTogMC42cmVtO21hcmdpbi1sZWZ0OiAwLjNyZW07ZmxvYXQ6IGxlZnQ7aGVpZ2h0OiAyLjVyZW07d2lkdGg6IDg2JTtwYWRkaW5nLXRvcDogMC41cmVtO31cclxuLm1xbF90ZXh0Mnt0ZXh0LWFsaWduOiBsZWZ0O2ZvbnQtc2l6ZTogMC42cmVtO21hcmdpbi1sZWZ0OiAwLjNyZW07ZmxvYXQ6IGxlZnQ7aGVpZ2h0OiAyLjVyZW07d2lkdGg6IDg2JTtwYWRkaW5nLXRvcDogMC44cmVtO31cclxuLm1xbF9pY29uM3t3aWR0aDogMC40cmVtO2hlaWdodDogMi41cmVtO2Zsb2F0OiBsZWZ0O30iXSwic291cmNlUm9vdCI6IiJ9 */</style>

<style type="text/css">
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1
  }

  .swiper-container-no-flexbox .swiper-slide {
    float: left
  }

  .swiper-container-vertical > .swiper-wrapper {
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box
  }

  .swiper-container-android .swiper-slide, .swiper-wrapper {
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -o-transform: translate(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0)
  }

  .swiper-container-multirow > .swiper-wrapper {
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto
  }

  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative
  }

  .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
    height: auto
  }

  .swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-transition-property: -webkit-transform, height;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform, height
  }

  .swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000
  }

  .swiper-wp8-horizontal {
    -ms-touch-action: pan-y;
    touch-action: pan-y
  }

  .swiper-wp8-vertical {
    -ms-touch-action: pan-x;
    touch-action: pan-x
  }

  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    -moz-background-size: 27px 44px;
    -webkit-background-size: 27px 44px;
    background-size: 27px 44px;
    background-position: 50%;
    background-repeat: no-repeat
  }

  .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
    opacity: .35;
    cursor: auto;
    pointer-events: none
  }

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E");
    left: 10px;
    right: auto
  }

  .swiper-button-prev.swiper-button-black, .swiper-container-rtl .swiper-button-next.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E")
  }

  .swiper-button-prev.swiper-button-white, .swiper-container-rtl .swiper-button-next.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E")
  }

  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E");
    right: 10px;
    left: auto
  }

  .swiper-button-next.swiper-button-black, .swiper-container-rtl .swiper-button-prev.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E")
  }

  .swiper-button-next.swiper-button-white, .swiper-container-rtl .swiper-button-prev.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E")
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 10
  }

  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0
  }

  .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2
  }

  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    appearance: none
  }

  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer
  }

  .swiper-pagination-white .swiper-pagination-bullet {
    background: #fff
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff
  }

  .swiper-pagination-white .swiper-pagination-bullet-active {
    background: #fff
  }

  .swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000
  }

  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    -webkit-transform: translate3d(0, -50%, 0);
    -moz-transform: translate3d(0, -50%, 0);
    -o-transform: translateY(-50%);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
  }

  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 5px 0;
    display: block
  }

  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px
  }

  .swiper-pagination-progress {
    background: rgba(0, 0, 0, .25);
    position: absolute
  }

  .swiper-pagination-progress .swiper-pagination-progressbar {
    background: #007aff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    transform-origin: left top
  }

  .swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {
    -webkit-transform-origin: right top;
    -moz-transform-origin: right top;
    -ms-transform-origin: right top;
    -o-transform-origin: right top;
    transform-origin: right top
  }

  .swiper-container-horizontal > .swiper-pagination-progress {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0
  }

  .swiper-container-vertical > .swiper-pagination-progress {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0
  }

  .swiper-pagination-progress.swiper-pagination-white {
    background: hsla(0, 0%, 100%, .5)
  }

  .swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar {
    background: #fff
  }

  .swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar {
    background: #000
  }

  .swiper-container-3d {
    -webkit-perspective: 1200px;
    -moz-perspective: 1200px;
    -o-perspective: 1200px;
    perspective: 1200px
  }

  .swiper-container-3d .swiper-cube-shadow, .swiper-container-3d .swiper-slide, .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top, .swiper-container-3d .swiper-wrapper {
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d
  }

  .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10
  }

  .swiper-container-3d .swiper-slide-shadow-left {
    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(transparent));
    background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
    background-image: -moz-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
    background-image: -o-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
    background-image: linear-gradient(270deg, rgba(0, 0, 0, .5), transparent)
  }

  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .5)), to(transparent));
    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
    background-image: -moz-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
    background-image: -o-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
    background-image: linear-gradient(90deg, rgba(0, 0, 0, .5), transparent)
  }

  .swiper-container-3d .swiper-slide-shadow-top {
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .5)), to(transparent));
    background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
    background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
    background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
    background-image: linear-gradient(0deg, rgba(0, 0, 0, .5), transparent)
  }

  .swiper-container-3d .swiper-slide-shadow-bottom {
    background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, .5)), to(transparent));
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
    background-image: -moz-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
    background-image: -o-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), transparent)
  }

  .swiper-container-coverflow .swiper-wrapper, .swiper-container-flip .swiper-wrapper {
    -ms-perspective: 1200px
  }

  .swiper-container-cube, .swiper-container-flip {
    overflow: visible
  }

  .swiper-container-cube .swiper-slide, .swiper-container-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1
  }

  .swiper-container-cube .swiper-slide .swiper-slide, .swiper-container-flip .swiper-slide .swiper-slide {
    pointer-events: none
  }

  .swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-active .swiper-slide-active, .swiper-container-flip .swiper-slide-active, .swiper-container-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
  }

  .swiper-container-cube .swiper-slide-shadow-bottom, .swiper-container-cube .swiper-slide-shadow-left, .swiper-container-cube .swiper-slide-shadow-right, .swiper-container-cube .swiper-slide-shadow-top, .swiper-container-flip .swiper-slide-shadow-bottom, .swiper-container-flip .swiper-slide-shadow-left, .swiper-container-flip .swiper-slide-shadow-right, .swiper-container-flip .swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden
  }

  .swiper-container-cube .swiper-slide {
    visibility: hidden;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    width: 100%;
    height: 100%
  }

  .swiper-container-cube.swiper-container-rtl .swiper-slide {
    -webkit-transform-origin: 100% 0;
    -moz-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0
  }

  .swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-next, .swiper-container-cube .swiper-slide-next + .swiper-slide, .swiper-container-cube .swiper-slide-prev {
    pointer-events: auto;
    visibility: visible
  }

  .swiper-container-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .6;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    z-index: 0
  }

  .swiper-container-fade.swiper-container-free-mode .swiper-slide {
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out
  }

  .swiper-container-fade .swiper-slide {
    pointer-events: none;
    -webkit-transition-property: opacity;
    -moz-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity
  }

  .swiper-container-fade .swiper-slide .swiper-slide {
    pointer-events: none
  }

  .swiper-container-fade .swiper-slide-active, .swiper-container-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
  }

  .swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    text-align: center
  }

  .swiper-zoom-container > canvas, .swiper-zoom-container > img, .swiper-zoom-container > svg {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain
  }

  .swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0, 0, 0, .1)
  }

  .swiper-container-horizontal > .swiper-scrollbar {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%
  }

  .swiper-container-vertical > .swiper-scrollbar {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%
  }

  .swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0, 0, 0, .5);
    border-radius: 10px;
    left: 0;
    top: 0
  }

  .swiper-scrollbar-cursor-drag {
    cursor: move
  }

  .swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    -webkit-transform-origin: 50%;
    -moz-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-animation: swiper-preloader-spin 1s steps(12) infinite;
    -moz-animation: swiper-preloader-spin 1s steps(12) infinite;
    animation: swiper-preloader-spin 1s steps(12) infinite
  }

  .swiper-lazy-preloader:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E");
    background-position: 50%;
    -webkit-background-size: 100%;
    background-size: 100%;
    background-repeat: no-repeat
  }

  .swiper-lazy-preloader-white:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E")
  }

  @-webkit-keyframes swiper-preloader-spin {
    to {
      -webkit-transform: rotate(1turn)
    }
  }

  @keyframes swiper-preloader-spin {
    to {
      transform: rotate(1turn)
    }
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/libs/swiper/css/swiper.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvbGlicy9zd2lwZXIvY3NzL3N3aXBlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0Esa0JBQ0UsaUJBQWtCLEFBQ2xCLGtCQUFtQixBQUNuQixrQkFBbUIsQUFDbkIsZ0JBQWlCLEFBRWpCLFNBQVcsQ0FDWixBQUNELDJDQUNFLFVBQVksQ0FDYixBQUNELDJDQUNFLDRCQUE2QixBQUM3Qix5QkFBMEIsQUFDMUIsMEJBQTJCLEFBQzNCLDhCQUErQixBQUMvQixxQkFBdUIsQ0FDeEIsQUFDRCxnQkFDRSxrQkFBbUIsQUFDbkIsV0FBWSxBQUNaLFlBQWEsQUFDYixVQUFXLEFBQ1gsb0JBQXFCLEFBQ3JCLGlCQUFrQixBQUNsQixvQkFBcUIsQUFDckIscUJBQXNCLEFBQ3RCLGFBQWMsQUFDZCw4Q0FBK0MsQUFDL0Msd0NBQXlDLEFBQ3pDLG9DQUFxQyxBQUNyQyxzQ0FBdUMsQUFDdkMsOEJBQStCLEFBQy9CLCtCQUFnQyxBQUNoQyw0QkFBNkIsQUFDN0Isc0JBQXdCLENBQ3pCLEFBQ0Qsd0RBRUUsZ0NBQTBDLEFBQzFDLDZCQUF1QyxBQUN2QywwQkFBa0MsQUFDbEMsNEJBQXNDLEFBQ3RDLHVCQUFrQyxDQUNuQyxBQUNELDJDQUNFLDJCQUE0QixBQUM1Qix3QkFBeUIsQUFDekIsbUJBQW9CLEFBQ3BCLHVCQUF3QixBQUN4QixjQUFnQixDQUNqQixBQUNELDRDQUNFLDRDQUE2QyxBQUM3Qyx5Q0FBMEMsQUFDMUMsd0NBQXlDLEFBQ3pDLHVDQUF3QyxBQUN4QyxvQ0FBcUMsQUFDckMsYUFBZSxDQUNoQixBQUNELGNBQ0Usc0JBQXVCLEFBQ3ZCLGtCQUFtQixBQUNuQixjQUFlLEFBQ2YsV0FBWSxBQUNaLFlBQWEsQUFDYixpQkFBbUIsQ0FDcEIsQUFFRCx3RUFFRSxXQUFhLENBQ2QsQUFDRCw2Q0FDRSx3QkFBeUIsQUFDekIscUJBQXNCLEFBQ3RCLCtCQUFnQyxBQUNoQyx1QkFBd0IsQUFDeEIscURBQXVELEFBQ3ZELHdDQUF5QyxBQUN6QyxvQ0FBcUMsQUFDckMsc0NBQXVDLEFBQ3ZDLG9DQUF1QyxDQUN4QyxBQUVELHVDQUNFLGtCQUFtQixBQUNuQixPQUFRLEFBQ1IsTUFBTyxBQUNQLG9CQUFxQixBQUNyQixVQUFXLEFBQ1gsYUFBZSxDQUNoQixBQUVELHVCQUNFLHVCQUF3QixBQUN4QixrQkFBb0IsQ0FDckIsQUFDRCxxQkFDRSx1QkFBd0IsQUFDeEIsa0JBQW9CLENBQ3JCLEFBRUQsd0NBRUUsa0JBQW1CLEFBQ25CLFFBQVMsQUFDVCxXQUFZLEFBQ1osWUFBYSxBQUNiLGlCQUFrQixBQUNsQixXQUFZLEFBQ1osZUFBZ0IsQUFDaEIsK0JBQWdDLEFBQ2hDLGtDQUFtQyxBQUNuQywwQkFBMkIsQUFDM0Isd0JBQTRCLEFBQzVCLDJCQUE2QixDQUM5QixBQUNELHNGQUVFLFlBQWMsQUFDZCxZQUFhLEFBQ2IsbUJBQXFCLENBQ3RCLEFBQ0QsOERBRUUsb05BQXFSLEFBQ3JSLFVBQVcsQUFDWCxVQUFZLENBQ2IsQUFDRCxzR0FFRSxrTUFBcVIsQ0FDdFIsQUFDRCxzR0FFRSxnTkFBcVIsQ0FDdFIsQUFDRCw4REFFRSxvTkFBcVIsQUFDclIsV0FBWSxBQUNaLFNBQVcsQ0FDWixBQUNELHNHQUVFLGtNQUFxUixDQUN0UixBQUNELHNHQUVFLGdOQUFxUixDQUN0UixBQUVELG1CQUNFLGtCQUFtQixBQUNuQixrQkFBbUIsQUFDbkIsdUJBQTBCLEFBQzFCLG9CQUF1QixBQUN2QixrQkFBcUIsQUFDckIsZUFBa0IsQUFDbEIsZ0NBQXdDLEFBQ3hDLDRCQUFvQyxBQUNwQywyQkFBbUMsQUFDbkMsd0JBQWdDLEFBQ2hDLFVBQVksQ0FDYixBQUNELDRDQUNFLFNBQVcsQ0FDWixBQUVELDhHQUdFLFlBQWEsQUFDYixPQUFRLEFBQ1IsVUFBWSxDQUNiLEFBRUQsMEJBQ0UsVUFBVyxBQUNYLFdBQVksQUFDWixxQkFBc0IsQUFDdEIsbUJBQW9CLEFBQ3BCLGdCQUFpQixBQUNqQixVQUFhLENBQ2QsQUFDRCxnQ0FDRSxZQUFhLEFBQ2IsU0FBVSxBQUNWLFVBQVcsQUFDWCxnQkFBaUIsQUFDakIscUJBQXNCLEFBQ3RCLG9CQUFxQixBQUNyQix3QkFBeUIsQUFDekIsZUFBaUIsQ0FDbEIsQUFDRCx1REFDRSxjQUFnQixDQUNqQixBQUNELG1EQUNFLGVBQWlCLENBQ2xCLEFBQ0QsaUNBQ0UsVUFBVyxBQUNYLGtCQUFvQixDQUNyQixBQUNELDBEQUNFLGVBQWlCLENBQ2xCLEFBQ0QsMERBQ0UsZUFBaUIsQ0FDbEIsQUFDRCxzREFDRSxXQUFZLEFBQ1osUUFBUyxBQUNULHdDQUE2QyxBQUM3QyxxQ0FBMEMsQUFDMUMsOEJBQW1DLEFBQ25DLG9DQUF5QyxBQUN6QywrQkFBcUMsQ0FDdEMsQUFDRCxnRkFDRSxhQUFjLEFBQ2QsYUFBZSxDQUNoQixBQUNELGtGQUNFLFlBQWMsQ0FDZixBQUVELDRCQUNFLDJCQUFnQyxBQUNoQyxpQkFBbUIsQ0FDcEIsQUFDRCwyREFDRSxtQkFBb0IsQUFDcEIsa0JBQW1CLEFBQ25CLE9BQVEsQUFDUixNQUFPLEFBQ1AsV0FBWSxBQUNaLFlBQWEsQUFDYiwyQkFBNEIsQUFDNUIsdUJBQXdCLEFBQ3hCLHNCQUF1QixBQUN2QixtQkFBb0IsQUFDcEIsa0NBQW1DLEFBQ25DLCtCQUFnQyxBQUNoQyw4QkFBK0IsQUFDL0IsNkJBQThCLEFBQzlCLHlCQUEyQixDQUM1QixBQUNELGlGQUNFLG1DQUFvQyxBQUNwQyxnQ0FBaUMsQUFDakMsK0JBQWdDLEFBQ2hDLDhCQUErQixBQUMvQiwwQkFBNEIsQ0FDN0IsQUFDRCx5REFDRSxXQUFZLEFBQ1osV0FBWSxBQUNaLE9BQVEsQUFDUixLQUFPLENBQ1IsQUFDRCx1REFDRSxVQUFXLEFBQ1gsWUFBYSxBQUNiLE9BQVEsQUFDUixLQUFPLENBQ1IsQUFDRCxvREFDRSw2QkFBcUMsQ0FDdEMsQUFDRCxtRkFDRSxlQUFpQixDQUNsQixBQUNELG1GQUNFLGVBQWlCLENBQ2xCLEFBRUQscUJBQ0UsMkJBQTRCLEFBQzVCLHdCQUF5QixBQUN6QixzQkFBdUIsQUFDdkIsa0JBQW9CLENBQ3JCLEFBQ0QsK1NBT0Usb0NBQXFDLEFBQ3JDLGlDQUFrQyxBQUNsQyxnQ0FBaUMsQUFDakMsMkJBQTZCLENBQzlCLEFBQ0QsOExBSUUsa0JBQW1CLEFBQ25CLE9BQVEsQUFDUixNQUFPLEFBQ1AsV0FBWSxBQUNaLFlBQWEsQUFDYixvQkFBcUIsQUFDckIsVUFBWSxDQUNiLEFBQ0QsK0NBQ0Usa0dBQWdILEFBRWhILDJFQUF1RixBQUV2Rix3RUFBb0YsQUFFcEYsc0VBQWtGLEFBRWxGLG1FQUFpRixDQUVsRixBQUNELGdEQUNFLGtHQUFnSCxBQUVoSCwwRUFBc0YsQUFFdEYsdUVBQW1GLEFBRW5GLHFFQUFpRixBQUVqRixrRUFBa0YsQ0FFbkYsQUFDRCw4Q0FDRSxvR0FBa0gsQUFFbEgsNEVBQXdGLEFBRXhGLHlFQUFxRixBQUVyRix1RUFBbUYsQUFFbkYsaUVBQWdGLENBRWpGLEFBQ0QsaURBQ0Usb0dBQWtILEFBRWxILHlFQUFxRixBQUVyRixzRUFBa0YsQUFFbEYsb0VBQWdGLEFBRWhGLG1FQUFtRixDQUVwRixBQUVELG1GQUdFLHNCQUF3QixDQUN6QixBQUVELDhDQUVFLGdCQUFrQixDQUNuQixBQUNELDBFQUVFLG9CQUFxQixBQUNyQixtQ0FBb0MsQUFDcEMsZ0NBQWlDLEFBQ2pDLCtCQUFnQyxBQUNoQywyQkFBNEIsQUFDNUIsU0FBVyxDQUNaLEFBQ0Qsc0dBRUUsbUJBQXFCLENBQ3RCLEFBQ0QsME5BSUUsbUJBQXFCLENBQ3RCLEFBQ0QsNFlBUUUsVUFBVyxBQUNYLG1DQUFvQyxBQUNwQyxnQ0FBaUMsQUFDakMsK0JBQWdDLEFBQ2hDLDBCQUE0QixDQUM3QixBQUVELHFDQUNFLGtCQUFtQixBQUNuQiw2QkFBOEIsQUFDOUIsMEJBQTJCLEFBQzNCLHlCQUEwQixBQUMxQixxQkFBc0IsQUFDdEIsV0FBWSxBQUNaLFdBQWEsQ0FDZCxBQUNELDBEQUNFLGdDQUFpQyxBQUNqQyw2QkFBOEIsQUFDOUIsNEJBQTZCLEFBQzdCLHVCQUF5QixDQUMxQixBQUNELHdMQUlFLG9CQUFxQixBQUNyQixrQkFBb0IsQ0FDckIsQUFDRCwyQ0FDRSxrQkFBbUIsQUFDbkIsT0FBUSxBQUNSLFNBQVksQUFDWixXQUFZLEFBQ1osWUFBYSxBQUNiLGdCQUFpQixBQUNqQixXQUFhLEFBQ2IsMEJBQTJCLEFBQzNCLGtCQUFtQixBQUNuQixTQUFXLENBQ1osQUFFRCxnRUFDRSw0Q0FBNkMsQUFDN0MseUNBQTBDLEFBQzFDLHdDQUF5QyxBQUN6Qyx1Q0FBd0MsQUFDeEMsbUNBQXFDLENBQ3RDLEFBQ0QscUNBQ0Usb0JBQXFCLEFBQ3JCLG9DQUFxQyxBQUNyQyxpQ0FBa0MsQUFDbEMsK0JBQWdDLEFBQ2hDLDJCQUE2QixDQUM5QixBQUNELG1EQUNFLG1CQUFxQixDQUN0QixBQUNELDZHQUVFLG1CQUFxQixDQUN0QixBQUNELHVCQUNFLFdBQVksQUFDWixZQUFhLEFBQ2Isb0JBQXFCLEFBQ3JCLGlCQUFrQixBQUNsQixvQkFBcUIsQUFDckIscUJBQXNCLEFBQ3RCLGFBQWMsQUFDZCx3QkFBeUIsQUFDekIscUJBQXNCLEFBQ3RCLHFCQUFzQixBQUN0QiwrQkFBZ0MsQUFDaEMsdUJBQXdCLEFBQ3hCLHlCQUEwQixBQUMxQixzQkFBdUIsQUFDdkIsc0JBQXVCLEFBQ3ZCLDJCQUE0QixBQUM1QixtQkFBb0IsQUFDcEIsaUJBQW1CLENBQ3BCLEFBQ0Qsb0ZBR0UsZUFBZ0IsQUFDaEIsZ0JBQWlCLEFBQ2pCLGtCQUFvQixDQUNyQixBQUVELGtCQUNFLG1CQUFvQixBQUNwQixrQkFBbUIsQUFDbkIsc0JBQXVCLEFBQ3ZCLHlCQUErQixDQUNoQyxBQUNELCtDQUNFLGtCQUFtQixBQUNuQixRQUFTLEFBQ1QsV0FBWSxBQUNaLFdBQVksQUFDWixXQUFZLEFBQ1osU0FBVyxDQUNaLEFBQ0QsNkNBQ0Usa0JBQW1CLEFBQ25CLFVBQVcsQUFDWCxPQUFRLEFBQ1IsV0FBWSxBQUNaLFVBQVcsQUFDWCxVQUFZLENBQ2IsQUFDRCx1QkFDRSxZQUFhLEFBQ2IsV0FBWSxBQUNaLGtCQUFtQixBQUNuQiwwQkFBK0IsQUFDL0IsbUJBQW9CLEFBQ3BCLE9BQVEsQUFDUixLQUFPLENBQ1IsQUFDRCw4QkFDRSxXQUFhLENBQ2QsQUFFRCx1QkFDRSxXQUFZLEFBQ1osWUFBYSxBQUNiLGtCQUFtQixBQUNuQixTQUFVLEFBQ1YsUUFBUyxBQUNULGtCQUFtQixBQUNuQixpQkFBa0IsQUFDbEIsV0FBWSxBQUNaLDZCQUE4QixBQUM5QiwwQkFBMkIsQUFDM0IscUJBQXNCLEFBQ3RCLDhEQUFvRSxBQUNwRSwyREFBaUUsQUFDakUscURBQTRELENBQzdELEFBQ0QsNkJBQ0UsY0FBZSxBQUNmLFdBQVksQUFDWixXQUFZLEFBQ1osWUFBYSxBQUNiLGdtQ0FBMDdDLEFBQzE3Qyx3QkFBeUIsQUFDekIsNkJBQThCLEFBQzlCLHFCQUFzQixBQUN0QiwyQkFBNkIsQ0FDOUIsQUFDRCxtQ0FDRSw0bENBQXU3QyxDQUN4N0MsQUFDRCx5Q0FDRSxHQUNFLCtCQUFrQyxDQUNuQyxDQUNGLEFBQ0QsaUNBQ0UsR0FDRSx1QkFBMEIsQ0FDM0IsQ0FDRiIsImZpbGUiOiJzd2lwZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFN3aXBlciAzLjQuMVxyXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xyXG4gKiBcclxuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXHJcbiAqIFxyXG4gKiBDb3B5cmlnaHQgMjAxNiwgVmxhZGltaXIgS2hhcmxhbXBpZGlcclxuICogVGhlIGlEYW5nZXJvLnVzXHJcbiAqIGh0dHA6Ly93d3cuaWRhbmdlcm8udXMvXHJcbiAqIFxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcclxuICogXHJcbiAqIFJlbGVhc2VkIG9uOiBEZWNlbWJlciAxMywgMjAxNlxyXG4gKi9cclxuLnN3aXBlci1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvKiBGaXggb2YgV2Via2l0IGZsaWNrZXJpbmcgKi9cclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLW5vLWZsZXhib3ggLnN3aXBlci1zbGlkZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1vei10cmFuc2Zvcm07XHJcbiAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW8tdHJhbnNmb3JtO1xyXG4gIC1tcy10cmFuc2l0aW9uLXByb3BlcnR5OiAtbXMtdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdyA+IC5zd2lwZXItd3JhcHBlciB7XHJcbiAgLXdlYmtpdC1ib3gtbGluZXM6IG11bHRpcGxlO1xyXG4gIC1tb3otYm94LWxpbmVzOiBtdWx0aXBsZTtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xyXG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcclxuICBmbGV4LXNocmluazogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi8qIEF1dG8gSGVpZ2h0ICovXHJcbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsXHJcbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyIHtcclxuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XHJcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybSwgaGVpZ2h0O1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1vei10cmFuc2Zvcm07XHJcbiAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW8tdHJhbnNmb3JtO1xyXG4gIC1tcy10cmFuc2l0aW9uLXByb3BlcnR5OiAtbXMtdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xyXG59XHJcbi8qIGExMXkgKi9cclxuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1ub3RpZmljYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IC0xMDAwO1xyXG59XHJcbi8qIElFMTAgV2luZG93cyBQaG9uZSA4IEZpeGVzICovXHJcbi5zd2lwZXItd3A4LWhvcml6b250YWwge1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbn1cclxuLnN3aXBlci13cDgtdmVydGljYWwge1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi14O1xyXG4gIHRvdWNoLWFjdGlvbjogcGFuLXg7XHJcbn1cclxuLyogQXJyb3dzICovXHJcbi5zd2lwZXItYnV0dG9uLXByZXYsXHJcbi5zd2lwZXItYnV0dG9uLW5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogMjdweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTIycHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAyN3B4IDQ0cHg7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDI3cHggNDRweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggNDRweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXHJcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC4zNTtcclxuICBjdXJzb3I6IGF1dG87XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnN3aXBlci1idXR0b24tcHJldixcclxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnonJTIwZmlsbCUzRCclMjMwMDdhZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNrLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDAwMDAwJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtcclxufVxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGUsXHJcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnonJTIwZmlsbCUzRCclMjNmZmZmZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpO1xyXG59XHJcbi5zd2lwZXItYnV0dG9uLW5leHQsXHJcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDA3YWZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtcclxuICByaWdodDogMTBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjayxcclxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1ibGFjayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyeiclMjBmaWxsJTNEJyUyMzAwMDAwMCclMkYlM0UlM0MlMkZzdmclM0VcIik7XHJcbn1cclxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzZmZmZmZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtcclxufVxyXG4vKiBQYWdpbmF0aW9uIFN0eWxlcyAqL1xyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcztcclxuICAtbW96LXRyYW5zaXRpb246IDMwMG1zO1xyXG4gIC1vLXRyYW5zaXRpb246IDMwMG1zO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4vKiBDb21tb24gU3R5bGVzICovXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcclxuLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSxcclxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4vKiBCdWxsZXRzICovXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuYnV0dG9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQ6ICMwMDdhZmY7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLTUwJSwgMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC01MCUsIDApO1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4vKiBQcm9ncmVzcyAqL1xyXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzcyAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDdhZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzcyAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XHJcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzcyB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3Muc3dpcGVyLXBhZ2luYXRpb24tYmxhY2sgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcbi8qIDNEIENvbnRhaW5lciAqL1xyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCB7XHJcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTIwMHB4O1xyXG4gIC1tb3otcGVyc3BlY3RpdmU6IDEyMDBweDtcclxuICAtby1wZXJzcGVjdGl2ZTogMTIwMHB4O1xyXG4gIHBlcnNwZWN0aXZlOiAxMjAwcHg7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXHJcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3cge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20ocmdiYSgwLCAwLCAwLCAwLjUpKSwgdG8ocmdiYSgwLCAwLCAwLCAwKSkpO1xyXG4gIC8qIFNhZmFyaSA0KywgQ2hyb21lICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogQ2hyb21lIDEwKywgU2FmYXJpIDUuMSssIGlPUyA1KyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIEZpcmVmb3ggMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIE9wZXJhIDExLjEwLTEyLjAwICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogRmlyZWZveCAxNissIElFMTAsIE9wZXJhIDEyLjUwKyAqL1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDAsIDAsIDAsIDAuNSkpLCB0byhyZ2JhKDAsIDAsIDAsIDApKSk7XHJcbiAgLyogU2FmYXJpIDQrLCBDaHJvbWUgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIENocm9tZSAxMCssIFNhZmFyaSA1LjErLCBpT1MgNSsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIEZpcmVmb3ggMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogT3BlcmEgMTEuMTAtMTIuMDAgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogRmlyZWZveCAxNissIElFMTAsIE9wZXJhIDEyLjUwKyAqL1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDAsIDAsIDAsIDAuNSkpLCB0byhyZ2JhKDAsIDAsIDAsIDApKSk7XHJcbiAgLyogU2FmYXJpIDQrLCBDaHJvbWUgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogQ2hyb21lIDEwKywgU2FmYXJpIDUuMSssIGlPUyA1KyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICAvKiBGaXJlZm94IDMuNi0xNSAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogT3BlcmEgMTEuMTAtMTIuMDAgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIEZpcmVmb3ggMTYrLCBJRTEwLCBPcGVyYSAxMi41MCsgKi9cclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSgwLCAwLCAwLCAwLjUpKSwgdG8ocmdiYSgwLCAwLCAwLCAwKSkpO1xyXG4gIC8qIFNhZmFyaSA0KywgQ2hyb21lICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIENocm9tZSAxMCssIFNhZmFyaSA1LjErLCBpT1MgNSsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgLyogRmlyZWZveCAzLjYtMTUgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIC8qIE9wZXJhIDExLjEwLTEyLjAwICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICAvKiBGaXJlZm94IDE2KywgSUUxMCwgT3BlcmEgMTIuNTArICovXHJcbn1cclxuLyogQ292ZXJmbG93ICovXHJcbi5zd2lwZXItY29udGFpbmVyLWNvdmVyZmxvdyAuc3dpcGVyLXdyYXBwZXIsXHJcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci13cmFwcGVyIHtcclxuICAvKiBXaW5kb3dzIDggSUUgMTAgZml4ICovXHJcbiAgLW1zLXBlcnNwZWN0aXZlOiAxMjAwcHg7XHJcbn1cclxuLyogQ3ViZSArIEZsaXAgKi9cclxuLnN3aXBlci1jb250YWluZXItY3ViZSxcclxuLnN3aXBlci1jb250YWluZXItZmxpcCB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC1tcy1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUsXHJcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcclxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXHJcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLyogQ3ViZSAqL1xyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItY3ViZS5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXNsaWRlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCxcclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXByZXYsXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0ICsgLnN3aXBlci1zbGlkZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1MHB4KTtcclxuICBmaWx0ZXI6IGJsdXIoNTBweCk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4vKiBGYWRlICovXHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUuc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgLnN3aXBlci1zbGlkZSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcbi5zd2lwZXItem9vbS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gaW1nLFxyXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gc3ZnLFxyXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gY2FudmFzIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcbi8qIFNjcm9sbGJhciAqL1xyXG4uc3dpcGVyLXNjcm9sbGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMSU7XHJcbiAgYm90dG9tOiAzcHg7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDNweDtcclxuICB0b3A6IDElO1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbn1cclxuLnN3aXBlci1zY3JvbGxiYXItZHJhZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG4uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZyB7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcbi8qIFByZWxvYWRlciAqL1xyXG4uc3dpcGVyLWxhenktcHJlbG9hZGVyIHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIxcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgc3RlcHMoMTIsIGVuZCkgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IHN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBzdGVwcygxMiwgZW5kKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBzdGVwcygxMiwgZW5kKSBpbmZpbml0ZTtcclxufVxyXG4uc3dpcGVyLWxhenktcHJlbG9hZGVyOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMTIwJTIwMTIwJyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB4bWxucyUzQXhsaW5rJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhsaW5rJyUzRSUzQ2RlZnMlM0UlM0NsaW5lJTIwaWQlM0QnbCclMjB4MSUzRCc2MCclMjB4MiUzRCc2MCclMjB5MSUzRCc3JyUyMHkyJTNEJzI3JyUyMHN0cm9rZSUzRCclMjM2YzZjNmMnJTIwc3Ryb2tlLXdpZHRoJTNEJzExJyUyMHN0cm9rZS1saW5lY2FwJTNEJ3JvdW5kJyUyRiUzRSUzQyUyRmRlZnMlM0UlM0NnJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoNjAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDkwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxMjAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDE1MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjM3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTgwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNDYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyMTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy41NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDI0MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjY2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjcwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNzUnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMDAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy44NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMzMCUyMDYwJTJDNjApJyUyRiUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5zd2lwZXItbGF6eS1wcmVsb2FkZXItd2hpdGU6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyM2ZmZiclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluIHtcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzd2lwZXItcHJlbG9hZGVyLXNwaW4ge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */</style>

<style type="text/css">
  .banner {
    overflow: hidden
  }

  .banner, .swiperimg {
    width: 100%;
    height: 7.2rem
  }

  .swiper-pagination-bullet-active {
    background: #fff
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/components/banner.vue */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9jb21wb25lbnRzL2Jhbm5lci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsUUFBc0MsZUFBaUIsQ0FDdEQsQUFDRCxtQkFGUyxXQUFZLEFBQUMsYUFBZSxDQUdwQyxBQUNELGlDQUFpQyxlQUFrQixDQUNsRCIsImZpbGUiOiJiYW5uZXIudnVlIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi9hc3NldHMvbGlicy9zd2lwZXIvY3NzL3N3aXBlci5jc3MnO1xuLmJhbm5lciB7d2lkdGg6IDEwMCU7IGhlaWdodDogNy4ycmVtOyBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN3aXBlcmltZ3t3aWR0aDogMTAwJTtoZWlnaHQ6Ny4ycmVtO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7YmFja2dyb3VuZDogd2hpdGU7XG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */</style>

<style type="text/css">
  .mwrapper {
    height: 75%;
    top: 5.2rem;
    right: 0;
    overflow-y: scroll;
    z-index: 10
  }

  .masert, .mwrapper {
    width: 100%;
    position: fixed;
    left: 0
  }

  .masert {
    top: .5rem;
    background-color: #fff;
    border-bottom: 1px solid #dedfe0;
    z-index: 11
  }

  .maserttop {
    padding: .3rem .5rem
  }

  .masert_bind {
    height: 1.7rem
  }

  .masert_bindicon {
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    background-color: #fc0f0f;
    float: left;
    margin-top: .3rem;
    margin-right: .3rem
  }

  .masert_sort {
    border-left: 1px solid #dedfe0;
    padding: 0 .5rem;
    height: 1rem;
    margin-top: .3rem
  }

  .sortimg {
    width: .8rem;
    height: .8rem;
    margin-right: .3rem;
    float: left;
    margin-top: .15rem
  }

  .masert_user {
    border-top: 1px solid #dedfe0;
    height: 2.2rem;
    padding-top: .3rem
  }

  .masert_userbox {
    background-color: #f4f4f4;
    width: 69%;
    border-radius: 4px;
    float: left;
    position: relative;
    text-align: left;
    padding: 0 3%
  }

  .masert_next, .masert_userbox {
    height: 100%;
    line-height: 2.2rem
  }

  .masert_next {
    width: 23%;
    border-radius: 50px;
    float: right;
    background-color: #611987;
    color: #fff;
    font-size: .8rem;
    font-weight: 700
  }

  .masert_img {
    width: 1.6rem;
    height: 1.6rem;
    margin-top: .25rem;
    position: absolute;
    border-radius: 50%;
    background-color: #fff
  }

  .masertseat {
    width: 100%;
    height: 50rem
  }

  .masertmenu {
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0;
    background-color: #fff;
    padding: .5rem;
    margin-top: .4rem;
    display: block
  }

  .tmenutop {
    height: 1.7rem
  }

  .tmenuhead {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
    float: left;
    border-radius: 50%
  }

  .tmenu_name {
    line-height: 1.5rem;
    float: left;
    width: 4.5rem;
    text-align: left
  }

  .tmenuicon {
    width: 3.3rem;
    height: .8rem;
    margin-left: .5rem;
    float: left;
    margin-top: .4rem
  }

  .tmenubtn1, .tmenubtn2 {
    width: 3.8rem;
    height: 1.4rem;
    border-radius: 50px;
    line-height: 1.6rem
  }

  .tmenubtn1 {
    color: #fff;
    background-color: #611987
  }

  .tmenubtn1, .tmenubtn2 {
    border: 1px solid #611987
  }

  .tmenubtn2 {
    color: #611987
  }

  .tmenubtn3 {
    width: 4.5rem;
    height: 1.4rem;
    border-radius: 50px;
    line-height: 1.6rem;
    border: 1px solid #999;
    color: #999
  }

  .tmenubtn4 {
    width: 4.5rem;
    height: 1.8rem;
    border-radius: 50px;
    color: #fff;
    font-size: .6rem;
    background-color: #ccc;
    padding-top: .1rem
  }

  .tmenubtn_img {
    margin: .3rem .5rem 0 .8rem
  }

  .tmenubtn_img, .tmenubtn_img2 {
    width: .8rem;
    height: .8rem;
    float: left
  }

  .tmenubtn_img2 {
    margin: .3rem .3rem 0
  }

  .tmenu_info {
    width: 100%;
    height: 2.3rem;
    margin-top: .3rem
  }

  .tmenu_info > li {
    width: 20%;
    float: left
  }

  .tmenu_chart {
    width: 80%;
    height: 2rem;
    margin-top: .1rem;
    border: 1px solid #dedfe0
  }

  .tmenu_profit {
    font-weight: 700
  }

  .masterfont1 {
    color: #666;
    margin-bottom: .3rem
  }

  .toast {
    width: 8rem;
    height: 2.5rem;
    line-height: 2.5rem;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 6px;
    position: fixed;
    top: 40%;
    left: 0;
    right: 0;
    margin: 0 auto;
    color: #fff;
    z-index: 11
  }

  .tmenu_follstatu {
    width: .4rem;
    height: .4rem;
    margin-right: .4rem;
    margin-top: .5rem;
    float: left
  }

  .masert_menu {
    width: 70%;
    height: 1.7rem;
    line-height: 1.5rem
  }

  .masert_bindgo {
    display: block
  }

  .tmenu_follpull {
    margin-top: .6rem
  }

  .tmenu_follpull, .trheader_follpull {
    width: .7rem;
    height: .4rem;
    float: left;
    margin-left: .5rem
  }

  .trheader_follpull {
    margin-top: .3rem
  }

  .tradeinfo_wrape {
    width: 100%;
    height: 92%;
    overflow-y: scroll;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
  }

  .trheader {
    padding: .5rem;
    border-bottom: 1px solid #dedfe0;
    height: 1rem;
    line-height: 1rem;
    display: block
  }

  .tradered {
    width: .5rem;
    height: .5rem;
    margin-top: .15rem;
    margin-right: .5rem
  }

  .tradered, .trheader_text {
    float: left
  }

  .truser {
    height: 2.5rem;
    padding: .5rem;
    text-align: left
  }

  .truserimg {
    width: 2.3rem;
    height: 2.3rem;
    position: relative;
    margin-right: .5rem
  }

  .truserimg_tx {
    width: 100%;
    height: 100%;
    border-radius: 50%
  }

  .truserimg_vip {
    width: 1.5rem;
    height: .7rem;
    position: absolute;
    bottom: 0;
    right: -.45rem
  }

  .trusername {
    width: 42%;
    float: left;
    font-size: .73rem;
    line-height: 1.3rem
  }

  .trinfo {
    padding: .3rem .5rem;
    line-height: 1.2rem;
    color: #666
  }

  .trinfo > li {
    height: 1.2rem
  }

  .trfont1 {
    color: #611987
  }

  .trfont2 {
    color: #21a921
  }

  .trfont3 {
    color: #007eff
  }

  .tricon {
    width: 1rem;
    height: 1rem;
    float: left;
    margin-right: .3rem;
    margin-top: .1rem
  }

  .tradenav {
    width: 100%;
    height: 2rem;
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0;
    text-align: center;
    line-height: 2rem;
    color: #888;
    background-color: #fff;
    margin-top: .4rem
  }

  .tradenav > li {
    width: 50%;
    height: 2rem;
    float: left
  }

  .tradenav > .tactive {
    color: #611987;
    border-bottom: 1px solid #611987
  }

  .hishold {
    margin-top: .4rem
  }

  .nodata {
    text-align: center;
    padding: 10px 0;
    width: 3.6rem
  }

  .select_list {
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3
  }

  .select_list > li {
    height: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid #dedfe0;
    padding-left: 40%;
    text-align: left
  }

  .select_listicon {
    width: .7rem;
    height: .7rem;
    margin-left: .5rem
  }

  .select_listseat {
    width: 100%;
    height: 100%
  }

  .tradehistorybox_wai {
    background-color: #fff;
    border-top: 1px solid #dedfe0
  }

  .select_sorttext {
    width: 4rem;
    float: left;
    text-align: center;
    color: #666
  }

  .select_sorticon {
    width: .8rem;
    height: .8rem;
    float: left;
    margin-top: .5rem
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/css/master.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvY3NzL21hc3Rlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBc0IsV0FBWSxBQUFnQixXQUFZLEFBQVUsUUFBVyxrQkFBbUIsVUFBWSxDQUFDLEFBQ25ILGtCQURVLFdBQVksQUFBWSxlQUFnQixBQUFZLE1BQVUsQ0FDc0QsQUFBOUgsUUFBOEMsVUFBWSxzQkFBdUIsZ0NBQWdDLFVBQVksQ0FBQyxBQUM5SCxXQUFXLG1CQUF1QixDQUFDLEFBQ25DLGFBQWEsYUFBZSxDQUFDLEFBQzdCLGlCQUFpQixZQUFjLGFBQWUsa0JBQW1CLHlCQUEwQixXQUFZLGlCQUFtQixrQkFBcUIsQ0FBQyxBQUNoSixhQUFhLDhCQUErQixnQkFBa0IsWUFBYSxnQkFBbUIsQ0FBQyxBQUMvRixTQUFTLFlBQWMsYUFBZSxtQkFBcUIsV0FBWSxpQkFBb0IsQ0FBQyxBQUM1RixhQUFhLDZCQUE4QixjQUFlLGlCQUFvQixDQUFDLEFBQy9FLGdCQUFnQix5QkFBMEIsVUFBVyxBQUFhLGtCQUFtQixXQUFZLGtCQUFtQixnQkFBaUIsQUFBb0IsWUFBZ0IsQ0FBQyxBQUMxSyw2QkFEcUQsWUFBYSxBQUFtRSxrQkFBb0IsQ0FDWSxBQUFySyxhQUFhLFVBQVcsQUFBYSxtQkFBb0IsWUFBYSx5QkFBMEIsV0FBWSxnQkFBa0IsQUFBb0IsZUFBa0IsQ0FBQyxBQUNySyxZQUFZLGFBQWMsY0FBZSxrQkFBb0Isa0JBQW1CLGtCQUFtQixxQkFBdUIsQ0FBQyxBQUMzSCxZQUFZLFdBQVksWUFBYyxDQUFDLEFBQ3ZDLFlBQVksNkJBQThCLGdDQUFpQyxzQkFBdUIsY0FBZ0IsaUJBQW1CLGFBQWUsQ0FBQyxBQUNySixVQUFVLGFBQWUsQ0FBQyxBQUMxQixXQUFXLGFBQWMsY0FBZSxtQkFBcUIsV0FBWSxpQkFBbUIsQ0FBQyxBQUM3RixZQUFZLG1CQUFvQixXQUFZLGFBQWMsZUFBaUIsQ0FBQyxBQUM1RSxXQUFXLGFBQWMs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c3Rlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXdyYXBwZXJ7d2lkdGg6IDEwMCU7aGVpZ2h0OiA3NSU7cG9zaXRpb246IGZpeGVkO3RvcDogNS4ycmVtO2xlZnQ6IDBweDtyaWdodDogMHB4O292ZXJmbG93LXk6IHNjcm9sbDt6LWluZGV4OiAxMDt9XHJcbi5tYXNlcnR7d2lkdGg6IDEwMCU7cG9zaXRpb246IGZpeGVkO2xlZnQ6IDBweDt0b3A6IDAuNXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZWRmZTA7ei1pbmRleDogMTE7fVxyXG4ubWFzZXJ0dG9we3BhZGRpbmc6IDAuM3JlbSAwLjVyZW07fVxyXG4ubWFzZXJ0X2JpbmR7aGVpZ2h0OiAxLjdyZW07fVxyXG4ubWFzZXJ0X2JpbmRpY29ue3dpZHRoOiAwLjRyZW07aGVpZ2h0OiAwLjRyZW07Ym9yZGVyLXJhZGl1czogNTAlO2JhY2tncm91bmQtY29sb3I6ICNGQzBGMEY7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXRvcDogMC4zcmVtO21hcmdpbi1yaWdodDogMC4zcmVtO31cclxuLm1hc2VydF9zb3J0e2JvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZGZlMDtwYWRkaW5nOiAwIDAuNXJlbTtoZWlnaHQ6IDFyZW07bWFyZ2luLXRvcDogMC4zcmVtO31cclxuLnNvcnRpbWd7d2lkdGg6IDAuOHJlbTtoZWlnaHQ6IDAuOHJlbTttYXJnaW4tcmlnaHQ6IDAuM3JlbTtmbG9hdDogbGVmdDttYXJnaW4tdG9wOiAwLjE1cmVtO31cclxuLm1hc2VydF91c2Vye2JvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZmUwO2hlaWdodDogMi4ycmVtO3BhZGRpbmctdG9wOiAwLjNyZW07fVxyXG4ubWFzZXJ0X3VzZXJib3h7YmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDt3aWR0aDogNjklO2hlaWdodDogMTAwJTtib3JkZXItcmFkaXVzOiA0cHg7ZmxvYXQ6IGxlZnQ7cG9zaXRpb246IHJlbGF0aXZlO3RleHQtYWxpZ246IGxlZnQ7bGluZS1oZWlnaHQ6IDIuMnJlbTtwYWRkaW5nOiAwcHggMyU7fVxyXG4ubWFzZXJ0X25leHR7d2lkdGg6IDIzJTtoZWlnaHQ6IDEwMCU7Ym9yZGVyLXJhZGl1czogNTBweDtmbG9hdDogcmlnaHQ7YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nztjb2xvcjogI2ZmZjtmb250LXNpemU6IDAuOHJlbTtsaW5lLWhlaWdodDogMi4ycmVtO2ZvbnQtd2VpZ2h0OiBib2xkO31cclxuLm1hc2VydF9pbWd7d2lkdGg6IDEuNnJlbTtoZWlnaHQ6IDEuNnJlbTttYXJnaW4tdG9wOiAwLjI1cmVtO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3JkZXItcmFkaXVzOiA1MCU7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9XHJcbi5tYXNlcnRzZWF0e3dpZHRoOiAxMDAlO2hlaWdodDogNTByZW07fVxyXG4ubWFzZXJ0bWVudXtib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGZlMDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGZlMDtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO3BhZGRpbmc6IDAuNXJlbTttYXJnaW4tdG9wOiAwLjRyZW07ZGlzcGxheTogYmxvY2s7fVxyXG4udG1lbnV0b3B7aGVpZ2h0OiAxLjdyZW07fVxyXG4udG1lbnVoZWFke3dpZHRoOiAxLjVyZW07aGVpZ2h0OiAxLjVyZW07bWFyZ2luLXJpZ2h0OiAwLjVyZW07ZmxvYXQ6IGxlZnQ7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuLnRtZW51X25hbWV7bGluZS1oZWlnaHQ6IDEuNXJlbTtmbG9hdDogbGVmdDt3aWR0aDogNC41cmVtO3RleHQtYWxpZ246IGxlZnQ7fVxyXG4udG1lbnVpY29ue3dpZHRoOiAzLjNyZW07aGVpZ2h0OiAwLjhyZW07bWFyZ2luLWxlZnQ6IDAuNXJlbTtmbG9hdDogbGVmdDttYXJnaW4tdG9wOiAwLjRyZW07fVxyXG4udG1lbnVidG4yLC50bWVudWJ0bjF7d2lkdGg6IDMuOHJlbTtoZWlnaHQ6IDEuNHJlbTtib3JkZXItcmFkaXVzOiA1MHB4O2xpbmUtaGVpZ2h0OiAxLjZyZW07fVxyXG4udG1lbnVidG4xe2JvcmRlcjogMXB4IHNvbGlkICM2MTE5ODc7Y29sb3I6ICNmZmY7YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nzt9XHJcbi50bWVudWJ0bjJ7Ym9yZGVyOiAxcHggc29saWQgIzYxMTk4Nztjb2xvcjogIzYxMTk4Nzt9XHJcbi50bWVudWJ0bjN7d2lkdGg6IDQuNXJlbTtoZWlnaHQ6IDEuNHJlbTtib3JkZXItcmFkaXVzOiA1MHB4O2xpbmUtaGVpZ2h0OiAxLjZyZW07fVxyXG4udG1lbnVidG4ze2JvcmRlcjogMXB4IHNvbGlkICM5OTk7Y29sb3I6ICM5OTk7fVxyXG4udG1lbnVidG40e3dpZHRoOiA0LjVyZW07aGVpZ2h0OiAxLjhyZW07Ym9yZGVyLXJhZGl1czogNTBweDtjb2xvcjogI2ZmZjtmb250LXNpemU6IDAuNnJlbTtiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO3BhZGRpbmctdG9wOiAwLjFyZW07fVxyXG4udG1lbnVidG5faW1ne3dpZHRoOjAuOHJlbTtoZWlnaHQ6MC44cmVtO21hcmdpbjogMC4zcmVtIDAuNXJlbSAwcHggMC44cmVtO2Zsb2F0OiBsZWZ0O31cclxuLnRtZW51YnRuX2ltZzJ7d2lkdGg6MC44cmVtO2hlaWdodDowLjhyZW07bWFyZ2luOiAwLjNyZW0gMC4zcmVtIDBweCAwLjNyZW07ZmxvYXQ6IGxlZnQ7fVxyXG4udG1lbnVfaW5mb3t3aWR0aDogMTAwJTtoZWlnaHQ6IDIuM3JlbTttYXJnaW4tdG9wOiAwLjNyZW07fVxyXG4udG1lbnVfaW5mbz5saXt3aWR0aDogMjAlO2Zsb2F0OiBsZWZ0O31cclxuLnRtZW51X2NoYXJ0e3dpZHRoOiA4MCU7aGVpZ2h0OiAycmVtO21hcmdpbi10b3A6IDAuMXJlbTtib3JkZXI6IDFweCBzb2xpZCAjZGVkZmUwO31cclxuLnRtZW51X3Byb2ZpdHtmb250LXdlaWdodDogYm9sZDt9XHJcbi5tYXN0ZXJmb250MXtjb2xvcjogIzY2NjttYXJnaW4tYm90dG9tOiAwLjNyZW07fVxyXG4udG9hc3R7d2lkdGg6IDhyZW07aGVpZ2h0OiAyLjVyZW07bGluZS1oZWlnaHQ6IDIuNXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7Ym9yZGVyLXJhZGl1czogNnB4O3Bvc2l0aW9uOiBmaXhlZDtcclxudG9wOiA0MCU7bGVmdDogMHB4O3JpZ2h0OiAwcHg7bWFyZ2luOiAwIGF1dG87Y29sb3I6ICNmZmY7ei1pbmRleDogMTE7fVxyXG4udG1lbnVfZm9sbHN0YXR1e3dpZHRoOiAwLjRyZW07aGVpZ2h0OiAwLjRyZW07bWFyZ2luLXJpZ2h0OiAwLjRyZW07bWFyZ2luLXRvcDogMC41cmVtO2Zsb2F0OiBsZWZ0O31cclxuLm1hc2VydF9tZW51e3dpZHRoOiA3MCU7aGVpZ2h0OiAxLjdyZW07bGluZS1oZWlnaHQ6IDEuNXJlbTt9XHJcbi5tYXNlcnRfYmluZGdve2Rpc3BsYXk6IGJsb2NrO31cclxuLnRtZW51X2ZvbGxwdWxse3dpZHRoOiAwLjdyZW07aGVpZ2h0OiAwLjRyZW07ZmxvYXQ6IGxlZnQ7bWFyZ2luLWxlZnQ6IDAuNXJlbTttYXJnaW4tdG9wOiAwLjZyZW07fVxyXG4udHJoZWFkZXJfZm9sbHB1bGx7d2lkdGg6IDAuN3JlbTtoZWlnaHQ6IDAuNHJlbTtmbG9hdDogbGVmdDttYXJnaW4tbGVmdDogMC41cmVtO21hcmdpbi10b3A6IDAuM3JlbTt9XHJcblxyXG4udHJhZGVpbmZvX3dyYXBle3dpZHRoOiAxMDAlO2hlaWdodDogOTIlO292ZXJmbG93LXk6IHNjcm9sbDtvdmVyZmxvdy14OiBoaWRkZW47cG9zaXRpb246IGZpeGVkO3RvcDowcHg7Ym90dG9tOiAwcHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7fVxyXG4udHJoZWFkZXJ7cGFkZGluZzogMC41cmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVERkUwO2hlaWdodDogMXJlbTtsaW5lLWhlaWdodDogMXJlbTtkaXNwbGF5OiBibG9jazt9XHJcbi50cmFkZXJlZHt3aWR0aDogMC41cmVtO2hlaWdodDogMC41cmVtO2Zsb2F0OiBsZWZ0O21hcmdpbi10b3A6IDAuMTVyZW07bWFyZ2luLXJpZ2h0OiAwLjVyZW07fVxyXG4udHJoZWFkZXJfdGV4dHtmbG9hdDogbGVmdDt9XHJcbi50cnVzZXJ7aGVpZ2h0OiAyLjVyZW07cGFkZGluZzogMC41cmVtIDAuNXJlbTt0ZXh0LWFsaWduOiBsZWZ0O31cclxuLnRydXNlcmltZ3t3aWR0aDogMi4zcmVtO2hlaWdodDogMi4zcmVtO3Bvc2l0aW9uOiByZWxhdGl2ZTttYXJnaW4tcmlnaHQ6IDAuNXJlbTt9XHJcbi50cnVzZXJpbWdfdHh7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO2JvcmRlci1yYWRpdXM6IDUwJTt9XHJcbi50cnVzZXJpbWdfdmlwe3dpZHRoOiAxLjVyZW07aGVpZ2h0OiAwLjdyZW07cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogMHB4O3JpZ2h0OiAtMC40NXJlbTt9XHJcbi50cnVzZXJuYW1le3dpZHRoOiA0MiU7ZmxvYXQ6IGxlZnQ7Zm9udC1zaXplOiAwLjczcmVtO2xpbmUtaGVpZ2h0OiAxLjNyZW07fVxyXG4udHJpbmZve3BhZGRpbmc6IDAuM3JlbSAwLjVyZW07bGluZS1oZWlnaHQ6IDEuMnJlbTtjb2xvcjogIzY2Njt9XHJcbi50cmluZm8+bGl7aGVpZ2h0OiAxLjJyZW07fVxyXG4udHJmb250MXtjb2xvcjogIzYxMTk4Nzt9XHJcbi50cmZvbnQye2NvbG9yOiAjMjFhOTIxO31cclxuLnRyZm9udDN7Y29sb3I6ICMwMDdlZmY7fVxyXG4udHJpY29ue3dpZHRoOiAxcmVtO2hlaWdodDogMXJlbTtmbG9hdDogbGVmdDttYXJnaW4tcmlnaHQ6IDAuM3JlbTttYXJnaW4tdG9wOiAwLjFyZW07fVxyXG4udHJhZGVuYXZ7d2lkdGg6IDEwMCU7aGVpZ2h0OiAycmVtO2JvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZmUwO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO3RleHQtYWxpZ246IGNlbnRlcjtsaW5lLWhlaWdodDogMnJlbTtjb2xvcjogIzg4ODtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7bWFyZ2luLXRvcDogMC40cmVtO31cclxuLnRyYWRlbmF2Pmxpe3dpZHRoOiA1MCU7aGVpZ2h0OiAycmVtO2Zsb2F0OiBsZWZ0O31cclxuLnRyYWRlbmF2Pi50YWN0aXZle2NvbG9yOiAjNjExOTg3O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjExOTg3O31cclxuLmhpc2hvbGR7bWFyZ2luLXRvcDogMC40cmVtO31cclxuLm5vZGF0YXt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzoxMHB4IDA7d2lkdGg6IDMuNnJlbTt9XHJcblxyXG4vKiDnu5HlrpptdDTpgInmi6nliJfooaggKi9cclxuLnNlbGVjdF9saXN0e2JhY2tncm91bmQtY29sb3I6ICNmZmY7cG9zaXRpb246IGFic29sdXRlO3RvcDogMHB4O2xlZnQ6IDBweDtyaWdodDogMHB4O3otaW5kZXg6IDM7fVxyXG4uc2VsZWN0X2xpc3Q+bGl7aGVpZ2h0OiAycmVtO2xpbmUtaGVpZ2h0OiAycmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO3BhZGRpbmctbGVmdDogNDAlO3RleHQtYWxpZ246IGxlZnQ7fVxyXG4uc2VsZWN0X2xpc3RpY29ue3dpZHRoOiAwLjdyZW07aGVpZ2h0OiAwLjdyZW07bWFyZ2luLWxlZnQ6IDAuNXJlbTt9XHJcbi5zZWxlY3RfbGlzdHNlYXR7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO31cclxuLnRyYWRlaGlzdG9yeWJveF93YWl7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGZlMDt9XHJcblxyXG4uc2VsZWN0X3NvcnR0ZXh0e3dpZHRoOiA0cmVtO2Zsb2F0OiBsZWZ0O3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogIzY2Njt9XHJcbi5zZWxlY3Rfc29ydGljb257d2lkdGg6IDAuOHJlbTtoZWlnaHQ6IDAuOHJlbTtmbG9hdDogbGVmdDttYXJnaW4tdG9wOiAwLjVyZW07fVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */</style>

<style type="text/css">
  .swiper-container {
    width: 100%;
    height: 100%
  }

  .delswiper {
    width: 100%;
    height: 6.5rem;
    position: relative;
    margin-top: .4rem
  }

  .swiper-slide > li {
    width: 90%;
    height: 5rem;
    float: left;
    color: #666;
    margin: 0 2%;
    background-color: #fff;
    border: 1px solid #dedfe0;
    border-radius: 6px;
    padding: .2rem 3%
  }

  .delswiper .delswiper_text {
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem
  }

  .delswiper .swiper-pagination {
    position: absolute;
    width: 100%;
    bottom: 0;
    margin: 0 auto;
    z-index: 10;
    text-align: center
  }

  .delswiper .swiper-pagination .swiper-pagination-bullet {
    width: 10px;
    height: 2px;
    border-radius: 0
  }

  .delswiper .swiper-pagination .swiper-pagination-bullet-active {
    background: #611987
  }

  .delheader {
    height: 2rem
  }

  .delleft {
    float: left
  }

  .deluser_left {
    width: 70%;
    text-align: left
  }

  .deluser_rele {
    width: 2.7rem;
    height: 2rem;
    float: left;
    margin-right: .5rem;
    border-radius: 50%;
    position: relative
  }

  .deluser {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid #eee
  }

  .deluser2 {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: -.2rem
  }

  .delname {
    margin-top: .1rem
  }

  .delicon {
    width: 4rem;
    height: .8rem;
    margin-bottom: .2rem
  }

  .delread {
    font-size: .6rem;
    color: #666
  }

  .delread > span {
    color: #611987
  }

  .delis_ea {
    width: 2.5rem;
    height: .7rem;
    margin-top: .3rem
  }

  .delbox {
    background-color: #fff;
    border-bottom: 1px solid #dedfe0;
    border-top: 1px solid #dedfe0;
    margin-top: .4rem;
    height: 5.4rem;
    line-height: 1.3rem;
    position: relative
  }

  .delbox_left {
    width: 10%
  }

  .delbox_left > li {
    border-bottom: 1px solid #dedfe0;
    height: 1.3rem
  }

  .delbox_left > li:last-child {
    border: none
  }

  .delbox_center {
    width: 70%
  }

  .delbox_monthmenun {
    overflow-x: scroll
  }

  .delbox_month {
    width: 37.2rem;
    height: 4.1rem
  }

  .delbox_month > li {
    float: left;
    width: 3.1rem;
    text-align: center;
    color: #005ea3
  }

  .delbox_month > li > div {
    border-bottom: 1px solid #dedfe0;
    height: 1.3rem
  }

  .delbox_month1 {
    width: 37.2rem;
    height: 1.3rem
  }

  .delbox_month1 > li {
    float: left;
    width: 3.1rem;
    text-align: center;
    color: #005ea3
  }

  .delbox_month1 > li > div {
    border-bottom: 1px solid #dedfe0;
    height: 1.3rem
  }

  .delfont1 {
    color: #333
  }

  .delbox_bot {
    text-align: right;
    padding-right: .5rem
  }

  .delbox_right {
    width: 20%;
    background-color: #f7f9fd;
    color: #005ea3;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    border-left: 1px solid #dedfe0
  }

  .delbox_right > li {
    height: 1.3rem;
    border-bottom: 1px solid #dedfe0
  }

  .delbox_right > li:last-child {
    border: none
  }

  .delinfo {
    width: 47%;
    float: left;
    line-height: 1.3rem;
    padding-right: 3%;
    border-right: 1px solid #dedfe0;
    color: #666
  }

  .delinfo2 {
    width: 46%;
    float: right;
    line-height: 1.2rem;
    padding-left: 3%;
    color: #666
  }

  .delinfo2 > li, .delinfo > li {
    width: 100%;
    height: 1.3rem
  }

  .delinfo_menu {
    height: 6rem
  }

  .detail_shuoming {
    text-align: left;
    padding: .5rem;
    background-color: #fff;
    border-bottom: 1px solid #dedfe0;
    border-top: 1px solid #dedfe0;
    line-height: 1.3rem;
    margin-top: .5rem
  }

  .detail_shuoming2 {
    text-indent: 2em
  }

  .font-common {
    font-family: PingFang-SC-Medium;
    font-size: .72rem;
    color: #333;
    font-weight: inherit
  }

  .clearfix:after {
    display: none
  }

  .commitTitle {
    text-align: left;
    height: 1rem;
    line-height: 1rem;
    font-family: PingFang-SC-Medium;
    font-size: .72rem;
    color: #333
  }

  .commit_list > ul > li {
    border-bottom: 1px solid #dedfe0;
    padding: .5rem 0
  }

  .commit_list > ul > li:last-child {
    border: none
  }

  .commit_img {
    width: 1.67rem;
    height: 1.67rem;
    border-radius: 50%
  }

  .commit_img, .icomment_t {
    float: left;
    margin: .1rem .72rem 0 0
  }

  .icomment_t {
    width: .8rem;
    height: .8rem
  }

  .commit-content {
    margin-left: 2.3rem
  }

  .commit-content > h5 {
    text-align: left
  }

  .commit_date {
    float: right;
    font-weight: 400
  }

  .commit-content > p, .commit_date {
    font-family: PingFang-SC-Medium;
    font-size: .67rem;
    color: #999
  }

  .commit-content > p {
    text-align: left;
    margin-top: .2rem
  }

  #post_commit {
    padding: .72rem;
    margin-top: .5rem;
    background-color: #fff;
    text-align: right;
    border-top: 1px solid #dedfe0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3
  }

  #post_commit > h5 {
    text-align: left;
    margin-bottom: .5rem
  }

  .commit_area {
    border: 1px solid #dedfe0;
    border-radius: 2px;
    padding: 10px
  }

  #commit_content {
    border: none;
    outline: none;
    width: 100%;
    font-family: \\5FAE\8F6F\96C5\9ED1;
    font-size: .67rem;
    color: #999
  }

  .post_btn {
    width: 5.55rem;
    height: 1.67rem;
    background-color: #611987;
    outline: none;
    border: none;
    border-radius: 50px;
    font-size: .72rem;
    color: #fff
  }

  .commitwrapper {
    width: 100%;
    height: 61%;
    position: fixed;
    top: 2.3rem;
    left: 0;
    right: 0;
    overflow-y: scroll
  }

  .content_text2 {
    width: 50%;
    text-align: right;
    margin-top: .3rem;
    color: #999
  }

  .content_text {
    width: 50%
  }

  .content_text > p {
    margin-top: .3rem
  }

  .content_userimg {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    float: left;
    margin-right: .4rem
  }

  .content_user {
    height: 1.6rem;
    padding: .2rem 0 .5rem
  }

  .Mam {
    text-align: left;
    padding: 0 .5rem
  }

  .Mam > p {
    line-height: 1rem
  }

  .icont {
    height: .85rem;
    width: .85rem;
    margin-right: .5rem;
    float: left
  }

  .clearfix {
    zoom: 1
  }

  .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both
  }

  .fl {
    float: left
  }

  .fr {
    float: right
  }

  .Mam > p i {
    font-style: normal;
    color: #611987
  }

  .content_listA > h5 {
    text-align: left;
    line-height: 1.75rem
  }

  .content_listA {
    padding: .25rem .5rem;
    border-bottom: 1px solid #dedfe0;
    border-top: 1px solid #dedfe0;
    margin-top: .4rem;
    background-color: #fff
  }

  .content {
    height: 84%;
    top: 5.7rem;
    overflow: scroll
  }

  .comwrapper, .content {
    width: 100%;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 3
  }

  .comwrapper {
    height: 82%;
    top: 5.8rem;
    overflow-y: scroll
  }

  .commonFont {
    color: #333;
    font-size: .72rem;
    font-family: PingFang-SC-Medium
  }

  .content_listA > p {
    line-height: 1.75rem
  }

  .content_detail {
    text-align: left;
    border-top: 1px dashed #dedfe0
  }

  .content_detail > p {
    line-height: 1.2rem
  }

  .fcg {
    color: #21a921
  }

  .follormenu {
    width: 100%;
    height: 3.8rem;
    position: fixed;
    top: 2rem;
    left: 0;
    right: 0;
    z-index: 4
  }

  .hiswrapper, .mahiswrapper {
    width: 100%;
    height: 94%;
    position: fixed;
    top: 2rem;
    left: 0;
    right: 0;
    overflow-y: scroll
  }

  .mahiswrapper {
    z-index: 2
  }

  .historybox_wai {
    background-color: #fff;
    margin-top: .4rem;
    border-top: 1px solid #dedfe0
  }

  .historybox_in {
    padding: .3rem;
    border-bottom: 1px solid #dedfe0
  }

  .masterbomb {
    padding: .5rem 1rem;
    width: 6rem;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    position: fixed;
    top: 40%;
    border-radius: 4px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 11
  }

  .historydown {
    color: #999;
    height: 2rem;
    line-height: 1.5rem
  }

  .ti_list {
    background-color: #fff;
    border-top: 1px solid #dedfe0
  }

  .ti_listbox {
    padding: .5rem;
    border-bottom: 1px solid #dedfe0
  }

  .ti_listtop {
    width: 100%;
    height: 1rem;
    text-align: left
  }

  .ti_listicon {
    width: .8rem;
    height: .8rem;
    margin-left: .5rem;
    float: left
  }

  .ti_listcenter {
    width: 100%;
    height: 1rem
  }

  .ti_listmenu {
    border-top: 1px solid #dedfe0;
    width: 100%;
    margin-top: .3rem;
    padding-top: .3rem
  }

  .ti_listmenu > li {
    height: 1rem;
    line-height: 1rem;
    color: #999
  }

  .ti_font1 {
    color: #21a921
  }

  .ti_font2 {
    color: #611987
  }

  .tifixed {
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #dedfe0;
    z-index: 10
  }

  .tifixedtop {
    padding: .5rem .5rem .3rem;
    border-bottom: 1px solid #dedfe0
  }

  .tifixed_font1 {
    font-weight: 700;
    text-align: left;
    line-height: 1rem
  }

  .tifixedbot {
    height: 1.5rem;
    line-height: 1.5rem;
    padding: .2rem .5rem
  }

  .tiwrapper {
    width: 100%;
    height: 75%;
    position: fixed;
    top: 4.2rem;
    left: 0;
    right: 0;
    overflow-y: scroll
  }

  .master_tradenav, .tradeseat {
    width: 100%;
    height: 2.2rem
  }

  .master_tradenav {
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0;
    text-align: center;
    line-height: 2.2rem;
    color: #888;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100
  }

  .master_tradenav > li {
    width: 33.3%;
    height: 2.2rem;
    float: left
  }

  .master_tradenav > .tardeactive {
    color: #611987;
    border-bottom: 1px solid #611987
  }

  .tidetail > li {
    height: 1.2rem;
    line-height: 1.2rem;
    color: #666
  }

  .hismohu {
    width: 100%;
    height: 92%;
    position: fixed;
    top: 2.7rem;
    left: 0;
    right: 0;
    z-index: 5
  }

  .hismohu > img {
    width: 100%;
    height: 100%
  }

  .hismohu > div {
    position: absolute;
    z-index: 3;
    top: 35%;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: .8rem
  }

  .tihiswrapper {
    width: 100%;
    height: 94%;
    position: fixed;
    top: 2.3rem;
    left: 0;
    right: 0;
    overflow-y: scroll
  }

  .commentseat, .mam_ticomnav {
    width: 100%;
    height: 2.2rem
  }

  .mam_ticomnav {
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0;
    text-align: center;
    line-height: 2.2rem;
    color: #888;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100
  }

  .mam_ticomnav > li {
    width: 50%;
    height: 2.2rem;
    float: left
  }

  .mam_ticomnav > .mamtiactive {
    color: #611987;
    border-bottom: 1px solid #611987
  }

  .history {
    background-color: #fff;
    border-top: 1px solid #dedfe0;
    margin-top: .4rem;
    margin-bottom: 1rem
  }

  .hislist {
    height: 2.2rem
  }

  .hisfont1 {
    margin-left: .2rem;
    color: #007eff
  }

  .hisfont2 {
    margin-left: .2rem;
    color: #e73b29
  }

  .histext1 {
    height: 1.1rem
  }

  .historybox, .historyhide, .historyshow {
    border-bottom: 1px solid #dedfe0;
    padding: .5rem
  }

  .historyinfo {
    color: #999
  }

  .historyinfo > li {
    width: 100%;
    height: 1.1rem
  }

  .historyinfo2 {
    color: #333;
    padding: .5rem
  }

  .historyinfo2 > li {
    width: 100%;
    height: 1.1rem
  }

  .historytime {
    text-align: left
  }

  .historyhide2, .historyshow2, .tradebox {
    margin-top: .4rem;
    border-bottom: 1px solid #dedfe0;
    padding: .2rem .5rem
  }

  .tradebox_wai {
    background-color: #fff;
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0
  }

  .tradefont1 {
    color: #dc4537
  }

  .tradefont2 {
    color: #777
  }

  .hishold {
    margin-bottom: 1rem
  }

  .historyshow .hinfoshow {
    display: block
  }

  .historyhide .hinfoshow {
    display: none
  }

  .historyshow2 .hinfoshow2 {
    display: block
  }

  .hinfoshow, .hinfoshow2, .historyhide2 .hinfoshow2 {
    display: none
  }

  .phone_tipbox {
    position: fixed;
    background-color: #fff;
    width: 100%;
    height: 100%;
    left: 0;
    font-size: .75rem
  }

  .cardsection {
    background-color: #fff;
    border-top: 1px solid #dedfe0;
    padding: 0 .7rem 5rem
  }

  .card_namebox {
    height: 2.3rem;
    border-bottom: 1px solid #dedfe0;
    line-height: 2.3rem
  }

  .card_namebox > div {
    width: 15%;
    float: left;
    text-align: left
  }

  .card_namebox > input {
    width: 60%;
    float: left;
    height: 2.3rem;
    border: none;
    outline: none;
    font-size: .75rem
  }

  .yzmbtn {
    background-color: #611987
  }

  .yzmbtn, .yzmbtn2 {
    width: 4.5rem;
    border: none;
    outline: none;
    border-radius: 50px;
    color: #fff;
    height: 1.7rem
  }

  .yzmbtn2 {
    background-color: #d6d6d6
  }

  .phoneicon {
    width: 1.2rem;
    height: 1.2rem;
    float: right;
    margin-top: .6rem;
    margin-left: .2rem
  }

  .phoneremark {
    color: #999;
    font-size: .7rem;
    text-align: left;
    line-height: 1.5rem
  }

  .phonebtn {
    width: 100%;
    height: 2.2rem;
    color: #fff;
    background-color: #611987;
    border: none;
    outline: none;
    font-size: .8rem;
    border-radius: 50px;
    margin-top: 1rem
  }

  .phone_tip {
    color: #999;
    text-align: left;
    margin-top: 1rem
  }

  .recardsection {
    background-color: #fff;
    border-top: 1px solid #dedfe0;
    padding: 0 .7rem 5rem
  }

  .recard_namebox {
    height: 2.3rem;
    border-bottom: 1px solid #dedfe0;
    line-height: 2.3rem
  }

  .recard_namebox > div {
    width: 15%;
    float: left;
    text-align: left
  }

  .recard_namebox > input {
    width: 60%;
    float: left;
    height: 2.3rem;
    border: none;
    outline: none
  }

  .reyzmbtn {
    width: 4.5rem;
    border: none;
    outline: none;
    border-radius: 50px;
    background-color: #611987;
    color: #fff;
    height: 1.7rem
  }

  .rephoneicon {
    width: 1.2rem;
    height: 1.2rem;
    float: right;
    margin-top: .6rem;
    margin-left: .2rem
  }

  .rephoneremark {
    color: #999;
    font-size: .7rem;
    text-align: left;
    line-height: 1.5rem
  }

  .rephonebtn {
    width: 100%;
    height: 2.2rem;
    color: #fff;
    background-color: #611987;
    border: none;
    outline: none;
    font-size: .9rem;
    border-radius: 50px;
    margin-top: 1rem
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/css/masterdetail.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvY3NzL21hc3RlcmRldGFpbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCLFdBQVksV0FBYSxDQUFDLEFBQzVDLFdBQVcsV0FBWSxjQUFlLGtCQUFtQixnQkFBbUIsQ0FBQyxBQUc3RSxpQkFBaUIsVUFBVyxZQUFhLFdBQVksV0FBWSxZQUFlLHNCQUF1Qix5QkFBMEIsQUFDakksa0JBQW1CLGdCQUFtQixDQUFDLEFBQ3ZDLDJCQUEyQixXQUFZLGNBQWUsa0JBQW9CLENBQUMsQUFDM0UsOEJBQStCLGtCQUFtQixXQUFZLFNBQWEsY0FBZSxXQUFZLGlCQUFtQixDQUFDLEFBQzFILHdEQUF5RCxXQUFZLFdBQVksZUFBaUIsQ0FBQyxBQUNuRywrREFBK0Qsa0JBQW9CLENBQUMsQUFLcEYsV0FBVyxXQUFhLENBQUMsQUFDekIsU0FBUyxVQUFZLENBQUMsQUFDdEIsY0FBYyxVQUFXLGVBQWlCLENBQUMsQUFDM0MsY0FBYyxhQUFjLFlBQWEsV0FBWSxtQkFBcUIsa0JBQW1CLGlCQUFtQixDQUFDLEFBQ2pILFNBQVMsV0FBWSxZQUFhLGtCQUFtQixBQUFDLHFCQUF1QixDQUFDLEFBQzlFLFVBQVUsV0FBWSxZQUFhLGtCQUFtQixrQkFBbUIsUUFBWSxhQUFnQixDQUFDLEFBQ3RHLFNBQVMsZ0JBQW1CLENBQUMsQUFDN0IsU0FBUyxXQUFZLGFBQWUsbUJBQXNCLENBQUMsQUFDM0QsU0FBUyxnQkFBa0IsVUFBWSxDQUFDLEFBQ3hDLGNBQWMsYUFBZSxDQUFDLEFBQzlCLFVBQVUsYUFBYyxhQUFlLGdCQUFtQixDQUFDLEFBQzNELFFBQVEsc0JBQXdCLGdDQUFnQyw2QkFBNkIsaUJBQW1CLGNBQWUsQUFDL0gsbUJBQW9CLGlCQUFtQixDQUFDLEFBQ3hDLGFBQWEsU0FBVyxDQUFDLEFBQ3pCLGdCQUFnQixnQ0FBaUMsYUFBZSxDQUFDLEFBQ2pFLDJCQUEyQixXQUFhLENBQUMsQUFDekMs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Y0FBZSxZQUFhLGlCQUFtQixpQkFBb0IsQ0FBQyxBQUM3RixhQUFhLFdBQVksZ0JBQWtCLGdCQUFpQixrQkFBb0IsQ0FBQyxBQUNqRixVQUFVLFdBQVksY0FBZSxXQUFZLHlCQUEwQixZQUFhLGFBQWMsZ0JBQWtCLEFBQ3hILG1CQUFvQixlQUFpQixDQUFDLEFBQ3RDLFdBQVcsV0FBWSxnQkFBaUIsZUFBaUIsQ0FBQyxBQUUxRCxlQUFlLHNCQUF1Qiw2QkFBOEIsb0JBQXlCLENBQUMsQUFDOUYsZ0JBQWdCLGNBQWUsZ0NBQWlDLGtCQUFvQixDQUFDLEFBQ3JGLG9CQUFvQixVQUFXLFdBQVksZUFBaUIsQ0FBQyxBQUM3RCxzQkFBc0IsVUFBVyxXQUFZLGNBQWUsWUFBWSxZQUFjLENBQUMsQUFDdkYsVUFBVSxhQUFjLFlBQWEsYUFBYyxtQkFBb0IseUJBQTBCLFdBQVksYUFBZSxDQUFDLEFBQzdILGFBQWEsYUFBYyxjQUFlLFlBQWEsaUJBQW1CLGlCQUFvQixDQUFDLEFBQy9GLGVBQWUsV0FBWSxnQkFBa0IsZ0JBQWlCLGtCQUFvQixDQUFDLEFBQ25GLFlBQVksV0FBWSxjQUFlLFdBQVkseUJBQTBCLFlBQWEsYUFBYyxnQkFBa0IsQUFDMUgsbUJBQW9CLGVBQWlCLENBQUMiLCJmaWxlIjoibWFzdGVyZGV0YWlsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItY29udGFpbmVye3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTt9XHJcbi5kZWxzd2lwZXJ7d2lkdGg6IDEwMCU7aGVpZ2h0OiA2LjVyZW07cG9zaXRpb246IHJlbGF0aXZlO21hcmdpbi10b3A6IDAuNHJlbTt9XHJcbi8qIC52aXBzd2lwZXJfYm94e3dpZHRoOiA3MnJlbTtoZWlnaHQ6IDhyZW07bWFyZ2luOiAycmVtO30gKi9cclxuLyogLnN3aXBlci1zbGlkZXttYXJnaW46MThyZW07fSAqL1xyXG4uc3dpcGVyLXNsaWRlPmxpe3dpZHRoOiA5MCU7aGVpZ2h0OiA1cmVtO2Zsb2F0OiBsZWZ0O2NvbG9yOiAjNjY2O21hcmdpbjogMHB4IDIlO2JhY2tncm91bmQtY29sb3I6ICNmZmY7Ym9yZGVyOiAxcHggc29saWQgI2RlZGZlMDtcclxuYm9yZGVyLXJhZGl1czogNnB4O3BhZGRpbmc6IDAuMnJlbSAzJTt9XHJcbi5kZWxzd2lwZXIgLmRlbHN3aXBlcl90ZXh0e3dpZHRoOiAxMDAlO2hlaWdodDogMS4ycmVtO2xpbmUtaGVpZ2h0OiAxLjJyZW07fVxyXG4uZGVsc3dpcGVyIC5zd2lwZXItcGFnaW5hdGlvbiB7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO2JvdHRvbTogMHJlbTttYXJnaW46IDAgYXV0bzt6LWluZGV4OiAxMDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uZGVsc3dpcGVyIC5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHt3aWR0aDogMTBweDtoZWlnaHQ6IDJweDtib3JkZXItcmFkaXVzOiAwO31cclxuLmRlbHN3aXBlciAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7YmFja2dyb3VuZDogIzYxMTk4Nzt9XHJcblxyXG4vKiDor6bmg4XmpoLlhrXpg6jliIYgKi9cclxuLm1hc3RlcmJvbWJ7cGFkZGluZzogMC41cmVtIDFyZW07d2lkdGg6NnJlbTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7Y29sb3I6IHdoaXRlO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDQwJTtib3JkZXItcmFkaXVzOiA0cHg7XHJcbmxlZnQ6IDBweDtyaWdodDogMHB4O21hcmdpbjogMCBhdXRvO3otaW5kZXg6IDExO31cclxuLmRlbGhlYWRlcntoZWlnaHQ6IDJyZW07fVxyXG4uZGVsbGVmdHtmbG9hdDogbGVmdDt9XHJcbi5kZWx1c2VyX2xlZnR7d2lkdGg6IDcwJTt0ZXh0LWFsaWduOiBsZWZ0O31cclxuLmRlbHVzZXJfcmVsZXt3aWR0aDogMi43cmVtO2hlaWdodDogMnJlbTtmbG9hdDogbGVmdDttYXJnaW4tcmlnaHQ6IDAuNXJlbTtib3JkZXItcmFkaXVzOiA1MCU7cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmRlbHVzZXJ7d2lkdGg6IDJyZW07aGVpZ2h0OiAycmVtO2JvcmRlci1yYWRpdXM6IDUwJTs7Ym9yZGVyOiAxcHggc29saWQgI2VlZTt9XHJcbi5kZWx1c2VyMnt3aWR0aDogMXJlbTtoZWlnaHQ6IDFyZW07Ym9yZGVyLXJhZGl1czogNTAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMHJlbTtib3R0b206IC0wLjJyZW07fVxyXG4uZGVsbmFtZXttYXJnaW4tdG9wOiAwLjFyZW07fVxyXG4uZGVsaWNvbnt3aWR0aDogNHJlbTtoZWlnaHQ6IDAuOHJlbTttYXJnaW4tYm90dG9tOiAwLjJyZW07fVxyXG4uZGVscmVhZHtmb250LXNpemU6IDAuNnJlbTtjb2xvcjogIzY2Njt9XHJcbi5kZWxyZWFkPnNwYW57Y29sb3I6ICM2MTE5ODc7fVxyXG4uZGVsaXNfZWF7d2lkdGg6IDIuNXJlbTtoZWlnaHQ6IDAuN3JlbTttYXJnaW4tdG9wOiAwLjNyZW07fVxyXG4uZGVsYm94e2JhY2tncm91bmQtY29sb3I6IHdoaXRlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZWRmZTA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RlZGZlMDttYXJnaW4tdG9wOiAwLjRyZW07aGVpZ2h0OiA1LjRyZW07XHJcbmxpbmUtaGVpZ2h0OiAxLjNyZW07cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmRlbGJveF9sZWZ0e3dpZHRoOiAxMCU7fVxyXG4uZGVsYm94X2xlZnQ+bGl7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRmZTA7aGVpZ2h0OiAxLjNyZW07fVxyXG4uZGVsYm94X2xlZnQ+bGk6bGFzdC1jaGlsZHtib3JkZXI6IG5vbmU7fVxyXG4uZGVsYm94X2NlbnRlcnt3aWR0aDogNzAlO31cclxuLmRlbGJveF9tb250aG1lbnVue292ZXJmbG93LXg6IHNjcm9sbDt9XHJcbi5kZWxib3hfbW9udGh7d2lkdGg6MzcuMnJlbTtoZWlnaHQ6IDQuMXJlbTt9XHJcbi5kZWxib3hfbW9udGg+bGl7ZmxvYXQ6IGxlZnQ7d2lkdGg6IDMuMXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6ICMwMDVlYTM7fVxyXG4uZGVsYm94X21vbnRoPmxpPmRpdntib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGZlMDtoZWlnaHQ6IDEuM3JlbTt9XHJcbi5kZWxib3hfbW9udGgxe3dpZHRoOjM3LjJyZW07aGVpZ2h0OiAxLjNyZW07fVxyXG4uZGVsYm94X21vbnRoMT5saXtmbG9hdDogbGVmdDt3aWR0aDogMy4xcmVtO3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogIzAwNWVhMzt9XHJcbi5kZWxib3hfbW9udGgxPmxpPmRpdntib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGZlMDtoZWlnaHQ6IDEuM3JlbTt9XHJcbi5kZWxmb250MXtjb2xvcjogIzMzMzt9XHJcbi5kZWxib3hfYm90e3RleHQtYWxpZ246IHJpZ2h0O3BhZGRpbmctcmlnaHQ6IDAuNXJlbTt9XHJcbi5kZWxib3hfcmlnaHR7d2lkdGg6IDIwJTtiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZkO2NvbG9yOiAjMDA1ZWEzO3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMHB4O3RvcDogMHB4O2JvdHRvbTogMHB4O3otaW5kZXg6IDI7Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVkZmUwO31cclxuLmRlbGJveF9yaWdodD5saXtoZWlnaHQ6IDEuM3JlbTtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGZlMDt9XHJcbi5kZWxib3hfcmlnaHQ+bGk6bGFzdC1jaGlsZHtib3JkZXI6IG5vbmU7fVxyXG4uZGVsaW5mb3t3aWR0aDogNDclO2Zsb2F0OiBsZWZ0O2xpbmUtaGVpZ2h0OiAxLjNyZW07cGFkZGluZy1yaWdodDogMyU7Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZGZlMDtjb2xvcjogIzY2Njt9XHJcbi5kZWxpbmZvMnt3aWR0aDogNDYlO2Zsb2F0OiByaWdodDtsaW5lLWhlaWdodDogMS4ycmVtO3BhZGRpbmctbGVmdDogMyU7Y29sb3I6ICM2NjY7fVxyXG4uZGVsaW5mbzI+bGksLmRlbGluZm8+bGl7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxLjNyZW07fVxyXG4uZGVsaW5mb19tZW51e2hlaWdodDogNnJlbTt9XHJcbi5kZXRhaWxfc2h1b21pbmd7dGV4dC1hbGlnbjogbGVmdDtwYWRkaW5nOiAwLjVyZW07YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGZlMDtib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGZlMDtsaW5lLWhlaWdodDogMS4zcmVtO1xyXG5tYXJnaW4tdG9wOiAwLjVyZW07fVxyXG4uZGV0YWlsX3NodW9taW5nMnt0ZXh0LWluZGVudDogMmVtO31cclxuLyog6K+E6K666YOo5YiGICovXHJcbi5jbGVhcmZpeHt6b29tOjE7fVxyXG4uZm9udC1jb21tb257Zm9udC1mYW1pbHk6XCJQaW5nRmFuZy1TQy1NZWRpdW1cIjtmb250LXNpemU6MC43MnJlbTtjb2xvcjojMzMzO2ZvbnQtd2VpZ2h0OiBpbmhlcml0O31cclxuLmNsZWFyZml4OjphZnRlcntjb250ZW50OlwiXCI7aGVpZ2h0OjBweDtkaXNwbGF5Om5vbmU7Y2xlYXI6Ym90aDt9XHJcbi5jb21taXRUaXRsZXt0ZXh0LWFsaWduOmxlZnQ7IGhlaWdodDoxcmVtOyBsaW5lLWhlaWdodDoxcmVtOyBmb250LWZhbWlseTpcIlBpbmdGYW5nLVNDLU1lZGl1bVwiO2ZvbnQtc2l6ZTowLjcycmVtO2NvbG9yOiMzMzM7fVxyXG4uY29tbWl0X2xpc3Q+dWw+bGl7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI0RFREZFMDtwYWRkaW5nOiAwLjVyZW0gMDt9XHJcbi5jb21taXRfbGlzdD51bD5saTpsYXN0LWNoaWxke2JvcmRlcjpub25lO31cclxuLmNvbW1pdF9pbWd7ZmxvYXQ6bGVmdDt9XHJcbi5jb21taXRfaW1ne3dpZHRoOjEuNjdyZW07aGVpZ2h0OjEuNjdyZW07IG1hcmdpbjowLjFyZW0gMC43MnJlbSAwIDA7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuLmljb21tZW50X3R7d2lkdGg6MC44cmVtO2hlaWdodDowLjhyZW07IG1hcmdpbjowLjFyZW0gMC43MnJlbSAwIDA7ZmxvYXQ6IGxlZnQ7fVxyXG4uY29tbWl0LWNvbnRlbnR7bWFyZ2luLWxlZnQ6Mi4zcmVtO31cclxuLmNvbW1pdC1jb250ZW50Pmg1e3RleHQtYWxpZ246bGVmdDt9XHJcbi5jb21taXRfZGF0ZXtmbG9hdDpyaWdodDsgZm9udC13ZWlnaHQ6NDAwO2ZvbnQtZmFtaWx5OlwiUGluZ0ZhbmctU0MtTWVkaXVtXCI7Zm9udC1zaXplOjAuNjdyZW07Y29sb3I6Izk5OTt9XHRcclxuLmNvbW1pdC1jb250ZW50PnB7dGV4dC1hbGlnbjogbGVmdDttYXJnaW4tdG9wOiAwLjJyZW07IGZvbnQtZmFtaWx5OlwiUGluZ0ZhbmctU0MtTWVkaXVtXCI7Zm9udC1zaXplOjAuNjdyZW07Y29sb3I6Izk5OTt9XHJcbiNwb3N0X2NvbW1pdHtwYWRkaW5nOjAuNzJyZW07IG1hcmdpbi10b3A6IDAuNXJlbTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgdGV4dC1hbGlnbjogcmlnaHQ7Ym9yZGVyLXRvcDoxcHggc29saWQgI0RFREZFMDtcclxucG9zaXRpb246IGZpeGVkO2JvdHRvbTogMHB4O2xlZnQ6IDBweDtyaWdodDogMHB4O3otaW5kZXg6IDM7fVxyXG4jcG9zdF9jb21taXQ+aDV7dGV4dC1hbGlnbjogbGVmdDttYXJnaW4tYm90dG9tOiAwLjVyZW07fVxyXG4uY29tbWl0X2FyZWF7Ym9yZGVyOjFweCBzb2xpZCAjREVERkUwOyBib3JkZXItcmFkaXVzOjJweDtwYWRkaW5nOjEwcHg7fVxyXG4jY29tbWl0X2NvbnRlbnR7Ym9yZGVyOm5vbmU7IG91dGxpbmU6IG5vbmU7d2lkdGg6IDEwMCU7IGZvbnQtZmFtaWx5OiAn5b6u6L2v6ZuF6buRJzsgZm9udC1zaXplOiAwLjY3cmVtOyBjb2xvcjojOTk5O31cclxuLnBvc3RfYnRue3dpZHRoOjUuNTVyZW07IGhlaWdodDogMS42N3JlbTsgYmFja2dyb3VuZC1jb2xvcjojNjExOTg3OyBvdXRsaW5lOm5vbmU7Ym9yZGVyOm5vbmU7IGJvcmRlci1yYWRpdXM6NTBweDsgZm9udC1zaXplOjAuNzJyZW07IGNvbG9yOiNmZmY7fVxyXG4uY29tbWl0d3JhcHBlcnt3aWR0aDogMTAwJTtoZWlnaHQ6IDYxJTtwb3NpdGlvbjogZml4ZWQ7dG9wOiAyLjNyZW07bGVmdDogMHB4O3JpZ2h0OiAwcHg7b3ZlcmZsb3cteTogc2Nyb2xsO31cclxuLm1hc3RlcmJvbWJ7cGFkZGluZzogMC41cmVtIDFyZW07d2lkdGg6NnJlbTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7Y29sb3I6IHdoaXRlO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDQwJTtib3JkZXItcmFkaXVzOiA0cHg7XHJcbmxlZnQ6IDBweDtyaWdodDogMHB4O21hcmdpbjogMCBhdXRvO3otaW5kZXg6IDExO31cclxuXHJcbi8qIOi3n+maj+iAhSAqL1xyXG4uY29udGVudF90ZXh0Mnt3aWR0aDogNTAlO3RleHQtYWxpZ246IHJpZ2h0O21hcmdpbi10b3A6IDAuM3JlbTtjb2xvcjogIzk5OTt9XHJcbi5jb250ZW50X3RleHR7d2lkdGg6IDUwJTt9XHJcbi5jb250ZW50X3RleHQ+cHttYXJnaW4tdG9wOiAwLjNyZW07fVxyXG4uY29udGVudF91c2VyaW1ne3dpZHRoOiAxLjZyZW07aGVpZ2h0OiAxLjZyZW07Ym9yZGVyLXJhZGl1czogNTAlO2Zsb2F0OiBsZWZ0O21hcmdpbi1yaWdodDogMC40cmVtO31cclxuLmNvbnRlbnRfdXNlcntoZWlnaHQ6IDEuNnJlbTtwYWRkaW5nOiAwLjJyZW0gMHB4IDAuNXJlbTt9XHJcbi5NYW17dGV4dC1hbGlnbjogbGVmdDsgcGFkZGluZzowIDAuNXJlbTt9XHJcbi5NYW0+cHtsaW5lLWhlaWdodDoxcmVtOyB9XHJcbi5pY29udHtoZWlnaHQ6IDAuODVyZW07d2lkdGg6IDAuODVyZW07bWFyZ2luLXJpZ2h0OiAwLjVyZW07ZmxvYXQ6IGxlZnQ7fVxyXG4uY2xlYXJmaXh7em9vbToxfTtcclxuLmNsZWFyZml4OmFmdGVye2NvbnRlbnQ6XCJcIjsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogMDsgY2xlYXI6IGJvdGg7fVxyXG4uZmx7ZmxvYXQ6IGxlZnQ7fVxyXG4uZnJ7ZmxvYXQ6IHJpZ2h0O31cclxuLk1hbT5wIGl7Zm9udC1zdHlsZTogbm9ybWFsOyBjb2xvcjojNjExOTg3O31cclxuLmNvbnRlbnRfbGlzdEE+aDV7dGV4dC1hbGlnbjogbGVmdDsgbGluZS1oZWlnaHQ6IDEuNzVyZW07fVxyXG4uY29udGVudF9saXN0QXsgcGFkZGluZzowLjI1cmVtIDAuNXJlbTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREVERkUwO2JvcmRlci10b3A6MXB4IHNvbGlkICNERURGRTA7bWFyZ2luLXRvcDogMC40cmVtO2JhY2tncm91bmQtY29sb3I6ICNmZmY7fVxyXG4uY29udGVudHt3aWR0aDogMTAwJTtoZWlnaHQ6IDg0JTt0b3A6IDUuN3JlbTtsZWZ0OiAwcHg7cmlnaHQ6IDBweDtvdmVyZmxvdzogc2Nyb2xsO3Bvc2l0aW9uOiBmaXhlZDt6LWluZGV4OiAzO31cclxuLmNvbXdyYXBwZXJ7d2lkdGg6IDEwMCU7aGVpZ2h0OiA4MiU7cG9zaXRpb246IGZpeGVkO3RvcDogNS44cmVtO2xlZnQ6IDBweDtyaWdodDogMHB4O292ZXJmbG93LXk6IHNjcm9sbDt6LWluZGV4OiAzO31cclxuLmNvbW1vbkZvbnR7Y29sb3I6IzMzMzsgZm9udC1zaXplOjAuNzJyZW07Zm9udC1mYW1pbHk6XCJQaW5nRmFuZy1TQy1NZWRpdW1cIjt9XHJcbi5jb250ZW50X2xpc3RBPnB7bGluZS1oZWlnaHQ6IDEuNzVyZW07fVxyXG4uY29udGVudF9kZXRhaWx7dGV4dC1hbGlnbjogbGVmdDsgYm9yZGVyLXRvcDoxcHggZGFzaGVkICNERURGRTA7fVxyXG4uY29udGVudF9kZXRhaWw+cHtsaW5lLWhlaWdodDoxLjJyZW07IH1cclxuLmZjZ3tjb2xvcjojMjFhOTIxO31cclxuLmZvbGxvcm1lbnV7d2lkdGg6IDEwMCU7aGVpZ2h0OiAzLjhyZW07cG9zaXRpb246IGZpeGVkO3RvcDogMnJlbTtsZWZ0OiAwcHg7cmlnaHQ6IDBweDt6LWluZGV4OiA0O31cclxuXHJcbi8qIOWOhuWPsumDqOWIhiAqL1xyXG4uaGlzd3JhcHBlcnt3aWR0aDogMTAwJTtoZWlnaHQ6IDk0JTtwb3NpdGlvbjogZml4ZWQ7dG9wOiAycmVtO2xlZnQ6IDBweDtyaWdodDogMHB4O292ZXJmbG93LXk6IHNjcm9sbDt9XHJcbi5tYWhpc3dyYXBwZXJ7d2lkdGg6IDEwMCU7aGVpZ2h0OiA5NCU7cG9zaXRpb246IGZpeGVkO3RvcDogMnJlbTtsZWZ0OiAwcHg7cmlnaHQ6IDBweDtvdmVyZmxvdy15OiBzY3JvbGw7ei1pbmRleDogMjt9XHJcbi5oaXN0b3J5Ym94X3dhaXtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO21hcmdpbi10b3A6IDAuNHJlbTtib3JkZXItdG9wOiAxcHggc29saWQgI0RFREZFMDt9XHRcclxuLmhpc3Rvcnlib3hfaW57cGFkZGluZzogMC4zcmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVERkUwO31cclxuLm1hc3RlcmJvbWJ7cGFkZGluZzogMC41cmVtIDFyZW07d2lkdGg6NnJlbTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7Y29sb3I6IHdoaXRlO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDQwJTtib3JkZXItcmFkaXVzOiA0cHg7XHJcbmxlZnQ6IDBweDtyaWdodDogMHB4O21hcmdpbjogMCBhdXRvO3otaW5kZXg6IDExO31cclxuLmhpc3Rvcnlkb3due2NvbG9yOiAjOTk5O2hlaWdodDogMnJlbTtsaW5lLWhlaWdodDogMS41cmVtO31cclxuXHRcclxuLyrmipXotYTogIXpg6jliIYqL1xyXG4udGlfbGlzdHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO2JvcmRlci10b3A6IDFweCBzb2xpZCAjREVERkUwO31cclxuLnRpX2xpc3Rib3h7cGFkZGluZzogMC41cmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVERkUwO31cclxuLnRpX2xpc3R0b3B7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxcmVtO3RleHQtYWxpZ246IGxlZnQ7fVxyXG4udGlfbGlzdGljb257d2lkdGg6IDAuOHJlbTtoZWlnaHQ6IDAuOHJlbTttYXJnaW4tbGVmdDogMC41cmVtO2Zsb2F0OiBsZWZ0O31cclxuLnRpX2xpc3RjZW50ZXJ7d2lkdGg6IDEwMCU7aGVpZ2h0OjFyZW07fVxyXG4udGlfbGlzdG1lbnV7Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNERURGRTA7d2lkdGg6IDEwMCU7bWFyZ2luLXRvcDogMC4zcmVtO3BhZGRpbmctdG9wOiAwLjNyZW07fVxyXG4udGlfbGlzdG1lbnU+bGl7aGVpZ2h0OjFyZW07bGluZS1oZWlnaHQ6IDFyZW07Y29sb3I6ICM5OTk7fVxyXG4udGlfZm9udDF7Y29sb3I6ICMyMWE5MjE7fVxyXG4udGlfZm9udDJ7Y29sb3I6ICM2MTE5ODc7fVxyXG4udGlmaXhlZHt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDBweDtsZWZ0OiAwcHg7cmlnaHQ6IDBweDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI0RFREZFMDt6LWluZGV4OiAxMDt9XHJcbi50aWZpeGVkdG9we3BhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC4zcmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO31cclxuLnRpZml4ZWRfZm9udDF7Zm9udC13ZWlnaHQ6IGJvbGQ7dGV4dC1hbGlnbjogbGVmdDtsaW5lLWhlaWdodDogMXJlbTt9XHJcbi50aWZpeGVkYm90e2hlaWdodDogMS41cmVtO2xpbmUtaGVpZ2h0OiAxLjVyZW07cGFkZGluZzogMC4ycmVtIDAuNXJlbTt9XHJcbi50aXdyYXBwZXJ7d2lkdGg6IDEwMCU7aGVpZ2h0OiA3NSU7cG9zaXRpb246IGZpeGVkO3RvcDogNC4ycmVtO2xlZnQ6IDBweDtyaWdodDogMHB4O292ZXJmbG93LXk6IHNjcm9sbDt9XHJcblxyXG5cclxuLyog5Lqk5piT5pWw5o2u6YOo5YiGICovXHJcbi50cmFkZXNlYXR7d2lkdGg6IDEwMCU7aGVpZ2h0OiAyLjJyZW07fVxyXG4ubWFzdGVyX3RyYWRlbmF2e3dpZHRoOiAxMDAlO2hlaWdodDogMi4ycmVtO2JvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZmUwO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO3RleHQtYWxpZ246IGNlbnRlcjtsaW5lLWhlaWdodDogMi4ycmVtO2NvbG9yOiAjODg4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtwb3NpdGlvbjogZml4ZWQ7dG9wOiAwcHg7bGVmdDogMHB4O3otaW5kZXg6IDEwMDt9XHJcbi5tYXN0ZXJfdHJhZGVuYXY+bGl7d2lkdGg6IDMzLjMlO2hlaWdodDogMi4ycmVtO2Zsb2F0OiBsZWZ0O31cclxuLm1hc3Rlcl90cmFkZW5hdj4udGFyZGVhY3RpdmV7Y29sb3I6ICM2MTE5ODc7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MTE5ODc7fVxyXG4udGlkZXRhaWw+bGl7aGVpZ2h0OiAxLjJyZW07bGluZS1oZWlnaHQ6IDEuMnJlbTtjb2xvcjogIzY2Njt9XHJcbi8qIOWOhuWPsumDqOWIhiAqL1xyXG4uaGlzbW9odXt3aWR0aDogMTAwJTtoZWlnaHQ6IDkyJTtwb3NpdGlvbjogZml4ZWQ7dG9wOiAyLjdyZW07bGVmdDogMHB4O3JpZ2h0OiAwcHg7ei1pbmRleDogNTt9XHJcbi5oaXNtb2h1PmltZ3t3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7fVxyXG4uaGlzbW9odT5kaXZ7cG9zaXRpb246IGFic29sdXRlO3otaW5kZXg6IDM7dG9wOiAzNSU7bGVmdDogMHB4O3JpZ2h0OiAwcHg7bWFyZ2luOiAwIGF1dG87Zm9udC1zaXplOiAwLjhyZW07fVxyXG4udGloaXN3cmFwcGVye3dpZHRoOiAxMDAlO2hlaWdodDogOTQlO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDIuM3JlbTtsZWZ0OiAwcHg7cmlnaHQ6IDBweDtvdmVyZmxvdy15OiBzY3JvbGw7fVxyXG5cclxuLyog6K+E6K666YOo5YiGICovXHJcbi5jb21tZW50c2VhdHt3aWR0aDogMTAwJTtoZWlnaHQ6IDIuMnJlbTt9XHJcbi5tYW1fdGljb21uYXZ7d2lkdGg6IDEwMCU7aGVpZ2h0OiAyLjJyZW07Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRmZTA7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRmZTA7dGV4dC1hbGlnbjogY2VudGVyO2xpbmUtaGVpZ2h0OiAyLjJyZW07Y29sb3I6ICM4ODg7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDBweDtsZWZ0OiAwcHg7ei1pbmRleDogMTAwO31cclxuLm1hbV90aWNvbW5hdj5saXt3aWR0aDogNTAlO2hlaWdodDogMi4ycmVtO2Zsb2F0OiBsZWZ0O31cclxuLm1hbV90aWNvbW5hdj4ubWFtdGlhY3RpdmV7Y29sb3I6ICM2MTE5ODc7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MTE5ODc7fVxyXG5cclxuXHJcbi8qIOS6pOaYk+WOhuWPsiAqL1xyXG4uaGlzdG9yeXtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGZlMDttYXJnaW4tdG9wOiAwLjRyZW07bWFyZ2luLWJvdHRvbTogMXJlbTt9XHJcbi5oaXNsaXN0e2hlaWdodDogMi4ycmVtO31cclxuLmhpc2ZvbnQxe21hcmdpbi1sZWZ0OiAwLjJyZW07Y29sb3I6ICMwMDdlZmY7fVxyXG4uaGlzZm9udDJ7bWFyZ2luLWxlZnQ6IDAuMnJlbTtjb2xvcjogI2U3M2IyOTt9XHJcbi5oaXN0ZXh0MXtoZWlnaHQ6IDEuMXJlbTt9XHJcbi5oaXN0b3J5c2hvdywuaGlzdG9yeWhpZGUsLmhpc3Rvcnlib3h7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRmZTA7cGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW07fVxyXG4uaGlzdG9yeWluZm97Y29sb3I6ICM5OTk7fVxyXG4uaGlzdG9yeWluZm8+bGl7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxLjFyZW07fVxyXG4uaGlzdG9yeWluZm8ye2NvbG9yOiAjMzMzO3BhZGRpbmc6IDAuNXJlbTt9XHJcbi5oaXN0b3J5aW5mbzI+bGl7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxLjFyZW07fVxyXG4uaGlzdG9yeXRpbWV7dGV4dC1hbGlnbjogbGVmdDt9XHJcbi5oaXN0b3J5c2hvdzIsLmhpc3RvcnloaWRlMiwudHJhZGVib3h7bWFyZ2luLXRvcDogMC40cmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO3BhZGRpbmc6IDAuMnJlbSAwLjVyZW07fVxyXG4udHJhZGVib3hfd2Fpe2JhY2tncm91bmQtY29sb3I6IHdoaXRlO2JvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZmUwO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO31cclxuLnRyYWRlZm9udDF7Y29sb3I6ICNEQzQ1Mzc7fVxyXG4udHJhZGVmb250Mntjb2xvcjogIzc3Nzc3Nzt9XHJcbi5oaXNob2xke21hcmdpbi1ib3R0b206IDFyZW07fVxyXG4uaGlzdG9yeXNob3cgLmhpbmZvc2hvd3tkaXNwbGF5OiBibG9jazt9XHJcbi5oaXN0b3J5aGlkZSAuaGluZm9zaG93e2Rpc3BsYXk6IG5vbmU7fVxyXG4uaGlzdG9yeXNob3cyIC5oaW5mb3Nob3cye2Rpc3BsYXk6IGJsb2NrO31cclxuLmhpc3RvcnloaWRlMiAuaGluZm9zaG93MntkaXNwbGF5OiBub25lO31cclxuLmhpbmZvc2hvdzIsLmhpbmZvc2hvd3tkaXNwbGF5OiBub25lO31cclxuXHJcbi8qIOe7keWumuaJi+acuuWPtyAqL1xyXG4ucGhvbmVfdGlwYm94e3Bvc2l0aW9uOiBmaXhlZDtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtsZWZ0OiAwcHg7Zm9udC1zaXplOiAwLjc1cmVtO31cclxuLmNhcmRzZWN0aW9ue2JhY2tncm91bmQtY29sb3I6ICNmZmY7Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNERURGRTA7cGFkZGluZzogMHB4IDAuN3JlbSA1cmVtO31cclxuLmNhcmRfbmFtZWJveHtoZWlnaHQ6IDIuM3JlbTtib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFREZFMDtsaW5lLWhlaWdodDogMi4zcmVtO31cclxuLmNhcmRfbmFtZWJveD5kaXZ7d2lkdGg6IDE1JTtmbG9hdDogbGVmdDt0ZXh0LWFsaWduOiBsZWZ0O31cclxuLmNhcmRfbmFtZWJveD5pbnB1dHt3aWR0aDogNjAlO2Zsb2F0OiBsZWZ0O2hlaWdodDogMi4zcmVtO2JvcmRlcjpub25lO291dGxpbmU6IG5vbmU7Zm9udC1zaXplOiAwLjc1cmVtO31cclxuLnl6bWJ0bnt3aWR0aDogNC41cmVtO2JvcmRlcjogbm9uZTtvdXRsaW5lOiBub25lO2JvcmRlci1yYWRpdXM6IDUwcHg7YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nztjb2xvcjogI2ZmZjtoZWlnaHQ6IDEuN3JlbTt9XHJcbi55em1idG4ye3dpZHRoOiA0LjVyZW07Ym9yZGVyOiBub25lO291dGxpbmU6IG5vbmU7Ym9yZGVyLXJhZGl1czogNTBweDtiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O2NvbG9yOiAjZmZmO2hlaWdodDogMS43cmVtO31cclxuLnBob25laWNvbnt3aWR0aDogMS4ycmVtO2hlaWdodDogMS4ycmVtO2Zsb2F0OiByaWdodDttYXJnaW4tdG9wOiAwLjZyZW07bWFyZ2luLWxlZnQ6IDAuMnJlbTt9XHJcbi5waG9uZXJlbWFya3tjb2xvcjogIzk5OTtmb250LXNpemU6IDAuN3JlbTt0ZXh0LWFsaWduOiBsZWZ0O2xpbmUtaGVpZ2h0OiAxLjVyZW07fVxyXG4ucGhvbmVidG57d2lkdGg6IDEwMCU7aGVpZ2h0OiAyLjJyZW07Y29sb3I6ICNmZmY7YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nztib3JkZXI6IG5vbmU7b3V0bGluZTogbm9uZTtmb250LXNpemU6IDAuOHJlbTtcclxuYm9yZGVyLXJhZGl1czogNTBweDttYXJnaW4tdG9wOiAxcmVtO31cclxuLnBob25lX3RpcHtjb2xvcjogIzk5OTt0ZXh0LWFsaWduOiBsZWZ0O21hcmdpbi10b3A6IDFyZW07fVxyXG5cclxuLnJlY2FyZHNlY3Rpb257YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtib3JkZXItdG9wOiAxcHggc29saWQgI0RFREZFMDtwYWRkaW5nOiAwcHggMC43cmVtIDVyZW07fVxyXG4ucmVjYXJkX25hbWVib3h7aGVpZ2h0OiAyLjNyZW07Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERURGRTA7bGluZS1oZWlnaHQ6IDIuM3JlbTt9XHJcbi5yZWNhcmRfbmFtZWJveD5kaXZ7d2lkdGg6IDE1JTtmbG9hdDogbGVmdDt0ZXh0LWFsaWduOiBsZWZ0O31cclxuLnJlY2FyZF9uYW1lYm94PmlucHV0e3dpZHRoOiA2MCU7ZmxvYXQ6IGxlZnQ7aGVpZ2h0OiAyLjNyZW07Ym9yZGVyOm5vbmU7b3V0bGluZTogbm9uZTt9XHJcbi5yZXl6bWJ0bnt3aWR0aDogNC41cmVtO2JvcmRlcjogbm9uZTtvdXRsaW5lOiBub25lO2JvcmRlci1yYWRpdXM6IDUwcHg7YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nztjb2xvcjogI2ZmZjtoZWlnaHQ6IDEuN3JlbTt9XHJcbi5yZXBob25laWNvbnt3aWR0aDogMS4ycmVtO2hlaWdodDogMS4ycmVtO2Zsb2F0OiByaWdodDttYXJnaW4tdG9wOiAwLjZyZW07bWFyZ2luLWxlZnQ6IDAuMnJlbTt9XHJcbi5yZXBob25lcmVtYXJre2NvbG9yOiAjOTk5O2ZvbnQtc2l6ZTogMC43cmVtO3RleHQtYWxpZ246IGxlZnQ7bGluZS1oZWlnaHQ6IDEuNXJlbTt9XHJcbi5yZXBob25lYnRue3dpZHRoOiAxMDAlO2hlaWdodDogMi4ycmVtO2NvbG9yOiAjZmZmO2JhY2tncm91bmQtY29sb3I6ICM2MTE5ODc7Ym9yZGVyOiBub25lO291dGxpbmU6IG5vbmU7Zm9udC1zaXplOiAwLjlyZW07XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7bWFyZ2luLXRvcDogMXJlbTt9Il0sInNvdXJjZVJvb3QiOiIifQ== */</style>

<style type="text/css">
  .createtop {
    border-top: 1px solid #dedfe0;
    height: 1rem;
    padding: .5rem .5rem .4rem
  }

  .createicon {
    width: .8rem;
    height: .8rem;
    margin-right: .5rem;
    margin-top: .1rem
  }

  .creatext {
    float: left
  }

  .crbox {
    background-color: #fff;
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0;
    padding: .65rem .5rem;
    line-height: 1.1rem;
    text-align: left
  }

  .crfont1 {
    color: #611987;
    text-decoration: underline
  }

  .crbox2 {
    padding: 0 .6rem;
    line-height: 2.3rem
  }

  .crbox2 > li {
    border-bottom: 1px solid #dedfe0;
    height: 2.3rem;
    text-align: left
  }

  .crbox2 > li:last-child {
    border: none
  }

  .crtitle {
    width: 23%
  }

  .crinp {
    width: 60%;
    height: 2.3rem;
    border: none;
    outline: none;
    font-size: .75rem
  }

  .crightimgbox {
    width: 17%;
    height: 2.3rem;
    float: right
  }

  .crightimg {
    width: .6rem;
    height: .9rem;
    float: right;
    margin-top: .7rem
  }

  .creremark {
    padding: .5rem;
    color: #999;
    font-size: .65rem
  }

  .cretip {
    width: .8rem;
    height: .8rem;
    float: left;
    margin-top: .1rem;
    margin-right: .5rem
  }

  .crewatch {
    float: left;
    text-align: left;
    width: 90%
  }

  .crbtn {
    width: 92%;
    height: 2.2rem;
    position: fixed;
    bottom: .3rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #611987;
    color: #fff;
    font-size: 1rem;
    line-height: 2.2rem;
    border-radius: 50px;
    border: none;
    outline: none
  }

  .upborders {
    height: 40%;
    overflow: hidden
  }

  .upbordersbox > li {
    height: 1.2rem;
    line-height: 1.2rem
  }

  .upborders_search {
    width: 100;
    height: 1.7rem;
    border: 1px solid #dedfe0;
    border-radius: 50px;
    width: 90%;
    margin: .5rem auto
  }

  .upborders_searchimg2 {
    width: 2rem;
    height: 1.7rem;
    float: left
  }

  .upborders_searchimg {
    width: .8rem;
    height: .8rem;
    margin: .5rem .8rem
  }

  .upborders_line {
    width: 1px;
    background-color: #dedfe0;
    float: left;
    height: .8rem;
    margin-top: .5rem
  }

  .upborders_searchinp {
    border-left: 1px solid #dedfe0;
    float: left;
    height: 1.7rem;
    border: none;
    margin-left: .5rem;
    outline: none
  }

  .upbordersrcoll {
    width: 100%;
    height: 68%;
    overflow-y: scroll
  }

  .upborders_hand {
    width: 100%;
    height: 1.7rem;
    border-top: 1px solid #dedfe0;
    position: absolute;
    bottom: 0;
    line-height: 1.7rem;
    background-color: #fff
  }

  .upborders_server {
    width: 100;
    height: 1.7rem;
    border-bottom: 1px solid #dedfe0;
    width: 100%;
    margin: .5rem auto
  }

  .crbox3 {
    padding: 0 .6rem;
    line-height: 2.3rem
  }

  .crbox3_in {
    border-bottom: 1px solid #dedfe0;
    height: 2.3rem;
    text-align: left
  }

  .crbox3 > li:last-child {
    border: none
  }

  .crbox3_in2 {
    border-bottom: 1px solid #dedfe0;
    height: 5.5rem;
    text-align: left
  }

  .crarea {
    width: 65%;
    height: 3.3rem;
    margin-top: .5rem;
    border: 1px solid #dedfe0;
    outline: none;
    border-radius: 4px;
    font-size: .8rem;
    padding: .5rem 3%
  }

  .upmam {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 2.4rem;
    border-top: 1px solid #dedfe0
  }

  .upmamseat {
    width: 100%;
    height: 3rem
  }

  .creremarkmam {
    padding: .5rem;
    color: #999;
    font-size: .65rem;
    height: 8rem
  }

  .upmamleft {
    text-align: left;
    text-indent: 1em
  }

  .upmamleft, .upmamright {
    width: 50%;
    height: 3rem;
    float: left
  }

  .upmamright {
    line-height: 2.4rem;
    color: #fff;
    background-color: #611987
  }

  .upmamfont1 {
    color: #999;
    margin-top: .3rem
  }

  .livefont {
    color: #611987;
    background-color: #dedfe0
  }

  .jieti_bombnei {
    width: 88%;
    margin: .5rem auto
  }

  .jieti_bombnei > li {
    width: 100%;
    height: 1rem;
    background-color: #f7f9fb;
    line-height: 1rem
  }

  .jieti_bombnei > li:nth-child(2n) {
    background-color: #eeeded
  }

  .jieti_bombnei li div {
    float: left;
    width: 50%
  }

  .masterbomb {
    padding: .5rem 1rem;
    width: 6rem;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    position: fixed;
    top: 40%;
    border-radius: 4px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 11
  }

  .bindmtnav, .mamseat {
    width: 100%;
    height: 2.2rem
  }

  .bindmtnav {
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0;
    text-align: center;
    line-height: 2.2rem;
    color: #888;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    font-size: .73rem
  }

  .bindmtnav > li {
    width: 50%;
    height: 2.2rem;
    float: left
  }

  .bindmtnav > .bindactive {
    color: #611987;
    border-bottom: 1px solid #611987
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/css/create.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvY3NzL2NyZWF0ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyw2QkFBOEIsWUFBYSx5QkFBOEIsQ0FBQyxBQUNyRixZQUFZLFlBQWMsYUFBZSxtQkFBcUIsZ0JBQW1CLENBQUMsQUFDbEYsVUFBVSxVQUFZLENBQUMsQUFDdkIsT0FBTyxzQkFBdUIsNkJBQThCLGdDQUFpQyxxQkFBd0IsQUFDcEgsbUJBQW9CLGVBQWlCLENBQUMsQUFDdkMsU0FBUyxjQUFlLHlCQUEyQixDQUFDLEFBQ3BELFFBQVEsZ0JBQWtCLGtCQUFvQixDQUFDLEFBQy9DLFdBQVcsZ0NBQWlDLGNBQWUsZUFBaUIsQ0FBQyxBQUM3RSxzQkFBc0IsV0FBYSxDQUFDLEFBQ3BDLFNBQVMsU0FBVyxDQUFDLEFBQ3JCLE9BQU8sVUFBVyxjQUFlLFlBQWEsYUFBYyxnQkFBbUIsQ0FBQyxBQUNoRixjQUFjLFVBQVcsY0FBZSxXQUFhLENBQUMsQUFDdEQsV0FBVyxZQUFjLGFBQWUsWUFBYSxnQkFBbUIsQ0FBQyxBQUN6RSxXQUFXLGNBQWdCLFdBQVksZ0JBQW1CLENBQUMsQUFDM0QsUUFBUSxZQUFjLGFBQWUsV0FBWSxpQkFBbUIsa0JBQXFCLENBQUMsQUFDMUYsVUFBVSxXQUFZLGdCQUFpQixTQUFXLENBQUMsQUFDbkQsT0FBTyxVQUFXLGNBQWUsZUFBZ0IsYUFBZSxPQUFVLFFBQVcsY0FBZSx5QkFBMEIsV0FBWSxBQUMxSSxlQUFnQixtQkFBb0IsbUJBQW9CLFlBQWEsWUFBYyxDQUFDLEFBQ3BGLFdBQVcsV0FBWSxlQUFpQixDQUFDLEFBQ3pDLGlCQUFpQixjQUFlLGtCQUFvQixDQUFDLEFBQ3JELGtCQUFrQixVQUFXLGNBQWUseUJBQTBCLG1CQUFvQixVQUFXLGlCQUFvQixDQUFDLEFBQzFILHNCQUFzQixXQUFZLGNBQWUsVUFBWSxDQUFDLEFBQzlELHFCQUFxQixZQUFjLGFBQWUsa0JBQXNCLENBQUMsQUFDekUsZ0JBQWdCLFVBQVcseUJBQTBCLFdBQVksYUFBZSxnQkFBbUIsQ0FBQyxBQUNwRyxxQkFBcUIsOEJBQStCLFdBQVksY0FBZSxZQUFhLGtCQUFvQixZQUFjLENBQUMsQUFDL0gsZ0JBQWdCLFdBQVksV0FBWSxpQkFBbUIsQ0FBQyxBQUM1RCxnQkFBZ0IsV0FBWSxjQUFlLDZCQUE4QixrQkFBbUIsU0FBWSxtQkFBb0IscUJBQXVCLENBQUMsQUFDcEosa0JBQWtCLFVBQVcsY0FBZSxnQ0FBaUMsV0FBWSxpQkFBb0IsQ0FBQyxBQUU5RyxRQUFRLGdCQUFrQixrQkFBb0IsQ0FBQyxBQUMvQyxXQUFXLGdDQUFpQyxjQUFlLGVBQWlCLENBQUMsQUFDN0Usc0JBQXNCLFdBQWEsQ0FBQyxBQUNwQyxZQUFZLGdDQUFpQyxjQUFlLGVBQWlCLENBQUMsQUFDOUUsUUFBUSxVQUFXLGNBQWUsaUJBQW1CLHlCQUEwQixhQUFjLGtCQUFtQixnQkFBa0IsZ0JBQW1CLENBQUMsQUFDdEosT0FBTyxlQUFnQixTQUFZLE9BQVUsUUFBVyxzQkFBdUIsY0FBZSw0QkFBOEIsQ0FBQyxBQUM3SCxXQUFXLFdBQVksV0FBYSxDQUFDLEFBQ3JDLGNBQWMsY0FBZ0IsV0FBWSxpQkFBbUIsV0FBYSxDQUFDLEFBQzNFLFdBQStDLGdCQUFpQixlQUFpQixDQUFDLEFBQ2xGLHVCQURXLFVBQVcsWUFBYSxVQUFZLENBQzRELEFBQTNHLFlBQW9DLG1CQUFvQixXQUFZLHdCQUEwQixDQUFhLEFBQzNHLFlBQVksV0FBWSxnQkFBbUIsQ0FBQyxBQUM1QyxVQUFVLGNBQWUsd0JBQTBCLENBQUMsQUFDcEQsZUFBZSxVQUFXLGlCQUFvQixDQUFDLEFBQy9DLGtCQUFrQixXQUFZLFlBQWEseUJBQTBCLGdCQUFrQixDQUFDLEFBQ3hGLGdDQUFrQyx3QkFBMEIsQ0FBQyxBQUM3RCxzQkFBc0IsV0FBWSxTQUFXLENBQUMsQUFFOUMsWUFBWSxtQkFBcUIsV0FBVyxnQ0FBcUMsV0FBYSxlQUFnQixRQUFTLGtCQUFtQixBQUN6SSxPQUFVLFFBQVcsY0FBZSxVQUFZLENBQUMsQUFFbEQsb0JBRFMsV0FBWSxhQUFlLENBRXdELEFBRDVGLFdBQXNDLDZCQUE4QixnQ0FBaUMsa0JBQW1CLG1CQUFvQixXQUFZLEFBQ3hKLHNCQUF3QixlQUFnQixNQUFTLE9BQVUsWUFBYSxnQkFBbUIsQ0FBQyxBQUM1RixjQUFjLFVBQVcsY0FBZSxVQUFZLENBQUMsQUFDckQsdUJBQXVCLGNBQWUsK0JBQWlDLENBQUMiLCJmaWxlIjoiY3JlYXRlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGV0b3B7Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRmZTA7aGVpZ2h0OiAxcmVtO3BhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC40cmVtO31cclxuLmNyZWF0ZWljb257d2lkdGg6IDAuOHJlbTtoZWlnaHQ6IDAuOHJlbTttYXJnaW4tcmlnaHQ6IDAuNXJlbTttYXJnaW4tdG9wOiAwLjFyZW07fVxyXG4uY3JlYXRleHR7ZmxvYXQ6IGxlZnQ7fVxyXG4uY3Jib3h7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGZlMDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGZlMDtwYWRkaW5nOiAwLjY1cmVtIDAuNXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS4xcmVtO3RleHQtYWxpZ246IGxlZnQ7fVxyXG4uY3Jmb250MXtjb2xvcjogIzYxMTk4Nzt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XHJcbi5jcmJveDJ7cGFkZGluZzogMCAwLjZyZW07bGluZS1oZWlnaHQ6IDIuM3JlbTt9XHJcbi5jcmJveDI+bGl7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRmZTA7aGVpZ2h0OiAyLjNyZW07dGV4dC1hbGlnbjogbGVmdDt9XHJcbi5jcmJveDI+bGk6bGFzdC1jaGlsZHtib3JkZXI6IG5vbmU7fVxyXG4uY3J0aXRsZXt3aWR0aDogMjMlO31cclxuLmNyaW5we3dpZHRoOiA2MCU7aGVpZ2h0OiAyLjNyZW07Ym9yZGVyOiBub25lO291dGxpbmU6IG5vbmU7Zm9udC1zaXplOiAwLjc1cmVtO31cclxuLmNyaWdodGltZ2JveHt3aWR0aDogMTclO2hlaWdodDogMi4zcmVtO2Zsb2F0OiByaWdodDt9XHJcbi5jcmlnaHRpbWd7d2lkdGg6IDAuNnJlbTtoZWlnaHQ6IDAuOXJlbTtmbG9hdDogcmlnaHQ7bWFyZ2luLXRvcDogMC43cmVtO31cclxuLmNyZXJlbWFya3twYWRkaW5nOiAwLjVyZW07Y29sb3I6ICM5OTk7Zm9udC1zaXplOiAwLjY1cmVtO31cclxuLmNyZXRpcHt3aWR0aDogMC44cmVtO2hlaWdodDogMC44cmVtO2Zsb2F0OiBsZWZ0O21hcmdpbi10b3A6IDAuMXJlbTttYXJnaW4tcmlnaHQ6IDAuNXJlbTt9XHJcbi5jcmV3YXRjaHtmbG9hdDogbGVmdDt0ZXh0LWFsaWduOiBsZWZ0O3dpZHRoOiA5MCU7fVxyXG4uY3JidG57d2lkdGg6IDkyJTtoZWlnaHQ6IDIuMnJlbTtwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiAwLjNyZW07bGVmdDogMHB4O3JpZ2h0OiAwcHg7bWFyZ2luOiAwIGF1dG87YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nztjb2xvcjogI2ZmZjtcclxuZm9udC1zaXplOiAxcmVtO2xpbmUtaGVpZ2h0OiAyLjJyZW07Ym9yZGVyLXJhZGl1czogNTBweDtib3JkZXI6IG5vbmU7b3V0bGluZTogbm9uZTt9XHJcbi51cGJvcmRlcnN7aGVpZ2h0OiA0MCU7b3ZlcmZsb3c6IGhpZGRlbjt9XHJcbi51cGJvcmRlcnNib3g+bGl7aGVpZ2h0OiAxLjJyZW07bGluZS1oZWlnaHQ6IDEuMnJlbTt9XHJcbi51cGJvcmRlcnNfc2VhcmNoe3dpZHRoOiAxMDA7aGVpZ2h0OiAxLjdyZW07Ym9yZGVyOiAxcHggc29saWQgI2RlZGZlMDtib3JkZXItcmFkaXVzOiA1MHB4O3dpZHRoOiA5MCU7bWFyZ2luOiAwLjVyZW0gYXV0bzt9XHJcbi51cGJvcmRlcnNfc2VhcmNoaW1nMnt3aWR0aDogMnJlbTtoZWlnaHQ6IDEuN3JlbTtmbG9hdDogbGVmdDt9XHJcbi51cGJvcmRlcnNfc2VhcmNoaW1ne3dpZHRoOiAwLjhyZW07aGVpZ2h0OiAwLjhyZW07bWFyZ2luOiAwLjVyZW0gMC44cmVtO31cclxuLnVwYm9yZGVyc19saW5le3dpZHRoOiAxcHg7YmFja2dyb3VuZC1jb2xvcjogI2RlZGZlMDtmbG9hdDogbGVmdDtoZWlnaHQ6IDAuOHJlbTttYXJnaW4tdG9wOiAwLjVyZW07fVxyXG4udXBib3JkZXJzX3NlYXJjaGlucHtib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWRmZTA7ZmxvYXQ6IGxlZnQ7aGVpZ2h0OiAxLjdyZW07Ym9yZGVyOiBub25lO21hcmdpbi1sZWZ0OiAwLjVyZW07b3V0bGluZTogbm9uZTt9XHJcbi51cGJvcmRlcnNyY29sbHt3aWR0aDogMTAwJTtoZWlnaHQ6IDY4JTtvdmVyZmxvdy15OiBzY3JvbGw7fVxyXG4udXBib3JkZXJzX2hhbmR7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxLjdyZW07Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRmZTA7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogMHB4O2xpbmUtaGVpZ2h0OiAxLjdyZW07YmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9XHJcbi51cGJvcmRlcnNfc2VydmVye3dpZHRoOiAxMDA7aGVpZ2h0OiAxLjdyZW07Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRmZTA7d2lkdGg6IDEwMCU7bWFyZ2luOiAwLjVyZW0gYXV0bzt9XHJcblxyXG4uY3Jib3gze3BhZGRpbmc6IDAgMC42cmVtO2xpbmUtaGVpZ2h0OiAyLjNyZW07fVxyXG4uY3Jib3gzX2lue2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO2hlaWdodDogMi4zcmVtO3RleHQtYWxpZ246IGxlZnQ7fVxyXG4uY3Jib3gzPmxpOmxhc3QtY2hpbGR7Ym9yZGVyOiBub25lO31cclxuLmNyYm94M19pbjJ7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRmZTA7aGVpZ2h0OiA1LjVyZW07dGV4dC1hbGlnbjogbGVmdDt9XHJcbi5jcmFyZWF7d2lkdGg6IDY1JTtoZWlnaHQ6IDMuM3JlbTttYXJnaW4tdG9wOiAwLjVyZW07Ym9yZGVyOiAxcHggc29saWQgI2RlZGZlMDtvdXRsaW5lOiBub25lO2JvcmRlci1yYWRpdXM6IDRweDtmb250LXNpemU6IDAuOHJlbTtwYWRkaW5nOiAwLjVyZW0gMyU7fVxyXG4udXBtYW17cG9zaXRpb246IGZpeGVkO2JvdHRvbTogMHB4O2xlZnQ6IDBweDtyaWdodDogMHB4O2JhY2tncm91bmQtY29sb3I6ICNmZmY7aGVpZ2h0OiAyLjRyZW07Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRmZTA7fVxyXG4udXBtYW1zZWF0e3dpZHRoOiAxMDAlO2hlaWdodDogM3JlbTt9XHJcbi5jcmVyZW1hcmttYW17cGFkZGluZzogMC41cmVtO2NvbG9yOiAjOTk5O2ZvbnQtc2l6ZTogMC42NXJlbTtoZWlnaHQ6IDhyZW07fVxyXG4udXBtYW1sZWZ0e3dpZHRoOiA1MCU7aGVpZ2h0OiAzcmVtO2Zsb2F0OiBsZWZ0O3RleHQtYWxpZ246IGxlZnQ7dGV4dC1pbmRlbnQ6IDFlbTt9XHJcbi51cG1hbXJpZ2h0e3dpZHRoOiA1MCU7aGVpZ2h0OiAzcmVtO2xpbmUtaGVpZ2h0OiAyLjRyZW07Y29sb3I6ICNmZmY7YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4NztmbG9hdDogbGVmdDt9XHJcbi51cG1hbWZvbnQxe2NvbG9yOiAjOTk5O21hcmdpbi10b3A6IDAuM3JlbTt9XHJcbi5saXZlZm9udHtjb2xvcjogIzYxMTk4NztiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZmUwO31cclxuLmppZXRpX2JvbWJuZWl7d2lkdGg6IDg4JTttYXJnaW46IDAuNXJlbSBhdXRvO31cclxuLmppZXRpX2JvbWJuZWk+bGl7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxcmVtO2JhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmI7bGluZS1oZWlnaHQ6IDFyZW07fVxyXG4uamlldGlfYm9tYm5laT5saTpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2VlZWRlZDt9XHJcbi5qaWV0aV9ib21ibmVpIGxpIGRpdntmbG9hdDogbGVmdDt3aWR0aDogNTAlO31cclxuXHJcbi5tYXN0ZXJib21ie3BhZGRpbmc6IDAuNXJlbSAxcmVtO3dpZHRoOjZyZW07YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO2NvbG9yOiB3aGl0ZTtwb3NpdGlvbjogZml4ZWQ7dG9wOiA0MCU7Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGxlZnQ6IDBweDtyaWdodDogMHB4O21hcmdpbjogMCBhdXRvO3otaW5kZXg6IDExO31cclxuLm1hbXNlYXR7d2lkdGg6IDEwMCU7aGVpZ2h0OiAyLjJyZW07fVxyXG4uYmluZG10bmF2e3dpZHRoOiAxMDAlO2hlaWdodDogMi4ycmVtO2JvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZmUwO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO3RleHQtYWxpZ246IGNlbnRlcjtsaW5lLWhlaWdodDogMi4ycmVtO2NvbG9yOiAjODg4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtwb3NpdGlvbjogZml4ZWQ7dG9wOiAwcHg7bGVmdDogMHB4O3otaW5kZXg6IDEwMDtmb250LXNpemU6IDAuNzNyZW07fVxyXG4uYmluZG10bmF2Pmxpe3dpZHRoOiA1MCU7aGVpZ2h0OiAyLjJyZW07ZmxvYXQ6IGxlZnQ7fVxyXG4uYmluZG10bmF2Pi5iaW5kYWN0aXZle2NvbG9yOiAjNjExOTg3O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjExOTg3O30iXSwic291cmNlUm9vdCI6IiJ9 */</style>

<style type="text/css">
  .fwcustom{background-color:#fff;width:14rem;position:absolute;top:30%;left:0;right:0;margin:0 auto;border-radius:4px}.fwcustom_inp{width:80%;height:2rem;font-size:.7rem;border:none;outline:none}.fwcustom_btn{border-top:1px solid #dedfe0;margin-top:1rem}.fwcustom_btn>button{width:49%;height:1.7rem;border:none;outline:none;background-color:#fff}.fwcustom_btn>button:nth-child(2){border-left:1px solid #dedfe0;color:#611987}.fselectul{width:100%;background-color:#fff;position:absolute;top:0;right:0;left:0;z-index:3}.fselectul>li{height:1.8rem;text-align:left;padding-left:30%;line-height:1.8rem}.fselectulred{width:.4rem;height:.4rem;float:left;margin-top:.6rem;margin-right:.5rem}.fmt4_select_icon{width:.7rem;height:.7rem;margin-left:.7rem;float:left;margin-top:.45rem}.fselectulbox{height:100%;z-index:1}.fselectulbox,.sfixed{width:100%;position:absolute}.sfixed{background-color:#fff;bottom:0;left:0;right:0;z-index:3}.sfixedtop{border-bottom:1px solid #dedfe0;height:2.2rem;line-height:2.2rem;padding:0 .5rem;color:#999}.sfixedtop_box{margin-left:20%}.sfixedtop_box>div{float:left}.sfixedtop_weui{margin:.5rem .5rem 0}.sfixedlist>li{border-bottom:1px solid #dedfe0;height:2rem;line-height:2rem}.right_sfixedlist{height:12.3rem;overflow-y:scroll;overflow-x:hidden}.sfixedbox{width:100%;height:80%;top:0}.fobomb,.sfixedbox{position:absolute;left:0;right:0}.fobomb{width:70%;background-color:#fff;top:30%;margin:0 auto;border-radius:4px}.fobombin{width:100%;height:100%;position:relative}.borderbombtitle,.fobombtitle{height:2rem;line-height:2rem;border-bottom:1px solid #dedfe0}.borderbombtitle{font-size:.8rem}.fobombnei{text-align:left;line-height:1.3rem;padding:.5rem .8rem}.border_bombnei{text-align:left}.border_bombnei,.border_bombnei2{line-height:1rem;padding:.5rem .8rem;color:#999}.border_bombnei2{text-align:center;font-size:.9rem}.border_bombnei2_img{width:3rem;height:2.3rem;margin-bottom:.5rem}.fobomb_remark{height:1.5rem;padding:0 .8rem .5rem}.fobomb_remark>img{width:.6rem;height:.6rem;padding:.1rem;border:1px solid #611987;border-radius:50%;float:left;margin-right:.2rem}.fobomb_remark>div{float:left}.diractive,.fobomb_remarkf{color:#611987}.dirightactive{color:#611987;background-color:#dedfe0}.fobomb_remarkf2,.fobomb_remarkf3{color:#611987;float:left}.fobombbtn{background-color:#611987;color:#fff;border:none;border-radius:50px;width:90%;height:1.8rem;margin-bottom:.7rem;font-size:.75rem}.fobomb2{width:50%;background-color:#fff;position:absolute;top:35%;left:0;right:0;margin:0 auto;border-radius:4px}.fobomb2_icon{width:1.4rem;height:1.4rem;margin:.8rem auto .5rem}.fobomb2_text{font-size:.8rem}.fobomb2_text2{color:#999;margin-bottom:1.2rem}.fobomb_con1,.fobomb_con2{width:3.5rem;height:1.5rem;border-radius:4px;margin-top:.3rem;margin-bottom:.8rem}.fobomb_con1{color:#fff;background-color:#611987;border:1px solid #611987;margin-right:.7rem}.fobomb_con2{border:1px solid #611987;background-color:#fff}.list_person_country{width:.7rem;height:.7rem;position:absolute;left:1.9rem;bottom:.1rem;border-radius:50%;z-index:3}.folbotbtn1,.folbotbtn2,.folbotbtn3{width:3.8rem;height:1.6rem;outline:none;border-radius:50px;margin-left:.5rem}.folbotbtn1{border:1px solid #611987;color:#611987;background-color:#fff}.folbotbtn2,.folbotbtn3{color:#fff;background-color:#611987;border:1px solid #611987}.folbotbtn_menu{padding:.3rem .5rem;border-top:1px solid #dedfe0;text-align:right}.follbox{padding:0 .5rem}.follboxmt4{border-bottom:1px solid #dedfe0;width:100%;height:1.7rem;padding:.1rem 0;line-height:1.7rem;display:block}.follstatu{width:.4rem;height:.4rem;margin-right:.4rem;margin-top:.6rem;float:left}.frightimg{width:.6rem;height:.9rem;float:right;margin-top:.4rem}.follshi{text-decoration:underline;color:#999}.follmo{font-size:.7rem}.follbtn{width:4rem;height:90%;float:right;background-color:#611987;color:#fff;border:none;outline:none;border-radius:50px;margin-top:.1rem}.fmenutop{height:1.5rem;padding:.3rem .5rem;line-height:1.5rem;border-bottom:1px solid #dedfe0;position:relative}.fmenuhead{width:1.5rem;height:1.5rem;margin-right:.5rem;float:left;border:1px solid #eee;border-radius:50%}.fmenu_name{float:left;width:4.5rem;text-align:left}.fmenuicon{width:4rem;height:.8rem;margin-left:.5rem;float:left;margin-top:.4rem}.fmenubtn1{color:#017eff}.fnamebox{padding:0 .5rem;margin-top:.3rem}.fnamebox>li{width:100%;height:1.7rem;line-height:1.7rem;font-size:.65rem}.folllock{width:.5rem;height:.9rem;margin-left:.5rem;float:right;margin-top:.2rem}.foll_font1{color:#999}.foll_font2{color:#666}.fsele{width:100%;height:100%;background-color:rgba(0,0,0,.5);position:fixed;left:0;right:0;top:0;bottom:0;z-index:11}.follswitchbox{width:10rem;height:100%;margin:0 auto;color:#999}.follsele{width:9rem;height:100%;text-align:right}.follswitch{margin:.7rem .5rem 0}.fobanner{position:fixed;background-color:#f7f7f9;top:0;left:0;right:0;z-index:8}.fobanner_seat{width:100%;height:4.4rem}.foltian{color:#611987;font-size:.75rem}.creremark{padding:.5rem .5rem 2rem;height:3.5rem;color:#999;font-size:.65rem}.cretip{margin-top:.1rem}.cretip,.cretip2{width:.8rem;height:.8rem;float:left;margin-right:.5rem}.crewatch{float:left;text-align:left;width:90%}.ftoast{width:6rem;line-height:1.2rem;background-color:rgba(0,0,0,.8);border-radius:6px;position:fixed;top:40%;left:30%;margin:0 auto;color:#fff;padding:.5rem}.masert_bindiconfol{width:.4rem;height:.4rem;border-radius:50%;background-color:#fc0f0f;float:left;margin-top:.6rem;margin-right:.3rem}
/*# sourceURL=D:/webroot/h5.srefx.com/src/assets/css/follow.css */
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvY3NzL2ZvbGxvdy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsVUFBVSxzQkFBdUIsWUFBYSxrQkFBbUIsUUFBUyxPQUFVLFFBQVcsY0FBZSxpQkFBbUIsQ0FBQyxBQUNsSSxjQUFjLFVBQVcsWUFBYSxnQkFBa0IsWUFBYSxZQUFjLENBQUMsQUFDcEYsY0FBYyw2QkFBOEIsZUFBaUIsQ0FBQyxBQUM5RCxxQkFBcUIsVUFBVyxjQUFlLFlBQWEsYUFBYyxxQkFBdUIsQ0FBQyxBQUNsRyxrQ0FBa0MsOEJBQStCLGFBQWUsQ0FBQyxBQUVqRixXQUFXLFdBQVksc0JBQXVCLGtCQUFtQixNQUFTLFFBQVcsT0FBVSxTQUFXLENBQUMsQUFDM0csY0FBYyxjQUFlLGdCQUFpQixpQkFBa0Isa0JBQW9CLENBQUMsQUFDckYsY0FBYyxZQUFjLGFBQWUsV0FBWSxpQkFBbUIsa0JBQXFCLENBQUMsQUFDaEcsa0JBQWtCLFlBQWMsYUFBZSxrQkFBb0IsV0FBWSxpQkFBb0IsQ0FBQyxBQUNwRyxjQUEwQixZQUFhLEFBQW1CLFNBQVcsQ0FBQyxBQUV0RSxzQkFGYyxXQUFZLEFBQWEsaUJBQW1CLENBRWlELEFBQTNHLFFBQVEsc0JBQXVCLEFBQW1CLFNBQVksT0FBVSxRQUFXLEFBQVksU0FBVyxDQUFDLEFBQzNHLFdBQVcsZ0NBQWlDLGNBQWUsbUJBQW9CLGdCQUFrQixVQUFZLENBQUMsQUFDOUcsZUFBZSxlQUFpQixDQUFDLEFBQ2pDLG1CQUFtQixVQUFZLENBQUMsQUFDaEMsZ0JBQWdCLG9CQUEwQixDQUFDLEFBQzNDLGVBQWUsZ0NBQWlDLFlBQWEsZ0JBQWtCLENBQUMsQUFDaEYsa0JBQWtCLGVBQWdCLGtCQUFtQixpQkFBbUIsQ0FBQyxBQUN6RSxXQUFXLFdBQVksV0FBWSxBQUFtQixLQUFTLENBQXNCLEFBQ3JGLG1CQURtQyxrQkFBbUIsQUFBUyxPQUFVLE9BQVcsQ0FDdUMsQUFBM0gsUUFBUSxV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LGdCQUFpQixDQUFDLEFBQ3JELFlBQVksb0JBQTBCLENBQUMsQUFDdkMsVUFBVSxlQUFnQix5QkFBMEIsTUFBUyxPQUFVLFFBQVcsU0FBVyxDQUFDLEFBQzlGLGVBQWUsV0FBWSxhQUFlLENBQUMsQUFDM0MsU0FBUyxjQUFlLGdCQUFtQixDQUFDLEFBQzVDLFdBQVcseUJBQTRCLGNBQWMsV0FBWSxnQkFBbUIsQ0FBQyxBQUNyRixRQUFpRCxnQkFBbUIsQ0FBc0IsQUFDMUYsaUJBRFEsWUFBYyxhQUFlLFdBQVksQUFBbUIsa0JBQXFCLENBQ2pCLEFBQ3hFLFVBQVUsV0FBWSxnQkFBaUIsU0FBVyxDQUFDLEFBQ25ELFFBQVEsV0FBVyxtQkFBb0IsZ0NBQXFDLGtCQUFtQixlQUFnQixBQUMvRyxRQUFTLFNBQVUsY0FBZSxXQUFZLGFBQWdCLENBQUMsQUFDL0Qsb0JBQW9CLFlBQWMsYUFBZSxrQkFBbUIseUJBQTBCLFdBQVksaUJBQW1CLGtCQUFxQixDQUFDIiwiZmlsZSI6ImZvbGxvdy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDoh6rlrprkuYnlvLnmoYYgKi9cclxuLmZ3Y3VzdG9te2JhY2tncm91bmQtY29sb3I6ICNmZmY7d2lkdGg6IDE0cmVtO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDMwJTtsZWZ0OiAwcHg7cmlnaHQ6IDBweDttYXJnaW46IDAgYXV0bztib3JkZXItcmFkaXVzOiA0cHg7fVxyXG4uZndjdXN0b21faW5we3dpZHRoOiA4MCU7aGVpZ2h0OiAycmVtO2ZvbnQtc2l6ZTogMC43cmVtO2JvcmRlcjogbm9uZTtvdXRsaW5lOiBub25lO31cclxuLmZ3Y3VzdG9tX2J0bntib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGZlMDttYXJnaW4tdG9wOiAxcmVtO31cclxuLmZ3Y3VzdG9tX2J0bj5idXR0b257d2lkdGg6IDQ5JTtoZWlnaHQ6IDEuN3JlbTtib3JkZXI6IG5vbmU7b3V0bGluZTogbm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cclxuLmZ3Y3VzdG9tX2J0bj5idXR0b246bnRoLWNoaWxkKDIpe2JvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZGZlMDtjb2xvcjogIzYxMTk4Nzt9XHJcbi8qICDpgInmi6ltdDQgKi9cclxuLmZzZWxlY3R1bHt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDBweDtyaWdodDogMHB4O2xlZnQ6IDBweDt6LWluZGV4OiAzO31cclxuLmZzZWxlY3R1bD5saXtoZWlnaHQ6IDEuOHJlbTt0ZXh0LWFsaWduOiBsZWZ0O3BhZGRpbmctbGVmdDogMzAlO2xpbmUtaGVpZ2h0OiAxLjhyZW07fVxyXG4uZnNlbGVjdHVscmVke3dpZHRoOiAwLjRyZW07aGVpZ2h0OiAwLjRyZW07ZmxvYXQ6IGxlZnQ7bWFyZ2luLXRvcDogMC42cmVtO21hcmdpbi1yaWdodDogMC41cmVtO31cclxuLmZtdDRfc2VsZWN0X2ljb257d2lkdGg6IDAuN3JlbTtoZWlnaHQ6IDAuN3JlbTttYXJnaW4tbGVmdDogMC43cmVtO2Zsb2F0OiBsZWZ0O21hcmdpbi10b3A6IDAuNDVyZW07fVxyXG4uZnNlbGVjdHVsYm94e3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogYWJzb2x1dGU7ei1pbmRleDogMTt9XHJcblxyXG4uc2ZpeGVke2JhY2tncm91bmQtY29sb3I6ICNmZmY7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogMHB4O2xlZnQ6IDBweDtyaWdodDogMHB4O3dpZHRoOiAxMDAlO3otaW5kZXg6IDM7fVxyXG4uc2ZpeGVkdG9we2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO2hlaWdodDogMi4ycmVtO2xpbmUtaGVpZ2h0OiAyLjJyZW07cGFkZGluZzogMCAwLjVyZW07Y29sb3I6ICM5OTk7fVxyXG4uc2ZpeGVkdG9wX2JveHttYXJnaW4tbGVmdDogMjAlO31cclxuLnNmaXhlZHRvcF9ib3g+ZGl2e2Zsb2F0OiBsZWZ0O31cclxuLnNmaXhlZHRvcF93ZXVpe21hcmdpbjogMC41cmVtIDAuNXJlbSAwcHg7fVxyXG4uc2ZpeGVkbGlzdD5saXtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGZlMDtoZWlnaHQ6IDJyZW07bGluZS1oZWlnaHQ6IDJyZW07fVxyXG4ucmlnaHRfc2ZpeGVkbGlzdHtoZWlnaHQ6IDEyLjNyZW07b3ZlcmZsb3cteTogc2Nyb2xsO292ZXJmbG93LXg6IGhpZGRlbjt9XHJcbi5zZml4ZWRib3h7d2lkdGg6IDEwMCU7aGVpZ2h0OiA4MCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogMHB4O2xlZnQ6IDBweDtyaWdodDogMHB4O31cclxuLmZvYm9tYnt3aWR0aDogNzAlO2JhY2tncm91bmQtY29sb3I6IHdoaXRlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDozMCU7bGVmdDowcHg7cmlnaHQ6MHB4O21hcmdpbjogMCBhdXRvO2JvcmRlci1yYWRpdXM6IDRweDt9XHJcbi5mb2JvbWJpbnt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmZvYm9tYnRpdGxle2hlaWdodDogMnJlbTtsaW5lLWhlaWdodDogMnJlbTtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGZlMDt9XHJcbi5ib3JkZXJib21idGl0bGV7aGVpZ2h0OiAycmVtO2xpbmUtaGVpZ2h0OiAycmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO2ZvbnQtc2l6ZTogMC44cmVtO31cclxuLmZvYm9tYm5laXt0ZXh0LWFsaWduOiBsZWZ0O2xpbmUtaGVpZ2h0OiAxLjNyZW07cGFkZGluZzogMC41cmVtIDAuOHJlbTt9XHJcbi5ib3JkZXJfYm9tYm5laXt0ZXh0LWFsaWduOiBsZWZ0O2xpbmUtaGVpZ2h0OiAxcmVtO3BhZGRpbmc6IDAuNXJlbSAwLjhyZW07Y29sb3I6ICM5OTk7fVxyXG4uYm9yZGVyX2JvbWJuZWkye3RleHQtYWxpZ246IGNlbnRlcjtsaW5lLWhlaWdodDogMXJlbTtwYWRkaW5nOiAwLjVyZW0gMC44cmVtO2NvbG9yOiAjOTk5O2ZvbnQtc2l6ZTogMC45cmVtO31cclxuLmJvcmRlcl9ib21ibmVpMl9pbWd7d2lkdGg6IDNyZW07aGVpZ2h0OiAyLjNyZW07bWFyZ2luLWJvdHRvbTogMC41cmVtO31cclxuLmZvYm9tYl9yZW1hcmt7aGVpZ2h0OiAxLjVyZW07cGFkZGluZzogMHB4IDAuOHJlbSAwLjVyZW07fVxyXG4uZm9ib21iX3JlbWFyaz5pbWd7d2lkdGg6IDAuNnJlbTtoZWlnaHQ6IDAuNnJlbTtwYWRkaW5nOiAwLjFyZW07Ym9yZGVyOiAxcHggc29saWQgIzYxMTk4Nztib3JkZXItcmFkaXVzOiA1MCU7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXJpZ2h0OiAwLjJyZW07fVxyXG4uZm9ib21iX3JlbWFyaz5kaXZ7ZmxvYXQ6IGxlZnQ7fVxyXG4uZm9ib21iX3JlbWFya2Z7Y29sb3I6ICM2MTE5ODc7fVxyXG4uZGlyYWN0aXZle2NvbG9yOiAjNjExOTg3O31cclxuLmRpcmlnaHRhY3RpdmV7Y29sb3I6ICM2MTE5ODc7YmFja2dyb3VuZC1jb2xvcjogI2RlZGZlMDt9XHJcbi5mb2JvbWJfcmVtYXJrZjMsLmZvYm9tYl9yZW1hcmtmMntjb2xvcjogIzYxMTk4NztmbG9hdDogbGVmdDt9XHJcbi5mb2JvbWJidG57YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nztjb2xvcjogI2ZmZjtib3JkZXI6IG5vbmU7Ym9yZGVyLXJhZGl1czogNTBweDt3aWR0aDogOTAlO2hlaWdodDogMS44cmVtO21hcmdpbi1ib3R0b206IDAuN3JlbTtmb250LXNpemU6IDAuNzVyZW07fVxyXG4uZm9ib21iMnt3aWR0aDogNTAlO2JhY2tncm91bmQtY29sb3I6IHdoaXRlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDozNSU7bGVmdDowcHg7cmlnaHQ6MHB4O21hcmdpbjogMCBhdXRvO2JvcmRlci1yYWRpdXM6IDRweDt9XHJcbi5mb2JvbWIyX2ljb257d2lkdGg6IDEuNHJlbTtoZWlnaHQ6IDEuNHJlbTttYXJnaW46IDAuOHJlbSBhdXRvIDAuNXJlbTt9XHJcbi5mb2JvbWIyX3RleHR7Zm9udC1zaXplOiAwLjhyZW07fVxyXG4uZm9ib21iMl90ZXh0Mntjb2xvcjogIzk5OTttYXJnaW4tYm90dG9tOiAxLjJyZW07fVxyXG4uZm9ib21iX2NvbjEsLmZvYm9tYl9jb24ye3dpZHRoOiAzLjVyZW07aGVpZ2h0OiAxLjVyZW07Ym9yZGVyLXJhZGl1czogNHB4O21hcmdpbi10b3A6IDAuM3JlbTttYXJnaW4tYm90dG9tOiAwLjhyZW07fVxyXG4uZm9ib21iX2NvbjF7Y29sb3I6ICNmZmY7YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nztib3JkZXI6IDFweCBzb2xpZCAjNjExOTg3O21hcmdpbi1yaWdodDogMC43cmVtO31cclxuLmZvYm9tYl9jb24ye2JvcmRlcjogMXB4IHNvbGlkICM2MTE5ODc7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9XHJcbi5saXN0X3BlcnNvbl9jb3VudHJ5e3dpZHRoOiAwLjdyZW07aGVpZ2h0OiAwLjdyZW07cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDEuOXJlbTtib3R0b206IDAuMXJlbTtib3JkZXItcmFkaXVzOiA1MCU7ei1pbmRleDogMzt9XHJcblxyXG4uZm9sYm90YnRuMywuZm9sYm90YnRuMSwuZm9sYm90YnRuMnt3aWR0aDogMy44cmVtO2hlaWdodDogMS42cmVtO291dGxpbmU6IG5vbmU7Ym9yZGVyLXJhZGl1czogNTBweDttYXJnaW4tbGVmdDogMC41cmVtO31cclxuLmZvbGJvdGJ0bjF7Ym9yZGVyOiAxcHggc29saWQgIzYxMTk4Nztjb2xvcjogIzYxMTk4NztiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cclxuLmZvbGJvdGJ0bjJ7Y29sb3I6ICNmZmY7YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nztib3JkZXI6IDFweCBzb2xpZCAjNjExOTg3O31cclxuLmZvbGJvdGJ0bjN7Y29sb3I6ICNmZmY7YmFja2dyb3VuZC1jb2xvcjogIzYxMTk4Nztib3JkZXI6IDFweCBzb2xpZCAjNjExOTg3O31cclxuLmZvbGJvdGJ0bl9tZW51e3BhZGRpbmc6IDAuM3JlbSAwLjVyZW07Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRmZTA7dGV4dC1hbGlnbjogcmlnaHQ7fVxyXG4uZm9sbGJveHtwYWRkaW5nOiAwcHggMC41cmVtO31cclxuLmZvbGxib3htdDR7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRmZTA7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxLjdyZW07cGFkZGluZzogMC4xcmVtIDBweDtsaW5lLWhlaWdodDogMS43cmVtO2Rpc3BsYXk6IGJsb2NrO31cclxuLmZvbGxzdGF0dXt3aWR0aDogMC40cmVtO2hlaWdodDogMC40cmVtO21hcmdpbi1yaWdodDogMC40cmVtO21hcmdpbi10b3A6IDAuNnJlbTtmbG9hdDogbGVmdDt9XHJcbi5mcmlnaHRpbWd7d2lkdGg6IDAuNnJlbTtoZWlnaHQ6IDAuOXJlbTtmbG9hdDogcmlnaHQ7bWFyZ2luLXRvcDogMC40cmVtO31cclxuLmZvbGxzaGl7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Y29sb3I6ICM5OTk7fVxyXG4uZm9sbG1ve2ZvbnQtc2l6ZTogMC43cmVtO31cclxuLmZvbGxidG57d2lkdGg6IDRyZW07aGVpZ2h0OiA5MCU7ZmxvYXQ6IHJpZ2h0O2JhY2tncm91bmQtY29sb3I6ICM2MTE5ODc7Y29sb3I6ICNmZmY7Ym9yZGVyOiBub25lO291dGxpbmU6IG5vbmU7Ym9yZGVyLXJhZGl1czogNTBweDttYXJnaW4tdG9wOiAwLjFyZW07fVxyXG4uZm1lbnV0b3B7aGVpZ2h0OiAxLjVyZW07cGFkZGluZzogMC4zcmVtIDAuNXJlbTtsaW5lLWhlaWdodDogMS41cmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZmUwO3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5mbWVudWhlYWR7d2lkdGg6IDEuNXJlbTtoZWlnaHQ6IDEuNXJlbTttYXJnaW4tcmlnaHQ6IDAuNXJlbTtmbG9hdDogbGVmdDtib3JkZXI6IDFweCBzb2xpZCAjZWVlO2JvcmRlci1yYWRpdXM6IDUwJTt9XHJcbi5mbWVudV9uYW1le2Zsb2F0OiBsZWZ0O3dpZHRoOiA0LjVyZW07dGV4dC1hbGlnbjogbGVmdDt9XHJcbi5mbWVudWljb257d2lkdGg6IDRyZW07aGVpZ2h0OiAwLjhyZW07bWFyZ2luLWxlZnQ6IDAuNXJlbTtmbG9hdDogbGVmdDttYXJnaW4tdG9wOiAwLjRyZW07fVxyXG4uZm1lbnVidG4xe2NvbG9yOiAjMDE3ZWZmO31cclxuLmZuYW1lYm94e3BhZGRpbmc6IDBweCAwLjVyZW07bWFyZ2luLXRvcDogMC4zcmVtO31cclxuLmZuYW1lYm94Pmxpe3dpZHRoOjEwMCU7aGVpZ2h0OiAxLjdyZW07bGluZS1oZWlnaHQ6IDEuN3JlbTtmb250LXNpemU6IDAuNjVyZW07fVxyXG4uZm9sbGxvY2t7d2lkdGg6IDAuNXJlbTtoZWlnaHQ6IDAuOXJlbTttYXJnaW4tbGVmdDogMC41cmVtO2Zsb2F0OiByaWdodDttYXJnaW4tdG9wOiAwLjJyZW07fVxyXG4uZm9sbF9mb250MXtjb2xvcjogIzk5OTt9XHJcbi5mb2xsX2ZvbnQye2NvbG9yOiAjNjY2O31cclxuLmZzZWxle3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7cG9zaXRpb246IGZpeGVkO2xlZnQ6IDBweDtyaWdodDogMHB4O3RvcDogMHB4O2JvdHRvbTogMHB4O1xyXG56LWluZGV4OiAxMTt9XHJcbi5mb2xsc3dpdGNoYm94e3dpZHRoOiAxMHJlbTtoZWlnaHQ6IDEwMCU7bWFyZ2luOiAwcHggYXV0bztjb2xvcjogIzk5OTt9XHJcbi5mb2xsc2VsZXt3aWR0aDogOXJlbTtoZWlnaHQ6IDEwMCU7dGV4dC1hbGlnbjpyaWdodDt9XHJcbi5mb2xsc3dpdGNoe21hcmdpbjogMC43cmVtIDAuNXJlbSAwcHg7fVxyXG4uZm9iYW5uZXJ7cG9zaXRpb246IGZpeGVkO2JhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjk7dG9wOiAwcHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7ei1pbmRleDogODt9XHJcbi5mb2Jhbm5lcl9zZWF0e3dpZHRoOiAxMDAlO2hlaWdodDogNC40cmVtO31cclxuLmZvbHRpYW57Y29sb3I6ICM2MTE5ODc7Zm9udC1zaXplOiAwLjc1cmVtO31cclxuLmNyZXJlbWFya3twYWRkaW5nOiAwLjVyZW0gMC41cmVtIDJyZW07aGVpZ2h0OjMuNXJlbTtjb2xvcjogIzk5OTtmb250LXNpemU6IDAuNjVyZW07fVxyXG4uY3JldGlwe3dpZHRoOiAwLjhyZW07aGVpZ2h0OiAwLjhyZW07ZmxvYXQ6IGxlZnQ7bWFyZ2luLXRvcDogMC4xcmVtO21hcmdpbi1yaWdodDogMC41cmVtO31cclxuLmNyZXRpcDJ7d2lkdGg6IDAuOHJlbTtoZWlnaHQ6IDAuOHJlbTtmbG9hdDogbGVmdDttYXJnaW4tcmlnaHQ6IDAuNXJlbTt9XHJcbi5jcmV3YXRjaHtmbG9hdDogbGVmdDt0ZXh0LWFsaWduOiBsZWZ0O3dpZHRoOiA5MCU7fVxyXG4uZnRvYXN0e3dpZHRoOjZyZW07bGluZS1oZWlnaHQ6IDEuMnJlbTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7Ym9yZGVyLXJhZGl1czogNnB4O3Bvc2l0aW9uOiBmaXhlZDtcclxudG9wOiA0MCU7bGVmdDogMzAlO21hcmdpbjogMCBhdXRvO2NvbG9yOiAjZmZmO3BhZGRpbmc6IDAuNXJlbTt9XHJcbi5tYXNlcnRfYmluZGljb25mb2x7d2lkdGg6IDAuNHJlbTtoZWlnaHQ6IDAuNHJlbTtib3JkZXItcmFkaXVzOiA1MCU7YmFja2dyb3VuZC1jb2xvcjogI0ZDMEYwRjtmbG9hdDogbGVmdDttYXJnaW4tdG9wOiAwLjZyZW07bWFyZ2luLXJpZ2h0OiAwLjNyZW07fSJdLCJzb3VyY2VSb290IjoiIn0= */</style>
