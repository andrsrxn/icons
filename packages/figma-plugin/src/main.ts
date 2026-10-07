/** biome-ignore-all lint/correctness/noUndeclaredVariables: global */
/** biome-ignore-all lint/style/noMagicNumbers: ok */
import { on, showUI } from '@create-figma-plugin/utilities'
import type { InsertIconHandler } from './types'

const TARGET_WIDTH = 24
const SPACING = 4

export default function () {
  on<InsertIconHandler>('INSERT_ICON', icon => {
    // createNodeFromSvg turns the raw SVG markup directly into real,
    // editable Figma vector layers - not an embedded image.
    const node = figma.createNodeFromSvg(icon.svg)
    node.name = icon.name

    if (node.width > 0 && Math.abs(node.width - TARGET_WIDTH) > 0.01) {
      node.rescale(TARGET_WIDTH / node.width)
    }

    const [selected] = figma.currentPage.selection
    const targetRef =
      selected && !selected.removed && 'x' in selected && 'width' in selected ? selected : null

    if (targetRef) {
      const parent = targetRef.parent ?? figma.currentPage
      parent.appendChild(node)
      node.x = targetRef.x + targetRef.width + SPACING
      node.y = targetRef.y + (targetRef.height - node.height) / 2
    } else {
      figma.currentPage.appendChild(node)
      const { center } = figma.viewport
      node.x = center.x - node.width / 2
      node.y = center.y - node.height / 2
    }

    figma.currentPage.selection = [node]
    figma.viewport.scrollAndZoomIntoView([node])
  })

  showUI({
    width: 400,
    height: 500,
  })
}
