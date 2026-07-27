import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjM1OCAxMmE4LjM1OCA4LjM1OCAwIDEgMS0xNi43MTYgMCA4LjM1OCA4LjM1OCAwIDAgMSAxNi43MTYgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNOS45MTUgMTEuNDA2YS41OTQuNTk0IDAgMSAxLTEuMTg4IDAgLjU5NC41OTQgMCAwIDEgMS4xODggMFptNS4zNTggMGEuNTk0LjU5NCAwIDEgMS0xLjE4OCAwIC41OTQuNTk0IDAgMCAxIDEuMTg4IDBaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjAwOSAxNS42NDRzMS4wMzYtMS4wMDYgMi45OTUtMS4wMDZjMS45NiAwIDIuOTk2IDEuMDA2IDIuOTk2IDEuMDA2TTEzLjg0OCA4LjU3bDEuOTMyLS41MThtLTUuNTUuNTE4LTEuOTMyLS41MThNMjAuMzU4IDEyYTguMzU4IDguMzU4IDAgMSAxLTE2LjcxNiAwIDguMzU4IDguMzU4IDAgMCAxIDE2LjcxNiAwWm0tMTAuNDQzLS41OTRhLjU5NC41OTQgMCAxIDEtMS4xODggMCAuNTk0LjU5NCAwIDAgMSAxLjE4OCAwWm01LjM1OCAwYS41OTQuNTk0IDAgMSAxLTEuMTg4IDAgLjU5NC41OTQgMCAwIDEgMS4xODggMFoiLz48L3N2Zz4=)
 */
export const IconSmileyAngry: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-smiley-angry'
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
        d='M9.915 11.406a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Zm5.358 0a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.009 15.644s1.036-1.006 2.995-1.006c1.96 0 2.996 1.006 2.996 1.006M13.848 8.57l1.932-.518m-5.55.518-1.932-.518M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0Zm-10.443-.594a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Zm5.358 0a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
    </svg>
  )
}
