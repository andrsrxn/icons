import type { Icon } from './types'

export const IconBellOn: Icon = ({
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
      data-slot='icon-ui-bell-on'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m21.2 14.6.22.25a2 2 0 0 1 .4 1.36c0 .41 0 .62-.04.8a2 2 0 0 1-1.62 1.62c-.17.03-.38.03-.8.03H4.6c-.4 0-.6 0-.76-.03a2 2 0 0 1-1.64-1.64c-.03-.16-.03-.36-.03-.76l.01-.32a2 2 0 0 1 .4-1.07l.22-.24 1.3-1.43v-2.88A7.9 7.9 0 0 1 12 2.4a7.96 7.96 0 0 1 7.94 7.96v2.82z'
        fill='currentColor'
      />
      <path d='M1.25 6.36a9 9 0 0 1 1.8-3.05 8 8 0 0 1 2.36-1.94' stroke='currentColor' />
      <path d='M22.87 6.36a9 9 0 0 0-1.8-3.05 8 8 0 0 0-2.37-1.94' stroke='currentColor' />
      <path
        d='m21.21 14.6.21.25a2 2 0 0 1 .4 1.04v.32c0 .41 0 .62-.03.8a2 2 0 0 1-1.62 1.62c-.18.03-.38.03-.8.03H4.62c-.4 0-.6 0-.76-.03a2 2 0 0 1-1.64-1.64c-.03-.16-.03-.36-.03-.76v-.32a2 2 0 0 1 .63-1.31l1.29-1.43v-2.88A7.9 7.9 0 0 1 12 2.4c4.4 0 7.95 3.57 7.95 7.96v2.82z'
        stroke='currentColor'
      />
      <path d='M7.8 18.66c0 1.98 1.88 3.6 4.2 3.6s4.2-1.62 4.2-3.6' stroke='currentColor' />
    </svg>
  )
}
