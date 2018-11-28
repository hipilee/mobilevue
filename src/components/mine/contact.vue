<template>
  <div>
    <ul class="contactbox">
      <li>
        <div class="questionbox">
          <div class="left">客服QQ</div>
          <div class="right">1651350099</div>
        </div>
      </li>
      <li>
        <div class="questionbox">
          <div class="left">客服微信</div>
          <div class="right">mxplanner</div>
        </div>
      </li>
      <li>
        <div class="questionbox">
          <div class="left">客服邮箱</div>
          <div class="right">service@aotfx.com</div>
        </div>
      </li>
    </ul>
  </div>


</template>

<script>
  export default {
    name: "contact"
  }
</script>

<style scoped>

</style>

<style scoped>
  * {
  margin: 0;
  padding: 0;
}</style>

<style scoped>
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

<style scoped>
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

<style scoped>
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

<style scoped>
  .loginbomb {
    padding: .5rem 1rem;
    width: 4rem;
    color: #fff;
    top: 40%;
    border-radius: 4px;
    margin: 0 auto;
    z-index: 11
  }

  .loginbomb, .minelogin {
    background-color: rgba(0, 0, 0, .5);
    position: fixed;
    left: 0;
    right: 0
  }

  .minelogin {
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 102
  }

  .minelogin_out {
    width: 100%;
    height: 100%;
    position: relative
  }

  .minelogin_btn {
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: .9rem;
    color: #fff;
    background-color: #611987;
    border: none;
    outline: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0
  }

  .mybanner {
    width: 100%;
    height: 7.5rem;
    color: #fff;
    background: url(data:image/png;base64,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) no-repeat 50%;
    background-size: cover
  }

  .bannertop {
    padding: .6rem .7rem .1rem;
    height: 1.5rem;
    margin-bottom: .7rem
  }

  .bantop_left {
    float: left;
    font-size: .7rem;
    line-height: 1.5rem
  }

  .bantop_left > img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
    float: left;
    border-radius: 50%
  }

  .bantop_right {
    float: right;
    line-height: 1.5rem;
    color: #fff
  }

  .bantop_right > img {
    width: .7rem;
    height: .8rem;
    margin-left: .3rem;
    float: right;
    margin-top: .3rem
  }

  .money {
    margin: .2rem 0;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700
  }

  .mineline {
    background-color: #fff;
    width: 2rem;
    height: 3px;
    border-radius: 50px;
    margin: .5rem auto
  }

  .minemoney {
    width: 100%;
    height: 2.5rem
  }

  .minemoney > li {
    width: 33.3%;
    line-height: 1rem;
    padding-top: .3rem;
    float: left
  }

  .minefont1 {
    font-size: .65rem
  }

  .account_pay {
    height: 2.3rem;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eae9e9
  }

  .account_pay_list {
    width: 98%;
    padding: 0 1%;
    float: left;
    border-right: 1px solid #eae9e9;
    box-sizing: border-box
  }

  .account_pay_icon {
    width: 1rem;
    height: 1rem;
    float: left;
    margin-top: .6rem;
    margin-left: .5rem;
    margin-right: 2%
  }

  .account_pay_t {
    font-size: .8rem;
    color: #611987;
    line-height: 2.3rem;
    height: 2.3rem;
    float: left
  }

  .mineorder {
    padding: 0 .7rem;
    background-color: #fff;
    margin-top: .4rem;
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0
  }

  .mineorder a:last-child li {
    border: none
  }

  .mineorder li {
    height: 2rem;
    border-bottom: 1px solid #dedfe0
  }

  .mineorder .noborder {
    border: none
  }

  .orderleft {
    float: left;
    line-height: 2rem
  }

  .orderleft > img {
    width: .85rem;
    height: .85rem;
    float: left;
    margin-top: .55rem;
    margin-right: .4rem
  }

  .orderleft > div {
    float: left;
    font-size: .75rem;
    color: #222
  }

  .order_right {
    float: right;
    margin-top: .4rem
  }

  .order_right > img {
    width: .5rem;
    height: .9rem;
    float: left;
    margin-left: .5rem;
    margin-top: .3rem
  }

  .order_righttext {
    float: left;
    font-size: .7rem;
    margin-top: .3rem
  }

  .mine_nologin {
    color: #fff;
    width: 8rem;
    height: 1.7rem;
    border: 1px solid #fff;
    line-height: 1.7rem;
    border-radius: 4px;
    margin: 2rem auto 0
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/css/mine.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvY3NzL21pbmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFdBQVcsbUJBQXFCLFdBQVcsQUFBcUMsV0FBYSxBQUFnQixRQUFTLGtCQUFtQixBQUNoSCxjQUFlLFVBQVksQ0FBQyxBQUNyRCxzQkFGMkMsZ0NBQXFDLEFBQWEsZUFBZ0IsQUFDekcsT0FBVSxPQUFXLENBQ3dILEFBQWpKLFdBQVcsV0FBWSxZQUFhLEFBQStELE1BQVMsQUFBVyxTQUFZLFdBQWEsQ0FBQyxBQUNqSixlQUFlLFdBQVksWUFBYSxpQkFBbUIsQ0FBQyxBQUM1RCxlQUFlLFdBQVksY0FBZSxtQkFBb0IsZ0JBQWtCLFdBQVkseUJBQTBCLFlBQWEsYUFBYyxBQUNqSixrQkFBbUIsT0FBVSxRQUFXLFFBQVksQ0FBQyxBQUNyRCxVQUFVLFdBQVksY0FBZSxXQUFZLHVEQUE0RSxxQkFBdUIsQ0FBQyxBQUNySixXQUFXLDBCQUE4QixjQUFlLG1CQUFzQixDQUFDLEFBQy9FLGFBQWEsV0FBWSxnQkFBa0Isa0JBQW9CLENBQUMsQUFDaEUsaUJBQWlCLGFBQWMsY0FBZSxtQkFBcUIsV0FBWSxpQkFBbUIsQ0FBQyxBQUNuRyxjQUFjLFlBQWEsbUJBQW9CLFVBQVksQ0FBQyxBQUM1RCxrQkFBa0IsWUFBYyxhQUFlLGtCQUFvQixZQUFhLGdCQUFtQixDQUFDLEFBQ3BHLE9BQU8sZUFBbUIsa0JBQW1CLGlCQUFrQixlQUFrQixDQUFDLEFBQ2xGLFVBQVUsc0JBQXVCLFdBQVksV0FBWSxtQkFBb0IsaUJBQW9CLENBQUMsQUFDbEcsV0FBVyxXQUFZLGFBQWUsQ0FBQyxBQUN2QyxjQUFjLFlBQWEsaUJBQWtCLGtCQUFvQixVQUFZLENBQUMsQUFDOUUsV0FBVyxnQkFBbUIsQ0FBQyxBQUMvQixhQUFhLGNBQWMsV0FBVyxnQkFBaUIsK0JBQWdDLENBQUMsQUFDeEYsa0JBQWtCLFVBQVcsYUFBZ0IsQUFBQyxXQUFXLCtCQUErQixxQkFBdUIsQ0FBQyxBQUNoSCxrQkFBa0IsV0FBVyxZQUFZLFdBQVcsaUJBQW1CLGtCQUFvQixlQUFpQixDQUFDLEFBQzdHLGVBQWUsZ0JBQWtCLGNBQWMsbUJBQW9CLGNBQWMsVUFBVyxDQUFDLEFBRTdGLFdBQVcsZ0JBQW9CLHNCQUF3QixpQkFBbUIsNkJBQThCLCtCQUFpQyxDQUFDLEFBQzFJLDJCQUEyQixXQUFhLENBQUMsQUFDekMsY0FBYyxZQUFhLCtCQUFpQyxDQUFDLEFBQzdELHFCQUFxQixXQUFhLENBQUMsQUFDbkMsV0FBVyxXQUFZLGdCQUFrQixDQUFDLEFBQzFDLGVBQWUsYUFBZSxjQUFnQixXQUFZLGtCQUFvQixrQkFBcUIsQ0FBQyxBQUNwRyxlQUFlLFdBQVksaUJBQW1CLFVBQVksQ0FBQyxBQUMzRCxhQUFhLFlBQWEsZ0JBQW1CLENBQUMsQUFDOUMsaUJBQWlCLFlBQWMsYUFBZSxXQUFZLGtCQUFvQixnQkFBbUIsQ0FBQyxBQUNsRyxpQkFBaUIsV0FBWSxnQkFBa0IsZ0JBQW1CLENBQUMsQUFDbkUsY0FBYyxXQUFZLFdBQVksY0FBZSxzQkFBdUIsbUJBQW9CLGtCQUFtQixrQkFBc0IsQ0FBQyIsImZpbGUiOiJtaW5lLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOeZu+W9leW8ueeqlyAqL1xyXG4ubG9naW5ib21ie3BhZGRpbmc6IDAuNXJlbSAxcmVtO3dpZHRoOjRyZW07YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO2NvbG9yOiB3aGl0ZTtwb3NpdGlvbjogZml4ZWQ7dG9wOiA0MCU7Ym9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGVmdDogMHB4O3JpZ2h0OiAwcHg7bWFyZ2luOiAwIGF1dG87ei1pbmRleDogMTE7fVxyXG4ubWluZWxvZ2lue3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7cG9zaXRpb246IGZpeGVkO2xlZnQ6IDBweDt0b3A6IDBweDtyaWdodDogMHB4O2JvdHRvbTogMHB4O3otaW5kZXg6IDEwMjt9XHJcbi5taW5lbG9naW5fb3V0e3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4ubWluZWxvZ2luX2J0bnt3aWR0aDogMTAwJTtoZWlnaHQ6IDIuNXJlbTtsaW5lLWhlaWdodDogMi41cmVtO2ZvbnQtc2l6ZTogMC45cmVtO2NvbG9yOiAjZmZmO2JhY2tncm91bmQtY29sb3I6ICM2MTE5ODc7Ym9yZGVyOiBub25lO291dGxpbmU6IG5vbmU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwcHg7cmlnaHQ6IDBweDtib3R0b206IDBweDt9XHJcbi5teWJhbm5lcnt3aWR0aDogMTAwJTtoZWlnaHQ6IDcuNXJlbTtjb2xvcjogI2ZmZjtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9taW5lL2FjY291bnRfc19iZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7YmFja2dyb3VuZC1zaXplOiBjb3Zlcjt9XHJcbi5iYW5uZXJ0b3B7cGFkZGluZzogMC42cmVtIDAuN3JlbSAwLjFyZW07aGVpZ2h0OiAxLjVyZW07bWFyZ2luLWJvdHRvbTogMC43cmVtO31cclxuLmJhbnRvcF9sZWZ0e2Zsb2F0OiBsZWZ0O2ZvbnQtc2l6ZTogMC43cmVtO2xpbmUtaGVpZ2h0OiAxLjVyZW07fVxyXG4uYmFudG9wX2xlZnQ+aW1ne3dpZHRoOiAxLjVyZW07aGVpZ2h0OiAxLjVyZW07bWFyZ2luLXJpZ2h0OiAwLjVyZW07ZmxvYXQ6IGxlZnQ7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuLmJhbnRvcF9yaWdodHtmbG9hdDogcmlnaHQ7bGluZS1oZWlnaHQ6IDEuNXJlbTtjb2xvcjogI2ZmZjt9XHJcbi5iYW50b3BfcmlnaHQ+aW1ne3dpZHRoOiAwLjdyZW07aGVpZ2h0OiAwLjhyZW07bWFyZ2luLWxlZnQ6IDAuM3JlbTtmbG9hdDogcmlnaHQ7bWFyZ2luLXRvcDogMC4zcmVtO31cclxuLm1vbmV5e21hcmdpbjogMC4ycmVtIDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxLjJyZW07Zm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG4ubWluZWxpbmV7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjt3aWR0aDogMnJlbTtoZWlnaHQ6IDNweDtib3JkZXItcmFkaXVzOiA1MHB4O21hcmdpbjogMC41cmVtIGF1dG87fVxyXG4ubWluZW1vbmV5e3dpZHRoOiAxMDAlO2hlaWdodDogMi41cmVtO31cclxuLm1pbmVtb25leT5saXt3aWR0aDogMzMuMyU7bGluZS1oZWlnaHQ6IDFyZW07cGFkZGluZy10b3A6IDAuM3JlbTtmbG9hdDogbGVmdDt9XHJcbi5taW5lZm9udDF7Zm9udC1zaXplOiAwLjY1cmVtO31cclxuLmFjY291bnRfcGF5e2hlaWdodDoyLjNyZW07d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOiAjZmZmO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlYWU5ZTk7fVxyXG4uYWNjb3VudF9wYXlfbGlzdHt3aWR0aDogOTglO3BhZGRpbmc6IDBweCAxJTsgZmxvYXQ6bGVmdDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNlYWU5ZTk7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcbi5hY2NvdW50X3BheV9pY29ue3dpZHRoOjFyZW07aGVpZ2h0OjFyZW07ZmxvYXQ6bGVmdDttYXJnaW4tdG9wOiAwLjZyZW07bWFyZ2luLWxlZnQ6IDAuNXJlbTttYXJnaW4tcmlnaHQ6IDIlO31cclxuLmFjY291bnRfcGF5X3R7Zm9udC1zaXplOiAwLjhyZW07Y29sb3I6IzYxMTk4NztsaW5lLWhlaWdodDogMi4zcmVtO2hlaWdodDoyLjNyZW07ZmxvYXQ6bGVmdDt9XHJcbi8qIOWIl+ihqDUgKi9cclxuLm1pbmVvcmRlcntwYWRkaW5nOiAwcHggMC43cmVtO2JhY2tncm91bmQtY29sb3I6IHdoaXRlO21hcmdpbi10b3A6IDAuNHJlbTtib3JkZXItdG9wOiAxcHggc29saWQgI0RFREZFMDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFREZFMDt9XHJcbi5taW5lb3JkZXIgYTpsYXN0LWNoaWxkIGxpe2JvcmRlcjogbm9uZTt9XHJcbi5taW5lb3JkZXIgbGl7aGVpZ2h0OiAycmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVERkUwO31cclxuLm1pbmVvcmRlciAubm9ib3JkZXJ7Ym9yZGVyOiBub25lO31cclxuLm9yZGVybGVmdHtmbG9hdDogbGVmdDtsaW5lLWhlaWdodDogMnJlbTt9XHJcbi5vcmRlcmxlZnQ+aW1ne3dpZHRoOiAwLjg1cmVtO2hlaWdodDogMC44NXJlbTtmbG9hdDogbGVmdDttYXJnaW4tdG9wOiAwLjU1cmVtO21hcmdpbi1yaWdodDogMC40cmVtO31cclxuLm9yZGVybGVmdD5kaXZ7ZmxvYXQ6IGxlZnQ7Zm9udC1zaXplOiAwLjc1cmVtO2NvbG9yOiAjMjIyO31cclxuLm9yZGVyX3JpZ2h0e2Zsb2F0OiByaWdodDttYXJnaW4tdG9wOiAwLjRyZW07fVxyXG4ub3JkZXJfcmlnaHQ+aW1ne3dpZHRoOiAwLjVyZW07aGVpZ2h0OiAwLjlyZW07ZmxvYXQ6IGxlZnQ7bWFyZ2luLWxlZnQ6IDAuNXJlbTttYXJnaW4tdG9wOiAwLjNyZW07fVxyXG4ub3JkZXJfcmlnaHR0ZXh0e2Zsb2F0OiBsZWZ0O2ZvbnQtc2l6ZTogMC43cmVtO21hcmdpbi10b3A6IDAuM3JlbTt9XHJcbi5taW5lX25vbG9naW57Y29sb3I6ICNmZmY7d2lkdGg6IDhyZW07aGVpZ2h0OiAxLjdyZW07Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtsaW5lLWhlaWdodDogMS43cmVtO2JvcmRlci1yYWRpdXM6IDRweDttYXJnaW46IDJyZW0gYXV0byAwcHg7fVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */</style>

<style scoped>
  .contactbox {
    background-color: #fff;
    margin-top: .5rem;
    border-top: 1px solid #dedfe0
  }

  .contactbox li {
    border-bottom: 1px solid #dedfe0;
    padding: 0 .7rem;
    color: #333
  }

  .questionbox {
    height: 2.3rem;
    line-height: 2.3rem
  }

  .right_gray {
    width: .55rem;
    height: .8rem;
    float: right;
    margin-top: .6rem
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/pages/Other/contact.vue */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9wYWdlcy9PdGhlci9jb250YWN0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxZQUFZLHNCQUF1QixpQkFBbUIsNEJBQThCLENBQ25GLEFBQ0QsZUFBZSxnQ0FBaUMsZ0JBQWtCLFVBQVksQ0FDN0UsQUFDRCxhQUFhLGNBQWUsa0JBQW9CLENBQy9DLEFBQ0QsWUFBWSxhQUFlLGFBQWUsWUFBYSxnQkFBbUIsQ0FDekUiLCJmaWxlIjoiY29udGFjdC52dWUiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWN0Ym94e2JhY2tncm91bmQtY29sb3I6ICNmZmY7bWFyZ2luLXRvcDogMC41cmVtO2JvcmRlci10b3A6IDFweCBzb2xpZCAjREVERkUwO1xufVxuLmNvbnRhY3Rib3ggbGl7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERURGRTA7cGFkZGluZzogMCAwLjdyZW07Y29sb3I6ICMzMzM7XG59XG4ucXVlc3Rpb25ib3h7aGVpZ2h0OiAyLjNyZW07bGluZS1oZWlnaHQ6IDIuM3JlbTtcbn1cbi5yaWdodF9ncmF5e3dpZHRoOiAwLjU1cmVtO2hlaWdodDogMC44cmVtO2Zsb2F0OiByaWdodDttYXJnaW4tdG9wOiAwLjZyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */</style>
