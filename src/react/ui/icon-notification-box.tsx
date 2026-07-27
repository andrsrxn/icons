import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcuNTg4IDMuNjUyaDcuODg2bC43NDggNC42MTJoNC4xMjZ2OC4xNDhjMCAxLjg1MSAwIDIuNzc3LS41NzUgMy4zNTItLjU3NS41NzUtMS41LjU3NS0zLjM1MS41NzVINy41ODhjLTEuODUxIDAtMi43NzcgMC0zLjM1MS0uNTc1LS41NzUtLjU3NS0uNTc1LTEuNS0uNTc1LTMuMzUyVjcuNTc4YzAtMS44NSAwLTIuNzc2LjU3NS0zLjM1LjU3NC0uNTc2IDEuNS0uNTc2IDMuMzUtLjU3NloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMC4zNDggMTEuNjQxdjQuNzcxYzAgMS44NTEgMCAyLjc3Ny0uNTc1IDMuMzUyLS41NzUuNTc0LTEuNS41NzQtMy4zNTEuNTc0SDcuNTg4Yy0xLjg1MSAwLTIuNzc3IDAtMy4zNTEtLjU3NS0uNTc1LS41NzUtLjU3NS0xLjUtLjU3NS0zLjM1VjcuNTc3YzAtMS44NSAwLTIuNzc2LjU3NS0zLjM1LjU3NC0uNTc2IDEuNS0uNTc2IDMuMzUtLjU3Nmg0LjcxN204LjUzNCAyLjI1NGEyLjc0NCAyLjc0NCAwIDEgMS01LjQ4OCAwIDIuNzQ0IDIuNzQ0IDAgMCAxIDUuNDg4IDBaIi8+PC9zdmc+)
 */
export const IconNotificationBox: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-notification-box'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.588 3.652h7.886l.748 4.612h4.126v8.148c0 1.851 0 2.777-.575 3.352-.575.575-1.5.575-3.351.575H7.588c-1.851 0-2.777 0-3.351-.575-.575-.575-.575-1.5-.575-3.352V7.578c0-1.85 0-2.776.575-3.35.574-.576 1.5-.576 3.35-.576Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.348 11.641v4.771c0 1.851 0 2.777-.575 3.352-.575.574-1.5.574-3.351.574H7.588c-1.851 0-2.777 0-3.351-.575-.575-.575-.575-1.5-.575-3.35V7.577c0-1.85 0-2.776.575-3.35.574-.576 1.5-.576 3.35-.576h4.717m8.534 2.254a2.744 2.744 0 1 1-5.488 0 2.744 2.744 0 0 1 5.488 0Z'
      />
    </svg>
  )
}
