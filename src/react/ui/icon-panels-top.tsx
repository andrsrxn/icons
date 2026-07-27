import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTggNGMtMS44ODYgMC0yLjgyOCAwLTMuNDE0LjU4NkM0IDUuMTcyIDQgNi4xMTQgNCA4djRoMTZWOGMwLTEuODg2IDAtMi44MjgtLjU4Ni0zLjQxNEMxOC44MjggNCAxNy44ODYgNCAxNiA0SDhaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTQgMTJ2OGgxNnYtOE00IDEyVjRoMTZ2OE00IDEyaDE2Ii8+PC9zdmc+)
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
      <path stroke='currentColor' strokeWidth='1.5' d='M4 12v8h16v-8M4 12V4h16v8M4 12h16' />
    </svg>
  )
}
