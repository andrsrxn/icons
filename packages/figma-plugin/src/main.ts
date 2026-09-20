/** biome-ignore-all lint/correctness/noUndeclaredVariables: global */
import { on, showUI } from '@create-figma-plugin/utilities'
import type { InsertIconHandler } from './types'

export default function () {
  on<InsertIconHandler>('INSERT_ICON', icon => {
    // createNodeFromSvg turns the raw SVG markup directly into real,
    // editable Figma vector layers - not an embedded image.
    const node = figma.createNodeFromSvg(icon.svg)
    node.name = icon.name

    // Place it at the current viewport center so it's immediately visible
    // regardless of where the user has scrolled/zoomed to.
    const { center } = figma.viewport
    node.x = center.x - node.width / 2
    node.y = center.y - node.height / 2

    figma.currentPage.appendChild(node)
    figma.currentPage.selection = [node]
    figma.viewport.scrollAndZoomIntoView([node])
  })

  showUI({
    width: 400,
    height: 450,
  })
}
