import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'
import tailwindcssNesting from 'tailwindcss/nesting'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
        }),
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcssNesting, tailwindcss, postcssImport],
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#26A3FF ', // 全局主色
          'link-color': '#26A3FF', // 链接色
          'success-color': '#72c140', // 成功色
          'warning-color': '#faad14', // 警告色
          'error-color': '#ec5b56', // 错误色
          'font-size-base': '12px', // 主字号
          'heading-color': '#333333', // 标题色
          'text-color': '#333333', // 主文本色
          'text-color-secondary': '#888888', // 次文本色
          'disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
          'border-radius-base': '6px', // 组件/浮层圆角
          'border-color-base': 'rgba(0,0,0,0.15)', // 边框色
          'box-shadow-base': '-5px 0px 16px 0px rgba(0,0,0,0.14)', // 浮层阴影
          'height-lg': '36px', // 默认尺寸-大
          'height-base': '32px', // 默认尺寸-中
          'height-sm': '28px', // 默认尺寸-小
          'layout-body-background': 'white', // 默认页面背景颜色
          'layout-header-height': '40px', // 顶部栏高度
          'layout-header-background': 'transparent', // 顶部栏背景色
          'layout-sider-background': '#1E2441', // 侧边栏背景颜色
          'table-font-size': '12px', // 表格字体大小
          'table-header-bg-sm': '#ECECEC', //SIZE=SMALL表格header颜色
          'table-border-color': '#CCCCCC', //表格边框颜色
          'table-row-hover-bg': '#B0DEFF', // 表格 hover row 颜色
          'table-border-radius-base': '0px', //表格圆角
          'form-item-label-font-size': '12px', // 表单字体大小
          'input-height-base': '30px', // 表单高
          'text-sm': '12px', // 默认文字大小-小
          'btn-font-size-sm': '12px', // 默认按钮字体大小
          'input-hover-border-color': '#26A3FF',
        },
        javascriptEnabled: true,
      },
    },
  },
})
