<template>
    
    <!-- 海报html元素 -->
    <div id="posterHtml" :style="{backgroundImage: 'url('+posterHtmlBg+')'}" v-show="true">
        <div>{{posterContent}}</div>
        <!-- 二维码 -->
        <div class="qrcode"><div id="qrcodeImg"></div></div>
        <button @click="createPoster">点击  </button>
    </div>

</template>

<script>
 import QRCode from 'qrcodejs2'
  import html2canvas from 'html2canvas'

export default {
 data() {
      return {
        posterContent: 'xiarongwu', // 文案内容
        posterHtmlBg: require('./img/3.jpg'), // 背景图
        posterImg: '', // 最终生成的海报图片
      }
    },
    methods: {
    createQrcode(text) {
      // 生成二维码
      const qrcodeImgEl = document.getElementById('qrcodeImg')
      qrcodeImgEl.innerHTML = 'ahahahahah'
      let qrcode = new QRCode(qrcodeImgEl, {
        width: 256,
        height: 256,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
      qrcode.makeCode(text)
    },
     createPoster() {
      // 生成海报
      const vm = this
      const domObj = document.getElementById('posterHtml')
      html2canvas(domObj, {
        useCORS: true,
        allowTaint: false,
        logging: true,
        letterRendering: true,
        onclone(doc) {
          let e = doc.querySelector('#posterHtml')
          e.style.display = 'block'
        }
      }).then(function(canvas) {
        // 在微信里,可长按保存或转发
        vm.posterImg = canvas.toDataURL('image.png')
      })
    },
}
}
</script>

<style>

</style>