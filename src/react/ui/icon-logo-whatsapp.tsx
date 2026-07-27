import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDMuNzU1YTguMjQ1IDguMjQ1IDAgMCAwLTcuMTM4IDEyLjM3NEwzLjc5IDE5LjM0YS42ODcuNjg3IDAgMCAwIC44NjkuODdsMy4yMTEtMS4wNzJBOC4yNDUgOC4yNDUgMCAxIDAgMTIgMy43NTZabTIuMDYxIDEzLjA1NWE2Ljg3MSA2Ljg3MSAwIDAgMS02Ljg3LTYuODcxQTIuNzQ5IDIuNzQ5IDAgMCAxIDkuOTM4IDcuMTlsMS4zNzQgMi43NDktMS4wNTggMS41ODZhNC4xNCA0LjE0IDAgMCAwIDIuMjIgMi4yMmwxLjU4Ni0xLjA1OCAyLjc0OSAxLjM3NWEyLjc0OCAyLjc0OCAwIDAgMS0yLjc0OSAyLjc0OFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03LjE5IDkuOTM5QTIuNzQ5IDIuNzQ5IDAgMCAxIDkuOTQgNy4xOWwxLjM3NCAyLjc0OS0xLjA1OCAxLjU4NmE0LjE0IDQuMTQgMCAwIDAgMi4yMiAyLjIybDEuNTg2LTEuMDU4IDIuNzQ5IDEuMzc1YTIuNzQ5IDIuNzQ5IDAgMCAxLTIuNzQ5IDIuNzQ4IDYuODcgNi44NyAwIDAgMS02Ljg3LTYuODcxWiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNy44NzEgMTkuMTM5YTguMjQ1IDguMjQ1IDAgMSAwLTMuMDA2LTMuMDA3TDMuNzkxIDE5LjM0YS42ODcuNjg3IDAgMCAwIC44NjkuODdsMy4yMTEtMS4wNzJaIi8+PC9zdmc+)
 */
export const IconLogoWhatsapp: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-whatsapp'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 3.755a8.245 8.245 0 0 0-7.138 12.374L3.79 19.34a.687.687 0 0 0 .869.87l3.211-1.072A8.245 8.245 0 1 0 12 3.756Zm2.061 13.055a6.871 6.871 0 0 1-6.87-6.871A2.749 2.749 0 0 1 9.938 7.19l1.374 2.749-1.058 1.586a4.14 4.14 0 0 0 2.22 2.22l1.586-1.058 2.749 1.375a2.748 2.748 0 0 1-2.749 2.748Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.19 9.939A2.749 2.749 0 0 1 9.94 7.19l1.374 2.749-1.058 1.586a4.14 4.14 0 0 0 2.22 2.22l1.586-1.058 2.749 1.375a2.749 2.749 0 0 1-2.749 2.748 6.87 6.87 0 0 1-6.87-6.871Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.871 19.139a8.245 8.245 0 1 0-3.006-3.007L3.791 19.34a.687.687 0 0 0 .869.87l3.211-1.072Z'
      />
    </svg>
  )
}
