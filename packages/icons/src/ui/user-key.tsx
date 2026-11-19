import type { Icon } from './types'

export const IconUserKey: Icon = ({
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
      data-slot='icon-ui-user-key'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.47 7.99a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path d='M15.47 7.99a5.4 5.4 0 1 0-10.79 0 5.4 5.4 0 0 0 10.79 0' stroke='currentColor' />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 8.3-8.3c.87 0 2.18.29 3.23.73' stroke='currentColor' />
      <path
        opacity='.2'
        d='M10.07 21.84h3.46v-1.86l3.43-2.86a8.3 8.3 0 0 0-6.89-3.74 8.4 8.4 0 0 0-8.3 8.46z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M16.64 17.14a3 3 0 0 1-.3-1.33 3.06 3.06 0 1 1 1.98 2.8' stroke='currentColor' />
      <path
        d='M19.8 15.65a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m16.63 17.16-2.79 2.78c-.14.15-.21.22-.25.31-.04.1-.04.2-.04.4v.8c0 .46 0 .7.15.85.14.14.38.14.85.14h.5q.23 0 .32-.02a.5.5 0 0 0 .34-.34q.02-.09.02-.32c0-.23 0-.25.02-.32a.5.5 0 0 1 .34-.34q.09-.02.32-.02h.05q.31 0 .41-.03a.5.5 0 0 0 .3-.3c.02-.08.02-.18.02-.4v-.22c0-.19 0-.28.03-.36l.02-.04c.04-.08.1-.14.23-.28l.83-.83'
        stroke='currentColor'
      />
    </svg>
  )
}
