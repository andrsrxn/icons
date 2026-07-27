import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYuNzcgMTEuNTU4aDEwLjQ2djMuNzY1YTUuMjMgNS4yMyAwIDAgMS0xMC40NiAwdi0zLjc2NVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTEuOTU4IDYuMTQ3aC4wMmMuNjkyIDAgMS4yNTIuNTYgMS4yNTIgMS4yNTF2Ljc2MWExLjI1IDEuMjUgMCAwIDEtMS4yNTEgMS4yNTFoLS4wMjFtMC0zLjI2M2ExLjI1MSAxLjI1MSAwIDAgMC0xLjIzIDEuMjUxdi43NjFjMCAuNjg0LjU0OSAxLjI0IDEuMjMgMS4yNTFtMC0zLjI2M1Y0bTAgNS40MXYyLjE0N20wIDBoLTUuMW01LjEgMGg1LjI3M20tNS4yNTIgOS4wMjRhNS4yMyA1LjIzIDAgMCAxLTUuMjMtNS4yM1Y4LjcwNGE1LjIzIDUuMjMgMCAxIDEgMTAuNDYgMHY2LjY0NmE1LjIzIDUuMjMgMCAwIDEtNS4yMyA1LjIzWiIvPjwvc3ZnPg==)
 */
export const IconMouse: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-mouse'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6.77 11.558h10.46v3.765a5.23 5.23 0 0 1-10.46 0v-3.765Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M11.958 6.147h.02c.692 0 1.252.56 1.252 1.251v.761a1.25 1.25 0 0 1-1.251 1.251h-.021m0-3.263a1.251 1.251 0 0 0-1.23 1.251v.761c0 .684.549 1.24 1.23 1.251m0-3.263V4m0 5.41v2.147m0 0h-5.1m5.1 0h5.273m-5.252 9.024a5.23 5.23 0 0 1-5.23-5.23V8.704a5.23 5.23 0 1 1 10.46 0v6.646a5.23 5.23 0 0 1-5.23 5.23Z'
      />
    </svg>
  )
}
