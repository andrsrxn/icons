import type { Icon } from './types'

export const IconLogicXnor: Icon = ({
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
      data-slot='icon-ui-logic-xnor'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.54 19.08a5.2 5.2 0 0 0 5.18-5.17v-3.82a5.2 5.2 0 0 0-5.18-5.17A1.3 1.3 0 0 0 8.28 6.5l1.1 4.83c.08.33.12.5.12.67s-.04.34-.11.67L8.28 17.5a1.3 1.3 0 0 0 1.26 1.58'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M19.42 12h2.9' stroke='currentColor' />
      <path d='M1.67 8.46h3.96' stroke='currentColor' />
      <path d='M1.67 15.54h3.96' stroke='currentColor' />
      <path
        d='M9.4 12c0 2.5-.82 4.89-1.36 6.2-.2.47.15 1.03.67 1.03a6 6 0 0 0 6-6v-2.45a6 6 0 0 0-6-6c-.52 0-.86.55-.67 1.02C8.58 7.11 9.4 9.5 9.4 12'
        stroke='currentColor'
      />
      <path d='M4.4 18.41s1.9-3.1 1.9-6.41-1.9-6.41-1.9-6.41' stroke='currentColor' />
      <circle opacity='.2' cx='17.07' cy='12' r='2.35' fill='currentColor' />
      <circle cx='17.07' cy='12' r='2.35' stroke='currentColor' />
    </svg>
  )
}
