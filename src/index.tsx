import {Plugin} from "./Icons";
import dataClz from './Data'

import SliderView from "./slider-view/View";

export default {
  namespace: "mybricks.demos.plugin",
  title: "样例",
  author: "CheMingjun",
  ['author.zh']: "车明君",
  version: "1.0.0",
  description: "各类插件的Demos",
  types: ['connector'],
  data: dataClz,
  contributes: {
    sliderView: {
      tab: {//在SliderView扩展一个Tab
        title: "主题",
        icon: Plugin,
        apiSet: ['component'],
        render(args) {//View渲染
          return <SliderView {...args}/>
        }
      },
    }
  },
  onLoad(args) {

  },
  beforeDump(args) {//当dump总体数据时回调（保存）
    //debugger
  }
}
