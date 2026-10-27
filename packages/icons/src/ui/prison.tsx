import type { Icon } from './types'

export const IconPrison: Icon = ({
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
      data-slot='icon-ui-prison'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.77 20.15V3.85h16.38v3.68c0 .94 0 1.42-.3 1.7-.28.3-.76.3-1.7.3h-1.73c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v.87c0 .95 0 1.42.3 1.71.29.3.76.3 1.7.3h1.73c.94 0 1.42 0 1.7.29.3.3.3.76.3 1.7v3.75z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M1.74 3.85h20.52' stroke='currentColor' />
      <path d='M1.74 20.15h20.52' stroke='currentColor' />
      <path d='M16.2 12h1.27' stroke='currentColor' />
      <path d='M3.85 20.15V3.85' stroke='currentColor' />
      <path d='M9.28 20.15V3.85' stroke='currentColor' />
      <path d='M14.72 9.21V3.85' stroke='currentColor' />
      <path d='M14.72 20.15V14.8' stroke='currentColor' />
      <path d='M20.15 9.21V3.85' stroke='currentColor' />
      <path d='M20.15 20.15V14.8' stroke='currentColor' />
      <path
        d='M16.59 9.21h1.76c1.2 0 1.81 0 2.22.33q.14.1.24.24c.33.4.33 1.01.33 2.22 0 1.2 0 1.81-.33 2.22l-.24.24c-.4.33-1.01.33-2.22.33h-1.76c-1.21 0-1.81 0-2.23-.33l-.23-.24c-.33-.4-.33-1.01-.33-2.22 0-1.2 0-1.81.33-2.22q.1-.14.23-.24c.42-.33 1.02-.33 2.23-.33'
        stroke='currentColor'
      />
    </svg>
  )
}
