import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjAyMSA2LjE0N0gxMmMtLjY5IDAtMS4yNTEuNTYtMS4yNTEgMS4yNTF2Ljc2MWMwIC42OTEuNTYgMS4yNTEgMS4yNTEgMS4yNTFoLjAyMW0wLTMuMjYzYy42ODEuMDExIDEuMjMuNTY3IDEuMjMgMS4yNTF2Ljc2MWMwIC42ODQtLjU0OSAxLjI0LTEuMjMgMS4yNTFtMC0zLjI2M1Y0bTAgNS40MXYyLjE0N20wIDBoNS4xbS01LjEgMEg2Ljc0OE0xMiAyMC41ODFhNS4yMyA1LjIzIDAgMCAwIDUuMjMtNS4yM1Y4LjcwNGE1LjIzIDUuMjMgMCAwIDAtMTAuNDYgMHY2LjY0NkE1LjIzIDUuMjMgMCAwIDAgMTIgMjAuNThaIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiA1LjM0YzAtLjg1Ni0uOTAyLTEuNDEyLTEuNjY4LTEuMDI4TDguMjEgNS4zOGEyLjYxNSAyLjYxNSAwIDAgMC0xLjQ0IDIuMzM3djcuNjA3YTUuMjMgNS4yMyAwIDAgMCA1LjIzIDUuMjNoLjczM2E0LjQ5OCA0LjQ5OCAwIDAgMCA0LjQ5OC00LjQ5N3YtMS44ODNhMi42MTUgMi42MTUgMCAwIDAtMi42MTYtMi42MTZIMTMuMThhMS4xOCAxLjE4IDAgMCAxLTEuMTgtMS4xOFY5LjcxYS41MS41MSAwIDAgMC0uNTEtLjUxMS41MS41MSAwIDAgMS0uNTExLS41MVY3LjAwMWEuNTEuNTEgMCAwIDEgLjUxLS41MS41MS41MSAwIDAgMCAuNTExLS41MVY1LjM0WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjwvc3ZnPg==)
 */
export const IconMouseLeft: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-mouse-left'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12.021 6.147H12c-.69 0-1.251.56-1.251 1.251v.761c0 .691.56 1.251 1.251 1.251h.021m0-3.263c.681.011 1.23.567 1.23 1.251v.761c0 .684-.549 1.24-1.23 1.251m0-3.263V4m0 5.41v2.147m0 0h5.1m-5.1 0H6.748M12 20.581a5.23 5.23 0 0 0 5.23-5.23V8.704a5.23 5.23 0 0 0-10.46 0v6.646A5.23 5.23 0 0 0 12 20.58Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 5.34c0-.856-.902-1.412-1.668-1.028L8.21 5.38a2.615 2.615 0 0 0-1.44 2.337v7.607a5.23 5.23 0 0 0 5.23 5.23h.733a4.498 4.498 0 0 0 4.498-4.497v-1.883a2.615 2.615 0 0 0-2.616-2.616H13.18a1.18 1.18 0 0 1-1.18-1.18V9.71a.51.51 0 0 0-.51-.511.51.51 0 0 1-.511-.51V7.001a.51.51 0 0 1 .51-.51.51.51 0 0 0 .511-.51V5.34Z'
        clipRule='evenodd'
        opacity='.2'
      />
    </svg>
  )
}
