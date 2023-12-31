'use client'

import { useLayoutEffect, useState } from 'react'

const standardWidth = 1200 // 基準サイズ

export const useViewport = () => {
  const [viewport, setViewport] = useState('width=device-width,initial-scale=1.0,maximum-scale=1.0')

  const handleWindowResize = () => {
    if (window != undefined) {
      setViewport(
        `width=${
          window.outerWidth > standardWidth ? 'device-width' : standardWidth
        },maximum-scale=1.0`,
      )
    } else {
      return
    }
  }

  useLayoutEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { viewport }
}
