import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjM1OCAxMmE4LjM1OCA4LjM1OCAwIDEgMS0xNi43MTYgMCA4LjM1OCA4LjM1OCAwIDAgMSAxNi43MTYgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNOS45MTUgOS40OWEuNTk0LjU5NCAwIDEgMS0xLjE4OCAwIC41OTQuNTk0IDAgMCAxIDEuMTg4IDBabTUuMzU4IDBhLjU5NC41OTQgMCAxIDEtMS4xODggMCAuNTk0LjU5NCAwIDAgMSAxLjE4OCAwWiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS4wMDkgMTUuMzhzMS4wMzYtMS4wMDYgMi45OTUtMS4wMDZjMS45NiAwIDIuOTk2IDEuMDA2IDIuOTk2IDEuMDA2TTIwLjM1OCAxMmE4LjM1OCA4LjM1OCAwIDEgMS0xNi43MTYgMCA4LjM1OCA4LjM1OCAwIDAgMSAxNi43MTYgMFpNOS45MTUgOS40OWEuNTk0LjU5NCAwIDEgMS0xLjE4OCAwIC41OTQuNTk0IDAgMCAxIDEuMTg4IDBabTUuMzU4IDBhLjU5NC41OTQgMCAxIDEtMS4xODggMCAuNTk0LjU5NCAwIDAgMSAxLjE4OCAwWiIvPjwvc3ZnPg==)
 */
export const IconSmileySad: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-smiley-sad'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M9.915 9.49a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Zm5.358 0a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.009 15.38s1.036-1.006 2.995-1.006c1.96 0 2.996 1.006 2.996 1.006M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0ZM9.915 9.49a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Zm5.358 0a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
    </svg>
  )
}
