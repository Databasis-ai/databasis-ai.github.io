import { mdxAnnotations } from 'mdx-annotations'
import recmaNextjsStaticProps from 'recma-nextjs-static-props'

function recmaRemoveNamedExports() {
  return (/** @type {{ body: any[]; }} */ tree) => {
    tree.body = tree.body.map((node) => {
      if (node.type === 'ExportNamedDeclaration') {
        return node.declaration
      }
      return node
    })
  }
}

export const recmaPlugins = [
  mdxAnnotations.recma,
  recmaRemoveNamedExports,
  recmaNextjsStaticProps,
]
