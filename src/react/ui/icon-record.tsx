import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE3LjE1NCAxMmE1LjE1NCA1LjE1NCAwIDEgMS0xMC4zMDggMCA1LjE1NCA1LjE1NCAwIDAgMSAxMC4zMDggMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTcuMTU0IDEyYTUuMTU0IDUuMTU0IDAgMSAxLTEwLjMwOCAwIDUuMTU0IDUuMTU0IDAgMCAxIDEwLjMwOCAwWiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwLjQ1MyAxMmE4LjQ1MyA4LjQ1MyAwIDEgMS0xNi45MDYgMCA4LjQ1MyA4LjQ1MyAwIDAgMSAxNi45MDYgMFoiLz48L3N2Zz4=)
 */
export const IconRecord: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-record'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M17.154 12a5.154 5.154 0 1 1-10.308 0 5.154 5.154 0 0 1 10.308 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M17.154 12a5.154 5.154 0 1 1-10.308 0 5.154 5.154 0 0 1 10.308 0Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M20.453 12a8.453 8.453 0 1 1-16.906 0 8.453 8.453 0 0 1 16.906 0Z'
      />
    </svg>
  )
}
