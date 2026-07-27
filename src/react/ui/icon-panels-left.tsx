import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgOGMwLTEuODg2IDAtMi44MjguNTg2LTMuNDE0QzUuMTcyIDQgNi4xMTQgNCA4IDRoNHYxNkg4Yy0xLjg4NiAwLTIuODI4IDAtMy40MTQtLjU4NkM0IDE4LjgyOCA0IDE3Ljg4NiA0IDE2VjhaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDIwaDRjMS44ODYgMCAyLjgyOCAwIDMuNDE0LS41ODZDMjAgMTguODI4IDIwIDE3Ljg4NiAyMCAxNlY4YzAtMS44ODYgMC0yLjgyOC0uNTg2LTMuNDE0QzE4LjgyOCA0IDE3Ljg4NiA0IDE2IDRIOGMtMS44ODYgMC0yLjgyOCAwLTMuNDE0LjU4NkM0IDUuMTcyIDQgNi4xMTQgNCA4djhjMCAxLjg4NiAwIDIuODI4LjU4NiAzLjQxNEM1LjE3MiAyMCA2LjExNCAyMCA4IDIwaDRabTAtMTZ2MTYiLz48L3N2Zz4=)
 */
export const IconPanelsLeft: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-panels-left'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M4 8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4v16H8c-1.886 0-2.828 0-3.414-.586C4 18.828 4 17.886 4 16V8Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16V8c0-1.886 0-2.828-.586-3.414C18.828 4 17.886 4 16 4H8c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v8c0 1.886 0 2.828.586 3.414C5.172 20 6.114 20 8 20h4Zm0-16v16'
      />
    </svg>
  )
}
