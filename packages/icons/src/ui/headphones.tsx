import type { Icon } from './types'

export const IconHeadphones: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-headphones'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='8.14'
        height='6.24'
        rx='2'
        transform='matrix(0 -1 -1 0 8.99 21)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='8.14'
        height='6.24'
        rx='2'
        transform='matrix(0 -1 -1 0 21.25 21)'
        fill='currentColor'
      />
      <path
        d='m19.44 12.67-.16-3.04c-.15-2.85-.22-4.28-.99-5.27a4 4 0 0 0-.88-.84c-1.03-.71-2.46-.71-5.32-.71-2.8 0-4.21 0-5.23.7a4 4 0 0 0-.88.81C5.2 5.3 5.1 6.7 4.9 9.5l-.22 3.16'
        stroke='currentColor'
      />
      <path
        d='M6.5 21.2c.46 0 .69 0 .88-.05a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.88v-3.55c0-.46 0-.69-.04-.88a2 2 0 0 0-1.57-1.57c-.2-.04-.42-.04-.89-.04-.69 0-1.03 0-1.32.05a3 3 0 0 0-2.36 2.37c-.06.28-.06.63-.06 1.32v1.05c0 .69 0 1.03.06 1.32a3 3 0 0 0 2.36 2.36c.29.06.63.06 1.32.06'
        stroke='currentColor'
      />
      <path
        d='M17.5 21.2c.7 0 1.04 0 1.33-.07a3 3 0 0 0 2.36-2.36c.06-.29.06-.63.06-1.32V16.4c0-.69 0-1.04-.06-1.32a3 3 0 0 0-2.36-2.37c-.29-.05-.63-.05-1.32-.05-.47 0-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.42-.04.88v3.55c0 .46 0 .69.04.88a2 2 0 0 0 1.57 1.57c.2.04.42.04.88.04'
        stroke='currentColor'
      />
    </svg>
  )
}
