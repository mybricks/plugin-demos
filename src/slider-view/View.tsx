import css from './View.less'
import {useCallback, useEffect, useMemo} from "react";

/**
 *
 * @param theme {get,set,remove}
 */
export default function ({component}) {

  const allComs = component.getAll()


  return (
    <div className={css.view}>

      {JSON.stringify(allComs)}

    </div>
  )
}