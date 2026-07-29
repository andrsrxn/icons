import type { Icon } from '../types'

export const IconLogoSteam: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-steam'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 3.698a8.302 8.302 0 1 0 0 16.604 8.302 8.302 0 0 0 0-16.604Zm3.962 8.441-5.283 4.309a1.729 1.729 0 0 1-2.435-2.435l4.309-5.283a2.422 2.422 0 1 1 3.409 3.41Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m8.244 14.013 4.309-5.283m-1.874 7.718 5.283-4.309M8.356 13.89 4.053 9.588M20.302 12a8.302 8.302 0 1 1-16.604 0 8.302 8.302 0 0 1 16.604 0Zm-3.46-1.73a2.421 2.421 0 1 1-4.842 0 2.421 2.421 0 0 1 4.843 0Zm-5.534 4.843a1.73 1.73 0 1 1-3.459 0 1.73 1.73 0 0 1 3.46 0Z'
      />
    </svg>
  )
}
