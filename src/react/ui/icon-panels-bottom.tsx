import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDIwYzEuODg2IDAgMi44MjggMCAzLjQxNC0uNTg2QzIwIDE4LjgyOCAyMCAxNy44ODUgMjAgMTZ2LTRINHY0YzAgMS44ODYgMCAyLjgyOC41ODYgMy40MTRDNS4xNzIgMjAgNi4xMTQgMjAgOCAyMGg4WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMCAxMlY0SDR2OG0xNiAwdjhINHYtOG0xNiAwSDQiLz48L3N2Zz4=)
 */
export const IconPanelsBottom: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-panels-bottom'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M16 20c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.885 20 16v-4H4v4c0 1.886 0 2.828.586 3.414C5.172 20 6.114 20 8 20h8Z'
        opacity='.2'
      />
      <path stroke='currentColor' strokeWidth='1.5' d='M20 12V4H4v8m16 0v8H4v-8m16 0H4' />
    </svg>
  )
}
