import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjcxMyA1LjUzN2MwIC44NS0uNzQyIDEuNTM3LTEuNjU4IDEuNTM3LS45MTcgMC0xLjY2LS42ODgtMS42Ni0xLjUzN1MxMS4xMzkgNCAxMi4wNTYgNGMuOTE2IDAgMS42NTguNjg4IDEuNjU4IDEuNTM3Wm0tNC41NTYgNy43YzAgMS4xMjItMS4xMTIgMi4wMy0yLjQ4MyAyLjAzLTEuMzcyIDAtMi40ODMtLjkwOC0yLjQ4My0yLjAzIDAtMi4wMSAyLjQ4My0zLjg5NSAyLjQ4My0zLjg5NXMyLjQ4MyAxLjkwMSAyLjQ4MyAzLjg5NVptMTAuNzU1LjAwOGMwIDEuMTE3LTEuMTEgMi4wMjMtMi40OCAyLjAyMy0xLjM3IDAtMi40OC0uOTA2LTIuNDgtMi4wMjMgMC0yLjAwMyAyLjQ4LTMuODgxIDIuNDgtMy44ODFzMi40OCAxLjg5NCAyLjQ4IDMuODhaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIuMDU1IDcuMTE5YTEuNjU5IDEuNjU5IDAgMSAwIDAtMy4zMTggMS42NTkgMS42NTkgMCAwIDAgMCAzLjMxOFptMCAwVjIwbS0zLjQ1IDBoNi44OTltMy4zMy0xMS4yNDdjLTMuOCAwLTYuNzgtMS4wMzUtNi43OC0xLjAzNXMtMy4wOTIgMS02Ljk0NyAxbTQuMDUgNC4yNTVjMCAxLjIyNS0xLjExMiAyLjIxOC0yLjQ4MyAyLjIxOC0xLjM3MiAwLTIuNDgzLS45OTMtMi40ODMtMi4yMTggMC0yLjE5NiAyLjQ4LTQuMzA4IDIuNDgtNC4zMDhzMi40ODYgMi4xMyAyLjQ4NiA0LjMwOFptMTAuNzUuMDM2YzAgMS4yMjctMS4xMDggMi4yMjItMi40NzUgMi4yMjItMS4zNjYgMC0yLjQ3My0uOTk1LTIuNDczLTIuMjIyIDAtMi4xOTggMi40NjYtNC4zMDIgMi40NjYtNC4zMDJzMi40ODEgMi4xMjEgMi40ODEgNC4zMDJaIi8+PC9zdmc+)
 */
export const IconJustice: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-justice'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.713 5.537c0 .85-.742 1.537-1.658 1.537-.917 0-1.66-.688-1.66-1.537S11.139 4 12.056 4c.916 0 1.658.688 1.658 1.537Zm-4.556 7.7c0 1.122-1.112 2.03-2.483 2.03-1.372 0-2.483-.908-2.483-2.03 0-2.01 2.483-3.895 2.483-3.895s2.483 1.901 2.483 3.895Zm10.755.008c0 1.117-1.11 2.023-2.48 2.023-1.37 0-2.48-.906-2.48-2.023 0-2.003 2.48-3.881 2.48-3.881s2.48 1.894 2.48 3.88Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.055 7.119a1.659 1.659 0 1 0 0-3.318 1.659 1.659 0 0 0 0 3.318Zm0 0V20m-3.45 0h6.899m3.33-11.247c-3.8 0-6.78-1.035-6.78-1.035s-3.092 1-6.947 1m4.05 4.255c0 1.225-1.112 2.218-2.483 2.218-1.372 0-2.483-.993-2.483-2.218 0-2.196 2.48-4.308 2.48-4.308s2.486 2.13 2.486 4.308Zm10.75.036c0 1.227-1.108 2.222-2.475 2.222-1.366 0-2.473-.995-2.473-2.222 0-2.198 2.466-4.302 2.466-4.302s2.481 2.121 2.481 4.302Z'
      />
    </svg>
  )
}
