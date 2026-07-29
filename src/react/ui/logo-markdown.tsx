import type { Icon } from './types'

export const IconLogoMarkdown: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-markdown'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M19.757 6.468H4.243a.606.606 0 0 0-.597.614v9.836c0 .339.267.614.597.614h15.514c.33 0 .597-.275.597-.614V7.082a.606.606 0 0 0-.597-.614Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.63 13.844v-3.688l2.386 2.459 2.387-2.46v3.69m4.177-3.69v3.69M13.79 12l1.79 1.844L17.37 12M4.243 6.468h15.514c.33 0 .597.275.597.614v9.836a.606.606 0 0 1-.597.614H4.243a.606.606 0 0 1-.597-.614V7.082c0-.34.267-.614.597-.614Z'
      />
    </svg>
  )
}
