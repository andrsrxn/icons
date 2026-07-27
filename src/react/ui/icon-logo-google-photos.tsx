import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDEyVjMuNzAzQTUuMTA2IDUuMTA2IDAgMCAxIDE1Ljk5IDEySDEyWm0wIDB2OC4yOTdBNS4xMDYgNS4xMDYgMCAwIDEgOC4wMSAxMkgxMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAxMlYzLjcwM0E1LjEwNiA1LjEwNiAwIDAgMSAxNS45OSAxMk0xMiAxMkgzLjcwM0E1LjEwNiA1LjEwNiAwIDAgMSAxMiA4LjAxTTEyIDEydjguMjk3QTUuMTA2IDUuMTA2IDAgMCAxIDguMDEgMTJNMTIgMTJoOC4yOTdBNS4xMDYgNS4xMDYgMCAwIDEgMTIgMTUuOTkiLz48L3N2Zz4=)
 */
export const IconLogoGooglePhotos: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-google-photos'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 12V3.703A5.106 5.106 0 0 1 15.99 12H12Zm0 0v8.297A5.106 5.106 0 0 1 8.01 12H12Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 12V3.703A5.106 5.106 0 0 1 15.99 12M12 12H3.703A5.106 5.106 0 0 1 12 8.01M12 12v8.297A5.106 5.106 0 0 1 8.01 12M12 12h8.297A5.106 5.106 0 0 1 12 15.99'
      />
    </svg>
  )
}
