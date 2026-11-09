import type { Icon } from './types'

export const IconBricks: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-bricks'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.68 10.68c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.64c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.64c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.64c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83z'
        fill='currentColor'
      />
      <path
        d='M10.68 21.32h2.64c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-2.64c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.64c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v2.64c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17'
        stroke='currentColor'
      />
      <path d='M2.68 8.5h18.64' stroke='currentColor' />
      <path d='M12 15.5v-7' stroke='currentColor' />
      <path d='M7.39 8.5V2.94' stroke='currentColor' />
      <path d='M7.39 21.06V15.5' stroke='currentColor' />
      <path d='M16.61 8.5V2.94' stroke='currentColor' />
      <path d='M16.61 21.06V15.5' stroke='currentColor' />
      <path d='M2.68 15.5h18.64' stroke='currentColor' />
    </svg>
  )
}
