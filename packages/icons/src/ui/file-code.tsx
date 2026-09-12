import type { Icon } from './types'

export const IconFileCode: Icon = ({
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
      data-slot='icon-ui-file-code'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.67 22.24c-1.89 0-2.83 0-3.41-.59-.59-.58-.59-1.53-.59-3.41V5.8c0-1.87 0-2.8.58-3.39.58-.58 1.51-.59 3.38-.6l2.22-.03c1.3-.02 1.96-.02 2.44.26a2 2 0 0 1 .69.68c.3.48.3 1.13.3 2.44 0 1.3 0 1.94.28 2.41a2 2 0 0 0 .68.68c.47.3 1.12.3 2.41.3 1.3 0 1.94 0 2.42.28a2 2 0 0 1 .68.68c.29.47.29 1.12.29 2.41v6.32c0 1.88 0 2.83-.59 3.41-.58.59-1.53.59-3.41.59z'
        fill='currentColor'
      />
      <path
        d='M20.04 12.44v-2.17c0-1.25 0-1.87-.24-2.43s-.68-1-1.58-1.86l-1.17-1.15L15.8 3.6c-.87-.87-1.3-1.3-1.85-1.53s-1.16-.23-2.39-.23h-1.9c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v8.4c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1.15'
        stroke='currentColor'
      />
      <path
        d='M19.86 16.42c1.52 1.26 2.28 1.9 2.35 2.72v.37c-.07.82-.83 1.46-2.35 2.73'
        stroke='currentColor'
      />
      <path
        d='M16.3 16.42c-1.52 1.26-2.28 1.9-2.36 2.72v.37c.07.82.84 1.46 2.36 2.73'
        stroke='currentColor'
      />
      <path
        d='M13.07 2.36V4.8c0 1.88 0 2.83.58 3.41.59.59 1.53.59 3.42.59h2.46'
        stroke='currentColor'
      />
    </svg>
  )
}
