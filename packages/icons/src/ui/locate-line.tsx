import type { Icon } from './types'

export const IconLocateLine: Icon = ({
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
      data-slot='icon-ui-locate-line'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.68 12a8.32 8.32 0 1 0 16.64 0 8.32 8.32 0 0 0-16.64 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='8.32' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M18.28 12h4.09' stroke='currentColor' />
      <path d='M1.65 12H5.7' stroke='currentColor' />
      <path d='M12 5.71V1.64' stroke='currentColor' />
      <path d='M12 22.36v-4.07' stroke='currentColor' />
    </svg>
  )
}
