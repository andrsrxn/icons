import type { Icon } from './types'

export const IconDinner: Icon = ({
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
      data-slot='icon-ui-dinner'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='5.99'
        height='2.46'
        rx='1'
        transform='matrix(1 0 .02944 .99957 16.34 14.93)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='5.99'
        height='2.46'
        rx='1'
        transform='matrix(1 0 .02944 .99957 1.67 15.12)'
        fill='currentColor'
      />
      <path d='M1.74 8.49v12.17' stroke='currentColor' />
      <path d='M22.23 8.3v12.17' stroke='currentColor' />
      <path d='M1.74 17.72h5.72' stroke='currentColor' />
      <path d='M22.23 17.53H16.5' stroke='currentColor' />
      <path d='M6.4 11.69h11.2' stroke='currentColor' />
      <path d='M12 20.66v-8.97' stroke='currentColor' />
      <path
        d='M1.74 14.78h2.72c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v2.88'
        stroke='currentColor'
      />
      <path
        d='M22.23 14.6H19.5c-1.41 0-2.12 0-2.56.43-.44.44-.44 1.15-.44 2.56v2.88'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M15.85 8.9h-7.7c0-2.4 1.73-4.35 3.85-4.35s3.85 1.94 3.85 4.34'
        fill='currentColor'
      />
      <path d='M8.15 8.9c0-2.4 1.73-4.35 3.85-4.35s3.85 1.94 3.85 4.34' stroke='currentColor' />
      <path d='M12 4.45V3.36' stroke='currentColor' />
      <path d='M16.83 8.9H7.17' stroke='currentColor' />
    </svg>
  )
}
