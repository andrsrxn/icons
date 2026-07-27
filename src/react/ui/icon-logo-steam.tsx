import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDMuNjk4YTguMzAyIDguMzAyIDAgMSAwIDAgMTYuNjA0IDguMzAyIDguMzAyIDAgMCAwIDAtMTYuNjA0Wm0zLjk2MiA4LjQ0MS01LjI4MyA0LjMwOWExLjcyOSAxLjcyOSAwIDAgMS0yLjQzNS0yLjQzNWw0LjMwOS01LjI4M2EyLjQyMiAyLjQyMiAwIDEgMSAzLjQwOSAzLjQxWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTguMjQ0IDE0LjAxMyA0LjMwOS01LjI4M20tMS44NzQgNy43MTggNS4yODMtNC4zMDlNOC4zNTYgMTMuODkgNC4wNTMgOS41ODhNMjAuMzAyIDEyYTguMzAyIDguMzAyIDAgMSAxLTE2LjYwNCAwIDguMzAyIDguMzAyIDAgMCAxIDE2LjYwNCAwWm0tMy40Ni0xLjczYTIuNDIxIDIuNDIxIDAgMSAxLTQuODQyIDAgMi40MjEgMi40MjEgMCAwIDEgNC44NDMgMFptLTUuNTM0IDQuODQzYTEuNzMgMS43MyAwIDEgMS0zLjQ1OSAwIDEuNzMgMS43MyAwIDAgMSAzLjQ2IDBaIi8+PC9zdmc+)
 */
export const IconLogoSteam: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-steam'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 3.698a8.302 8.302 0 1 0 0 16.604 8.302 8.302 0 0 0 0-16.604Zm3.962 8.441-5.283 4.309a1.729 1.729 0 0 1-2.435-2.435l4.309-5.283a2.422 2.422 0 1 1 3.409 3.41Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m8.244 14.013 4.309-5.283m-1.874 7.718 5.283-4.309M8.356 13.89 4.053 9.588M20.302 12a8.302 8.302 0 1 1-16.604 0 8.302 8.302 0 0 1 16.604 0Zm-3.46-1.73a2.421 2.421 0 1 1-4.842 0 2.421 2.421 0 0 1 4.843 0Zm-5.534 4.843a1.73 1.73 0 1 1-3.459 0 1.73 1.73 0 0 1 3.46 0Z'
      />
    </svg>
  )
}
