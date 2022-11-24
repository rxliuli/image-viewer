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

export function App() {
  const [url, setUrl] = useState<string>()
  useEffect(() => {
    if ('launchQueue' in window && 'files' in LaunchParams.prototype) {
      launchQueue.setConsumer(async (launchParams) => {
        if (!launchParams.files.length) {
          return
        }
        const s = URL.createObjectURL(await launchParams.files[0].getFile())
        setUrl(s)
      })
    }
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
  return url ? <img src={url} /> : <DragImage />
}
