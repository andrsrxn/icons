import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNSAxMmE4LjUgOC41IDAgMSAwLTguNSA4LjVzLS44ODMtNC41MTkgMS40NjQtNi44NjZDMTUuODEgMTEuMjg3IDIwLjUgMTIgMjAuNSAxMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAyMC41czIuNzcyLTIuNzA0IDQuMzExLTQuMjQ4QTg4MC45NzggODgwLjk3OCAwIDAgMCAyMC41IDEyYTguNSA4LjUgMCAxIDAtOC41IDguNVptOC41LTguNXMtNC42ODktLjcxMy03LjAzNiAxLjYzNEMxMS4xMTYgMTUuOTgxIDEyIDIwLjUgMTIgMjAuNSIvPjwvc3ZnPg==)
 */
export const IconSticker: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-sticker'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.5 12a8.5 8.5 0 1 0-8.5 8.5s-.883-4.519 1.464-6.866C15.81 11.287 20.5 12 20.5 12Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 20.5s2.772-2.704 4.311-4.248A880.978 880.978 0 0 0 20.5 12a8.5 8.5 0 1 0-8.5 8.5Zm8.5-8.5s-4.689-.713-7.036 1.634C11.116 15.981 12 20.5 12 20.5'
      />
    </svg>
  )
}
