import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjAzMyAxNi42ODVIMTEuMjZsLTQuMDE0IDMuMTIzdi0zLjEyM0g1LjIzOWEuNjk0LjY5NCAwIDAgMS0uNDczLS4xODMuNjA0LjYwNCAwIDAgMS0uMTk2LS40NDJWNC44MTdjMC0uMTY2LjA3LS4zMjUuMTk2LS40NDJhLjY5NC42OTQgMCAwIDEgLjQ3My0uMTgzaDEzLjM4MmMuMTc3IDAgLjM0Ny4wNjYuNDczLjE4M2EuNjA1LjYwNSAwIDAgMSAuMTk2LjQ0MnY4LjQ1MmEuNTkuNTkgMCAwIDEtLjA2My4yNjUuNjMyLjYzMiAwIDAgMS0uMTc4LjIxNWwtMy41ODcgMi43OTFhLjcwMy43MDMgMCAwIDEtLjQzLjE0NVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNS4yNzUgNy45NHYzLjc0OE0xMS4yNjEgNy45NHYzLjc0OG0zLjc3MiA0Ljk5N0gxMS4yNmwtNC4wMTQgMy4xMjN2LTMuMTIzSDUuMjM5YS42OTQuNjk0IDAgMCAxLS40NzMtLjE4My42MDQuNjA0IDAgMCAxLS4xOTYtLjQ0MlY0LjgxN2MwLS4xNjYuMDctLjMyNS4xOTYtLjQ0MmEuNjk0LjY5NCAwIDAgMSAuNDczLS4xODNoMTMuMzgyYy4xNzcgMCAuMzQ3LjA2Ni40NzMuMTgzYS42MDUuNjA1IDAgMCAxIC4xOTYuNDQydjguNDUyYS41OS41OSAwIDAgMS0uMDYzLjI2NS42MzIuNjMyIDAgMCAxLS4xNzguMjE1bC0zLjU4NyAyLjc5MWEuNzAzLjcwMyAwIDAgMS0uNDMuMTQ1WiIvPjwvc3ZnPg==)
 */
export const IconLogoTwitch: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-twitch'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.033 16.685H11.26l-4.014 3.123v-3.123H5.239a.694.694 0 0 1-.473-.183.604.604 0 0 1-.196-.442V4.817c0-.166.07-.325.196-.442a.694.694 0 0 1 .473-.183h13.382c.177 0 .347.066.473.183a.605.605 0 0 1 .196.442v8.452a.59.59 0 0 1-.063.265.632.632 0 0 1-.178.215l-3.587 2.791a.703.703 0 0 1-.43.145Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.275 7.94v3.748M11.261 7.94v3.748m3.772 4.997H11.26l-4.014 3.123v-3.123H5.239a.694.694 0 0 1-.473-.183.604.604 0 0 1-.196-.442V4.817c0-.166.07-.325.196-.442a.694.694 0 0 1 .473-.183h13.382c.177 0 .347.066.473.183a.605.605 0 0 1 .196.442v8.452a.59.59 0 0 1-.063.265.632.632 0 0 1-.178.215l-3.587 2.791a.703.703 0 0 1-.43.145Z'
      />
    </svg>
  )
}
