import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjM1IDEwLjE1OGE4LjAwMiA4LjAwMiAwIDAgMCA0LjY5IDEuNTA3di0zLjM1YTQuNjkgNC42OSAwIDAgMS00LjY5LTQuNjlIMTJWMTQuNjhhMi4zNDUgMi4zNDUgMCAxIDEtMy4zNS0yLjEyVjguOTg1Yy0yLjY2Ni40NzUtNC42OSAyLjg5My00LjY5IDUuNjk1YTUuNjk1IDUuNjk1IDAgMSAwIDExLjM5IDB2LTQuNTIyWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE1LjM1IDEwLjE1OGE4LjAwMiA4LjAwMiAwIDAgMCA0LjY5IDEuNTA3di0zLjM1YTQuNjkgNC42OSAwIDAgMS00LjY5LTQuNjlIMTJWMTQuNjhhMi4zNDUgMi4zNDUgMCAxIDEtMy4zNS0yLjEyVjguOTg1Yy0yLjY2Ni40NzUtNC42OSAyLjg5My00LjY5IDUuNjk1YTUuNjk1IDUuNjk1IDAgMSAwIDExLjM5IDB2LTQuNTIyWiIvPjwvc3ZnPg==)
 */
export const IconLogoTiktok: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-tiktok'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.35 10.158a8.002 8.002 0 0 0 4.69 1.507v-3.35a4.69 4.69 0 0 1-4.69-4.69H12V14.68a2.345 2.345 0 1 1-3.35-2.12V8.985c-2.666.475-4.69 2.893-4.69 5.695a5.695 5.695 0 1 0 11.39 0v-4.522Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.35 10.158a8.002 8.002 0 0 0 4.69 1.507v-3.35a4.69 4.69 0 0 1-4.69-4.69H12V14.68a2.345 2.345 0 1 1-3.35-2.12V8.985c-2.666.475-4.69 2.893-4.69 5.695a5.695 5.695 0 1 0 11.39 0v-4.522Z'
      />
    </svg>
  )
}
