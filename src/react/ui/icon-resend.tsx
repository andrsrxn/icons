import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0LjIwOSAxNy4zM3YtMi41NWEuNDkyLjQ5MiAwIDAgMC0uNTAxLS40OTVjLTQuNTMxLjA5OC02LjkzOCAxLjUyNS05LjM2IDMuMjM4LS4zODMuMjcyLS45NS0uMDg4LS43OTgtLjUzMiAyLjQ4LTUuNzcgNi41OS03LjgyNiAxMC4xNjUtNy45OThhLjUxOS41MTkgMCAwIDAgLjUtLjUxMlY1LjY5YzAtLjgzMyAxLjEyOS0xLjI1IDEuNjUyLS42NjFsNC42MzcgNS45MmMuMzI0LjM2NS4zMjQuOTU2IDAgMS4zMmwtNC42MzcgNS43MjJjLS41MjMuNTg4LTEuNjU5LjE3Mi0xLjY1OS0uNjZaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTQuMjA5IDE3LjMzdi0yLjU1YS40OTIuNDkyIDAgMCAwLS41MDEtLjQ5NWMtNC41MzEuMDk4LTYuOTM4IDEuNTI1LTkuMzYgMy4yMzgtLjM4My4yNzItLjk1LS4wODgtLjc5OC0uNTMyIDIuNDgtNS43NyA2LjU5LTcuODI2IDEwLjE2NS03Ljk5OGEuNTE5LjUxOSAwIDAgMCAuNS0uNTEyVjUuNjljMC0uODMzIDEuMTI5LTEuMjUgMS42NTItLjY2MWw0LjYzNyA1LjkyYy4zMjQuMzY1LjMyNC45NTYgMCAxLjMybC00LjYzNyA1LjcyMmMtLjUyMy41ODgtMS42NTkuMTcyLTEuNjU5LS42NloiLz48L3N2Zz4=)
 */
export const IconResend: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-resend'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.209 17.33v-2.55a.492.492 0 0 0-.501-.495c-4.531.098-6.938 1.525-9.36 3.238-.383.272-.95-.088-.798-.532 2.48-5.77 6.59-7.826 10.165-7.998a.519.519 0 0 0 .5-.512V5.69c0-.833 1.129-1.25 1.652-.661l4.637 5.92c.324.365.324.956 0 1.32l-4.637 5.722c-.523.588-1.659.172-1.659-.66Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.209 17.33v-2.55a.492.492 0 0 0-.501-.495c-4.531.098-6.938 1.525-9.36 3.238-.383.272-.95-.088-.798-.532 2.48-5.77 6.59-7.826 10.165-7.998a.519.519 0 0 0 .5-.512V5.69c0-.833 1.129-1.25 1.652-.661l4.637 5.92c.324.365.324.956 0 1.32l-4.637 5.722c-.523.588-1.659.172-1.659-.66Z'
      />
    </svg>
  )
}
