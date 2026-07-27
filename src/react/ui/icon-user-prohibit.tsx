import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNi44MDcgOC4yNjFhNC44MDcgNC44MDcgMCAxIDEtOS42MTQgMCA0LjgwNyA0LjgwNyAwIDAgMSA5LjYxNCAwWiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC41OSAxOS41NDhjLjUwNi0zLjc2NCAzLjgzOC02LjQ4IDcuNDEtNi40OCAyLjIxNiAwIDQuMzQgMS4wNDYgNS43NTUgMi43NC0xLjE1OS4yNzUtMi4xODcgMS4xNjQtMi4xODcgMi40MDcgMCAuOTA1LjYyNCAxLjg1NyAxLjMyIDIuMzNINS41MjRjLS41NTMgMC0xLjAwNy0uNDUtLjkzNC0uOTk3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMTMuMDY4YTQuODA3IDQuODA3IDAgMSAwIDAtOS42MTMgNC44MDcgNC44MDcgMCAwIDAgMCA5LjYxM1ptMCAwYy0zLjg4IDAtNy40NzcgMy4yMDUtNy40NzcgNy40NzhNMTIgMTMuMDY4Yy44NjggMCAxLjcyMS4xNiAyLjUyNC40NTdtNS4wMjggNi4wMjdMMTYuMDQgMTYuMDRtNC42MzUgMS44NjlhMi43NjYgMi43NjYgMCAxIDEtNS41MzIgMCAyLjc2NiAyLjc2NiAwIDAgMSA1LjUzMiAwWiIvPjwvc3ZnPg==)
 */
export const IconUserProhibit: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-user-prohibit'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M16.807 8.261a4.807 4.807 0 1 1-9.614 0 4.807 4.807 0 0 1 9.614 0Z'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M4.59 19.548c.506-3.764 3.838-6.48 7.41-6.48 2.216 0 4.34 1.046 5.755 2.74-1.159.275-2.187 1.164-2.187 2.407 0 .905.624 1.857 1.32 2.33H5.524c-.553 0-1.007-.45-.934-.997Z'
          clipRule='evenodd'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 13.068a4.807 4.807 0 1 0 0-9.613 4.807 4.807 0 0 0 0 9.613Zm0 0c-3.88 0-7.477 3.205-7.477 7.478M12 13.068c.868 0 1.721.16 2.524.457m5.028 6.027L16.04 16.04m4.635 1.869a2.766 2.766 0 1 1-5.532 0 2.766 2.766 0 0 1 5.532 0Z'
      />
    </svg>
  )
}
