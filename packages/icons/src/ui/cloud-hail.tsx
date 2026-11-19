import type { Icon } from './types'

export const IconCloudHail: Icon = ({
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
      data-slot='icon-ui-cloud-hail'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M8.77 16.57v-1.9' stroke='currentColor' />
      <path d='M12.6 15.78v-1.9' stroke='currentColor' />
      <path d='M15.9 17.3v-1.88' stroke='currentColor' />
      <path d='M6.97 7.55a5.09 5.09 0 0 1 9.33-1.18c.84 1.44.8 2.9.61 3.88' stroke='currentColor' />
      <path
        d='M5.16 16.38a3.6 3.6 0 0 1-2.15-1.16 4.27 4.27 0 0 1 3.06-7.27c1.4 0 2.64.67 3.42 1.71'
        stroke='currentColor'
      />
      <path
        d='M17.05 8.41a3.6 3.6 0 0 1 3.38.12 4.3 4.3 0 0 1 1.56 5.84c-.7 1.21-1.65 1.95-2.63 2.08'
        stroke='currentColor'
      />
      <path
        d='M8.75 19.24a.42.42 0 1 1 0 .85.42.42 0 0 1 0-.85'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.58 18.36a.43.43 0 1 1 0 .85.43.43 0 0 1 0-.85'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.9 20.1a.42.42 0 1 1 0 .85.42.42 0 0 1 0-.84'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m1.92 14.18 3.54 2.55H19.1l3.12-2.14v-4.28l-3.46-2.35-1.77.28-.89-2.56-3.95-2.28-3.3 1.42-1.91 2.8L2.7 9.13z'
        fill='currentColor'
      />
    </svg>
  )
}
