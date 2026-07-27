import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyLjgzMiA3LjM5Mkg0LjM4NEEuMzg0LjM4NCAwIDAgMCA0IDcuNzc2djguNDQ4YzAgLjIxMi4xNzIuMzg0LjM4NC4zODRoOC40NDhhLjM4NC4zODQgMCAwIDAgLjM4NC0uMzg0VjcuNzc2YS4zODQuMzg0IDAgMCAwLS4zODQtLjM4NFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik04IDE2LjY2N3YyYS42NjcuNjY3IDAgMCAwIC42NjcuNjY2aDEwLjY2NmEuNjY3LjY2NyAwIDAgMCAuNjY3LS42NjZ2LThoLTJtMiAwTDE0IDE1bS00LTcuNjY3VjQuNjY3aDh2Ny40NDRtMS43NzIgNy4wNTctNi40MzktNC42NU00LjY2NyA3LjMzM2g4Yy4zNjggMCAuNjY2LjI5OS42NjYuNjY3djhhLjY2Ny42NjcgMCAwIDEtLjY2Ni42NjdoLThBLjY2Ny42NjcgMCAwIDEgNCAxNlY4YzAtLjM2OC4yOTgtLjY2Ny42NjctLjY2N1ptNiA0LjY2N2EyIDIgMCAxIDEtNCAwIDIgMiAwIDAgMSA0IDBaIi8+PC9zdmc+)
 */
export const IconLogoMsOutlook: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-ms-outlook'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12.832 7.392H4.384A.384.384 0 0 0 4 7.776v8.448c0 .212.172.384.384.384h8.448a.384.384 0 0 0 .384-.384V7.776a.384.384 0 0 0-.384-.384Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8 16.667v2a.667.667 0 0 0 .667.666h10.666a.667.667 0 0 0 .667-.666v-8h-2m2 0L14 15m-4-7.667V4.667h8v7.444m1.772 7.057-6.439-4.65M4.667 7.333h8c.368 0 .666.299.666.667v8a.667.667 0 0 1-.666.667h-8A.667.667 0 0 1 4 16V8c0-.368.298-.667.667-.667Zm6 4.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
      />
    </svg>
  )
}
