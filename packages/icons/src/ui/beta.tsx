import type { Icon } from './types'

export const IconBeta: Icon = ({
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
      data-slot='icon-ui-beta'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M12.64 10.47c2.13 0 3.86-1.63 3.86-3.64s-1.73-3.65-3.86-3.65S8.78 4.8 8.78 6.83'
        stroke='currentColor'
      />
      <path
        d='M13.07 10.47c2.87 0 5.2 2.2 5.2 4.92s-2.33 4.92-5.2 4.92a5.3 5.3 0 0 1-4.26-2.09'
        stroke='currentColor'
      />
      <path
        d='M8.78 6.83v11.76c0 .97 0 2.1-1.02 2.51a1.6 1.6 0 0 1-2.16-1.07'
        stroke='currentColor'
      />
    </svg>
  )
}
