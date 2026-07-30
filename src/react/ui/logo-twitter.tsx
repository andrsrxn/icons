import type { Icon } from './types'

export const IconLogoTwitter: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-twitter'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M8.218 16.008s-4.492-2.606-3.846-9.774c0 0 3.23 3.258 7.104 3.91V8.84c0-1.791 1.466-3.28 3.258-3.258a3.318 3.318 0 0 1 2.987 1.955h2.877l-2.606 2.607c-.347 5.444-4.893 9.774-10.425 9.774-2.607 0-3.258-.978-3.258-.978s2.606-.977 3.91-2.932Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.218 16.008s-4.492-2.606-3.846-9.774c0 0 3.23 3.258 7.104 3.91V8.84c0-1.791 1.466-3.28 3.258-3.258a3.318 3.318 0 0 1 2.987 1.955h2.877l-2.606 2.607c-.347 5.444-4.893 9.774-10.425 9.774-2.607 0-3.258-.978-3.258-.978s2.606-.977 3.91-2.932Z'
      />
    </svg>
  )
}
