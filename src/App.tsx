import css from './App.module.css'
import 'file-system-access'
import { useEffect, useState } from 'preact/hooks'

declare global {
  export const launchQueue: LaunchQueue

  interface LaunchQueue {
    setConsumer(consumer: LaunchConsumer): void
  }

  interface LaunchConsumer {
    (launchParams: LaunchParams): void
  }

  class LaunchParams {
    readonly files: readonly FileSystemFileHandle[]
  }
}

function DragImage() {
  return (
    <div className={css.app}>
      <h2 class={css.content}>拖拽图片到这儿</h2>
    </div>
  )
}

const isBrowser = matchMedia('(display-mode: browser)').matches
window.addEventListener('DOMContentLoaded', () => {
  console.log('isBrowser', isBrowser)
  // if (!isBrowser) {
  //   const w = 800
  //   const h = 600
  //   window.resizeBy(
  //     (window.screen.width - w) / 2,
  //     (window.screen.height - h) / 2,
  //   )
  //   window.resizeTo(w, h)
  // }
})

export function App() {
  const [url, setUrl] = useState<string>()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if ('launchQueue' in window && 'files' in LaunchParams.prototype) {
      launchQueue.setConsumer(async (launchParams) => {
        if (!launchParams.files.length) {
          return
        }
        setUrl(URL.createObjectURL(await launchParams.files[0].getFile()))
      })
    }
    setMounted(true)
  }, [])
  async function onDrop(ev: DragEvent) {
    ev.preventDefault()
    const items = [...(ev.dataTransfer?.items ?? [])].filter(
      (item) => item.kind === 'file' && item.type.startsWith('image/'),
    )
    if (items.length === 0) {
      alert('找不到图片文件')
      return
    }
    const file = items[0].getAsFile()
    if (!file) {
      alert('无法读取文件')
      return
    }
    setUrl(URL.createObjectURL(file))
  }
  function onDragOver(ev: DragEvent) {
    ev.preventDefault()
  }
  useEffect(() => {
    window.addEventListener('drop', onDrop)
    window.addEventListener('dragover', onDragOver)
    return () => {
      window.removeEventListener('drop', onDrop)
      window.removeEventListener('dragover', onDragOver)
    }
  }, [])
  return mounted && (url ? <img class={css.img} src={url} /> : <DragImage />)
}
