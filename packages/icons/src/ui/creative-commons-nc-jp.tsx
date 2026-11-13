import type { Icon } from './types'

export const IconCreativeCommonsNcJp: Icon = ({
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
      data-slot='icon-ui-creative-commons-nc-jp'
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
      <path d='m17 6.48-2.5 3.09-.5.58' stroke='currentColor' />
      <path d='M12.03 12.79v6.38' stroke='currentColor' />
      <path d='M9.08 15.28h5.88' stroke='currentColor' />
      <path d='M15.59 12.66h.19' stroke='currentColor' />
      <path d='M8.26 12.66H12' stroke='currentColor' />
    </svg>
  )
}
