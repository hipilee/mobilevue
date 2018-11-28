<template>
    <div class="cardsection">
      <div class="card_namebox">
        <span>手机号</span>
        <input type="number" maxlength="11" placeholder="请输入您的手机号">
      </div>
      <div class="card_namebox">
        <span>验证码</span>
        <input type="number" placeholder="请输入您的验证码">
        <button class="yzmbtn">获取验证码</button>
      </div>
      <div class="card_namebox">
        <span>密码</span>
        <input type="text" placeholder="请设置手机登录密码"> <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFDNjdFOTg1REUxNzExRTZBMzZGRThEMjBFRDUzMDU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFDNjdFOTg2REUxNzExRTZBMzZGRThEMjBFRDUzMDU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUM2N0U5ODNERTE3MTFFNkEzNkZFOEQyMEVENTMwNTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2N0U5ODRERTE3MTFFNkEzNkZFOEQyMEVENTMwNTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz63K7Y2AAACi0lEQVR42uyXz0tUURTH35tkrDSkIoaoVoUhSVAERW2ahSjZItqI2p8QNtHGFPqxmYQWRdN/UPZj0yJBEBe2iHAxKLWoMQxmExHSQhqLJJu+R74Dp8u7976pIMl34MO8d989537f3HPPvS8MrlSDf2nV67/ep4I1ZomgRFAiaN0Jaqiz/wZwDJwEh0Er2AWa+HwJvAdvwQx4BqbByt8WtBecB70g4+iXBltBOzjLto/gIbgL3v3plO0G98AcyBliyuAiaAMbSRvbyqpfhr4S4z7Y8zuCQv4jb8A5TpW222A/f0vgGykZz8zp7gevGTuMK6gZPAEFXps2wn9h2fGiy+wzYolf4BjNPkE7wBQ4YxmoCIbU/UEwBj6DfES8IfpEmYwxFV5dHTNSUAuYAEccb35NTgy8ln4vwGnwCgyDH+bpgj42kxgTENViCpLfR+CQw/krmDTyqLbcp5VQ0ybpazMZ8zFEpbSgy6DLs+LKKm82g+Pq2VFbktKn7IndWUuFlFpVPks7np0AN8E2IsE3xfSNTOo888dXk2qBvzB/tF0Cn8gpNU1p+rpMxr6hBUky9oBZh1Mj6FD3OW4Vpi3xWc066GszGbMHZ+sVc5Utci6LnlUWqhIgUzUOKhQyzraiSgXXKpN+nRCzaKtDCyALnjqWaV7dvwTdYAuLXDfbApUKtjIiY2QhZsFXqSssWgO8Nm0Q3PIkapp9Bi3xBzhGJe5eVmV5PwBGI44POe5bF3gEaaSIVraVjDwKGGOUMQu2uhXG/FDcx7fqA9vrPEPJqnsA7oB534diWOeXawMPaFlWWNnVd6pNUqbgA48as9wXpYp/j/vlWu+JUQI/J8khPxGUCEoE/ZeCfgowAETvkZvglPLaAAAAAElFTkSuQmCC"
        alt="" class="phoneicon"> <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE5MDQ5QTQ1REUxNzExRTY4ODU3RDJDRTNEMjdEMDZDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE5MDQ5QTQ2REUxNzExRTY4ODU3RDJDRTNEMjdEMDZDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTkwNDlBNDNERTE3MTFFNjg4NTdEMkNFM0QyN0QwNkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTkwNDlBNDRERTE3MTFFNjg4NTdEMkNFM0QyN0QwNkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6VkCIHAAACfUlEQVR42mL8//8/w2ACTAyDDLBQbEI3I2X6S/8P7hAaJlHWzWgAJIOB2BqIpaGYFYjfAPENID4MxBuA+AKpRjOSlMu6GR2AZCsQWxGp4xAQVwPxEWLTEHEO6mbkApITgTiFjPAEWTADiIuA+AflibqbURhI7iPTMWBPA3EmEO8GYn7KEjUkZLYCsTkV0qsNEO8EYnZKctkkKjkGBkBm9ZLnoG5GRyCZjEP2CxGW41KTBcQW5IRQK44E6gZMiLxQg7HliL9AnAjEIDU+ONJUG2nZHlLOnMei/j3QMUJI6kAhOBtqCbJjFiNZ/h1HulEB4rvE5rJgHOKCQEdkI2XZuUAyFRpS6I4BgTw8idiblCizwROVk4GOSkLiz4UWCeiOAUVpPx5z3ElxkAaBcmUOmqPmYXHMFKSoxAa0SXGQEBGFHbqjSHEMJPqpXNv/A+JfWMR/kFClEO2g1wQMAyXgBGCiXoJFbh40TRGqJD+Q4qCbJDoGFE1JJDrqKintIVB7xgmHXDoWx0xBcwyM5gDiqTjM2UlKCK3FIf4OWvbACkbkBAxJ6KghNR2If+IwaytpDbRuxoNA0g6LjB8QbwHiAmhFyYglseZCQyYUiFdhMWMXvBwiuoHWzWgLJA/iyL4/CTUj8Kj5B61cT5PWQCv9fxja0sMG2InI1rjUTIQ7hoxyCNTsPErF9hCo5VlBfgOt9P8PaCV4mAqO2Q/EgTgKUxJK6tL/H8FtIEhuImcgAJRm+oDYA4g/UaejCAqp0v+50O7PPhIcA2rYWwJxMaGQIa9fhsiBmkAyCNpMAbUMBOANOERHEVSW3SK1b89I8XDM6GADnQHj6AgaAQAQYACuEbRUBPz9wgAAAABJRU5ErkJggg=="
        alt="" class="phoneicon"></div>
      <p class="phoneremark">密码为6-12位字符至少包含数字、字母符号</p>
      <button class="phonebtn" @click="doRegister">注&nbsp;&nbsp;&nbsp;&nbsp;册</button> <!---->
    </div>
</template>

<script>
  export default {
    name: "register",
  }
</script>

<style scoped>

</style>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .cardsection{
    float:left;
    text-align: left;
  }
  .card_namebox{

  }
  .card_namebox>span{
    width: 23%;
  }
  .card_namebox>input{
    height: 2.3rem;
    border: none;
    outline: none;
    font-size: .75rem;
  }
</style>


