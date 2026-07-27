import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjEzNiA3Ljg1MyA4LjAyMSA0LjRjLS4xOC0uMjk1LS40NjgtLjUyLS44MTEtLjQ3LS41MTguMDc1LTEuMzk4LjQwNS0yLjU3MyAxLjU4LTEuMzE4IDEuMzE4LTEuOSA1LjU4NiAzLjI5MyAxMC43OCA1LjE5NCA1LjE5MyA5LjgxNCAzLjg5NCAxMC44NyAyLjgzOS45ODItLjk4MiAxLjMxOS0xLjcwMiAxLjQyNS0yLjE0Ni4wOC0uMzQtLjE0LS42MzQtLjQzOS0uODE2bC0zLjQ2My0yLjEyYTEuNSAxLjUgMCAwIDAtMS42NzUuMDczbC0xLjA0My43NzFhMS41IDEuNSAwIDAgMS0xLjk1Mi0uMTQ2TDkuNDE5IDEyLjUxYTEuNSAxLjUgMCAwIDEtLjEzLTEuOTcybC43NTgtLjk5YTEuNSAxLjUgMCAwIDAgLjA4OC0xLjY5NVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNy4yMDcgOS42MjNWMy45NjZtLTIuODI5IDIuODI4aDUuNjU3TTguMDIyIDQuNGwyLjExNCAzLjQ1M2ExLjUgMS41IDAgMCAxLS4wODkgMS42OTVsLS43NTguOTlhMS41IDEuNSAwIDAgMCAuMTMgMS45NzJsMi4yMzUgMi4yMzVhMS41IDEuNSAwIDAgMCAxLjk1Mi4xNDZsMS4wNDMtLjc3YTEuNSAxLjUgMCAwIDEgMS42NzUtLjA3NGwzLjQ2MyAyLjEyYy4yOTguMTgyLjUyLjQ3Ni40MzkuODE2LS4xMDYuNDQ0LS40NDMgMS4xNjQtMS40MjUgMi4xNDYtMS4wNTUgMS4wNTUtNS42NzYgMi4zNTQtMTAuODctMi44NEMyLjczNyAxMS4wOTYgMy4zMiA2LjgyOCA0LjYzOCA1LjUxIDUuODEzIDQuMzM2IDYuNjkzIDQuMDA2IDcuMjEgMy45M2MuMzQzLS4wNS42My4xNzYuODExLjQ3WiIvPjwvc3ZnPg==)
 */
export const IconPhoneIncoming: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-phone-incoming'
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
        d='M17.207 9.623V3.966m-2.829 2.828h5.657M8.022 4.4l2.114 3.453a1.5 1.5 0 0 1-.089 1.695l-.758.99a1.5 1.5 0 0 0 .13 1.972l2.235 2.235a1.5 1.5 0 0 0 1.952.146l1.043-.77a1.5 1.5 0 0 1 1.675-.074l3.463 2.12c.298.182.52.476.439.816-.106.444-.443 1.164-1.425 2.146-1.055 1.055-5.676 2.354-10.87-2.84C2.737 11.096 3.32 6.828 4.638 5.51 5.813 4.336 6.693 4.006 7.21 3.93c.343-.05.63.176.811.47Z'
      />
    </svg>
  )
}
