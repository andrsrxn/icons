import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTMgOC41IDEgMVM1LjUgOC4zOTggNiA5Yy41MDkuNjA5IDEuODYzIDcuNjUgMi41IDkgLjU1NiAxLjE4NCAxLjk3OCAyLjg5IDQgMS41QzE0LjUgMTggMjAgMTQgMjEgOGMuNDQ0LTIuNjYxLTEtNC0yLjUtNC0yIDAtNC4wNDcgMS4yMDItNC41IDQgMi4wNS0xLjI1NCAyLjU1MSAxIDEuNSAzLTEuMDUyIDItMiAzLTIuNSAzLS40OSAwLS45MjQtMS4xNjUtMS41LTMuNS0uNTktMi40Mi0uNS02LjUtMy02LjVTMyA4LjUgMyA4LjVaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMyA4LjUgMSAxUzUuNSA4LjM5OCA2IDljLjUwOS42MDkgMS44NjMgNy42NSAyLjUgOSAuNTU2IDEuMTg0IDEuOTc4IDIuODkgNCAxLjVDMTQuNSAxOCAyMCAxNCAyMSA4Yy40NDQtMi42NjEtMS00LTIuNS00LTIgMC00LjA0NyAxLjIwMi00LjUgNCAyLjA1LTEuMjU0IDIuNTUxIDEgMS41IDMtMS4wNTIgMi0yIDMtMi41IDMtLjQ5IDAtLjkyNC0xLjE2NS0xLjUtMy41LS41OS0yLjQyLS41LTYuNS0zLTYuNVMzIDguNSAzIDguNVoiLz48L3N2Zz4=)
 */
export const IconLogoVimeo: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-vimeo'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m3 8.5 1 1S5.5 8.398 6 9c.509.609 1.863 7.65 2.5 9 .556 1.184 1.978 2.89 4 1.5C14.5 18 20 14 21 8c.444-2.661-1-4-2.5-4-2 0-4.047 1.202-4.5 4 2.05-1.254 2.551 1 1.5 3-1.052 2-2 3-2.5 3-.49 0-.924-1.165-1.5-3.5-.59-2.42-.5-6.5-3-6.5S3 8.5 3 8.5Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m3 8.5 1 1S5.5 8.398 6 9c.509.609 1.863 7.65 2.5 9 .556 1.184 1.978 2.89 4 1.5C14.5 18 20 14 21 8c.444-2.661-1-4-2.5-4-2 0-4.047 1.202-4.5 4 2.05-1.254 2.551 1 1.5 3-1.052 2-2 3-2.5 3-.49 0-.924-1.165-1.5-3.5-.59-2.42-.5-6.5-3-6.5S3 8.5 3 8.5Z'
      />
    </svg>
  )
}
