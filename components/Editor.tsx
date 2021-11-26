import React from 'react'
import EditorJs from '@editorjs/editorjs'

const Editor: React.FC = () => {
  React.useEffect(() => {
    const editor = new EditorJs({
      holder: 'editor',
      placeholder: 'Введите текст статьи',
    })

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy()
        })
        .catch((e) => console.error('ERROR editor cleanup', e))
    }
  }, [])

  return <div id="editor" />
}

export default Editor
