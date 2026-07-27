import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMy43OTggMTMuNTY1LjYxMiAxLjIyMWMxLjU3NiAzLjE0NCAyLjM2NCA0LjcxNiAzLjYwNSA0LjcxIDEuMjQtLjAwNSAyLjAxNS0xLjU4NCAzLjU2My00Ljc0Mmw0LjYyNy05LjQ0Mm0tOC40MSA4LjI1My42MTIgMS4yMjFjMS41NzYgMy4xNDQgMi4zNjQgNC43MTYgMy42MDQgNC43MSAxLjI0MS0uMDA1IDIuMDE1LTEuNTg0IDMuNTYzLTQuNzQybDQuNjI4LTkuNDQyIi8+PC9zdmc+)
 */
export const IconCheckDouble: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-check-double'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.798 13.565.612 1.221c1.576 3.144 2.364 4.716 3.605 4.71 1.24-.005 2.015-1.584 3.563-4.742l4.627-9.442m-8.41 8.253.612 1.221c1.576 3.144 2.364 4.716 3.604 4.71 1.241-.005 2.015-1.584 3.563-4.742l4.628-9.442'
      />
    </svg>
  )
}
