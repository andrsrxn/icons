import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNC40MiA3LjE1OGMuNjEzLS43MDMgMi4wMzktMi4yOSA0LjY3Ny0yLjk5NiAyLjI0Ny0uNjAyIDQuMTY3LS4zODUgNC44NDYtLjEzNG0yLjcxMS45MTVjLjQ1NC4yMSAxLjU4My45NDUgMi40NiAyLjIxNU01LjIyIDE5LjIxNUM0LjYzMiAxNi45IDQuMDg3IDExLjYyIDYuMzg2IDguOTY4YzIuNTkzLTIuOTg5IDYuNjc1LTMuNjkgMTAuMDE3LTEuMTEzIDQuMTI1IDMuMTggMy43NDkgOC41MzIgMi45MTQgOS45NjQtMS4xNDYgMS45NjQtNC43NDIgMS4xNi00Ljg3OC0xLjY4Mi0uMjE2LTQuNTM1LTEuODctNS4wMTYtMy40MDQtNC40NTItMS44ODguNjk1LTIuMzI0IDQuNjgxLS40MjYgOC40NDZtMS4yMi01LjM2M2MuMDM2LjgyNy4xNzYgMi4zMTQuNTYgMy4zNTguMzg0IDEuMDQ1IDEuMDY0IDIuMDgzIDEuNDEzIDIuMzcybS02Ljg3Ni01Ljg5Yy4wMTYuNzQzLjA3OCAyLjA4LjI1IDMuMDE4LjE3Ljk0LjQ3NCAxLjg3Mi42MyAyLjEzMm0tLjI5NC03Ljc1NGMuNDI3LTEuMzk3IDIuMjEyLTMuMzM5IDQuNzQ0LTMuMTI1IDMuNTU2LjMgNC4yODUgMy40NjQgNC41OTQgNC4yOS4yNDguNjYxLjM2MyAyLjM5LjM5IDMuMTcyIi8+PC9zdmc+)
 */
export const IconFingerprint: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-fingerprint'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4.42 7.158c.613-.703 2.039-2.29 4.677-2.996 2.247-.602 4.167-.385 4.846-.134m2.711.915c.454.21 1.583.945 2.46 2.215M5.22 19.215C4.632 16.9 4.087 11.62 6.386 8.968c2.593-2.989 6.675-3.69 10.017-1.113 4.125 3.18 3.749 8.532 2.914 9.964-1.146 1.964-4.742 1.16-4.878-1.682-.216-4.535-1.87-5.016-3.404-4.452-1.888.695-2.324 4.681-.426 8.446m1.22-5.363c.036.827.176 2.314.56 3.358.384 1.045 1.064 2.083 1.413 2.372m-6.876-5.89c.016.743.078 2.08.25 3.018.17.94.474 1.872.63 2.132m-.294-7.754c.427-1.397 2.212-3.339 4.744-3.125 3.556.3 4.285 3.464 4.594 4.29.248.661.363 2.39.39 3.172'
      />
    </svg>
  )
}
