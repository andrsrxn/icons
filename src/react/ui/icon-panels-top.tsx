import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTggNGMtMS44ODYgMC0yLjgyOCAwLTMuNDE0LjU4NkM0IDUuMTcyIDQgNi4xMTQgNCA4djRoMTZWOGMwLTEuODg2IDAtMi44MjgtLjU4Ni0zLjQxNEMxOC44MjggNCAxNy44ODYgNCAxNiA0SDhaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTQgMTJ2NGMwIDEuODg2IDAgMi44MjguNTg2IDMuNDE0QzUuMTcyIDIwIDYuMTE0IDIwIDggMjBoOGMxLjg4NiAwIDIuODI4IDAgMy40MTQtLjU4NkMyMCAxOC44MjggMjAgMTcuODg2IDIwIDE2di00TTQgMTJWOGMwLTEuODg2IDAtMi44MjguNTg2LTMuNDE0QzUuMTcyIDQgNi4xMTQgNCA4IDRoOGMxLjg4NiAwIDIuODI4IDAgMy40MTQuNTg2QzIwIDUuMTcyIDIwIDYuMTE0IDIwIDh2NE00IDEyaDE2Ii8+PC9zdmc+)
 */
export const IconPanelsTop: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-panels-top'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M8 4c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v4h16V8c0-1.886 0-2.828-.586-3.414C18.828 4 17.886 4 16 4H8Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M4 12v4c0 1.886 0 2.828.586 3.414C5.172 20 6.114 20 8 20h8c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4M4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h8c1.886 0 2.828 0 3.414.586C20 5.172 20 6.114 20 8v4M4 12h16'
      />
    </svg>
  )
}
