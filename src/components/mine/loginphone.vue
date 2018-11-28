<template>
  <div>
    <div class="login_header"></div>
    <div class="lpbox">
      <div class="lpmenu"><img
        src="/static/img/avatar.png"
        alt="" class="lpmenuimg"> <input type="number" placeholder="请输入您的手机号" class="lpmenuinp"></div>
      <div class="lpmenu"><img
        src="/static/img/lock.png"
        alt="" class="lpmenuimg"> <input type="text" placeholder="请输入密码" class="lpmenuinp"></div>
      <button class="lpbtn" @click="login">登&nbsp;&nbsp;&nbsp;录</button>
    </div>
    <router-link to="/mine/register">
      <a class=""><p class="newuser">注册新用户</p></a>
    </router-link>
     </div>
</template>

<script scoped>
  export default {
    name: "loginphone",
    methods: {
      login: function () {
        this.$http.get('http://127.0.0.1:8088/aa').then(function (res) {
          if (res.body == 11) {
            console.log(授权);
          }else{
            console.log(未授权);
          }
          this.$router.push('/home/home')
        }, function () {
          console.log('请求失败处理');
          router.push('/home/home')
        });
      }
    }
  }
</script>


<style>
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
    color: #f43338;
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

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/css/home.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvY3NzL2hvbWUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsbUJBQXFCLFdBQVcsZ0NBQXFDLFdBQWEsZUFBZ0IsUUFBUyxrQkFBbUIsQUFDckksT0FBVSxRQUFXLGNBQWUsVUFBWSxDQUFDLEFBQ3JELFNBQVMsV0FBWSxhQUFlLENBQUMsQUFDckMsYUFBYSxXQUFZLFdBQWEsQ0FBQyxBQUN2QyxXQUFXLFdBQVcsWUFBWSxnQkFBaUIsZ0NBQWdDLGlCQUFtQixDQUFDLEFBQ3ZHLFFBQXFDLFdBQVcsbUJBQXNCLENBQUMsQUFDdkUsaUJBRFEsYUFBYyxhQUFlLENBQytDLEFBQXBGLFNBQXNDLGtCQUFrQixXQUFZLFlBQWMsQ0FBRSxBQUNwRixTQUFTLFlBQVksaUJBQWtCLFdBQVcsZ0JBQWlCLHVCQUF3QixtQkFBb0IsZ0JBQWlCLEFBQ2hJLCtCQUFnQyxVQUFVLFVBQVcsQ0FBQyxBQUN0RCxVQUFVLFlBQWEsYUFBYyxrQkFBbUIsZUFBZ0Isa0JBQW1CLFVBQVcsV0FBYSxDQUFDLEFBQ3BILFdBQVcsVUFBWSxDQUEyRCxBQUNsRix1QkFEdUIsY0FBZSxrQkFBbUIsY0FBYyxRQUFVLENBQ0ksQUFBckYsWUFBWSxZQUFjLENBQTJELEFBQ3JGLE9BQU8sZ0JBQW9CLGNBQWUsaUJBQW1CLENBQUMsQUFDOUQsU0FBUyxVQUFXLGNBQWUsV0FBWSxvQkFBc0IsQ0FBQyxBQUN0RSxVQUFVLFdBQVksWUFBYSxtQkFBc0IsQ0FBQyxBQUMxRCxXQUFXLFdBQVcsY0FBZSxrQkFBb0IsQ0FBQyxBQUMxRCxlQUFlLFlBQWMsYUFBZSxtQkFBcUIsaUJBQW1CLFVBQVksQ0FBQyxBQUNqRyxnQkFBZ0IsYUFBZSxhQUFlLGtCQUFvQixZQUFhLGlCQUFvQixDQUFDLEFBQ3BHLFVBQVUsV0FBWSxjQUFlLHlCQUF5QixtQkFBb0IsaUJBQW1CLHdCQUE2QixpQkFBbUIsQ0FBQyxBQUN0SixXQUFXLFVBQVcsY0FBZSxpQkFBbUIsQ0FBQyxBQUN6RCxXQUFXLGtCQUFtQixVQUFXLGNBQWUsU0FBWSxPQUFVLFFBQVcsY0FBaUIsOEJBQThCLCtCQUErQixBQUN2Syw2QkFBNkIsNEJBQTZCLDZCQUE4QixzQkFBd0IsVUFBVywwQkFBZ0MsQ0FBQyxBQUM1SixhQUFhLGlCQUFtQixDQUFDLEFBQ2pDLFVBQVUsYUFBYyxjQUFlLGdCQUFtQixDQUEyQyxBQUNyRyxxQkFEMEQsa0JBQW1CLHFCQUF1QixDQUNFLEFBQXRHLFdBQVcsYUFBYyxjQUFlLGdCQUFtQixDQUEyQyxBQUN0RyxVQUFVLG1CQUFvQixnQkFBaUIsdUJBQXdCLG1CQUFvQixnQkFBbUIsQ0FBQyxBQUMvRyxTQUFTLGNBQWUsaUJBQW1CLGdCQUFrQixDQUFDLEFBQzlELFlBQVksV0FBWSxlQUFrQixDQUFDLEFBQzNDLFVBQVUsV0FBWSxjQUFlLGtCQUFtQixXQUFhLFNBQVksQ0FBQyxBQUNsRixRQUFRLFdBQVksY0FBZSxnQkFBbUIsQ0FBQyxBQUN2RCxXQUFXLFVBQVcsY0FBZSxXQUFZLGVBQWlCLENBQUMsQUFFbkUsK0NBQXdCLDhCQUErQixDQUFDLEFBQ3hELFdBQVcsV0FBWSxnQkFBaUIsaUJBQWtCLGlCQUFtQixTQUFXLENBQUMsQUFDekYsWUFBWSxhQUFjLGNBQWUsbUJBQXFCLFdBQVksa0JBQW1CLHFCQUF1QixDQUFDLEFBQ3JILGFBQWEsZ0JBQWtCLFVBQVksQ0FBQyxBQUM1QyxpQ0FBaUMsZUFBa0IsQ0FBQyxBQUNwRCxnQkFBZ0IsYUFBZSxDQUFDIiwiZmlsZSI6ImhvbWUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luYm9tYntwYWRkaW5nOiAwLjVyZW0gMXJlbTt3aWR0aDo0cmVtO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtjb2xvcjogd2hpdGU7cG9zaXRpb246IGZpeGVkO3RvcDogNDAlO2JvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGxlZnQ6IDBweDtyaWdodDogMHB4O21hcmdpbjogMCBhdXRvO3otaW5kZXg6IDExO31cclxuLmliYW5uZXJ7d2lkdGg6IDEwMCU7aGVpZ2h0OiA3LjVyZW07fVxyXG4uaWJhbm5lcj5pbWd7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO31cclxuLm5vdGljZWJveHt3aWR0aDoxMDAlO2hlaWdodDoycmVtO2JhY2tncm91bmQ6ICNmZmY7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RlZGZlMDtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4ubm90aWNle3dpZHRoOjAuNzVyZW07aGVpZ2h0OjAuNzVyZW07ZmxvYXQ6bGVmdDttYXJnaW46MC41NXJlbSAwLjVyZW07fVxyXG4ubm90aWNlaXt3aWR0aDowLjc1cmVtO2hlaWdodDowLjc1cmVtO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowLjY1cmVtO3JpZ2h0OjAuNjVyZW07IH1cclxuLm5vdGljZXR7aGVpZ2h0OjJyZW07bGluZS1oZWlnaHQ6IDJyZW07Y29sb3I6Izk5OTtvdmVyZmxvdzogaGlkZGVuO3RleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO3doaXRlLXNwYWNlOiBub3dyYXA7dGV4dC1hbGlnbjogbGVmdDtcclxuYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjt3aWR0aDo4MCU7ZmxvYXQ6bGVmdDt9XHJcbi5wb2ludGJveHt3aWR0aDowLjRyZW07aGVpZ2h0OjAuNHJlbTtib3JkZXItcmFkaXVzOiA1cHg7YmFja2dyb3VuZDogcmVkO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MC41cmVtO3JpZ2h0OjAuM3JlbTt9ICBcclxuLnN3aXBlcmJ0bnt3aWR0aDogNXJlbTtoZWlnaHQ6IDEuNHJlbTtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOjEuMnJlbTtsZWZ0OiAxMCU7fVxyXG4uc3dpcGVyYnRuMnt3aWR0aDogNC41cmVtO2hlaWdodDogMS40cmVtO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206MS4ycmVtO2xlZnQ6IDEwJTt9XHJcbi5pbGlzdHtwYWRkaW5nOiAwLjVyZW0gMHB4O2hlaWdodDogMy4ycmVtO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5pbGlzdG1xe3dpZHRoOiAyNCU7aGVpZ2h0OiAzLjNyZW07Y29sb3I6ICMzMzM7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLmlsaXN0aW1ne3dpZHRoOiAycmVtO2hlaWdodDogMnJlbTttYXJnaW4tYm90dG9tOiAwLjJyZW07fVxyXG4uZXhjZWxsZW50e3dpZHRoOjEwMCU7aGVpZ2h0OiAxLjNyZW07bGluZS1oZWlnaHQ6IDEuM3JlbTt9XHJcbi5leGNlbGxlbnRfaW1ne3dpZHRoOiAwLjhyZW07aGVpZ2h0OiAwLjhyZW07bWFyZ2luLXJpZ2h0OiAwLjNyZW07bWFyZ2luLXRvcDogMC4ycmVtO2Zsb2F0OiBsZWZ0O31cclxuLmV4Y2VsbGVudF9pY29ue3dpZHRoOiAwLjM1cmVtO2hlaWdodDogMC43cmVtO21hcmdpbi1sZWZ0OiAwLjNyZW07ZmxvYXQ6IHJpZ2h0O21hcmdpbi10b3A6IDAuMjVyZW07fVxyXG4uZXhjZWJvZHl7d2lkdGg6IDEwMCU7aGVpZ2h0OiA0LjlyZW07Ym9yZGVyOjFweCBzb2xpZCAjZGVkZmUwO2JvcmRlci1yYWRpdXM6IDEwcHg7bWFyZ2luLXRvcDogMC44cmVtO2JveC1zaGFkb3c6IDBweCAwcHggMnB4ICNjY2M7cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmV4Y2Vib2R5MXt3aWR0aDogMzAlO2hlaWdodDogNS4zcmVtO3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5leGNlYm9keTJ7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiA0MCU7aGVpZ2h0OiA1LjNyZW07Ym90dG9tOiAwcHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7bWFyZ2luOiAwcHggYXV0bztib3JkZXItbGVmdDoxcHggc29saWQgI2RlZGZlMDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNkZWRmZTA7XHJcbmJvcmRlci10b3A6MXB4IHNvbGlkICNkZWRmZTA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt6LWluZGV4OiAyO2JveC1zaGFkb3c6IDBweCAwcHggNXB4ICNkZWRmZTA7fVxyXG4uZXhjZWJvZHlfaW57cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmV4Y2V1c2Vye3dpZHRoOiAxLjJyZW07aGVpZ2h0OiAxLjJyZW07bWFyZ2luLXRvcDogMC4zcmVtO2JvcmRlci1yYWRpdXM6IDUwJTtib3JkZXI6IDFweCBzb2xpZCAjY2NjO31cclxuLmV4Y2V1c2VyMnt3aWR0aDogMS40cmVtO2hlaWdodDogMS40cmVtO21hcmdpbi10b3A6IDAuNXJlbTtib3JkZXItcmFkaXVzOiA1MCU7Ym9yZGVyOiAxcHggc29saWQgI2NjYzt9XHJcbi5leGNlbmFtZXtsaW5lLWhlaWdodDogMS4ycmVtO292ZXJmbG93OiBoaWRkZW47dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7d2hpdGUtc3BhY2U6IG5vd3JhcDtmb250LXNpemU6IDAuNjJyZW07fVxyXG4uZXhjZW51bXtjb2xvcjogI2Y0MzMzODtmb250LXNpemU6IDAuNzVyZW07bGluZS1oZWlnaHQ6IDFyZW07fVxyXG4uZXhjZXByb2ZpdHtjb2xvcjogIzc3Nztmb250LXNpemU6IDAuNnJlbTt9XHJcbi5leGNlaWNvbnt3aWR0aDogMXJlbTtoZWlnaHQ6IDEuMnJlbTtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMC40cmVtO3RvcDogMC40cmVtO31cclxuLmNhdHRsZXt3aWR0aDogMTAwJTtoZWlnaHQ6IDMuMnJlbTttYXJnaW4tdG9wOiAwLjNyZW07fVxyXG4uY2F0dGxlPmxpe3dpZHRoOiAzMSU7aGVpZ2h0OiAzLjFyZW07ZmxvYXQ6IGxlZnQ7cGFkZGluZy1sZWZ0OiAyJTt9XHJcbi5jYXR0bGU+bGk6bnRoLWNoaWxkKDEpe2JvcmRlci1yaWdodDoxcHggc29saWQgI2RlZGZlMDt9XHJcbi5jYXR0bGU+bGk6bnRoLWNoaWxkKDIpe2JvcmRlci1yaWdodDoxcHggc29saWQgI2RlZGZlMDt9XHJcbi5jYXR0bGVib3h7ZmxvYXQ6IGxlZnQ7dGV4dC1hbGlnbjogbGVmdDtsaW5lLWhlaWdodDogMXJlbTttYXJnaW4tdG9wOiAwLjNyZW07d2lkdGg6IDY3JTt9XHJcbi5jYXR0bGV1c2Vye3dpZHRoOiAxLjVyZW07aGVpZ2h0OiAxLjVyZW07bWFyZ2luLXJpZ2h0OiAwLjNyZW07ZmxvYXQ6IGxlZnQ7Ym9yZGVyLXJhZGl1czogNTAlO2JvcmRlcjogMXB4IHNvbGlkICNjY2M7fVxyXG4uY2F0dGxlZm9udDF7Zm9udC1zaXplOiAwLjZyZW07Y29sb3I6ICM2NjY7fVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kOiB3aGl0ZTt9XHJcbi5ub3RpY2Vib3hfaHJlZntkaXNwbGF5OiBibG9jazt9Il0sInNvdXJjZVJvb3QiOiIifQ== */</style>

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
    height: 8rem
  }

  .swiper-pagination-bullet-active {
    background: #fff
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/components/banner.vue */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9jb21wb25lbnRzL2Jhbm5lci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsUUFBb0MsZUFBaUIsQ0FDcEQsQUFDRCxtQkFGUyxXQUFZLEFBQUMsV0FBYSxDQUdsQyxBQUNELGlDQUFpQyxlQUFrQixDQUNsRCIsImZpbGUiOiJiYW5uZXIudnVlIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi9hc3NldHMvbGlicy9zd2lwZXIvY3NzL3N3aXBlci5jc3MnO1xuLmJhbm5lciB7d2lkdGg6IDEwMCU7IGhlaWdodDogOHJlbTsgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zd2lwZXJpbWd7d2lkdGg6IDEwMCU7aGVpZ2h0OjhyZW07XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */</style>

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
    height: 8.7rem;
    color: #fff;
    background: url(/static/img/1.png) no-repeat 50%;
    background-size: cover
  }

  .bannertop {
    padding: .6rem .7rem .1rem;
    height: 1.5rem
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
    margin-top: .1rem;
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
    width: 50%;
    float: left;
    border-right: 1px solid #eae9e9;
    box-sizing: border-box
  }

  .account_pay_icon {
    width: 1rem;
    height: 1rem;
    float: left;
    margin-top: .6rem;
    margin-left: 30%;
    margin-right: 8%
  }

  .account_pay_t {
    font-size: .8rem;
    color: #f94d1b;
    line-height: 2.3rem;
    height: 2.3rem;
    float: left
  }

  .morebox {
    padding: .5rem 0;
    height: 3.1rem;
    font-size: .72rem;
    border-top: 1px solid #dedfe0;
    margin-top: .35rem
  }

  .morebox > a {
    display: inline-block;
    width: 25%;
    height: 3.1rem
  }

  .morebox2 > a {
    display: inline-block;
    width: 24%;
    height: 3rem
  }

  .morebox2 {
    padding-top: .5rem;
    height: 2.5rem;
    font-size: .65rem;
    border-top: 1px solid #dedfe0;
    margin-top: .35rem
  }

  .moreboxli {
    width: 20%;
    float: left;
    color: #333
  }

  .moreboxli2 {
    width: 100%;
    float: left;
    color: #333
  }

  .moreboximg {
    width: 1.7rem;
    height: 1.7rem;
    margin-bottom: .2rem
  }

  .moreboximg2 {
    width: 1.2rem;
    height: 1.2rem;
    margin-bottom: .2rem
  }

  .mambox {
    padding: .5rem
  }

  .more_top {
    text-align: left;
    font-weight: 700;
    height: 1rem;
    font-size: .7rem
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
    width: .8rem;
    height: .8rem;
    float: left;
    margin-top: .6rem;
    margin-right: .5rem
  }

  .orderleft > div {
    float: left;
    font-size: .7rem;
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
    font-size: .85rem;
    margin-top: .3rem
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/assets/css/mine.css */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9hc3NldHMvY3NzL21pbmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFdBQVcsbUJBQXFCLFdBQVcsQUFBcUMsV0FBYSxBQUFnQixRQUFTLGtCQUFtQixBQUNoSCxjQUFlLFVBQVksQ0FBQyxBQUNyRCxzQkFGMkMsZ0NBQXFDLEFBQWEsZUFBZ0IsQUFDekcsT0FBVSxPQUFXLENBQ3dILEFBQWpKLFdBQVcsV0FBWSxZQUFhLEFBQStELE1BQVMsQUFBVyxTQUFZLFdBQWEsQ0FBQyxBQUNqSixlQUFlLFdBQVksWUFBYSxpQkFBbUIsQ0FBQyxBQUM1RCxlQUFlLFdBQVksY0FBZSxtQkFBb0IsZ0JBQWtCLFdBQVkseUJBQTBCLFlBQWEsYUFBYyxBQUNqSixrQkFBbUIsT0FBVSxRQUFXLFFBQVksQ0FBQyxBQUNyRCxVQUFVLFdBQVksY0FBZSxXQUFZLHVEQUE0RSxxQkFBdUIsQ0FBQyxBQUNySixXQUFXLDBCQUE4QixhQUFlLENBQUMsQUFDekQsYUFBYSxXQUFZLGdCQUFrQixrQkFBb0IsQ0FBQyxBQUNoRSxpQkFBaUIsYUFBYyxjQUFlLG1CQUFxQixXQUFZLGlCQUFtQixDQUFDLEFBQ25HLGNBQWMsWUFBYSxtQkFBb0IsVUFBWSxDQUFDLEFBQzVELGtCQUFrQixZQUFjLGFBQWUsa0JBQW9CLFlBQWEsZ0JBQW1CLENBQUMsQUFDcEcsT0FBTyxpQkFBbUIsa0JBQW1CLGlCQUFrQixlQUFrQixDQUFDLEFBQ2xGLFVBQVUsc0JBQXVCLFdBQVksV0FBWSxtQkFBb0IsaUJBQW9CLENBQUMsQUFDbEcsV0FBVyxXQUFZLGFBQWUsQ0FBQyxBQUN2QyxjQUFjLFlBQWEsaUJBQWtCLGtCQUFvQixVQUFZLENBQUMsQUFDOUUsV0FBVyxnQkFBbUIsQ0FBQyxBQUMvQixhQUFhLGNBQWMsV0FBVyxnQkFBaUIsK0JBQWdDLENBQUMsQUFDeEYsa0JBQWtCLFVBQVUsV0FBVywrQkFBK0IscUJBQXVCLENBQUMsQUFDOUYsa0JBQWtCLFdBQVcsWUFBWSxXQUFXLGlCQUFtQixnQkFBaUIsZUFBaUIsQ0FBQyxBQUMxRyxlQUFlLGdCQUFrQixjQUFjLG1CQUFvQixjQUFjLFVBQVcsQ0FBQyxBQUM3RixTQUFTLGdCQUFvQixjQUFlLGlCQUFtQiw2QkFBNkIsaUJBQW9CLENBQUMsQUFDakgsV0FBVyxxQkFBc0IsVUFBVyxhQUFlLENBQUMsQUFDNUQsWUFBWSxxQkFBc0IsVUFBVyxXQUFhLENBQUMsQUFDM0QsVUFBVSxrQkFBb0IsY0FBZSxpQkFBbUIsNkJBQTZCLGlCQUFvQixDQUFDLEFBQ2xILFdBQVcsVUFBVyxXQUFZLFVBQVksQ0FBQyxBQUMvQyxZQUFZLFdBQVksV0FBWSxVQUFZLENBQUMsQUFDakQsWUFBWSxhQUFjLGNBQWUsbUJBQXNCLENBQUMsQUFDaEUsYUFBYSxhQUFjLGNBQWUsbUJBQXNCLENBQUMsQUFDakUsUUFBUSxhQUFnQixDQUFDLEFBQ3pCLFVBQVUsZ0JBQWlCLGdCQUFrQixZQUFhLGVBQWtCLENBQUMsQUFFN0UsV0FBVyxnQkFBb0Isc0JBQXdCLGlCQUFtQiw2QkFBOEIsK0JBQWlDLENBQUMsQUFDMUksMkJBQTJCLFdBQWEsQ0FBQyxBQUN6QyxjQUFjLFlBQWEsK0JBQWlDLENBQUMsQUFDN0QscUJBQXFCLFdBQWEsQ0FBQyxBQUNuQyxXQUFXLFdBQVksZ0JBQWtCLENBQUMsQUFDMUMsZUFBZSxZQUFjLGFBQWUsV0FBWSxpQkFBbUIsa0JBQXFCLENBQUMsQUFDakcsZUFBZSxXQUFZLGdCQUFrQixVQUFZLENBQUMsQUFDMUQsYUFBYSxZQUFhLGdCQUFtQixDQUFDLEFBQzlDLGlCQUFpQixZQUFjLGFBQWUsV0FBWSxrQkFBb0IsZ0JBQW1CLENBQUMsQUFDbEcsaUJBQWlCLFdBQVksaUJBQW1CLGdCQUFtQixDQUFDIiwiZmlsZSI6Im1pbmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyog55m75b2V5by556qXICovXHJcbi5sb2dpbmJvbWJ7cGFkZGluZzogMC41cmVtIDFyZW07d2lkdGg6NHJlbTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7Y29sb3I6IHdoaXRlO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDQwJTtib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBsZWZ0OiAwcHg7cmlnaHQ6IDBweDttYXJnaW46IDAgYXV0bzt6LWluZGV4OiAxMTt9XHJcbi5taW5lbG9naW57d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtwb3NpdGlvbjogZml4ZWQ7bGVmdDogMHB4O3RvcDogMHB4O3JpZ2h0OiAwcHg7Ym90dG9tOiAwcHg7ei1pbmRleDogMTAyO31cclxuLm1pbmVsb2dpbl9vdXR7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5taW5lbG9naW5fYnRue3dpZHRoOiAxMDAlO2hlaWdodDogMi41cmVtO2xpbmUtaGVpZ2h0OiAyLjVyZW07Zm9udC1zaXplOiAwLjlyZW07Y29sb3I6ICNmZmY7YmFja2dyb3VuZC1jb2xvcjogI2ZmOGEwMDtib3JkZXI6IG5vbmU7b3V0bGluZTogbm9uZTtcclxucG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDBweDtyaWdodDogMHB4O2JvdHRvbTogMHB4O31cclxuLm15YmFubmVye3dpZHRoOiAxMDAlO2hlaWdodDogOC43cmVtO2NvbG9yOiAjZmZmO2JhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL21pbmUvYWNjb3VudF9zX2JnLnBuZykgbm8tcmVwZWF0IGNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO31cclxuLmJhbm5lcnRvcHtwYWRkaW5nOiAwLjZyZW0gMC43cmVtIDAuMXJlbTtoZWlnaHQ6IDEuNXJlbTt9XHJcbi5iYW50b3BfbGVmdHtmbG9hdDogbGVmdDtmb250LXNpemU6IDAuN3JlbTtsaW5lLWhlaWdodDogMS41cmVtO31cclxuLmJhbnRvcF9sZWZ0PmltZ3t3aWR0aDogMS41cmVtO2hlaWdodDogMS41cmVtO21hcmdpbi1yaWdodDogMC41cmVtO2Zsb2F0OiBsZWZ0O2JvcmRlci1yYWRpdXM6IDUwJTt9XHJcbi5iYW50b3BfcmlnaHR7ZmxvYXQ6IHJpZ2h0O2xpbmUtaGVpZ2h0OiAxLjVyZW07Y29sb3I6ICNmZmY7fVxyXG4uYmFudG9wX3JpZ2h0PmltZ3t3aWR0aDogMC43cmVtO2hlaWdodDogMC44cmVtO21hcmdpbi1sZWZ0OiAwLjNyZW07ZmxvYXQ6IHJpZ2h0O21hcmdpbi10b3A6IDAuM3JlbTt9XHJcbi5tb25leXttYXJnaW4tdG9wOiAwLjFyZW07dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMS4ycmVtO2ZvbnQtd2VpZ2h0OiBib2xkO31cclxuLm1pbmVsaW5le2JhY2tncm91bmQtY29sb3I6ICNmZmY7d2lkdGg6IDJyZW07aGVpZ2h0OiAzcHg7Ym9yZGVyLXJhZGl1czogNTBweDttYXJnaW46IDAuNXJlbSBhdXRvO31cclxuLm1pbmVtb25leXt3aWR0aDogMTAwJTtoZWlnaHQ6IDIuNXJlbTt9XHJcbi5taW5lbW9uZXk+bGl7d2lkdGg6IDMzLjMlO2xpbmUtaGVpZ2h0OiAxcmVtO3BhZGRpbmctdG9wOiAwLjNyZW07ZmxvYXQ6IGxlZnQ7fVxyXG4ubWluZWZvbnQxe2ZvbnQtc2l6ZTogMC42NXJlbTt9XHJcbi5hY2NvdW50X3BheXtoZWlnaHQ6Mi4zcmVtO3dpZHRoOjEwMCU7YmFja2dyb3VuZDogI2ZmZjtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWFlOWU5O31cclxuLmFjY291bnRfcGF5X2xpc3R7d2lkdGg6NTAlO2Zsb2F0OmxlZnQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZWFlOWU5O2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG4uYWNjb3VudF9wYXlfaWNvbnt3aWR0aDoxcmVtO2hlaWdodDoxcmVtO2Zsb2F0OmxlZnQ7bWFyZ2luLXRvcDogMC42cmVtO21hcmdpbi1sZWZ0OiAzMCU7bWFyZ2luLXJpZ2h0OiA4JTt9XHJcbi5hY2NvdW50X3BheV90e2ZvbnQtc2l6ZTogMC44cmVtO2NvbG9yOiNmOTRkMWI7bGluZS1oZWlnaHQ6IDIuM3JlbTtoZWlnaHQ6Mi4zcmVtO2Zsb2F0OmxlZnQ7fVxyXG4ubW9yZWJveHtwYWRkaW5nOiAwLjVyZW0gMHB4O2hlaWdodDogMy4xcmVtO2ZvbnQtc2l6ZTogMC43MnJlbTtib3JkZXItdG9wOjFweCBzb2xpZCAjZGVkZmUwO21hcmdpbi10b3A6IDAuMzVyZW07fVxyXG4ubW9yZWJveD5he2Rpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMjUlO2hlaWdodDogMy4xcmVtO31cclxuLm1vcmVib3gyPmF7ZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiAyNCU7aGVpZ2h0OiAzcmVtO31cclxuLm1vcmVib3gye3BhZGRpbmctdG9wOiAwLjVyZW07aGVpZ2h0OiAyLjVyZW07Zm9udC1zaXplOiAwLjY1cmVtO2JvcmRlci10b3A6MXB4IHNvbGlkICNkZWRmZTA7bWFyZ2luLXRvcDogMC4zNXJlbTt9XHJcbi5tb3JlYm94bGl7d2lkdGg6IDIwJTtmbG9hdDogbGVmdDtjb2xvcjogIzMzMzt9XHJcbi5tb3JlYm94bGkye3dpZHRoOiAxMDAlO2Zsb2F0OiBsZWZ0O2NvbG9yOiAjMzMzO31cclxuLm1vcmVib3hpbWd7d2lkdGg6IDEuN3JlbTtoZWlnaHQ6IDEuN3JlbTttYXJnaW4tYm90dG9tOiAwLjJyZW07fVxyXG4ubW9yZWJveGltZzJ7d2lkdGg6IDEuMnJlbTtoZWlnaHQ6IDEuMnJlbTttYXJnaW4tYm90dG9tOiAwLjJyZW07fVxyXG4ubWFtYm94e3BhZGRpbmc6IDAuNXJlbTt9XHJcbi5tb3JlX3RvcHt0ZXh0LWFsaWduOiBsZWZ0O2ZvbnQtd2VpZ2h0OiBib2xkO2hlaWdodDogMXJlbTtmb250LXNpemU6IDAuN3JlbTt9XHJcbi8qIOWIl+ihqDUgKi9cclxuLm1pbmVvcmRlcntwYWRkaW5nOiAwcHggMC43cmVtO2JhY2tncm91bmQtY29sb3I6IHdoaXRlO21hcmdpbi10b3A6IDAuNHJlbTtib3JkZXItdG9wOiAxcHggc29saWQgI0RFREZFMDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFREZFMDt9XHJcbi5taW5lb3JkZXIgYTpsYXN0LWNoaWxkIGxpe2JvcmRlcjogbm9uZTt9XHJcbi5taW5lb3JkZXIgbGl7aGVpZ2h0OiAycmVtO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVERkUwO31cclxuLm1pbmVvcmRlciAubm9ib3JkZXJ7Ym9yZGVyOiBub25lO31cclxuLm9yZGVybGVmdHtmbG9hdDogbGVmdDtsaW5lLWhlaWdodDogMnJlbTt9XHJcbi5vcmRlcmxlZnQ+aW1ne3dpZHRoOiAwLjhyZW07aGVpZ2h0OiAwLjhyZW07ZmxvYXQ6IGxlZnQ7bWFyZ2luLXRvcDogMC42cmVtO21hcmdpbi1yaWdodDogMC41cmVtO31cclxuLm9yZGVybGVmdD5kaXZ7ZmxvYXQ6IGxlZnQ7Zm9udC1zaXplOiAwLjdyZW07Y29sb3I6ICMyMjI7fVxyXG4ub3JkZXJfcmlnaHR7ZmxvYXQ6IHJpZ2h0O21hcmdpbi10b3A6IDAuNHJlbTt9XHJcbi5vcmRlcl9yaWdodD5pbWd7d2lkdGg6IDAuNXJlbTtoZWlnaHQ6IDAuOXJlbTtmbG9hdDogbGVmdDttYXJnaW4tbGVmdDogMC41cmVtO21hcmdpbi10b3A6IDAuM3JlbTt9XHJcbi5vcmRlcl9yaWdodHRleHR7ZmxvYXQ6IGxlZnQ7Zm9udC1zaXplOiAwLjg1cmVtO21hcmdpbi10b3A6IDAuM3JlbTt9XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */</style>

<style scoped>
  .ausection {
    background-color: #fff;
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0;
    padding: 0 .7rem;
    margin-top: .5rem
  }

  .ausection > .zhinamebox:nth-child(2) {
    border: none
  }

  .zhinamebox {
    height: 2.3rem;
    border-bottom: 1px solid #dedfe0;
    line-height: 2.3rem;
    font-size: .85rem
  }

  .phototext, .zhi_nameleft {
    width: 27%;
    float: left;
    text-align: left
  }

  .zhi_nameright {
    width: 1rem;
    height: 1rem;
    border: none;
    float: left;
    margin-top: .65rem;
    margin-right: .5rem
  }

  .sectionright {
    float: left;
    width: 72%;
    height: 2.3rem
  }

  .submit {
    width: 93%;
    height: 2.2rem;
    background-color: #dc4537;
    color: #fff;
    margin: 3rem auto 1rem;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    display: block
  }

  .lock {
    width: .5rem;
    height: .9rem;
    margin-left: .5rem;
    float: right;
    margin-top: .65rem
  }

  .exitbtn {
    background-color: #fff;
    border-top: 1px solid #dedfe0;
    border-bottom: 1px solid #dedfe0;
    height: 2.5rem;
    width: 100%;
    margin-top: .5rem;
    border-left: none;
    border-right: none;
    font-size: .95rem
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/pages/Mine/setting.vue */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9wYWdlcy9NaW5lL3NldHRpbmcudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFdBQVcsc0JBQXVCLDZCQUE4QixnQ0FBaUMsQUFDaEcsZ0JBQW9CLGdCQUFtQixDQUN2QyxBQUNELG9DQUFvQyxXQUFhLENBQ2hELEFBQ0QsWUFBWSxjQUFlLGdDQUFpQyxtQkFBb0IsZ0JBQW1CLENBQ2xHLEFBQ0QseUJBQXlCLFVBQVcsV0FBWSxlQUFpQixDQUNoRSxBQUNELGVBQWUsV0FBWSxBQUFZLFlBQWEsWUFBWSxXQUFZLGtCQUFvQixrQkFBcUIsQ0FDcEgsQUFDRCxjQUFjLFdBQVksVUFBVyxhQUFlLENBQ25ELEFBQ0QsUUFBUSxVQUFXLGNBQWUseUJBQTBCLFdBQWEsc0JBQXVCLFlBQVksa0JBQW1CLGlCQUFrQixBQUNoSixhQUFlLENBQ2YsQUFDRCxNQUFNLFlBQWMsYUFBZSxrQkFBb0IsWUFBYSxpQkFBb0IsQ0FDdkYsQUFDRCxTQUFTLHNCQUF1Qiw2QkFBOEIsZ0NBQWlDLGNBQWUsV0FBWSxpQkFBbUIsQUFDN0ksaUJBQWtCLGtCQUFtQixnQkFBbUIsQ0FDdkQiLCJmaWxlIjoic2V0dGluZy52dWUiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hdXNlY3Rpb257YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtib3JkZXItdG9wOiAxcHggc29saWQgI0RFREZFMDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFREZFMDtcblx0cGFkZGluZzogMHB4IDAuN3JlbTttYXJnaW4tdG9wOiAwLjVyZW07XG59XG4uYXVzZWN0aW9uPi56aGluYW1lYm94Om50aC1jaGlsZCgyKXtib3JkZXI6IG5vbmU7XG59XG4uemhpbmFtZWJveHtoZWlnaHQ6IDIuM3JlbTtib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RFREZFMDtsaW5lLWhlaWdodDogMi4zcmVtO2ZvbnQtc2l6ZTogMC44NXJlbTtcbn1cbi5waG90b3RleHQsLnpoaV9uYW1lbGVmdHt3aWR0aDogMjclO2Zsb2F0OiBsZWZ0O3RleHQtYWxpZ246IGxlZnQ7XG59XG4uemhpX25hbWVyaWdodHt3aWR0aDogMXJlbTtmbG9hdDogbGVmdDtoZWlnaHQ6IDFyZW07Ym9yZGVyOm5vbmU7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXRvcDogMC42NXJlbTttYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5zZWN0aW9ucmlnaHR7ZmxvYXQ6IGxlZnQ7d2lkdGg6IDcyJTtoZWlnaHQ6IDIuM3JlbTtcbn1cbi5zdWJtaXR7d2lkdGg6IDkzJTtoZWlnaHQ6IDIuMnJlbTtiYWNrZ3JvdW5kLWNvbG9yOiAjREM0NTM3O2NvbG9yOiB3aGl0ZTttYXJnaW46IDNyZW0gYXV0byAxcmVtO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6IDZweDtmb250LXNpemU6IDEuMXJlbTtcblx0ZGlzcGxheTogYmxvY2s7XG59XG4ubG9ja3t3aWR0aDogMC41cmVtO2hlaWdodDogMC45cmVtO21hcmdpbi1sZWZ0OiAwLjVyZW07ZmxvYXQ6IHJpZ2h0O21hcmdpbi10b3A6IDAuNjVyZW07XG59XG4uZXhpdGJ0bntiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO2JvcmRlci10b3A6IDFweCBzb2xpZCAjREVERkUwO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVERkUwO2hlaWdodDogMi41cmVtO3dpZHRoOiAxMDAlO21hcmdpbi10b3A6IDAuNXJlbTtcbmJvcmRlci1sZWZ0OiBub25lO2JvcmRlci1yaWdodDogbm9uZTtmb250LXNpemU6IDAuOTVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */</style>

<style scoped>
  body {
    background-color: #fff
  }

  .login_header {
    width: 100%;
    height: 13rem;
    background: url(/static/img/1.png) no-repeat;
    background-size: 100%
  }

  .login_sj {
    width: 1.2rem;
    height: 1.2rem;
    float: left;
    margin: .5rem .4rem 0 4rem
  }

  .loginbtn {
    background-color: #1aad16
  }

  .loginbtn, .loginbtn2 {
    width: 90%;
    height: 2.2rem;
    color: #fff;
    border-radius: 6px;
    margin: 0 auto .5rem;
    line-height: 2.2rem;
    font-size: .85rem
  }

  .loginbtn2 {
    background-color: #611987
  }

  .newuser {
    margin-top: 1.5rem;
    font-size: .8rem;
    text-decoration: underline
  }

  /*# sourceURL=D:/webroot/h5.srefx.com/src/pages/Other/login.vue */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9wYWdlcy9PdGhlci9sb2dpbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsS0FBSyxxQkFBdUIsQ0FDM0IsQUFDRCxjQUFjLFdBQVksYUFBYyxtREFBa0Usb0JBQXNCLENBQy9ILEFBQ0QsVUFBVSxhQUFjLGNBQWUsV0FBWSx5QkFBOEIsQ0FDaEYsQUFDRCxVQUFVLHdCQUEwQixDQUNuQyxBQUNELHFCQUFxQixVQUFXLGNBQWUsV0FBWSxrQkFBbUIsb0JBQXNCLG1CQUFvQixnQkFBbUIsQ0FDMUksQUFDRCxXQUFXLHdCQUEwQixDQUNwQyxBQUNELFNBQVMsa0JBQW1CLGdCQUFrQix5QkFBMkIsQ0FDeEUiLCJmaWxlIjoibG9naW4udnVlIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5e2JhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubG9naW5faGVhZGVye3dpZHRoOiAxMDAlO2hlaWdodDogMTNyZW07YmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2lnbi9sb2dpbl9iZzEucG5nKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuLmxvZ2luX3Nqe3dpZHRoOiAxLjJyZW07aGVpZ2h0OiAxLjJyZW07ZmxvYXQ6IGxlZnQ7bWFyZ2luOjAuNXJlbSAwLjRyZW0gMHB4IDRyZW07XG59XG4ubG9naW5idG57YmFja2dyb3VuZC1jb2xvcjogIzFBQUQxNjtcbn1cbi5sb2dpbmJ0bjIsLmxvZ2luYnRue3dpZHRoOiA5MCU7aGVpZ2h0OiAyLjJyZW07Y29sb3I6ICNmZmY7Ym9yZGVyLXJhZGl1czogNnB4O21hcmdpbjogMCBhdXRvIDAuNXJlbTtsaW5lLWhlaWdodDogMi4ycmVtO2ZvbnQtc2l6ZTogMC44NXJlbTtcbn1cbi5sb2dpbmJ0bjJ7YmFja2dyb3VuZC1jb2xvcjogI0ZGOEEwMDtcbn1cbi5uZXd1c2Vye21hcmdpbi10b3A6IDEuNXJlbTtmb250LXNpemU6IDAuOHJlbTt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */</style>

<style scoped>
  .login_header {
    width: 100%;
    height: 13rem;
    background: url(/static/img/1.png) no-repeat;
    background-size: 100%
  }

  .newuser {
    margin-top: 1.5rem;
    font-size: .8rem;
    text-decoration: underline
  }

  .lpbox {
    padding: 0 1rem;
    background-color: #fff
  }

  .lpbtn {
    border-radius: 6px;
    color: #fff;
    border: none;
    outline: none;
    font-size: .85rem;
    background-color: #611987
  }

  .lpbtn, .lpmenu {
    width: 100%;
    height: 2.2rem
  }

  .lpmenu {
    margin-bottom: .8rem
  }

  .lpmenuimg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
    margin-top: .35rem;
    float: left
  }

  .lpmenuinp {
    width: 87%;
    border: 1px solid #611987;
    outline: none;
    text-indent: 1em;
    font-size: .8rem;
    height: 2.2rem;
    border-radius: 4px
  }

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

  /*# sourceURL=D:/webroot/h5.srefx.com/src/pages/Other/loginphone.vue */
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3dlYnJvb3QvaDUuc3JlZnguY29tL3NyYy9wYWdlcy9PdGhlci9sb2dpbnBob25lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxjQUFjLFdBQVksYUFBYyxtREFBa0Usb0JBQXNCLENBQy9ILEFBQ0QsU0FBUyxrQkFBbUIsZ0JBQWtCLHlCQUEyQixDQUN4RSxBQUNELE9BQU8sZUFBa0IscUJBQXVCLENBQy9DLEFBQ0QsT0FBa0Msa0JBQW1CLFdBQWEsWUFBYSxhQUFjLGlCQUFtQix3QkFBMEIsQ0FDekksQUFDRCxlQUZPLFdBQVksYUFBZSxDQUdqQyxBQURELFFBQW1DLG1CQUFzQixDQUN4RCxBQUNELFdBQVcsYUFBYyxjQUFlLG1CQUFxQixBQUFZLGtCQUFvQixVQUFZLENBQ3hHLEFBQ0QsV0FBVyxVQUFXLHlCQUEwQixhQUFjLGdCQUFpQixnQkFBa0IsY0FBZSxpQkFBbUIsQ0FDbEksQUFDRCxXQUFXLG1CQUFxQixXQUFXLGdDQUFxQyxXQUFhLGVBQWdCLFFBQVMsa0JBQW1CLEFBQ3JJLE9BQVUsUUFBVyxjQUFlLFVBQVksQ0FDbkQiLCJmaWxlIjoibG9naW5waG9uZS52dWUiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sb2dpbl9oZWFkZXJ7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxM3JlbTtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9zaWduL2xvZ2luX2JnMS5wbmcpIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG4ubmV3dXNlcnttYXJnaW4tdG9wOiAxLjVyZW07Zm9udC1zaXplOiAwLjhyZW07dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ubHBib3h7cGFkZGluZzogMHB4IDFyZW07YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5scGJ0bnt3aWR0aDogMTAwJTtoZWlnaHQ6IDIuMnJlbTtib3JkZXItcmFkaXVzOiA2cHg7Y29sb3I6IHdoaXRlO2JvcmRlcjogbm9uZTtvdXRsaW5lOiBub25lO2ZvbnQtc2l6ZTogMC44NXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4QTAwO1xufVxuLmxwbWVudXt3aWR0aDogMTAwJTtoZWlnaHQ6IDIuMnJlbTttYXJnaW4tYm90dG9tOiAwLjhyZW07XG59XG4ubHBtZW51aW1ne3dpZHRoOiAxLjVyZW07aGVpZ2h0OiAxLjVyZW07bWFyZ2luLXJpZ2h0OiAwLjVyZW07ZmxvYXQ6IGxlZnQ7bWFyZ2luLXRvcDogMC4zNXJlbTtmbG9hdDogbGVmdDtcbn1cbi5scG1lbnVpbnB7d2lkdGg6IDg3JTtib3JkZXI6IDFweCBzb2xpZCAjRkY4QTAwO291dGxpbmU6IG5vbmU7dGV4dC1pbmRlbnQ6IDFlbTtmb250LXNpemU6IDAuOHJlbTtoZWlnaHQ6IDIuMnJlbTtib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubG9naW5ib21ie3BhZGRpbmc6IDAuNXJlbSAxcmVtO3dpZHRoOjRyZW07YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO2NvbG9yOiB3aGl0ZTtwb3NpdGlvbjogZml4ZWQ7dG9wOiA0MCU7Ym9yZGVyLXJhZGl1czogNHB4O1xuICAgIGxlZnQ6IDBweDtyaWdodDogMHB4O21hcmdpbjogMCBhdXRvO3otaW5kZXg6IDExO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */</style>
