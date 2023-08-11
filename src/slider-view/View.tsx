import css from './View.less'
import {useCallback, useEffect, useMemo} from "react";

/**
 *
 * @param theme {get,set,remove}
 */
export default function ({component, themes}) {

  const allComs = component.getAll()

  const addComponentThemes = useCallback(() => {
    themes.addComThemes([
      {
        id: 'test-uuid',
        title: '测试风格',
        namespace: 'mybricks.normal-pc.custom-button',
        css: {
          '.button': {'backgroundColor': 'red'}
        }
      }
    ])
  }, [])


  return (
    <div className={css.view}>

      <button onClick={addComponentThemes}>添加风格</button>

    </div>
  )
}