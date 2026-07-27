import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNzEyIDEwLjQ4N2MwLTEuODg2IDAtMi44MjguNTg2LTMuNDE0LjU4Ni0uNTg2IDEuNTI4LS41ODYgMy40MTQtLjU4Nmg4LjU3NmMxLjg4NSAwIDIuODI4IDAgMy40MTQuNTg2LjU4Ni41ODYuNTg2IDEuNTI4LjU4NiAzLjQxNHYzLjAyNmMwIDEuODg2IDAgMi44MjktLjU4NiAzLjQxNC0uNTg2LjU4Ni0xLjUyOS41ODYtMy40MTQuNTg2SDcuNzEyYy0xLjg4NiAwLTIuODI4IDAtMy40MTQtLjU4Ni0uNTg2LS41ODUtLjU4Ni0xLjUyOC0uNTg2LTMuNDE0di0zLjAyNloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMC41MzQgOS41NDRjLTEuNjY1IDAtMy40MzQgMC0zLjQzNCAyLjQ1NnMxLjg0OCAyLjQ1NiAzLjQzNCAyLjQ1Nm01Ljg4LTQuOTEyYy0xLjY2NSAwLTMuNDM0IDAtMy40MzQgMi40NTZzMS44NDcgMi40NTYgMy40MzQgMi40NTZtLTguNzAyIDMuMDU3aDguNTc2YzEuODg1IDAgMi44MjggMCAzLjQxNC0uNTg2LjU4Ni0uNTg1LjU4Ni0xLjUyOC41ODYtMy40MTR2LTMuMDI2YzAtMS44ODYgMC0yLjgyOC0uNTg2LTMuNDE0LS41ODYtLjU4Ni0xLjUyOS0uNTg2LTMuNDE0LS41ODZINy43MTJjLTEuODg2IDAtMi44MjggMC0zLjQxNC41ODYtLjU4Ni41ODYtLjU4NiAxLjUyOC0uNTg2IDMuNDE0djMuMDI2YzAgMS44ODYgMCAyLjgyOS41ODYgMy40MTQuNTg2LjU4NiAxLjUyOC41ODYgMy40MTQuNTg2WiIvPjwvc3ZnPg==)
 */
export const IconClosedCaptioning: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-closed-captioning'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.712 10.487c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h8.576c1.885 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v3.026c0 1.886 0 2.829-.586 3.414-.586.586-1.529.586-3.414.586H7.712c-1.886 0-2.828 0-3.414-.586-.586-.585-.586-1.528-.586-3.414v-3.026Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.534 9.544c-1.665 0-3.434 0-3.434 2.456s1.848 2.456 3.434 2.456m5.88-4.912c-1.665 0-3.434 0-3.434 2.456s1.847 2.456 3.434 2.456m-8.702 3.057h8.576c1.885 0 2.828 0 3.414-.586.586-.585.586-1.528.586-3.414v-3.026c0-1.886 0-2.828-.586-3.414-.586-.586-1.529-.586-3.414-.586H7.712c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414v3.026c0 1.886 0 2.829.586 3.414.586.586 1.528.586 3.414.586Z'
      />
    </svg>
  )
}
