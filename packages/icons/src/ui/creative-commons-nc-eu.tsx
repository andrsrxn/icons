import type { Icon } from './types'

export const IconCreativeCommonsNcEu: Icon = ({
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
      data-slot='icon-ui-creative-commons-nc-eu'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.72 12a10.28 10.28 0 1 0 20.56 0 10.28 10.28 0 0 0-20.56 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M1.72 12a10.28 10.28 0 1 1 20.56 0 10.28 10.28 0 0 1-20.56 0'
        stroke='currentColor'
      />
      <path d='m4.83 4.83 14.34 14.34' stroke='currentColor' />
      <path
        d='M16.6 17.19s-1 1.16-3.46 1.16c-2.66 0-5.86-1.86-5.86-6.37 0-1.43.33-2.59.86-3.5'
        stroke='currentColor'
      />
      <path d='M16.6 6.94s-.89-1.3-3.47-1.3c-1.01 0-2.13.29-3.12.9' stroke='currentColor' />
      <path d='M13.59 10.7h-.07' stroke='currentColor' />
      <path d='M10.65 10.7H5.64' stroke='currentColor' />
      <path d='M12.24 13.3h-6.6' stroke='currentColor' />
    </svg>
  )
}
