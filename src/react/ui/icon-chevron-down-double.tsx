import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTkuNTc3IDEyLjM4OS00LjY2NSA0LjkzNWMtMS4zNjMgMS40NDEtMi4wNDQgMi4xNjItMi45MDUgMi4xNjItLjg2IDAtMS41NDMtLjcyLTIuOTA2LTIuMTZsLTQuNjc4LTQuOTM4bTE1LjE1NC04LTQuNjY1IDQuOTM2Yy0xLjM2MyAxLjQ0MS0yLjA0NCAyLjE2Mi0yLjkwNSAyLjE2Mi0uODYgMC0xLjU0My0uNzItMi45MDYtMi4xNkw0LjQyMyA0LjM4OSIvPjwvc3ZnPg==)
 */
export const IconChevronDownDouble: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-chevron-down-double'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m19.577 12.389-4.665 4.935c-1.363 1.441-2.044 2.162-2.905 2.162-.86 0-1.543-.72-2.906-2.16l-4.678-4.938m15.154-8-4.665 4.936c-1.363 1.441-2.044 2.162-2.905 2.162-.86 0-1.543-.72-2.906-2.16L4.423 4.389'
      />
    </svg>
  )
}
