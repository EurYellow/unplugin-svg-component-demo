import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 全局进度条的配置
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 1500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  parent: '#app' // 指定进度条的父容器
})

// 打开进度条
export function startProgress() {
  NProgress.start()
}

// 关闭进度条
export function closeProgress() {
  NProgress.done()
}
