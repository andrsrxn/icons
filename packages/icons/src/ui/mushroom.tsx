import type { Icon } from './types'

export const IconMushroom: Icon = ({
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
      data-slot='icon-ui-mushroom'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.78 12.79a10.22 10.22 0 1 1 20.44 0z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M12 2.57c4.26 0 7.92 2.6 9.45 6.32.59 1.41.88 2.12.28 3-.59.9-1.56.9-3.5.9H5.77c-1.95 0-2.92 0-3.51-.9-.6-.88-.3-1.59.28-3A10.2 10.2 0 0 1 12 2.57'
        stroke='currentColor'
      />
      <path
        d='M6.44 12.79v3.08c0 2.4 0 3.61.65 4.43a3 3 0 0 0 .48.48c.82.65 2.02.65 4.43.65s3.61 0 4.43-.65a3 3 0 0 0 .48-.48c.66-.82.66-2.02.66-4.43v-3.08'
        stroke='currentColor'
      />
      <path
        d='M7.52 9.43a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.37 6.4a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
