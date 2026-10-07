import type { Icon } from './types'

export const IconRubberDuck: Icon = ({
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
      data-slot='icon-ui-rubber-duck'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M11.88 11.93c.58-.5.88-.89 1.08-1.2a4.5 4.5 0 1 0-8.14-3.07' stroke='currentColor' />
      <path d='M6.9 11.93q-.88-.61-1.4-1.44' stroke='currentColor' />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.55 11.35a4.28 4.28 0 1 0-6.48-3.67c0 .4.3.7.6 1.01.45.45.32 1.65.32 1.65l.25 1.9-1.02 3.25s1.38 4.44 3.26 4.44l11.11-.28 3.1-3.51-.25-4.06-1.55-1.67c-.75-.75-1.12-1.13-1.59-1.12s-1.1 1.12-1.1 1.12-1.65 1.41-1.9 1.5c-.26.1-.54.05-1.1-.04l-2.97-.46zm0 3.48 6.65.2-2.48 2.6-3.49-.27z'
        fill='currentColor'
      />
      <path
        d='M11.8 12.05h3.87a3.1 3.1 0 0 0 3.08-2.87c.03-.36.4-.57.7-.38.97.59 2.69 1.88 3 3.79 1.24 7.42-5.57 7.81-5.57 7.81H10a4.76 4.76 0 0 1-4.73-4.7c0-1.39.61-2.7 1.68-3.58l.09-.07'
        stroke='currentColor'
      />
      <path
        d='M9.48 7a.43.43 0 1 1-.86 0 .43.43 0 0 1 .86 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m4.41 7.72-1.5.41c-.72.2-1.07.3-1.12.62-.04.33.24.5.81.84.38.22.82.43 1.29.52s1.03.11 1.55.08c.71-.03 1.07-.05 1.19-.34S6.5 9.28 6 8.7l-.58-.67c-.2-.23-.3-.35-.43-.39-.14-.04-.3 0-.59.08'
        stroke='currentColor'
      />
      <path
        d='M13.83 17.83c-2.06 0-2.67-1.59-2.57-2.6.02-.21.22-.35.44-.35l6.13.03a.5.5 0 0 1 .35.84c-1.26 1.23-2.41 2.09-4.35 2.08'
        stroke='currentColor'
      />
    </svg>
  )
}
