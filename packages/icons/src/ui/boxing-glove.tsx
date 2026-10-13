import type { Icon } from './types'

export const IconBoxingGlove: Icon = ({
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
      data-slot='icon-ui-boxing-glove'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='10.67'
        height='6.42'
        rx='2'
        transform='matrix(-.7863 -.61785 .59169 -.80617 10.17 23)'
        fill='currentColor'
      />
      <path
        d='M12.82 16.88c1.72-.52 6.94-3.65 8.44-6.97 2.2-4.9-4.84-10.17-8.13-6.94-2.1 2.07-2.27 3.53-2.74 4.82'
        stroke='currentColor'
      />
      <path d='M7.04 12.31C6.44 9.99 7.3 3 11.6 4.64' stroke='currentColor' />
      <rect
        width='10.67'
        height='6.42'
        rx='2'
        transform='matrix(-.7863 -.61785 .59169 -.80617 10.17 23)'
        stroke='currentColor'
      />
      <path d='m3.68 13.82 2.93 2.33' stroke='currentColor' />
    </svg>
  )
}
