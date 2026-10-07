import type { Icon } from './types'

export const IconSoup: Icon = ({
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
      data-slot='icon-ui-soup'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.73 11.94c0-1 .81-1.82 1.82-1.82h16.9c1 0 1.82.82 1.82 1.82a8.2 8.2 0 0 1-8.17 8.17H9.9a8.2 8.2 0 0 1-8.17-8.17'
        fill='currentColor'
      />
      <path
        d='m2.27 12.66-.04-.2a2 2 0 0 1 1.89-2.34h15.75a2 2 0 0 1 1.87 2.34l-.04.23-.17.71a9 9 0 0 1-8.37 6.7l-.73.01h-1.58a9 9 0 0 1-8.58-7.45'
        stroke='currentColor'
      />
      <path d='M7.36 3.89v2.9' stroke='currentColor' />
      <path d='M12 3.89v2.9' stroke='currentColor' />
      <path d='M16.64 3.89v2.9' stroke='currentColor' />
      <path d='M1.73 20.11h20.54' stroke='currentColor' />
    </svg>
  )
}
