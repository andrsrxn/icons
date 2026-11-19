import type { Icon } from './types'

export const IconRestorePlus: Icon = ({
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
      data-slot='icon-ui-restore-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.75 4.68v1.43c0 1.33 0 2 .4 2.4.42.42 1.09.42 2.41.42H7' stroke='currentColor' />
      <path
        d='M4.98 17.8a9.17 9.17 0 1 0 7.1-14.97c-5.06 0-7.4 4.03-8.45 5.46'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='12' cy='12' r='9.25' fill='currentColor' />
      <path d='M12 8v8' stroke='currentColor' />
      <path d='M8 12h8' stroke='currentColor' />
    </svg>
  )
}
