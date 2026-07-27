import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxLjA2NiAxMS44MTdjMCAuNzQ5IDAgMS4xMjMtLjEzMSAxLjQxNWExLjUgMS41IDAgMCAxLS43NTcuNzU4Yy0uMjkyLjEzLS42NjcuMTMtMS40MTUuMTMtLjc1IDAtMS4xMjMgMC0xLjQxNi0uMTNhMS41IDEuNSAwIDAgMS0uNzU3LS43NThjLS4xMy0uMjkyLS4xMy0uNjY2LS4xMy0xLjQxNVY2LjE4YzAtLjc1IDAtMS4xMjMuMTMtMS40MTZhMS41IDEuNSAwIDAgMSAuNzU3LS43NTdjLjI5My0uMTMuNjY3LS4xMyAxLjQxNi0uMTMuNzQ4IDAgMS4xMjMgMCAxLjQxNS4xMy4zMzcuMTUuNjA2LjQyLjc1Ny43NTcuMTMuMjkzLjEzLjY2Ny4xMyAxLjQxNnY1LjYzN1ptLTcuMTIzIDQuODI3Yy4wODYtMS4wOTcuNzUyLTEuNzg3IDEuMjA5LTIuMzM0YS44OTguODk4IDAgMCAwIC4yMDEtLjU4VjQuODc4YTEgMSAwIDAgMC0xLTFINi44OTFhMiAyIDAgMCAwLTEuODc0IDEuM0wyLjkwOCAxMC44MmEyIDIgMCAwIDAgMS44NzQgMi43aDQuNDgzYy40NDYgMCAuNzYuNjE4LjU5IDEuMDMtLjI2NS42MzktLjUwMiAxLjU5LS40NDIgMi44OTEuMSAyLjE4IDEuOTQxIDIuNTkgMy40NjIgMi42NjYuNTc3LjAyOSAxLjAzNy0uNDcyIDEuMDIyLTEuMDVhMjQuNjU3IDI0LjY1NyAwIDAgMSAuMDQ2LTIuNDEyWiIvPjwvc3ZnPg==)
 */
export const IconDislikeFilled: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-dislike-filled'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M21.066 11.817c0 .749 0 1.123-.131 1.415a1.5 1.5 0 0 1-.757.758c-.292.13-.667.13-1.415.13-.75 0-1.123 0-1.416-.13a1.5 1.5 0 0 1-.757-.758c-.13-.292-.13-.666-.13-1.415V6.18c0-.75 0-1.123.13-1.416a1.5 1.5 0 0 1 .757-.757c.293-.13.667-.13 1.416-.13.748 0 1.123 0 1.415.13.337.15.606.42.757.757.13.293.13.667.13 1.416v5.637Zm-7.123 4.827c.086-1.097.752-1.787 1.209-2.334a.898.898 0 0 0 .201-.58V4.878a1 1 0 0 0-1-1H6.891a2 2 0 0 0-1.874 1.3L2.908 10.82a2 2 0 0 0 1.874 2.7h4.483c.446 0 .76.618.59 1.03-.265.639-.502 1.59-.442 2.891.1 2.18 1.941 2.59 3.462 2.666.577.029 1.037-.472 1.022-1.05a24.657 24.657 0 0 1 .046-2.412Z'
      />
    </svg>
  )
}
