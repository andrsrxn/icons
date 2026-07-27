import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjEzNiA3Ljg1MyA4LjAyMSA0LjRjLS4xOC0uMjk1LS40NjgtLjUyLS44MTEtLjQ3LS41MTguMDc1LTEuMzk4LjQwNS0yLjU3MyAxLjU4LTEuMzE4IDEuMzE4LTEuOSA1LjU4NiAzLjI5MyAxMC43OCA1LjE5NCA1LjE5MyA5LjgxNCAzLjg5NCAxMC44NyAyLjgzOS45ODItLjk4MiAxLjMxOS0xLjcwMiAxLjQyNS0yLjE0Ni4wOC0uMzQtLjE0LS42MzQtLjQzOS0uODE2bC0zLjQ2My0yLjEyYTEuNSAxLjUgMCAwIDAtMS42NzUuMDczbC0xLjA0My43NzFhMS41IDEuNSAwIDAgMS0xLjk1Mi0uMTQ2TDkuNDE5IDEyLjUxYTEuNSAxLjUgMCAwIDEtLjEzLTEuOTcybC43NTgtLjk5YTEuNSAxLjUgMCAwIDAgLjA4OC0xLjY5NVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMC4xMzYgNy44NTMgOC4wMjEgNC40Yy0uMTgtLjI5NS0uNDY4LS41Mi0uODExLS40Ny0uNTE4LjA3NS0xLjM5OC40MDUtMi41NzMgMS41OC0xLjMxOCAxLjMxOC0xLjkgNS41ODYgMy4yOTMgMTAuNzggNS4xOTQgNS4xOTMgOS44MTQgMy44OTQgMTAuODcgMi44MzkuOTgyLS45ODIgMS4zMTktMS43MDIgMS40MjUtMi4xNDYuMDgtLjM0LS4xNC0uNjM0LS40MzktLjgxNmwtMy40NjMtMi4xMmExLjUgMS41IDAgMCAwLTEuNjc1LjA3M2wtMS4wNDMuNzcxYTEuNSAxLjUgMCAwIDEtMS45NTItLjE0Nkw5LjQxOSAxMi41MWExLjUgMS41IDAgMCAxLS4xMy0xLjk3MmwuNzU4LS45OWExLjUgMS41IDAgMCAwIC4wODgtMS42OTVaIi8+PC9zdmc+)
 */
export const IconPhone: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-phone'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.136 7.853 8.021 4.4c-.18-.295-.468-.52-.811-.47-.518.075-1.398.405-2.573 1.58-1.318 1.318-1.9 5.586 3.293 10.78 5.194 5.193 9.814 3.894 10.87 2.839.982-.982 1.319-1.702 1.425-2.146.08-.34-.14-.634-.439-.816l-3.463-2.12a1.5 1.5 0 0 0-1.675.073l-1.043.771a1.5 1.5 0 0 1-1.952-.146L9.419 12.51a1.5 1.5 0 0 1-.13-1.972l.758-.99a1.5 1.5 0 0 0 .088-1.695Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.136 7.853 8.021 4.4c-.18-.295-.468-.52-.811-.47-.518.075-1.398.405-2.573 1.58-1.318 1.318-1.9 5.586 3.293 10.78 5.194 5.193 9.814 3.894 10.87 2.839.982-.982 1.319-1.702 1.425-2.146.08-.34-.14-.634-.439-.816l-3.463-2.12a1.5 1.5 0 0 0-1.675.073l-1.043.771a1.5 1.5 0 0 1-1.952-.146L9.419 12.51a1.5 1.5 0 0 1-.13-1.972l.758-.99a1.5 1.5 0 0 0 .088-1.695Z'
      />
    </svg>
  )
}
