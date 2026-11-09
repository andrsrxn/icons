import type { Icon } from './types'

export const IconSoup: Icon = ({
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
      data-slot='icon-ui-soup'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.73 11.94c0-1 .81-1.82 1.82-1.82h16.9c1 0 1.82.82 1.82 1.82a8.2 8.2 0 0 1-8.17 8.17H9.9a8.2 8.2 0 0 1-8.17-8.17'
        fill='currentColor'
      />
      <path
        d='M11.5 20.11h1.66a9 9 0 0 0 8.37-6.7l.17-.72.04-.23a2 2 0 0 0-1.87-2.34H4.12a2 2 0 0 0-1.89 2.34l.04.2.14.62a9 9 0 0 0 9.08 6.83'
        stroke='currentColor'
      />
      <path d='M1.73 20.11h20.54' stroke='currentColor' />
      <path
        d='m7.05 3.1.37.49a1.1 1.1 0 0 1-.09 1.4c-.4.4-.4 1.06 0 1.48l.3.33'
        stroke='currentColor'
      />
      <path
        d='m11.81 3.1.37.49a1.1 1.1 0 0 1-.08 1.4c-.4.4-.4 1.06 0 1.48l.3.33'
        stroke='currentColor'
      />
      <path
        d='m16.45 3.1.38.49a1.1 1.1 0 0 1-.09 1.4c-.4.4-.4 1.06 0 1.48l.3.33'
        stroke='currentColor'
      />
    </svg>
  )
}
