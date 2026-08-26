import type { Icon } from './types'

export const IconHeadset: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-headset'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.73 14.37v2.93c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59h-3.67m6.46-10.25-.09-1.41c-.18-2.99-.27-4.48-1.12-5.49a4 4 0 0 0-.69-.65c-1.06-.78-2.55-.78-5.54-.78-2.93 0-4.4 0-5.45.76a4 4 0 0 0-.68.63c-.85.99-.97 2.44-1.22 5.36l-.13 1.58'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.8 17.96c.33 0 .5 0 .64-.02a2 2 0 0 0 1.7-1.7c.02-.14.02-.3.02-.63v-2.36c0-.34 0-.5-.02-.64a2 2 0 0 0-1.7-1.7c-.14-.02-.3-.02-.64-.02-.5 0-.75 0-.95.03a3 3 0 0 0-2.56 2.55c-.02.2-.02.46-.02.96s0 .74.02.95a3 3 0 0 0 2.56 2.55c.2.03.45.03.95.03m10.4 0c.5 0 .75 0 .95-.03a3 3 0 0 0 2.56-2.55c.02-.2.02-.46.02-.95 0-.5 0-.75-.02-.96a3 3 0 0 0-2.56-2.55c-.2-.03-.45-.03-.95-.03-.33 0-.5 0-.64.02a2 2 0 0 0-1.7 1.7c-.02.14-.02.3-.02.64v2.36c0 .33 0 .5.02.63a2 2 0 0 0 1.7 1.7c.14.02.3.02.64.02'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        opacity='.2'
        width='6.75'
        height='5.89'
        rx='2'
        transform='matrix(0 -1 -1 0 9.16 17.8)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.75'
        height='5.89'
        rx='2'
        transform='matrix(0 -1 -1 0 20.73 17.8)'
        fill='currentColor'
      />
    </svg>
  )
}
