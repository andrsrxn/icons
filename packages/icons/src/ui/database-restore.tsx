import type { Icon } from './types'

export const IconDatabaseRestore: Icon = ({
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
      data-slot='icon-ui-database-restore'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='12' cy='5.23' rx='8.88' ry='3.44' fill='currentColor' />
      <path
        opacity='.2'
        d='M3.25 16.75c0-1.31 0-1.97.4-2.27s1.06-.11 2.37.27c1.8.51 4.16 1.05 6.02.97 1.4-.05 1.74-.02 3.23-.5l.57 1.63s-.15 1.7 0 2.54c.17 1 .84 2.16.84 2.16a21 21 0 0 1-4.64.68c-2.46 0-5.76-1.05-7.54-1.69-.59-.2-.88-.32-1.06-.57-.19-.26-.19-.59-.19-1.24z'
        fill='currentColor'
      />
      <ellipse cx='12' cy='5.23' rx='8.88' ry='3.44' stroke='currentColor' />
      <path d='M10.93 12.35c-.93 0-1.5-.03-2.68-.26a7 7 0 0 1-2.19-.78' stroke='currentColor' />
      <path d='M10.93 18.7c-.93 0-1.5-.02-2.68-.25a7 7 0 0 1-2.19-.79' stroke='currentColor' />
      <path d='M12 22.2c-4.9 0-8.88-1.5-8.88-3.37' stroke='currentColor' />
      <path d='M12 15.55c-4.9 0-8.88-1.51-8.88-3.38' stroke='currentColor' />
      <path d='M3.12 5.74V18.6' stroke='currentColor' />
      <path
        d='M15.83 17.44c1.17-1.53 2.32-1.82 3.25-1.82a3.4 3.4 0 1 1-2.39 5.83'
        stroke='currentColor'
      />
      <path
        d='m15.65 15.21-.1 1.53c-.02.47-.03.7.1.86.14.16.38.17.85.2l1.53.08'
        stroke='currentColor'
      />
      <path d='M20.88 5.23v7.37' stroke='currentColor' />
    </svg>
  )
}
