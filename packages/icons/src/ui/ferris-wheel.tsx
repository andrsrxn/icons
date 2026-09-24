import type { Icon } from './types'

export const IconFerrisWheel: Icon = ({
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
      data-slot='icon-ui-ferris-wheel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 5.13a6.29 6.29 0 0 1 2.09 12.22l-2.12-2.75-2.06 2.75A6.29 6.29 0 0 1 12 5.13m2.09 6.32a2.12 2.12 0 1 1-4.23 0 2.12 2.12 0 0 1 4.23 0'
        fill='currentColor'
      />
      <path
        d='M13.97 17.43a6.2 6.2 0 0 0 4.32-6.01 6.29 6.29 0 0 0-12.58 0 6.14 6.14 0 0 0 4.28 6'
        stroke='currentColor'
      />
      <circle cx='5.71' cy='6.28' r='1.7' stroke='currentColor' />
      <circle cx='4.01' cy='13.12' r='1.7' stroke='currentColor' />
      <circle cx='18.29' cy='6.28' r='1.7' stroke='currentColor' />
      <circle cx='11.97' cy='11.45' r='2.12' stroke='currentColor' />
      <circle cx='11.97' cy='3.43' r='1.7' stroke='currentColor' />
      <circle cx='19.99' cy='13.12' r='1.7' stroke='currentColor' />
      <path d='M7.65 22.28 12 13.56' stroke='currentColor' />
      <path d='M16.35 22.28 12 13.56' stroke='currentColor' />
    </svg>
  )
}
