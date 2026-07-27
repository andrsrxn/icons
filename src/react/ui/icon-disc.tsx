import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjAuNWE4LjUgOC41IDAgMSAwIDAtMTcgOC41IDguNSAwIDAgMCAwIDE3Wm0zLTguNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02LjUxNyAxMS45OTVhNS40NjUgNS40NjUgMCAwIDEgMS42MDYtMy44NzIgNS40NjUgNS40NjUgMCAwIDEgMy44NzItMS42MDZtLjAxIDEwLjk2NmE1LjQ2NSA1LjQ2NSAwIDAgMCAzLjg3Mi0xLjYwNiA1LjQ2NSA1LjQ2NSAwIDAgMCAxLjYwNi0zLjg3Mk0yMC41IDEyYTguNSA4LjUgMCAxIDEtMTcgMCA4LjUgOC41IDAgMCAxIDE3IDBabS01Ljg3NiAwYTIuNjI0IDIuNjI0IDAgMSAxLTUuMjQ4IDAgMi42MjQgMi42MjQgMCAwIDEgNS4yNDggMFoiLz48L3N2Zz4=)
 */
export const IconDisc: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-disc'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm3-8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.517 11.995a5.465 5.465 0 0 1 1.606-3.872 5.465 5.465 0 0 1 3.872-1.606m.01 10.966a5.465 5.465 0 0 0 3.872-1.606 5.465 5.465 0 0 0 1.606-3.872M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-5.876 0a2.624 2.624 0 1 1-5.248 0 2.624 2.624 0 0 1 5.248 0Z'
      />
    </svg>
  )
}
