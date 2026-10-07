import type { Icon } from './types'

export const IconGitGraph: Icon = ({
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
      data-slot='icon-ui-git-graph'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='4.9' cy='5.61' r='3.08' fill='currentColor' />
      <circle opacity='.2' cx='4.9' cy='18.39' r='3.08' fill='currentColor' />
      <circle
        opacity='.2'
        cx='19.22'
        cy='5.55'
        r='3.08'
        transform='rotate(-75 19.22 5.55)'
        fill='currentColor'
      />
      <path d='M4.9 8.99v6.31' stroke='currentColor' />
      <circle cx='4.9' cy='5.61' r='3.08' stroke='currentColor' />
      <circle cx='4.9' cy='18.39' r='3.08' stroke='currentColor' />
      <circle
        cx='19.22'
        cy='5.55'
        r='3.08'
        transform='rotate(-75 19.22 5.55)'
        stroke='currentColor'
      />
      <path d='M18.65 8.65s-.36 2.2-2.04 4.1' stroke='currentColor' />
      <path d='M12 3.3v17.4' stroke='currentColor' />
    </svg>
  )
}
