import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjU2NSA3LjI0NEg0LjczM2EuNjguNjggMCAwIDAtLjY4LjY4djguMTUyYzAgLjM3NS4zMDUuNjguNjguNjhoOC44MzJhLjY4LjY4IDAgMCAwIC42OC0uNjhWNy45MjRhLjY4LjY4IDAgMCAwLS42OC0uNjhaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTQuMjQ0IDkuMjgzSDE5bS00Ljc1NiA1LjQzNEgxOU02Ljc3MSA3LjI0NFY0LjUyN2EuNjguNjggMCAwIDEgLjY4LS42OGgxMC44N2EuNjguNjggMCAwIDEgLjY3OS42OHYxNC45NDZhLjY4LjY4IDAgMCAxLS42OC42OEg3LjQ1YS42NzkuNjc5IDAgMCAxLS42NzktLjY4di0yLjcxN20wLTYuNzk0IDEuMDIgNC4wNzYgMS4zNTgtMi43MTcgMS4zNTkgMi43MTcgMS4wMTktNC4wNzZNNC43MzMgNy4yNDRoOC44MzJhLjY4LjY4IDAgMCAxIC42OC42OHY4LjE1MmEuNjguNjggMCAwIDEtLjY4LjY4SDQuNzMzYS42OC42OCAwIDAgMS0uNjgtLjY4VjcuOTI0YS42OC42OCAwIDAgMSAuNjgtLjY4WiIvPjwvc3ZnPg==)
 */
export const IconLogoMsWord: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-ms-word'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.565 7.244H4.733a.68.68 0 0 0-.68.68v8.152c0 .375.305.68.68.68h8.832a.68.68 0 0 0 .68-.68V7.924a.68.68 0 0 0-.68-.68Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14.244 9.283H19m-4.756 5.434H19M6.771 7.244V4.527a.68.68 0 0 1 .68-.68h10.87a.68.68 0 0 1 .679.68v14.946a.68.68 0 0 1-.68.68H7.45a.679.679 0 0 1-.679-.68v-2.717m0-6.794 1.02 4.076 1.358-2.717 1.359 2.717 1.019-4.076M4.733 7.244h8.832a.68.68 0 0 1 .68.68v8.152a.68.68 0 0 1-.68.68H4.733a.68.68 0 0 1-.68-.68V7.924a.68.68 0 0 1 .68-.68Z'
      />
    </svg>
  )
}
