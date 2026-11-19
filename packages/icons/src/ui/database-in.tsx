import type { Icon } from './types'

export const IconDatabaseIn: Icon = ({
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
      data-slot='icon-ui-database-in'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='12' cy='5.23' rx='8.88' ry='3.44' fill='currentColor' />
      <path
        opacity='.2'
        d='M3.25 16.32c0-1.15 0-1.72.38-2.02.37-.3.93-.18 2.04.06l5.87 1.26c.25.05.37.08.5.07s.25-.04.5-.11l8.18-2.46v3.62l-.01.3a1 1 0 0 1-.27.56l-.24.2q-.17.11-.23.18a1 1 0 0 0-.27.56c-.02.07-.02.14-.02.3v.3c0 .6 0 .9-.15 1.14l-.05.07c-.18.23-.44.33-.97.52a21 21 0 0 1-6.47 1.36c-2.46 0-5.76-1.05-7.54-1.69-.59-.21-.88-.32-1.06-.57-.19-.26-.19-.59-.19-1.24z'
        fill='currentColor'
      />
      <ellipse cx='12' cy='5.23' rx='8.88' ry='3.44' stroke='currentColor' />
      <path
        d='M20.88 11.95c0 1.87-3.98 3.38-8.88 3.38s-8.88-1.51-8.88-3.38'
        stroke='currentColor'
      />
      <path d='M10.93 12.35c-.93 0-1.5-.03-2.68-.26a7 7 0 0 1-2.19-.78' stroke='currentColor' />
      <path d='M10.93 18.7c-.93 0-1.5-.02-2.68-.25a7 7 0 0 1-2.19-.79' stroke='currentColor' />
      <path d='M3.12 18.83c0 1.87 3.98 3.38 8.88 3.38a9 9 0 0 0 2.2-.24' stroke='currentColor' />
      <path d='M3.12 5.23v13.38' stroke='currentColor' />
      <path d='M20.88 5.23v6.73' stroke='currentColor' />
      <path d='m16.78 18.79.03-.03c1.34-1.34 2-2 2.83-2s1.5.67 2.86 2.03' stroke='currentColor' />
      <path d='M19.64 22.42v-5.35' stroke='currentColor' />
    </svg>
  )
}
