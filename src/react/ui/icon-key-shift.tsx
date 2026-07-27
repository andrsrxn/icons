import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjY1IDEwLjczMmEuNS41IDAgMCAxIC41LS41aDEuNDE4Yy44ODcgMCAxLjMzMi0uOTU0LjcwNC0xLjUxMmwtNS41NjctNC45NWExLjA4NyAxLjA4NyAwIDAgMC0xLjQxIDBMNS43MjggOC43MmMtLjYyOC41NTgtLjE4MyAxLjUxMi43MDUgMS41MTJoMS40MTZhLjUuNSAwIDAgMSAuNS41djYuNDI1YzAgMS4zODMgMCAyLjA3NC40MSAyLjU1YTEuOSAxLjkgMCAwIDAgLjM3Mi4zMzFjLjUzNi4zNjUgMS4zMTQuMzY1IDIuODY5LjM2NSAxLjU1NSAwIDIuMzMyIDAgMi44NjktLjM2NS4xNC0uMDk1LjI2NS0uMjA2LjM3Mi0uMzMuNDEtLjQ3Ny40MS0xLjE2OC40MS0yLjU1MXYtNi40MjVaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTUuNjUgMTAuNzMyYS41LjUgMCAwIDEgLjUtLjVoMS40MThjLjg4NyAwIDEuMzMyLS45NTQuNzA0LTEuNTEybC01LjU2Ny00Ljk1YTEuMDg3IDEuMDg3IDAgMCAwLTEuNDEgMEw1LjcyOCA4LjcyYy0uNjI4LjU1OC0uMTgzIDEuNTEyLjcwNSAxLjUxMmgxLjQxNmEuNS41IDAgMCAxIC41LjV2Ni40MjVjMCAxLjM4MyAwIDIuMDc0LjQxIDIuNTVhMS45IDEuOSAwIDAgMCAuMzcyLjMzMWMuNTM2LjM2NSAxLjMxNC4zNjUgMi44NjkuMzY1IDEuNTU1IDAgMi4zMzIgMCAyLjg2OS0uMzY1LjE0LS4wOTUuMjY1LS4yMDYuMzcyLS4zMy40MS0uNDc3LjQxLTEuMTY4LjQxLTIuNTUxdi02LjQyNVoiLz48L3N2Zz4=)
 */
export const IconKeyShift: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-key-shift'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.65 10.732a.5.5 0 0 1 .5-.5h1.418c.887 0 1.332-.954.704-1.512l-5.567-4.95a1.087 1.087 0 0 0-1.41 0L5.728 8.72c-.628.558-.183 1.512.705 1.512h1.416a.5.5 0 0 1 .5.5v6.425c0 1.383 0 2.074.41 2.55a1.9 1.9 0 0 0 .372.331c.536.365 1.314.365 2.869.365 1.555 0 2.332 0 2.869-.365.14-.095.265-.206.372-.33.41-.477.41-1.168.41-2.551v-6.425Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.65 10.732a.5.5 0 0 1 .5-.5h1.418c.887 0 1.332-.954.704-1.512l-5.567-4.95a1.087 1.087 0 0 0-1.41 0L5.728 8.72c-.628.558-.183 1.512.705 1.512h1.416a.5.5 0 0 1 .5.5v6.425c0 1.383 0 2.074.41 2.55a1.9 1.9 0 0 0 .372.331c.536.365 1.314.365 2.869.365 1.555 0 2.332 0 2.869-.365.14-.095.265-.206.372-.33.41-.477.41-1.168.41-2.551v-6.425Z'
      />
    </svg>
  )
}
