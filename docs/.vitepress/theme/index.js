import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import "../../public/reset.css";
import "../../public/common.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
};
