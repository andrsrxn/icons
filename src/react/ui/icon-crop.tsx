import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYuMDkxIDEwYzAtMS44ODYgMC0yLjgyOC41ODYtMy40MTRDNy4yNjMgNiA4LjIwNiA2IDEwLjA5MiA2SDE0YzEuODg2IDAgMi44MjggMCAzLjQxNC41ODZDMTggNy4xNzIgMTggOC4xMTQgMTggMTB2My45MDljMCAxLjg4NSAwIDIuODI4LS41ODYgMy40MTQtLjU4Ni41ODYtMS41MjguNTg2LTMuNDE0LjU4NmgtMy45MDljLTEuODg1IDAtMi44MjggMC0zLjQxNC0uNTg2LS41ODYtLjU4Ni0uNTg2LTEuNTI5LS41ODYtMy40MTRWMTBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy40MTQgNi4wMWgxMC41NzdjMS44ODUgMCAyLjgyOCAwIDMuNDE0LjU4NS41ODUuNTg2LjU4NSAxLjUyOS41ODUgMy40MTR2MTAuNTc3bTIuNTk2LTIuNjEzaC0xMC41NmMtMS44ODUgMC0yLjgyOCAwLTMuNDE0LS41ODUtLjU4NS0uNTg2LS41ODUtMS41My0uNTg1LTMuNDE1VjMuNDE0Ii8+PC9zdmc+)
 */
export const IconCrop: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-crop'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6.091 10c0-1.886 0-2.828.586-3.414C7.263 6 8.206 6 10.092 6H14c1.886 0 2.828 0 3.414.586C18 7.172 18 8.114 18 10v3.909c0 1.885 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-3.909c-1.885 0-2.828 0-3.414-.586-.586-.586-.586-1.529-.586-3.414V10Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.414 6.01h10.577c1.885 0 2.828 0 3.414.585.585.586.585 1.529.585 3.414v10.577m2.596-2.613h-10.56c-1.885 0-2.828 0-3.414-.585-.585-.586-.585-1.53-.585-3.415V3.414'
      />
    </svg>
  )
}
