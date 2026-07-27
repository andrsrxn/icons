import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjE3NSAxNC4xMjdhMy4zNSAzLjM1IDAgMSAxLTYuNyAwIDMuMzUgMy4zNSAwIDAgMSA2LjcgMFptMTAuMzUgMGEzLjM1IDMuMzUgMCAxIDEtNi43IDAgMy4zNSAzLjM1IDAgMCAxIDYuNyAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEwLjE3NSAxMy44MzNzMS4wMS0uNzAxIDEuODI1LS43MDFjLjgxNCAwIDEuODI1LjcgMS44MjUuN20tOS45MDctMS4zOCAyLjc1OC01LjI2OGMuNTAzLS45NjIgMS44OTktLjkwNiAyLjMyNC4wOTNtMTEuMDgyIDUuMTc1LTIuNzU4LTUuMjY4Yy0uNTAzLS45NjItMS44OTktLjkwNi0yLjMyNC4wOTNtLTQuODI1IDYuODVhMy4zNSAzLjM1IDAgMSAxLTYuNyAwIDMuMzUgMy4zNSAwIDAgMSA2LjcgMFptMTAuMzUgMGEzLjM1IDMuMzUgMCAxIDEtNi43IDAgMy4zNSAzLjM1IDAgMCAxIDYuNyAwWiIvPjwvc3ZnPg==)
 */
export const IconGlasses: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-glasses'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.175 14.127a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0Zm10.35 0a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.175 13.833s1.01-.701 1.825-.701c.814 0 1.825.7 1.825.7m-9.907-1.38 2.758-5.268c.503-.962 1.899-.906 2.324.093m11.082 5.175-2.758-5.268c-.503-.962-1.899-.906-2.324.093m-4.825 6.85a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0Zm10.35 0a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0Z'
      />
    </svg>
  )
}
